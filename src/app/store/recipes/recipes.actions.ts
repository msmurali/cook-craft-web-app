import { createAction, props } from '@ngrx/store';
import { ActionTypes } from './recipes.action-types';
import { Action } from 'rxjs/internal/scheduler/Action';
import { RecipeVm } from '@app/models/recipe.model';

const IDENTIFIER = '[ App - Recipes ]';

export const getTrendingRecipes = createAction(
  IDENTIFIER.concat(ActionTypes.GET_TRENDING_RECIPES)
);

export const getTrendingRecipesSucceed = createAction(
  IDENTIFIER.concat(ActionTypes.GET_TRENDING_RECIPES_SUCCEED),
  props<{ trendingRecipes: RecipeVm[] }>()
);

export const getTrendingRecipesFailed = createAction(
  IDENTIFIER.concat(ActionTypes.GET_TRENDING_RECIPES_FAILED)
);

export const getRecipeByName = createAction(
  IDENTIFIER.concat(ActionTypes.GET_RECIPE_BY_NAME),
  props<{ name: string }>()
);

export const getRecipeByNameSucceed = createAction(
  IDENTIFIER.concat(ActionTypes.GET_RECIPE_BY_NAME_SUCCEED),
  props<{ recipes: RecipeVm[] }>()
);

export const getRecipeByNameFailed = createAction(
  IDENTIFIER.concat(ActionTypes.GET_RECIPE_BY_NAME_FAILED)
);

export const getRecipeById = createAction(
  IDENTIFIER.concat(ActionTypes.GET_RECIPE_BY_ID),
  props<{ id: string }>()
);

export const getRecipeByIdSucceed = createAction(
  IDENTIFIER.concat(ActionTypes.GET_RECIPE_BY_ID_SUCCEED),
  props<{ recipe: RecipeVm | null }>()
);

export const getRecipeByIdFailed = createAction(
  IDENTIFIER.concat(ActionTypes.GET_RECIPE_BY_ID_FAILED)
);
