import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Component, OnInit, Input } from '@angular/core';

// interface
import { AppBoardComponentInterface } from './app-board.interface';

// models
import { BoardItem, CardItem } from 'src/common/models';

// selectors
import { selectCardsForBoard } from 'src/store/selectors';

@Component({
  selector: 'app-board',
  templateUrl: './app-board.component.html',
  styleUrls: ['./app-board.component.css'],
})
export class AppBoardComponent implements OnInit, AppBoardComponentInterface {
  @Input() boardItem: BoardItem;
  cardList: Observable<CardItem[]>;

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.cardList = this.store.pipe(
      select(selectCardsForBoard, { boardId: this.boardItem.id })
    );
  }
}
