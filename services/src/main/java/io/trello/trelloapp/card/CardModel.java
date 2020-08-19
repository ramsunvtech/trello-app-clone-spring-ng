package io.trello.trelloapp.card;

import javax.persistence.*;

@Entity(name="cards")
public class CardModel {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name="id", nullable = false)
    public Long id;

    @Column(name="title", nullable = false)
    public String title;

    @Column(name="description", nullable = false)
    public String description;

    @Column(name="board_id", nullable = false)
    public Integer boardId;

    protected CardModel() {}

    public CardModel(Long id, String title, String description, Integer boardId) {
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

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }
}
