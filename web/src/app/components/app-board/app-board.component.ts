import { Component, OnInit, Input } from '@angular/core';
import { Store, select } from '@ngrx/store';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';

// interface
import { AppBoardComponentInterface } from './app-board.interface';

// models
import { BoardItem, CardItem } from 'src/common/models';

// services
import { CardService } from 'src/app/services';

// selectors
import { selectCardsForBoard } from 'src/store/selectors';

@Component({
  selector: 'app-board',
  templateUrl: './app-board.component.html',
  styleUrls: ['./app-board.component.css'],
})
export class AppBoardComponent implements AppBoardComponentInterface, OnInit {
  @Input() boardItem: BoardItem;
  @Input() boardList: BoardItem[];
  cardList: CardItem[];

  constructor(private store: Store, private cardService: CardService) {
    this.cardList = [];
  }

  ngOnInit(): void {
    this.store
      .pipe(select(selectCardsForBoard, { boardId: this.boardItem.id }))
      .subscribe((cardList: CardItem[]) => {
        this.cardList = cardList;
      });

    this.cardService.listenAddCard().subscribe((card: CardItem) => {
      if (this.boardItem.id === card.boardId) {
        this.cardList.push(card);
      }
    });
  }

  getConnectedIds(): string[] {
    return this.boardList.map((boardItem: BoardItem) => `${boardItem.id}`);
  }

  drop(event: CdkDragDrop<string[]>): void {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );

      const card: CardItem = {
        ...event.item.data,
        boardId: parseInt(event.container.id, 10),
      };

      this.cardService.editCard(card).subscribe(null);
    }
  }
}
