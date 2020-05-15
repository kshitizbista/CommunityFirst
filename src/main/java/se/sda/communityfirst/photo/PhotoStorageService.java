package se.sda.communityfirst.photo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.util.StringUtils;
import org.springframework.web.multipart.MultipartFile;
import se.sda.communityfirst.exception.FileStorageException;
import se.sda.communityfirst.exception.MyFileNotFoundException;

import java.io.IOException;

public class PhotoStorageService {


    @Autowired
    private PhotoRepository dbPhotoRepository;

    public Photo storePhoto(MultipartFile file) {
        // Normalize file name
        String photoName = StringUtils.cleanPath(file.getOriginalFilename());

        try {
            // Check if the file's name contains invalid characters
            if(photoName.contains("..")) {
                throw new FileStorageException("Sorry! Filename contains invalid path sequence " + photoName);
            }

            Photo dbPhoto = new Photo(photoName, file.getContentType(), file.getBytes());

            return dbPhotoRepository.save(dbPhoto);
        } catch (IOException ex) {
            throw new FileStorageException("Could not store file " + photoName + ". Please try again!", ex);
        }
    }

    public Photo getPhoto(String photoId) {
        return dbPhotoRepository.findById(photoId)
                .orElseThrow(() -> new MyFileNotFoundException("File not found with id " + photoId));
    }
}
