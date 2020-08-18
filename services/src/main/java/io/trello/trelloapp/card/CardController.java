package io.trello.trelloapp.card;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

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

    @PutMapping(value="/api/edit-card")
    public Optional<CardModel> editCard(@RequestBody CardModel editCardInfo) {
        CardJpaRepository.save(editCardInfo);
        return CardJpaRepository.findById(editCardInfo.getId());
    }

    @DeleteMapping(value="/api/delete-card/{cardId}")
    public Optional<CardModel> deleteCard(@PathVariable("cardId") Long cardId) {
        CardJpaRepository.deleteById(cardId);
        return Optional.empty();
    }
}
