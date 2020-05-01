package se.sda.communityfirst.common.model;

import com.fasterxml.jackson.annotation.JsonInclude;

@JsonInclude(JsonInclude.Include.NON_NULL)
public class MessageResponse<T> {
    /*
        message can be either success message, error message, or warning!
     */
    private T message;

    public MessageResponse(T message) {
        this.message = message;
    }

    public T getMessage() {
        return message;
    }

    public void setMessage(T message) {
        this.message = message;
    }
}


