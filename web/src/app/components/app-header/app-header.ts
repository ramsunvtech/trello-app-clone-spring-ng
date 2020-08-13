import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './app-header.html',
  styleUrls: ['./app-header.css'],
})
export class AppHeaderComponent  implements OnInit {
  title = 'Trello Clone App';

  ngOnInit() {
  }
}
