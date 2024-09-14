import { createReducer, on } from '@ngrx/store';
import * as recipeBlogsActions from './recipe-blogs.actions';
import { RecipeBlogVm } from '@app/models/recipe-blog.model';

export interface RecipeBlogsState {
  recipeBlogs: RecipeBlogVm[];
  totalRecipeBlogs: number;
  currentPage: number;
  recipeBlogsForPage: number;
}

export const recipeBlogsState: RecipeBlogsState = {
  recipeBlogs: [],
  totalRecipeBlogs: 0,
  currentPage: 1,
  recipeBlogsForPage: 10,
};

export const recipeBlogsReducer = createReducer(
  recipeBlogsState,
  on(
    recipeBlogsActions.getRecipeBlogsSucceed,
    (currState, { recipeBlogs, totalRecipeBlogs }) => ({
      ...currState,
      recipeBlogs,
      totalRecipeBlogs,
    })
  ),
  on(recipeBlogsActions.getRecipeBlogsFailed, (currState) => ({
    ...currState,
    recipeBlogs: [],
  })),

  on(recipeBlogsActions.setCurrentPage, (currState, { page }) => ({
    ...currState,
    currentPage: page,
  }))
);
