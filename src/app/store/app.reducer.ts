import * as fromRecipesFeature from '@app/store/recipes/recipes.reducer';
import * as fromCategoryRecipes from '@app/store/recipe-categories/recipe-categories.reducer';
import { createFeatureSelector } from '@ngrx/store';

export interface AppState {
  recipes: fromRecipesFeature.RecipesState;
  categoryRecipes: fromCategoryRecipes.RecipeCategoriesState;
}

export const appState: AppState = {
  recipes: fromRecipesFeature.recipesState,
  categoryRecipes: fromCategoryRecipes.recipeCategoriesState,
};

export const appReducer = {
  recipes: fromRecipesFeature.recipesReducer,
  categoryRecipes: fromCategoryRecipes.recipeCategoriesRecuder
};
