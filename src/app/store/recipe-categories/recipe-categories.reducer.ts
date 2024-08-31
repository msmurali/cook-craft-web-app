import { RecipeVm } from '@app/models/recipe.model';
import { createReducer, on } from '@ngrx/store';
import * as recipeCategoriesActions from './recipe-categories.actions';

export interface RecipeCategoriesState {
  categories: string[];
  recipesByCategory: RecipeVm[];
}

export const recipeCategoriesState: RecipeCategoriesState = {
  categories: [],
  recipesByCategory: [],
};

export const recipeCategoriesRecuder = createReducer(
  recipeCategoriesState,
  on(
    recipeCategoriesActions.getCategoriesSucceed,
    (currState, { categories }) => ({ ...currState, categories })
  ),
  on(recipeCategoriesActions.getCategoriesFailed, (currState) => ({
    ...currState,
    categories: [],
  })),
  on(
    recipeCategoriesActions.getRecipesByCategorySucceed,
    (currState, { recipesByCategory }) => ({
      ...currState,
      recipesByCategory,
    })
  ),
  on(recipeCategoriesActions.getRecipesByCategoryFailed, (currState) => ({
    ...currState,
    recipe: null,
  }))
);
