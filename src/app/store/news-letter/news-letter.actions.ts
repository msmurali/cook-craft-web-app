import { createAction, props } from '@ngrx/store';
import { ActionTypes } from './news-letter.action-types';

const IDENTIFIER = '[ App - Subscribe News Letter ]';

export const subscribeNewsLetter = createAction(
  IDENTIFIER.concat(ActionTypes.SUBSCRIBE_NEWS_LETTER),
  props<{ email: string }>()
);

export const subscribeNewsLetterSucceed = createAction(
  IDENTIFIER.concat(ActionTypes.SUBSCRIBE_NEWS_LETTER_SUCCEED)
);

export const subscribeNewsLetterFailed = createAction(
  IDENTIFIER.concat(ActionTypes.SUBSCRIBE_NEWS_LETTER_FAILED)
);
