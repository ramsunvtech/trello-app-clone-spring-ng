import { Action, createReducer, on } from '@ngrx/store';

import {
  GetCardsSuccess,
  AddCardSuccess,
  DeleteCardSuccess,
} from 'src/store/actions';

// models
import { CardItem } from 'src/common/models/card';

export interface State {
  cardList: CardItem[];
}

export const initialState: State = {
  cardList: [],
};

const onGetCards = (state: State, { cardList }) => {
  return {
    ...state,
    cardList,
  };
};

const onAddCard = (state: State, { card }) => {
  const cardList: CardItem[] = [...state.cardList];

  cardList.push(card);

  return {
    ...state,
    cardList,
  };
};

const onDeleteCard = (state: State, { cardId }) => {
  const cardList: CardItem[] = [...state.cardList].filter(
    (card: CardItem) => card.id !== cardId
  );

  return {
    ...state,
    cardList,
  };
};

const cardReducer = createReducer(
  initialState,
  on(GetCardsSuccess, onGetCards),
  on(AddCardSuccess, onAddCard),
  on(DeleteCardSuccess, onDeleteCard)
);

export function reducer(state: State | undefined, action: Action): State {
  return cardReducer(state, action);
}
