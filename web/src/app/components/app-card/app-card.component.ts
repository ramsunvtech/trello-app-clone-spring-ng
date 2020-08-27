import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';

// models
import { CardItem } from 'src/common/models';

// actions
import { DeleteCard } from 'src/store/actions';

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
    this.store.dispatch(DeleteCard({ cardId: this.cardItem.id }));
  }
}
