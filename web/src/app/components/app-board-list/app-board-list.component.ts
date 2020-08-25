import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

// interface
import { AppBoardListComponentInterface } from './app-board-list.interface';

// models
import { BoardItem } from 'src/common/models';
import { AppState } from 'src/store/reducers';

// selectors
import { selectAllBoards } from 'src/store/selectors';

// actions
import { GetBoards, GetCards } from 'src/store/actions';

@Component({
  selector: 'app-board-list',
  templateUrl: './app-board-list.component.html',
  styleUrls: ['./app-board-list.component.css'],
})
export class AppBoardListComponent
  implements OnInit, AppBoardListComponentInterface {
  public boardList: Observable<BoardItem[]>;

  constructor(private store: Store<AppState>) {
    this.boardList = this.store.pipe(select(selectAllBoards));
  }

  ngOnInit(): void {
    this.store.dispatch(GetBoards());
    this.store.dispatch(GetCards());
  }
}
