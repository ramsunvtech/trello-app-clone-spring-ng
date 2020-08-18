package io.trello.trelloapp.card;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Component;

@Component
public interface CardRepository extends JpaRepository<CardModel, Long> {
}
