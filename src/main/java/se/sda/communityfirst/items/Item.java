package se.sda.communityfirst.items;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import se.sda.communityfirst.location.Community;
import se.sda.communityfirst.user.User;

import javax.persistence.*;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "items")
public class Item {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @Column(name = "title")
    @NotEmpty(message = "Title cannot be empty")
    private String title;

    @Column(name = "description")
    @NotEmpty(message = "Post cannot be empty")
    private String text;

    @ManyToOne
    private User user;

    @ManyToOne
    private Community community;

    @Column(name = "offering")
    @NotNull(message = "Offering or Asking has to be chosen")
    private Boolean offering;

//@JsonIgnore
    //@OneToMany(mappedBy = "post", cascade = CascadeType.ALL)
    //private List<Comment> comments = new ArrayList<>();

    public Item(String title) {
        this.title = title;
    }
}
