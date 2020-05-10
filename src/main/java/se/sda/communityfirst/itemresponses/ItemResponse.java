package se.sda.communityfirst.itemresponses;

import se.sda.communityfirst.items.*;
import javax.persistence.*;
import javax.validation.constraints.NotEmpty;

@Entity
public class ItemResponse {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Lob
    @NotEmpty(message = "Comment should not be empty")
    private String body;

    @ManyToOne
    @JoinColumn(name = "item_id")
    private Item item;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getBody() {
        return body;
    }

    public void setBody(String section) {
        this.body = section;
    }

    public Item getItem() {
        return item;
    }

    public void setItem(Item post) {
        this.item = post;
    }
}
