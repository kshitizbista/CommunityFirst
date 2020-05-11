package se.sda.communityfirst.service;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import se.sda.communityfirst.location.Community;
import se.sda.communityfirst.user.User;

import javax.persistence.*;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.Size;
import java.time.LocalDate;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "services")
public class Assistance {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @Column(name = "title")
    @NotEmpty(message = "Title cannot be empty")
    @Size(min = 3, max = 80)
    private String title;

    @Lob
    @Column(name = "description")
    @NotEmpty(message = "Description cannot be empty")
    private String description;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id")
    private User user;

    @Enumerated(EnumType.STRING)
    @Column(name = "service_type")
    private AssistanceType assistanceType;

    @Column(name = "posted_date", columnDefinition = "DATE")
    private LocalDate postedDate;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "community_id")
    private Community community;
}
