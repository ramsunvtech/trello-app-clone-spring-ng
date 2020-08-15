import * as boardList from './board.reducer';

export interface AppState {
  board: boardList.State;
}

export const reducers = {
  board: boardList.reducer,
};
