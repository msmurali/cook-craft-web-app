import { Injectable } from '@angular/core';
import { NewsApi } from '@app/services/api/news/news-api.service';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { catchError, map, mergeMap, of } from 'rxjs';
import * as newsLetterActions from './news-letter.actions';
import { NewsLetterApi } from '@app/services/api/news-letter/news-letter-api.service';


@Injectable()
export class NewsLettterEffects {
  readonly subscribe$ = createEffect(() =>
    this.actions$.pipe(
      ofType(newsLetterActions.subscribeNewsLetter),
      mergeMap(({ email }) =>
        this.newsLetterApi.subscribeNewsLetter(email).pipe(
          map(() => newsLetterActions.subscribeNewsLetterSucceed()),
          catchError((err) => of(newsLetterActions.subscribeNewsLetterFailed()))
        )
      )
    )
  );

  constructor(
    readonly store: Store,
    readonly actions$: Actions,
    readonly newsLetterApi: NewsLetterApi
  ) {}
}
