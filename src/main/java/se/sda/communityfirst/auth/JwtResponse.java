package se.sda.communityfirst.auth;

import java.util.List;

public class JwtResponse {

    private Long userId;
    private String token;
    private String firstname;
    private String lastname;
    private String email;
    private List<String> roles;

    public JwtResponse(Long userId, String accessToken, String firstname, String lastname, String email, List<String> roles) {
        this.userId = userId;
        this.firstname = firstname;
        this.lastname = lastname;
        this.token = accessToken;
        this.email = email;
        this.roles = roles;
    }

    public Long getUserId() {
        return userId;
    }

    public void setUserId(Long userId) {
        this.userId = userId;
    }

    public String getToken() {
        return token;
    }

    public void setToken(String token) {
        this.token = token;
    }

    public String getFirstname() {
        return firstname;
    }

    public void setFirstname(String firstname) {
        this.firstname = firstname;
    }

    public String getLastname() {
        return lastname;
    }

    public void setLastname(String lastname) {
        this.lastname = lastname;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public List<String> getRoles() {
        return roles;
    }

    public void setRoles(List<String> roles) {
        this.roles = roles;
    }
}
