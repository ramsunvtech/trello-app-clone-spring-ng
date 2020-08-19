import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';

// actions
import {
  GetBoards,
  GetBoardsSuccess,
  AddBoard,
  AddBoardSuccess,
} from '../actions';

// service
import { BoardService } from '../../app/board.service';

// models
import { BoardItem } from '../../common/models';

@Injectable()
export class BoardEffects {
  getAllBoards = createEffect(() =>
    this.action.pipe(
      ofType(GetBoards),
      mergeMap(() =>
        this.boardService.getAllBoards().pipe(
          map((data: { boards: BoardItem[] }) =>
            GetBoardsSuccess({ boardList: data.boards })
          ),
          catchError(() => EMPTY)
        )
      )
    )
  );

  addBoard = createEffect(() =>
    this.action.pipe(
      ofType(AddBoard),
      mergeMap((action) =>
        this.boardService.addBoard(action.board).pipe(
          map((board: BoardItem) => AddBoardSuccess({ board })),
          catchError(() => EMPTY)
        )
      )
    )
  );

  constructor(private action: Actions, private boardService: BoardService) {}
}
