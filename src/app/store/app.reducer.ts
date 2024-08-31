import * as fromRecipesFeature from '@app/store/recipes/recipes.reducer';
import { createFeatureSelector } from '@ngrx/store';

export interface AppState {
  recipes: fromRecipesFeature.RecipesState;
}

export const appState: AppState = {
  recipes: fromRecipesFeature.recipesState,
};

export const appReducer = {
  recipes: fromRecipesFeature.recipesReducer,
};
