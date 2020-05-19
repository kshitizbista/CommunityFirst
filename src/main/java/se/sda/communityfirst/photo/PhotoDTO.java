package se.sda.communityfirst.photo;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class PhotoDTO {
    private String fileName;
    private String fileDownloadUri;
    private String fileType;
}