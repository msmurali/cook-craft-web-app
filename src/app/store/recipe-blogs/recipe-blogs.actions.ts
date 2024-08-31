import { createAction, props } from "@ngrx/store";
import { ActionTypes } from './recipe-blogs.action-types';
import { RecipeBlogVm } from "@app/models/recipe-blog.model";

const IDENTIFIER = '[ App - Recipe Blogs ]';

export const getRecipeBlogs = createAction(
  IDENTIFIER.concat(ActionTypes.GET_RECIPE_BLOGS),
  props<{ page: number }>()
);

export const getRecipeBlogsSucceed = createAction(
  IDENTIFIER.concat(ActionTypes.GET_RECIPE_BLOGS_SUCCEED),
  props<{ recipeBlogs: RecipeBlogVm[] }>()
);

export const getRecipeBlogsFailed = createAction(
  IDENTIFIER.concat(ActionTypes.GET_RECIPE_BLOGS_FAILED)
);