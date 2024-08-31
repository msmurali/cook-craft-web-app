import { createSelector } from '@ngrx/store';
import { AppState } from '../app.reducer';

const selectRecipeBlogs = (state: AppState) => state.recipeBlogs;

export const selectRecipeBlogs$ = createSelector(
  selectRecipeBlogs,
  (state) => state.recipeBlogs
);
