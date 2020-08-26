import { EditCard } from './../../../store/actions/card.action';
import { Component, OnInit, Input } from '@angular/core';
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
export class AppCardComponent implements OnInit, AppCardComponentInterface {
  @Input() cardItem: CardItem;

  title: string;
  description: string;
  editable: boolean;

  constructor(private store: Store) {
    this.editable = false;
  }

  ngOnInit(): void {
    this.title = this.cardItem.title || '';
    this.description = this.cardItem.description || '';
  }

  toggleEditMode(): void {
    this.editable = !this.editable;

    if (!this.editable) {
      this.editCard();
    }
  }

  editCard(): void {
    if (
      this.title === this.cardItem.title &&
      this.description === this.cardItem.description
    ) {
      // no change has been made
      return;
    }

    const updatedCard: CardItem = {
      ...this.cardItem,
      title: this.title,
      description: this.description,
    };

    this.store.dispatch(EditCard({ card: updatedCard }));
  }

  deleteCard(): void {
    this.store.dispatch(DeleteCard({ cardId: this.cardItem.id }));
  }
}
