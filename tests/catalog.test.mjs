import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';

function loadCatalog() {
  let source = fs.readFileSync(new URL('../app.js', import.meta.url), 'utf8');
  source = source.slice(source.indexOf('\n') + 1, source.indexOf('let customFoods=[];'));
  const normalize = "function normalizeText(value){return String(value||'').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'').replaceAll('_',' ').replace(/\s+/g,' ').trim()}\n";
  source += '\nglobalThis.__catalog={foods:FOOD_DATA,recipes:RECIPE_CONFIGS,ingredients:[...AYFUEL_INGREDIENTS,...AYFUEL_PANTRY,...AYFUEL_RECIPE_COMPONENTS],restaurants:AYFUEL_RESTAURANTS};';
  const context = { document: { querySelector: () => ({ value: '' }), querySelectorAll: () => [] }, Date, console };
  vm.createContext(context);
  vm.runInContext(normalize + source, context);
  return context.__catalog;
}

test('keeps the expanded catalog unique by ID and all recipe references available', () => {
  const { foods, recipes } = loadCatalog();
  assert.equal(foods.length, 846);
  assert.equal(foods.filter(food => food.id.startsWith('ayf_')).length, 467);
  assert.equal(new Set(foods.map(food => food.id)).size, foods.length);
  const foodIds = new Set(foods.map(food => food.id));
  const missing = Object.entries(recipes).flatMap(([id, recipe]) => recipe.ingredients.filter(([foodId]) => !foodIds.has(foodId)).map(([foodId]) => id + ': ' + foodId));
  assert.deepEqual(missing, []);
});

test('retains broad ingredient coverage and 45 chain menu references', () => {
  const { foods, ingredients, restaurants } = loadCatalog();
  const foodIds = new Set(foods.map(food => food.id));
  const acceptedIngredientCount = new Set(ingredients.map(([id]) => 'ayf_' + id).filter(id => foodIds.has(id))).size;
  assert.equal(acceptedIngredientCount, 176);
  assert.equal(restaurants.length, 45);
});
