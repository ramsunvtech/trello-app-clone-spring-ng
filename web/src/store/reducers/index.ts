import * as boardReducer from './board.reducer';
import * as cardReducer from './card.reducer';

export interface AppState {
  board: boardReducer.State;
  card: cardReducer.State;
}

export const reducers = {
  board: boardReducer.reducer,
  card: cardReducer.reducer,
};
