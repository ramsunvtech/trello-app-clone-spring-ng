import { createAction, props } from '@ngrx/store';

// models
import { BoardItem } from '../../common/models/board';

export const GetBoards = createAction('[Home Page] Get Boards');

export const GetBoardsSuccess = createAction(
  '[Home Page] Get Boards Success',
  props<{ boardList: BoardItem[] }>()
);

export const AddBoard = createAction(
  '[Home Page] Add Board',
  props<{ board: Partial<BoardItem> }>()
);

export const AddBoardSuccess = createAction(
  '[Home Page] Add Board Success',
  props<{ board: BoardItem }>()
);

export const DeleteBoard = createAction('[Home Page] Delete Board');
