import { createSelector } from '@ngrx/store';
import { filter } from 'rxjs/operators';
import { State as CardState } from '../reducers/card.reducer';

// reducers
import { AppState } from './../reducers';

// models
import { CardItem } from '../../common/models/card';

export const selectCardState = (state: AppState) => state.card;

export const selectCardList = (state: CardState) => state.cardList;

export const selectAllCards = createSelector(selectCardState, selectCardList);

export const selectCardsForBoard = createSelector(
  selectAllCards,
  (cardList: CardItem[], { boardId }) =>
    cardList.filter((card) => card.boardId === boardId)
);
