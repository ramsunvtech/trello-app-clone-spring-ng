package io.trello.trelloapp.card;

public class CardModel {
    public Integer id;
    public String title;
    public String description;
    public Integer boardId;

    public CardModel(Integer id, String title, String description, Integer boardId) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.boardId = boardId;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getDescription() {
       return description;
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
