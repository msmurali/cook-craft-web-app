import { Injectable } from '@angular/core';
import { NewsApi } from '@app/services/api/news/news-api.service';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import * as recipeBlogsActions from './recipe-blogs.actions';
import { catchError, map, mergeMap, of } from 'rxjs';

@Injectable()
export class RecipeBlogsEffects {
  readonly getRecipeBlogs$ = createEffect(() =>
    this.actions$.pipe(
      ofType(recipeBlogsActions.getRecipeBlogs),
      mergeMap(({ page }) =>
        this.newsApi.getRecipeBlogs(page).pipe(
          map((recipeBlogs) =>
            recipeBlogsActions.getRecipeBlogsSucceed({ recipeBlogs })
          ),
          catchError((err) => of(recipeBlogsActions.getRecipeBlogsFailed()))
        )
      )
    )
  );

  constructor(
    readonly store: Store,
    readonly actions$: Actions,
    readonly newsApi: NewsApi
  ) {}
}
