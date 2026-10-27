export const BACKUP_FORMATS = new Set(['ayfuel-full-backup-v1', 'comida-clara-diary-v2']);

export function validateBackupData(data) {
  if (!data || typeof data !== 'object' || !BACKUP_FORMATS.has(data.format)) {
    throw new Error('El archivo no es una copia compatible de AY FUEL.');
  }
  for (const key of ['meals', 'customFoods', 'favorites', 'customRecipes', 'closedDays']) {
    if (data[key] !== undefined && !Array.isArray(data[key])) {
      throw new Error(`La sección ${key} está dañada; no se importó nada.`);
    }
  }
  for (const key of ['dailyGoals', 'proteinSettings', 'dayGoalSnapshots']) {
    if (data[key] !== undefined && (!data[key] || typeof data[key] !== 'object' || Array.isArray(data[key]))) {
      throw new Error(`La sección ${key} está dañada; no se importó nada.`);
    }
  }
  for (const meal of data.meals || []) {
    if (!meal || typeof meal.day !== 'string' || !Array.isArray(meal.foods)) {
      throw new Error('Hay una comida con formato incorrecto; no se importó nada.');
    }
  }
  for (const food of data.customFoods || []) {
    if (!food?.id || !food?.name || !['kcal', 'p', 'c', 'f'].every(key => Number.isFinite(Number(food[key])) && Number(food[key]) >= 0)) {
      throw new Error('Hay un alimento personalizado incompleto; no se importó nada.');
    }
  }
  for (const recipe of data.customRecipes || []) {
    if (!recipe?.id || !recipe?.name || !Array.isArray(recipe.ingredients) || recipe.ingredients.some(item => !item?.id || !Number.isFinite(Number(item.grams)) || Number(item.grams) < 0)) {
      throw new Error('Hay una receta con formato incorrecto; no se importó nada.');
    }
  }
  return true;
}

function mergeUnique(local, incoming, key) {
  const result = [...(Array.isArray(local) ? local : [])];
  const seen = new Set(result.map(key));
  for (const item of incoming || []) {
    const signature = key(item);
    if (seen.has(signature)) continue;
    seen.add(signature);
    result.push(item);
  }
  return result;
}

export function mergeBackupData(local = {}, incoming = {}) {
  validateBackupData(incoming);
  const keepLocal = (localValue, importedValue) => ({ ...(importedValue || {}), ...(localValue || {}) });
  return {
    meals: mergeUnique(local.meals, incoming.meals, item => JSON.stringify(item)),
    customFoods: mergeUnique(local.customFoods, incoming.customFoods, item => item.id),
    favorites: [...new Set([...(local.favorites || []), ...(incoming.favorites || [])])],
    dailyGoals: keepLocal(local.dailyGoals, incoming.dailyGoals),
    proteinSettings: keepLocal(local.proteinSettings, incoming.proteinSettings),
    dayGoalSnapshots: keepLocal(local.dayGoalSnapshots, incoming.dayGoalSnapshots),
    closedDays: [...new Set([...(local.closedDays || []), ...(incoming.closedDays || [])])],
    customRecipes: mergeUnique(local.customRecipes, incoming.customRecipes, item => item.id),
  };
}

export function calculateNutrients(food, grams) {
  const ratio = (Number(grams) || 0) / 100;
  const result = { kcal: Number(food.kcal || 0) * ratio, p: Number(food.p || 0) * ratio, c: Number(food.c || 0) * ratio, f: Number(food.f || 0) * ratio };
  for (const key of ['fiber', 'sugars', 'saturatedFat', 'sodium']) if (food[key] !== undefined && Number.isFinite(Number(food[key]))) result[key] = Number(food[key]) * ratio;
  return result;
}
