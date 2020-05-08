package se.sda.communityfirst.location;

public class CityDTO {
    private Long id;
    private String name;

    public CityDTO(Long id, String name) {
        this.id = id;
        this.name = name;
    }

    public CityDTO() {
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
