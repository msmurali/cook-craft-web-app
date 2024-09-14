import { createSelector } from '@ngrx/store';
import { AppState } from '../app.reducer';

const selectRecipeBlogs = (state: AppState) => state.recipeBlogs;

export const selectRecipeBlogs$ = createSelector(
  selectRecipeBlogs,
  (state) => state.recipeBlogs
);

export const selectRecipeBlogsCurrentPage$ = createSelector(
  selectRecipeBlogs, 
  (state) => state.currentPage
)

export const selectRecipeBlogsPerPage$ = createSelector(
  selectRecipeBlogs,
  (state) => state.recipeBlogsForPage
)

export const selectTotalRecipeBlogs$ = createSelector(
  selectRecipeBlogs, 
  (state) => state.totalRecipeBlogs
);