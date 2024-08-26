import { CategoryRecipeResponseVm } from './category-recipe-response.model';

export interface CategoryRecipesResponseVm {
  meals?: CategoryRecipeResponseVm[] | null;
}
