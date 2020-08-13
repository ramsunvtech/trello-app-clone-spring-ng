import { createAction, props } from '@ngrx/store';

// models
import { BoardItem } from '../../common/models/board';

export const addBoard = createAction(
  '[Home Page] Add Board',
  props<{ board: BoardItem }>()
);

export const removeBoard = createAction('[Home Page] Remove Board');
