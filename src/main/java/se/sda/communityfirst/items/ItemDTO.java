package se.sda.communityfirst.items;

import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.validation.constraints.NotNull;
import java.time.LocalDate;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@JsonInclude(JsonInclude.Include.NON_NULL)
public class ItemDTO {

    private Long id;
    private String title;
    private String description;
    private ItemType itemType;
    private LocalDate postedDate;

    @NotNull
    private Long communityId;

    @NotNull
    private Long userId;
    private String firstname;
    private String lastname;
    private String email;
}