import { CategoryRecipeResponseVm } from '@app/models/category-recipe-response.model';
import { RecipeResponseVm } from '@app/models/recipe-response.model';

export const isValidRecipeResponseVm = (recipeResponse: RecipeResponseVm) =>
  recipeResponse?.idMeal &&
  recipeResponse?.strMeal &&
  recipeResponse?.strCategory &&
  recipeResponse?.strInstructions &&
  recipeResponse?.strMealThumb &&
  recipeResponse?.strYoutube;

  export const isValidCategoryRecipeResponseVm = (categoryRecipeResponse: CategoryRecipeResponseVm) =>
    categoryRecipeResponse?.idMeal &&
  categoryRecipeResponse?.strMeal &&
    categoryRecipeResponse?.strMealThumb;
  