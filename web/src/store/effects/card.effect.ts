import { EditCard, EditCardSuccess } from './../actions/card.action';
import { CardItem } from 'src/common/models/card';
import {
  GetCards,
  AddCard,
  GetCardsSuccess,
  AddCardSuccess,
  DeleteCard,
  DeleteCardSuccess,
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

  editCard = createEffect(() =>
    this.action.pipe(
      ofType(EditCard),
      mergeMap((action) =>
        this.cardService.editCard(action.card).pipe(
          map((card: CardItem) => EditCardSuccess({ card })),
          catchError(() => EMPTY)
        )
      )
    )
  );

  deleteCard = createEffect(() =>
    this.action.pipe(
      ofType(DeleteCard),
      mergeMap((action) =>
        this.cardService.deleteCard(action.cardId).pipe(
          map(() => DeleteCardSuccess({ cardId: action.cardId })),
          catchError(() => EMPTY)
        )
      )
    )
  );

  constructor(private action: Actions, private cardService: CardService) {}
}
