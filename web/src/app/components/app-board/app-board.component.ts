import { Component, OnInit, Input } from '@angular/core';

// interface
import { AppBoardComponentInterface } from './app-board.interface';

// models
import { BoardItem } from './../../../common/models';

@Component({
  selector: 'app-board',
  templateUrl: './app-board.component.html',
  styleUrls: ['./app-board.component.css'],
})
export class AppBoardComponent implements OnInit, AppBoardComponentInterface {
  @Input() boardItem: BoardItem;

  constructor() {}

  ngOnInit(): void {}
}
