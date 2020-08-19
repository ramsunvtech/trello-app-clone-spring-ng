import { Action, createReducer, on } from '@ngrx/store';

// actions
import * as boardActions from 'src/store/actions/board.action';

// models
import { BoardItem } from 'src/common/models/board';

export interface State {
  boardList: BoardItem[];
}

export const initialState: State = {
  boardList: [],
};

const onAddBoard = (state: State, { board }) => {
  const boardList: BoardItem[] = [...state.boardList];

  boardList.push(board);

  return {
    ...state,
    boardList,
  };
};

const onGetBoards = (state: State, { boardList }) => {
  return {
    ...state,
    boardList,
  };
};

const boardReducer = createReducer(
  initialState,
  on(boardActions.AddBoardSuccess, onAddBoard),
  on(boardActions.GetBoardsSuccess, onGetBoards)
);

export function reducer(state: State | undefined, action: Action): State {
  return boardReducer(state, action);
}
