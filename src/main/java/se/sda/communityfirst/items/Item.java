package se.sda.communityfirst.items;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

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
    @SequenceGenerator(name = "items_id_seq", sequenceName = "items_id_seq", allocationSize = 1)
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "items_id_seq")
    @Column(name = "id")
    private Long id;

    @Column(name = "title")
    @NotEmpty(message = "Title cannot be empty")
    private String title;

    @Column(name = "description")
    @NotEmpty(message = "Post cannot be empty")
    private String description;

    @Column(name = "user_id")
    @NotNull(message = "User ID cannot be null")
    private Long userId;

    @Column(name = "community_id")
    @NotNull(message = "Community ID cannot be null")
    private Long communityId;

    @Column(name = "offering")
    @NotNull(message = "Offering or Asking has to be chosen")
    private Boolean offering;
}
