import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';
import { BoardItem } from 'src/common/models';

@Injectable({
  providedIn: 'root',
})
export class BoardService {
  constructor(private http: HttpClient) {}

  getAllBoards(): Observable<object> {
    return this.http.get(environment.apiUrl + '/api/board-list');
  }

  addBoard(board: Partial<BoardItem>): Observable<object> {
    return this.http.post(environment.apiUrl + '/api/new-board', board);
  }
}
