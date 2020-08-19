import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

// models
import { BoardItem } from './../../../common/models';
import { AppState } from './../../../store/reducers';

// interface
import { AppBoardListComponentInterface } from './app-board-list.interface';

// selectors
import { selectAllBoards } from './../../../store/selectors';

// actions
import { GetBoards } from 'src/store/actions';

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
  }
}
