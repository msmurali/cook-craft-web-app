import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as recipesActions from './recipes.actions';
import { catchError, map, mergeMap, of } from 'rxjs';
import { MealDbApi } from '@app/services/api/meal-db/meal-db-api.service';

@Injectable()
export class RecipesEffects {
  readonly getTrendingRecipes$ = createEffect(() =>
    this.actions$.pipe(
      ofType(recipesActions.getTrendingRecipes),
      mergeMap(() =>
        this.mealdbApi.getTrendingRecipes().pipe(
          map((trendingRecipes) =>
            recipesActions.getTrendingRecipesSucceed({ trendingRecipes })
          ),
          catchError((err) => of(recipesActions.getTrendingRecipesFailed()))
        )
      )
    )
  );

  readonly getRecipeByName$ = createEffect(() =>
    this.actions$.pipe(
      ofType(recipesActions.getRecipeByName),
      mergeMap(({ name }) =>
        this.mealdbApi.searchRecipes(name).pipe(
          map((recipes) => recipesActions.getRecipeByNameSucceed({ recipes })),
          catchError((err) => of(recipesActions.getRecipeByNameFailed()))
        )
      )
    )
  );

  readonly getRecipeById$ = createEffect(() =>
    this.actions$.pipe(
      ofType(recipesActions.getRecipeById),
      mergeMap(({ id }) =>
        this.mealdbApi.searchRecipeById(id).pipe(
          map((recipe) => recipesActions.getRecipeByIdSucceed({ recipe })),
          catchError((err) => of(recipesActions.getRecipeByIdFailed()))
        )
      )
    )
  );

  constructor(
    readonly store: Store,
    readonly actions$: Actions,
    readonly mealdbApi: MealDbApi
  ) {}
}
