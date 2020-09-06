import { CardService } from 'src/app/services';
import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';

// interface
import { AppCardFormComponentInterface } from './app-card-form.interface';

// models
import { CardItem } from 'src/common/models';

// actions
import { AddCard } from 'src/store/actions';

@Component({
  selector: 'app-card-form',
  templateUrl: './app-card-form.component.html',
})
export class AppCardFormComponent implements AppCardFormComponentInterface {
  formVisible: boolean;
  cardTitle: string;
  @Input() boardId: number;

  constructor(private store: Store, private cardService: CardService) {
    this.formVisible = false;
  }

  addCard(): void {
    if (!this.cardTitle) {
      return;
    }

    const card: CardItem = {
      id: null,
      boardId: this.boardId,
      title: this.cardTitle,
      description: 'No Description',
    };

    this.cardService.addCard(card);

    this.cardTitle = '';
    this.formVisible = false;
  }
}
