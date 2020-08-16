import { Store } from '@ngrx/store';
import { Component } from '@angular/core';

import { BoardItem } from 'src/common/models';

// reducer
import { AppState } from 'src/store/reducers';

// action
import { addBoard } from 'src/store/actions';

@Component({
  selector: 'app-board-form',
  templateUrl: './app-board-form.component.html',
})
export class AppBoardFormComponent {
  formVisible: boolean;
  listTitle: string;

  constructor(private store: Store<AppState>) {
    this.formVisible = false;
    this.listTitle = '';
  }

  addNewBoardItem(): void {
    if (!this.listTitle) {
      return;
    }

    const board: BoardItem = {
      title: this.listTitle,
      id: 1,
      boardId: 1,
    };

    this.store.dispatch(addBoard({ board }));

    this.listTitle = '';
  }
}
