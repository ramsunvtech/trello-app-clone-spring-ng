package io.trello.trelloapp.card;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;

@RestController
public class CardController {
    @GetMapping(value="/api/card-list")
    public ResponseEntity<CardListModel> getCardList() {
        ArrayList<CardModel> Cards = new ArrayList<CardModel>();
        Cards.add(new CardModel(1, "Lunch", "", 1));
        Cards.add(new CardModel(2, "Coffee", "", 2 ));
        Cards.add(new CardModel(3, "Dinner", "", 1));
        CardListModel cardLisResponse = new CardListModel(Cards);

        return new ResponseEntity<CardListModel>(cardLisResponse, HttpStatus.OK);
    }

    @PostMapping(value="/api/new-card")
    public ResponseEntity<CardModel> addNewCard(@RequestBody CardModel newCardInfo) {
        return new ResponseEntity<CardModel>(newCardInfo, HttpStatus.OK);
    }
}
