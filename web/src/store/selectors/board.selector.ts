import { createSelector } from '@ngrx/store';

// reducers

// modlels
import { AppState } from './../reducers';

export const selectBoard = (state: AppState) => state.board;

export const selectAllBoards = createSelector(
  selectBoard,
  (state) => state.boardList
);
