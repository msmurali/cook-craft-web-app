import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as recipesActions from './recipes.actions';
import { catchError, map, mergeMap, of, tap } from 'rxjs';
import { MealDbApi } from '@app/services/api/meal-db/meal-db-api.service';
import { Router } from '@angular/router';
import { ToastService } from 'src/shared/services/toast.service';
import {
  isValidRecipeResponseVm,
  isValidRecipeVm,
} from '@app/utils/validator.util';

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

  readonly navigateToRecipePage$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(recipesActions.getRecipeByNameSucceed),
        tap(({ recipes }) => {
          const recipe = recipes?.find((recipe) => !!recipe?.id);
          if (recipe) {
            void this.router.navigate(['/', 'recipe', recipe?.id]);
          } else {
            this.toast.showErrorToast(
              'Recipe not found, try again with different name'
            );
          }
        })
      ),
    { dispatch: false }
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

  readonly navigateToRecipePageByRecipeId$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(recipesActions.getRecipeByIdSucceed),
        tap(() => console.log(1)),
        tap(({ recipe }) => {
          if (isValidRecipeVm(recipe)) {
            void this.router.navigate(['/', 'recipe', recipe?.id]);
          } else {
            this.toast.showErrorToast('Something went wrong, try again later');
          }
        })
      ),
    { dispatch: false }
  );

  constructor(
    readonly store: Store,
    readonly actions$: Actions,
    readonly mealdbApi: MealDbApi,
    readonly router: Router,
    readonly toast: ToastService
  ) {}
}
