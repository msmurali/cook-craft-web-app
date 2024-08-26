import {
  MEAL_DB_API_INGREDIENTS_LEN,
  MEAL_DB_API_INSTRCUTION_DELIMITER,
} from '@app/constants/const';
import { IngredientVm } from '@app/models/ingredient.model';
import { RecipeResponseVm } from '@app/models/recipe-response.model';

export const extractIngredientsFromRecipeResponseVm = (
  recipeResponse: RecipeResponseVm
): IngredientVm[] => {
  return Array(MEAL_DB_API_INGREDIENTS_LEN).reduce((acc, _, index) => {
    const ingredientNameKey = `strIngredient${
      index + 1
    }` as keyof RecipeResponseVm;
    const ingredientQuantityKey = `strMeasure${
      index + 1
    }` as keyof RecipeResponseVm;
    const ingredientName = recipeResponse[ingredientNameKey];
    const ingredientQuantity = recipeResponse[ingredientQuantityKey];
    if (ingredientName && ingredientQuantity) {
      return [
        ...acc,
        { name: ingredientName, quantity: ingredientQuantity },
      ] as IngredientVm[];
    }
    return acc;
  }, [] as IngredientVm[]);
};

export const extractInstructionsFromRecipeResponseVm = (
  recipeResponse: RecipeResponseVm
): string[] => {
  return (
    recipeResponse?.strInstructions
      ?.split(MEAL_DB_API_INSTRCUTION_DELIMITER)
      ?.map((instruction) => instruction?.trim()) || []
  );
};
