import { Component } from '@angular/core';

// models
import { CardItem } from 'src/common/models';

// interface
import { AppCardComponentInterface } from './app-card.interface';

@Component({
  selector: 'app-card',
  templateUrl: './app-card.component.html',
})
export class AppCardComponent implements AppCardComponentInterface {
  cardItem: CardItem;
  editable: boolean;

  constructor() {
    this.cardItem = {
      id: 1,
      boardId: 1,
      title: 'Sample Card',
      description: 'Sample Description',
    };
    this.editable = false;
  }

  toggleEditMode(): void {
    this.editable = !this.editable;
  }

  deleteCard(): void {
    console.log('delete this card !!!');
  }
}
