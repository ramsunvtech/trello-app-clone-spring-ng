import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

// api
import { environment } from 'src/environments/environment';

// models
import { CardItem } from 'src/common/models/card';

@Injectable({
  providedIn: 'root',
})
export class CardService {
  private subject = new Subject<CardItem>();

  constructor(private http: HttpClient) {}

  getCards(): Observable<object> {
    return this.http.get(environment.apiUrl + '/api/card-list');
  }

  addCard(card: CardItem): void {
    this.http
      .post(environment.apiUrl + '/api/new-card', card)
      .subscribe((addedCard: CardItem) => this.subject.next(addedCard));
  }

  listenAddCard(): Observable<CardItem> {
    return this.subject.asObservable();
  }

  editCard(card: CardItem): Observable<object> {
    return this.http.put(environment.apiUrl + '/api/edit-card', card);
  }

  deleteCard(cardId: number): Observable<object> {
    return this.http.delete(environment.apiUrl + '/api/delete-card/' + cardId);
  }
}
