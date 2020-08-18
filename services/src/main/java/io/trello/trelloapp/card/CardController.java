package io.trello.trelloapp.card;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.Optional;

@RestController
public class CardController {

    @Autowired
    private CardRepository CardJpaRepository;

    @GetMapping(value="/api/card-list")
    public ResponseEntity<CardListResponse> getCardList() {
        CardListResponse cardListResponse = new CardListResponse(CardJpaRepository.findAll());
        return new ResponseEntity<CardListResponse>(cardListResponse, HttpStatus.OK);
    }

    @PostMapping(value="/api/new-card")
    public Optional<CardModel> addNewCard(@RequestBody CardModel newCardInfo) {
        CardJpaRepository.save(newCardInfo);
        return CardJpaRepository.findById(newCardInfo.getId());
    }

    @PostMapping(value="/api/edit-card")
    public ResponseEntity<CardModel> editCard(@RequestBody CardModel newCardInfo) {
        return new ResponseEntity<CardModel>(newCardInfo, HttpStatus.OK);
    }
}
