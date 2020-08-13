import { Component } from '@angular/core';
import { AppHeaderComponentInterface } from './app-header.interface';

@Component({
  selector: 'app-header',
  templateUrl: './app-header.html',
  styleUrls: ['./app-header.css'],
})
export class AppHeaderComponent implements AppHeaderComponentInterface {
  title = 'Trello Clone App';
}
