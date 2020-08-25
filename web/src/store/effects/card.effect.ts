import { CardItem } from 'src/common/models/card';
import {
  GetCards,
  AddCard,
  GetCardsSuccess,
  AddCardSuccess,
} from 'src/store/actions';

import { CardService } from 'src/app/services/card.service';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';

// actions
import {} from '../actions';

@Injectable()
export class CardEffects {
  getAllCards = createEffect(() =>
    this.action.pipe(
      ofType(GetCards),
      mergeMap(() =>
        this.cardService.getCards().pipe(
          map((data: { cards: CardItem[] }) =>
            GetCardsSuccess({ cardList: data.cards })
          ),
          catchError(() => EMPTY)
        )
      )
    )
  );

  addNewCard = createEffect(() =>
    this.action.pipe(
      ofType(AddCard),
      mergeMap((action) =>
        this.cardService.addCard(action.card).pipe(
          map((card: CardItem) => AddCardSuccess({ card })),
          catchError(() => EMPTY)
        )
      )
    )
  );

  constructor(private action: Actions, private cardService: CardService) {}
}
