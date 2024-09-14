import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import * as recipeCategoriesActions from './recipe-categories.actions';
import { catchError, filter, map, mergeMap, of, tap } from 'rxjs';
import { MealDbApi } from '@app/services/api/meal-db/meal-db-api.service';

@Injectable()
export class RecipeCategoriesEffects {
  readonly getCategories$ = createEffect(() =>
    this.actions$.pipe(
      ofType(recipeCategoriesActions.getCategories),
      mergeMap(() =>
        this.mealDbApi.getCategories().pipe(
          map((categories) =>
            recipeCategoriesActions.getCategoriesSucceed({ categories })
          ),
          catchError((err) => of(recipeCategoriesActions.getCategoriesFailed()))
        )
      )
    )
  );

  readonly getRecipesByCategory$ = createEffect(() =>
    this.actions$.pipe(
      ofType(recipeCategoriesActions.getRecipesByCategory),
      mergeMap(({ category }) =>
        this.mealDbApi.getRecipesFromCategory(category).pipe(
          map((recipesByCategory) =>
            recipeCategoriesActions.getRecipesByCategorySucceed({
              recipesByCategory,
            })
          ),
          catchError((err) =>
            of(recipeCategoriesActions.getRecipesByCategoryFailed())
          )
        )
      )
    )
  );

  constructor(
    readonly store: Store,
    readonly actions$: Actions,
    readonly mealDbApi: MealDbApi
  ) {}
}
