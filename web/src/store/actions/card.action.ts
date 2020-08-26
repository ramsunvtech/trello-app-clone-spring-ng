import { createAction, props } from '@ngrx/store';

// models
import { CardItem } from '../../common/models';

export const GetCards = createAction('[Home Page] Get Cards');

export const GetCardsSuccess = createAction(
  '[Home Page] Get Cards Success',
  props<{ cardList: CardItem[] }>()
);

export const AddCard = createAction(
  '[Home Page] Add Card',
  props<{ card: CardItem }>()
);

export const AddCardSuccess = createAction(
  '[Home Page] Add Card Success',
  props<{ card: CardItem }>()
);

export const DeleteCard = createAction(
  '[Home Page] Delete Card',
  props<{ cardId: number }>()
);

export const DeleteCardSuccess = createAction(
  '[Home Page] Delete Card Success',
  props<{ cardId: number }>()
);
