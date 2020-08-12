package io.trello.trelloapp.board;

import java.util.ArrayList;

public class BoardListModel {
    public BoardListModel(ArrayList<BoardModel> boards) {
        this.boards = boards;
    }

    public ArrayList<BoardModel> boards;
}
