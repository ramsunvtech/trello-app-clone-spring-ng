package io.trello.trelloapp.card;

import java.util.ArrayList;

public class CardListModel {
    public CardListModel(ArrayList<CardModel> cards) {
        this.cards = cards;
    }

    public ArrayList<CardModel> cards;
}
