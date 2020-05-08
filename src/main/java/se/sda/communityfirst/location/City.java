package se.sda.communityfirst.location;

import com.fasterxml.jackson.annotation.JsonIgnore;
import se.sda.communityfirst.user.User;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name = "cities")
public class City {
    @Id
    @SequenceGenerator(name = "cities_id_seq", sequenceName = "cities_id_seq", allocationSize = 1)
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "cities_id_seq")
    private Long id;

    private String name;

    @OneToMany(mappedBy = "city", fetch = FetchType.LAZY)
    private Set<Community> community = new HashSet<>();

    @OneToMany(mappedBy = "city", fetch = FetchType.LAZY)
    private Set<User> user;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Set<Community> getCommunity() {
        return community;
    }

    public void addCommunity(Community community) {
        this.community.add(community);
        community.setCity(this);
    }

    public void removeCommunity(Community community) {
        this.community.remove(community);
        community.setCity(null);
    }

    public Set<User> getUser() {
        return user;
    }

    public void setUser(Set<User> user) {
        this.user = user;
    }
}
