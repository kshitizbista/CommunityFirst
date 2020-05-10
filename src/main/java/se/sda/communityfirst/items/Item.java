package se.sda.communityfirst.items;

import com.fasterxml.jackson.annotation.JsonIgnore;
import se.sda.communityfirst.itemresponses.*;
import javax.persistence.*;
import javax.validation.constraints.NotEmpty;
import java.util.ArrayList;
import java.util.List;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@AllArgsConstructor
@Table(name = "items")
public class Item {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @Lob
    @Column(name = "body")
    @NotEmpty(message = "Post cannot be empty")
    private String body;

    @JsonIgnore
    @OneToMany(mappedBy = "item", cascade = CascadeType.ALL)
    private List<ItemResponse> comments = new ArrayList<>();

    public Item() {
    }

    public Item(String body) {
        this.body = body;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getBody() {
        return body;
    }

    public void setBody(String body) {
        this.body = body;
    }

    public List<ItemResponse> getItemReponses() {
        return comments;
    }

    public void addItemResponse(ItemResponse comment) {
        this.comments.add(comment);
        comment.setItem(this);
    }

    public void removeItemResponse(ItemResponse comment) {
        this.comments.remove(comment);
        comment.setItem(null);
    }
}
