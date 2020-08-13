package io.trello.trelloapp.board;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;

@RestController
public class BoardController {
    @GetMapping(value="/api/board-list")
    public ResponseEntity<BoardListModel> getBoardList() {
        ArrayList<BoardModel> Boards = new ArrayList<BoardModel>();
        Boards.add(new BoardModel(1, "Things To Do", 1));
        Boards.add(new BoardModel(1, "Doing", 1));
        Boards.add(new BoardModel(1, "Done", 1));
        BoardListModel boardLisResponse = new BoardListModel(Boards);

        return new ResponseEntity<BoardListModel>(boardLisResponse, HttpStatus.OK);
    }
}
