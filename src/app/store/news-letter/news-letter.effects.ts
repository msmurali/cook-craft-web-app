import { Injectable } from '@angular/core';
import { NewsApi } from '@app/services/api/news/news-api.service';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { catchError, map, mergeMap, of, tap } from 'rxjs';
import * as newsLetterActions from './news-letter.actions';
import { NewsLetterApi } from '@app/services/api/news-letter/news-letter-api.service';
import { ToastService } from 'src/shared/services/toast.service';
import { SpinnerService } from 'src/shared/services/spinner.service';

@Injectable()
export class NewsLettterEffects {
  readonly subscribe$ = createEffect(() =>
    this.actions$.pipe(
      ofType(newsLetterActions.subscribeNewsLetter),
      mergeMap(({ email }) =>
        {
          this.spinner.show();
          return this.newsLetterApi.subscribeNewsLetter(email).pipe(
            map(() => {
              this.spinner.hide();
              return newsLetterActions.subscribeNewsLetterSucceed();
            }),
            catchError((err) => {
              this.spinner.hide();
              return of(newsLetterActions.subscribeNewsLetterFailed());
            })
          );
        }
      )
    )
  );

  readonly unsubscribe$ = createEffect(() =>
    this.actions$.pipe(
      ofType(newsLetterActions.unsubscribeNewsLetter),
      mergeMap(({ email }) =>
        {
          this.spinner.show();
          return this.newsLetterApi.unsubScribeNewsLetter(email).pipe(
            map(() => {
              this.spinner.hide();
              return newsLetterActions.unsubscribeNewsLetterSucceed();
            }),
            catchError((err) => {
              this.spinner.hide();
              return of(newsLetterActions.unsubscribeNewsLetterFailed());
            })
          );
        }
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
        tap(() => this.toast.showErrorToast('Failed to subscribe'))
      ),
    { dispatch: false }
  );

  readonly showUnsubscribedMessage$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(newsLetterActions.unsubscribeNewsLetterSucceed),
        tap(() => this.toast.showInfoToast('Unsubsribed to news-letter'))
      ),
    { dispatch: false }
  );

  readonly showUnsubscriptionErrorMessage$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(newsLetterActions.unsubscribeNewsLetterFailed),
        tap(() => this.toast.showErrorToast('Failed to unsubscribe'))
      ),
    { dispatch: false }
  );

  constructor(
    readonly store: Store,
    readonly actions$: Actions,
    readonly newsLetterApi: NewsLetterApi,
    readonly toast: ToastService,
    readonly spinner: SpinnerService
  ) {}
}
