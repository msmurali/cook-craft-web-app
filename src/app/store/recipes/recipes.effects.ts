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
import { SpinnerService } from 'src/shared/services/spinner.service';

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
        { this.spinner.show();
          return this.mealdbApi.searchRecipes(name).pipe(
            map((recipes) => {
              this.spinner.hide();
              return recipesActions.getRecipeByNameSucceed({ recipes });
            }),
            catchError((err) => {
              this.spinner.hide();
              return of(recipesActions.getRecipeByNameFailed());
            })
          );
        }
      )
    )
  );

  readonly navigateToRecipePage$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(recipesActions.getRecipeByNameSucceed),
        tap(({ recipes }) => {
          this.spinner.show();
          const recipe = recipes?.find((recipe) => !!recipe?.id);
          if (recipe) {
            this.spinner.hide();
            void this.router.navigate(['/', 'recipe', recipe?.id]);
          } else {
            this.spinner.hide();
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
        {
          this.spinner.show();
          return this.mealdbApi.searchRecipeById(id).pipe(
            map((recipe) => {
              this.spinner.hide();
              return recipesActions.getRecipeByIdSucceed({ recipe });
            }),
            catchError((err) => {
              this.spinner.hide();
              return of(recipesActions.getRecipeByIdFailed());
            })
          );
        }
      )
    )
  );

  readonly navigateToRecipePageByRecipeId$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(recipesActions.getRecipeByIdSucceed),
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
    readonly toast: ToastService,
    readonly spinner: SpinnerService
  ) {}
}
