import { Injectable } from '@angular/core';
import { NewsApi } from '@app/services/api/news/news-api.service';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import * as recipeBlogsActions from './recipe-blogs.actions';
import { catchError, map, mergeMap, of } from 'rxjs';
import { SpinnerService } from 'src/shared/services/spinner.service';

@Injectable()
export class RecipeBlogsEffects {
  readonly onInitRecipeBlogs$ = createEffect(() =>
    this.actions$.pipe(
      ofType(recipeBlogsActions.initRecipeBlogs),
      map(() => recipeBlogsActions.setCurrentPage({ page: 1 }))
    )
  );

  readonly onChangePage$ = createEffect(() =>
    this.actions$.pipe(
      ofType(recipeBlogsActions.setCurrentPage),
      map(({ page }) => recipeBlogsActions.getRecipeBlogs({ page }))
    )
  );

  readonly getRecipeBlogs$ = createEffect(() =>
    this.actions$.pipe(
      ofType(recipeBlogsActions.getRecipeBlogs),
      mergeMap(({ page }) => {
        this.spinner.show();
        return this.newsApi.getRecipeBlogs(page).pipe(
          map(([recipeBlogs, totalRecipeBlogs]) => {
            this.spinner.hide();
            return recipeBlogsActions.getRecipeBlogsSucceed({
              recipeBlogs,
              totalRecipeBlogs,
            });
          }),
          catchError((err) => {
            this.spinner.hide();
            return of(recipeBlogsActions.getRecipeBlogsFailed());
          })
        );
      })
    )
  );

  constructor(
    readonly store: Store,
    readonly actions$: Actions,
    readonly newsApi: NewsApi,
    readonly spinner: SpinnerService
  ) {}
}
