import { Action, createReducer, on } from '@ngrx/store';

import {
  GetCardsSuccess,
  AddCardSuccess,
} from './../actions/card.action';

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

const cardReducer = createReducer(
  initialState,
  on(GetCardsSuccess, onGetCards),
  on(AddCardSuccess, onAddCard),
);

export function reducer(state: State | undefined, action: Action): State {
  return cardReducer(state, action);
}
