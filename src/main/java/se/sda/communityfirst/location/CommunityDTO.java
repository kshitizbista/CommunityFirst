package se.sda.communityfirst.location;

public class CommunityDTO {
    Long id;
    String name;

    public CommunityDTO(Long id, String name) {
        this.id = id;
        this.name = name;
    }

    public CommunityDTO() {
    }

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
}
