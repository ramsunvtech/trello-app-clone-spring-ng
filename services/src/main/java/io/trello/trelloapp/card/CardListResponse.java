package io.trello.trelloapp.card;

import java.util.List;

public class CardListResponse {
    public CardListResponse(List<CardModel> cards) {
        this.cards = cards;
    }

    public List<CardModel> cards;
}
