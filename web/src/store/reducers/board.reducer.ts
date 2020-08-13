import { Action, createReducer, on } from '@ngrx/store';

// actions
import * as boardActions from '../actions/board.action';

// models
import { BoardItem } from '../../common/models/board';

export interface BoardState {
  boards: BoardItem[];
}

export const initialState: BoardState = {
  boards: [
    {
      id: 1,
      title: 'sample',
      boardId: 1,
    },
  ],
};

const onAddBoard = (state: BoardState, { board }) => {
  const boards: BoardItem[] = [...state.boards];

  boards.push(board);

  return {
    ...state,
    boards,
  };
};

const boardReducer = createReducer(
  initialState,
  on(boardActions.addBoard, onAddBoard)
);

export function reducer(
  state: BoardState | undefined,
  action: Action
): BoardState {
  return boardReducer(state, action);
}
