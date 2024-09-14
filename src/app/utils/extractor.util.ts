import {
  MEAL_DB_API_INGREDIENTS_LEN,
  MEAL_DB_API_INSTRCUTION_DELIMITER,
} from '@app/constants/const';
import { IngredientVm } from '@app/models/ingredient.model';
import { RecipeResponseVm } from '@app/models/recipe-response.model';

export const extractIngredientsFromRecipeResponseVm = (
  recipeResponse: RecipeResponseVm
): IngredientVm[] => {
  const ingredients = [];

  for (let index = 1; index <= MEAL_DB_API_INGREDIENTS_LEN; index++) {
    const ingredientNameKey = `strIngredient${index}` as keyof RecipeResponseVm;
    const ingredientQuantityKey =
      `strMeasure${index}` as keyof RecipeResponseVm;

    const ingredientName = recipeResponse[ingredientNameKey];
    const ingredientQuantity = recipeResponse[ingredientQuantityKey];

    if (ingredientName && ingredientQuantity) {
      ingredients.push({
        name: ingredientName,
        quantity: ingredientQuantity,
      } as IngredientVm);
    }
  }

  return ingredients;
};

export const extractInstructionsFromRecipeResponseVm = (
  recipeResponse: RecipeResponseVm
): string[] => {
  return (
    recipeResponse?.strInstructions
      ?.split(MEAL_DB_API_INSTRCUTION_DELIMITER)
      ?.map((instruction) => instruction?.trim())
      ?.filter((instruction) => !!instruction) || []
  );
};
