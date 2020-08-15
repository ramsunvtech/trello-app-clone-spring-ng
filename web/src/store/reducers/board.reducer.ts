import { Action, createReducer, on } from '@ngrx/store';

// actions
import * as boardActions from '../actions/board.action';

// models
import { BoardItem } from '../../common/models/board';

export interface State {
  boardList: BoardItem[];
}

// TODO: Remove on backend integration
export const initialState: State = {
  boardList: [
    {
      id: 1,
      title: 'Things to do',
      boardId: 1,
    },
    {
      id: 2,
      title: 'Doing',
      boardId: 2,
    },
    {
      id: 3,
      title: 'Done',
      boardId: 3,
    },
    {
      id: 4,
      title: 'Tomorrow',
      boardId: 4,
    },
  ],
};

const onAddBoard = (state: State, { board }) => {
  const boardList: BoardItem[] = [...state.boardList];

  boardList.push(board);

  return {
    ...state,
    boardList,
  };
};

const boardReducer = createReducer(
  initialState,
  on(boardActions.addBoard, onAddBoard)
);

export function reducer(state: State | undefined, action: Action): State {
  return boardReducer(state, action);
}
