import { createSelector } from '@ngrx/store';

// reducers
import { BoardState } from '../reducers/board.reducer';

// modlels
import { AppState } from '../../models';

export const selectBoard = (state: AppState) => state.board;

export const selectAllBoards = createSelector(
  selectBoard,
  (state: BoardState) => state.boards
);
