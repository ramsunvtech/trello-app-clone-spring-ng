package io.trello.trelloapp.board;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.Optional;

@RestController
public class BoardController {

    @Autowired
    private BoardRepository BoardJpaRepository;

    @GetMapping(value="/api/board-list")
    public ResponseEntity<BoardListResponse> getBoardList() {
        BoardListResponse boardLisResponse = new BoardListResponse(BoardJpaRepository.findAll());
        return new ResponseEntity<BoardListResponse>(boardLisResponse, HttpStatus.OK);
    }

    @PostMapping(value="/api/new-board")
    public Optional<BoardModel> addNewBoard(@RequestBody BoardModel newBoardInfo) {
        BoardJpaRepository.save(newBoardInfo);
        return BoardJpaRepository.findById(newBoardInfo.getId());
    }
}
