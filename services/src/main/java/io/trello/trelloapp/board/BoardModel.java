package io.trello.trelloapp.board;

public class BoardModel {
    public Integer id;
    public String title;
    public Integer boardId;

    public BoardModel(Integer id, String title, Integer boardId) {
        this.id = id;
        this.title = title;
        this.boardId = boardId;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public Integer getBoardId() {
        return boardId;
    }

    public void setBoardId(Integer boardId) {
        this.boardId = boardId;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }
}
