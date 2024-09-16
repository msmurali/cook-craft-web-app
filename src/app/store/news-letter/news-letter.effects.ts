import { Injectable } from '@angular/core';
import { NewsApi } from '@app/services/api/news/news-api.service';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { catchError, map, mergeMap, of, tap } from 'rxjs';
import * as newsLetterActions from './news-letter.actions';
import { NewsLetterApi } from '@app/services/api/news-letter/news-letter-api.service';
import { ToastService } from 'src/shared/services/toast.service';

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

  readonly showSubscribedMessage$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(newsLetterActions.subscribeNewsLetterSucceed),
        tap(() => this.toast.showInfoToast('Subscribed to news-letter'))
      ),
    { dispatch: false }
  );

  readonly showSubscriptionErrorMessage$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(newsLetterActions.subscribeNewsLetterFailed),
        tap(() => this.toast.showInfoToast('Failed to subscribe'))
      ),
    { dispatch: false }
  );

  constructor(
    readonly store: Store,
    readonly actions$: Actions,
    readonly newsLetterApi: NewsLetterApi,
    readonly toast: ToastService
  ) {}
}
