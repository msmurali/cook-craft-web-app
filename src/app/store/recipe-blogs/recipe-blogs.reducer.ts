import { createReducer, on } from '@ngrx/store';
import * as recipeBlogsActions from './recipe-blogs.actions';
import { RecipeBlogVm } from '@app/models/recipe-blog.model';

export interface RecipeBlogsState {
  recipeBlogs: RecipeBlogVm[];
}

export const recipeBlogsState: RecipeBlogsState = {
  recipeBlogs: [],
};

export const recipeBlogsReducer = createReducer(
  recipeBlogsState,
  on(
    recipeBlogsActions.getRecipeBlogsSucceed,
    (currState, { recipeBlogs }) => ({ ...currState, recipeBlogs })
  ),
  on(recipeBlogsActions.getRecipeBlogsFailed, (currState) => ({
    ...currState,
    recipeBlogs: [],
  }))
);
