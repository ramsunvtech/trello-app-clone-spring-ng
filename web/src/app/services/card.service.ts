import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

// api
import { environment } from 'src/environments/environment';

// models
import { CardItem } from 'src/common/models/card';

@Injectable({
  providedIn: 'root',
})
export class CardService {
  constructor(private http: HttpClient) {}

  getCards(): Observable<object> {
    return this.http.get(environment.apiUrl + '/api/card-list');
  }

  addCard(card: CardItem): Observable<object> {
    return this.http.post(environment.apiUrl + '/api/new-card', card);
  }

  editCard(card: CardItem): Observable<object> {
    return this.http.put(environment.apiUrl + '/api/edit-card', card);
  }

  deleteCard(cardId: number): Observable<object> {
    return this.http.delete(environment.apiUrl + '/api/delete-card/' + cardId);
  }
}
