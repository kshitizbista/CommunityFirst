package se.sda.communityfirst.items;

import com.fasterxml.jackson.annotation.JsonIgnore;
import se.sda.communityfirst.itemresponses.*;
import javax.persistence.*;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;
import java.util.ArrayList;
import java.util.List;
import lombok.AllArgsConstructor;
import lombok.Data;
import se.sda.communityfirst.location.Community;
import se.sda.communityfirst.user.User;

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
    @Column(name = "itemcategory")
    @NotEmpty(message = "item category cannot be empty")
    private String itemcategory;

    @Lob
    @Column(name = "itemdescription")
    @NotEmpty(message = "Item Description cannot be empty")
    private String itemdescription;

    @JsonIgnore
    @OneToMany(mappedBy = "item", cascade = CascadeType.ALL)
    private List<ItemResponse> comments = new ArrayList<>();

    @ManyToOne
    private User user;

    @ManyToOne
    private Community community;

    @Column(name = "offering")
    private Boolean offering;

    public String getItemcategory() {
        return itemcategory;
    }

    public void setItemcategory(String itemcategory) {
        this.itemcategory = itemcategory;
    }

    public String getItemdescription() {
        return itemdescription;
    }

    public void setItemdescription(String itemdescription) {
        this.itemdescription = itemdescription;
    }


    public Item() {
    }

    public Item(String itemcategory, String itemdescription) {
        this.itemcategory = itemcategory;
        this.itemdescription = itemdescription;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
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