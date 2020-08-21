import { AppCardFormComponentInterface } from './app-card-form.interface';
import { Component, Input } from '@angular/core';

// models
import { CardItem } from 'src/common/models';

@Component({
  selector: 'app-card-form',
  templateUrl: './app-card-form.component.html',
})
export class AppCardFormComponent implements AppCardFormComponentInterface {
  formVisible: boolean;
  cardTitle: string;
  @Input() boardId: number;

  constructor() {
    this.formVisible = false;
  }

  addCard(): void {
    // TODO: To be changed on service addition
    this.cardTitle = '';
    this.formVisible = false;
  }
}
