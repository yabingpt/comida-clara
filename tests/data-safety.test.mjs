import test from 'node:test';
import assert from 'node:assert/strict';
import { calculateNutrients, mergeBackupData, validateBackupData } from '../data-safety.mjs';

const meal = (day, kcal) => ({ day, foods: [{ id: 'x', grams: 20 }], kcal });
const food = (id, kcal) => ({ id, name: id, kcal, p: 1, c: 2, f: 3 });

test('accepts current and previous supported backup formats', () => {
  assert.equal(validateBackupData({ format: 'ayfuel-full-backup-v1', meals: [] }), true);
  assert.equal(validateBackupData({ format: 'comida-clara-diary-v2', meals: [] }), true);
});

test('rejects malformed imports before anything can be merged', () => {
  assert.throws(() => validateBackupData({ format: 'ayfuel-full-backup-v1', meals: [{}] }), /comida con formato incorrecto/);
  assert.throws(() => validateBackupData({ format: 'ayfuel-full-backup-v1', customFoods: [food('x', -1)] }), /alimento personalizado incompleto/);
});

test('merges without replacing local records or local settings on ID conflicts', () => {
  const current = { meals: [meal('2026-01-01', 300)], customFoods: [food('same', 100)], favorites: ['a'], dailyGoals: { calories: 2000 }, customRecipes: [] };
  const incoming = { format: 'ayfuel-full-backup-v1', meals: [meal('2026-01-01', 300), meal('2026-01-02', 400)], customFoods: [food('same', 999), food('new', 120)], favorites: ['a', 'b'], dailyGoals: { calories: 3000, protein: 120 }, customRecipes: [] };
  const merged = mergeBackupData(current, incoming);
  assert.deepEqual(merged.meals.map(item => item.kcal), [300, 400]);
  assert.deepEqual(merged.customFoods.map(item => [item.id, item.kcal]), [['same', 100], ['new', 120]]);
  assert.deepEqual(merged.favorites, ['a', 'b']);
  assert.deepEqual(merged.dailyGoals, { calories: 2000, protein: 120 });
});

test('calculates macros and available label nutrients for decimal quantities', () => {
  const values = calculateNutrients({ kcal: 200, p: 10, c: 20, f: 8, fiber: 4, sugars: 6, sodium: 300 }, 37.5);
  assert.equal(values.kcal, 75);
  assert.equal(values.p, 3.75);
  assert.equal(values.fiber, 1.5);
  assert.equal(values.sodium, 112.5);
  assert.equal('saturatedFat' in values, false);
});
