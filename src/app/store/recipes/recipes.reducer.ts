import { RecipeVm } from '@app/models/recipe.model';
import { createReducer, on } from '@ngrx/store';
import * as recipesActions from './recipes.actions';

export interface RecipesState {
  trendingRecipes: RecipeVm[];
  recipe: RecipeVm | null;
}

export const recipesState: RecipesState = {
  recipe: null,
  trendingRecipes: [],
};

export const recipesReducer = createReducer(
  recipesState,
  on(
    recipesActions.getTrendingRecipesSucceed,
    (currState, { trendingRecipes }) => ({ ...currState, trendingRecipes })
  ),
  on(recipesActions.getTrendingRecipesFailed, (currState) => ({
    ...currState,
    trendingRecipes: [],
  })),
  on(recipesActions.getRecipeByIdSucceed, (currState, { recipe }) => ({
    ...currState,
    recipe,
  })),
  on(recipesActions.getRecipeByIdFailed, (currState) => ({
    ...currState,
    recipe: null,
  })),
);
