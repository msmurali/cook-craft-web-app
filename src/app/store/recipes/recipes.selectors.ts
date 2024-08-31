import { createSelector } from '@ngrx/store';
import { AppState } from '../app.reducer';

const selectRecipesState = (state: AppState) => state.recipes;

export const selectTrendingRecipes$ = createSelector(
  selectRecipesState,
  (state) => state.trendingRecipes
);

export const selectRecipe$ = createSelector(
  selectRecipesState,
  (state) => state.recipe
);
