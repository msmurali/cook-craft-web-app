import { createAction, props } from '@ngrx/store';
import { ActionTypes } from './recipe-categories.action-types';
import { RecipeVm } from '@app/models/recipe.model';

const IDENTIFIER = '[ App - Recipe Categories ]';

export const getCategories = createAction(
  IDENTIFIER.concat(ActionTypes.GET_CATEGORIES)
);

export const getCategoriesSucceed = createAction(
  IDENTIFIER.concat(ActionTypes.GET_CATEGORIES_SUCCEED),
  props<{ categories: string[] }>()
);

export const getCategoriesFailed = createAction(
  IDENTIFIER.concat(ActionTypes.GET_CATEGORIES_FAILED)
);

export const getRecipesByCategory = createAction(
  IDENTIFIER.concat(ActionTypes.GET_RECIPES_BY_CATEGORY),
  props<{ category: string }>()
);

export const getRecipesByCategorySucceed = createAction(
  IDENTIFIER.concat(ActionTypes.GET_RECIPES_BY_CATEGORY_SUCCEED),
  props<{ recipesByCategory: RecipeVm[] }>()
);

export const getRecipesByCategoryFailed = createAction(
  IDENTIFIER.concat(ActionTypes.GET_RECIPES_BY_CATEGORY_FAILED)
);
