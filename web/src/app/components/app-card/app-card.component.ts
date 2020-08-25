import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';

// models
import { CardItem } from 'src/common/models';

// interface
import { AppCardComponentInterface } from './app-card.interface';

@Component({
  selector: 'app-card',
  templateUrl: './app-card.component.html',
})
export class AppCardComponent implements AppCardComponentInterface {
  @Input() cardItem: CardItem;
  editable: boolean;

  constructor(private store: Store) {
    this.editable = false;
  }

  toggleEditMode(): void {
    this.editable = !this.editable;
  }

  deleteCard(): void {
    console.log('delete this card !!!');
  }
}
