package se.sda.communityfirst.photo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;
import org.springframework.web.multipart.MultipartFile;
import se.sda.communityfirst.exception.PhotoStorageException;
import se.sda.communityfirst.exception.PhotoNotFoundException;

import java.io.IOException;

@Service
public class PhotoStorageService {

    @Autowired
    private PhotoRepository photoRepository;

    public Photo storeFile(MultipartFile file) {
        // Normalize file name
        String fileName = StringUtils.cleanPath(file.getOriginalFilename());

        try {
            // Check if the file's name contains invalid characters
            if(fileName.contains("..")) {
                throw new PhotoStorageException("Sorry! Filename contains invalid path sequence " + fileName);
            }

            Photo photo = new Photo(fileName, file.getContentType(), file.getBytes());

            return photoRepository.save(photo);
        } catch (IOException ex) {
            throw new PhotoStorageException("Could not store photo " + fileName + ". Please try again!", ex);
        }
    }

    public Photo getFile(String fileId) {
        return photoRepository.findById(fileId)
                .orElseThrow(() -> new PhotoNotFoundException("Photo not found with id " + fileId));
    }
}