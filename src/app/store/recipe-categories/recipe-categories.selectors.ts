import { createSelector } from '@ngrx/store';
import { AppState } from '../app.reducer';

const selectRecipesByCategory = ({ categoryRecipes }: AppState) => categoryRecipes;

export const selectCategories$ = createSelector(
  selectRecipesByCategory,
  (state) => state.categories
);

export const selectRecipesByCategory$ = createSelector(
  selectRecipesByCategory,
  (state) => state.recipesByCategory
);
