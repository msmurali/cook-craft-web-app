import { RecipeResponseVm } from './recipe-response.model';

export interface SearchRecipesResponseVm {
  meals?: RecipeResponseVm[] | null;
}
