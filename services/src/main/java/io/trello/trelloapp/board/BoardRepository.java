package io.trello.trelloapp.board;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Component;

@Component
public interface BoardRepository extends JpaRepository<BoardModel, Long> {
}
