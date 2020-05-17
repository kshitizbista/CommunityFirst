package se.sda.communityfirst.photo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;
import org.springframework.web.multipart.MultipartFile;
import se.sda.communityfirst.exception.PhotoStorageException;
import se.sda.communityfirst.exception.PhotoNotFoundException;
import se.sda.communityfirst.items.Item;
import se.sda.communityfirst.items.ItemRepository;

import java.io.IOException;
import java.util.List;

@Service
public class PhotoStorageService {

    private PhotoRepository photoRepository;
    private ItemRepository itemRepository;

    public PhotoStorageService(PhotoRepository photoRepository, ItemRepository itemRepository) {
        this.photoRepository = photoRepository;
        this.itemRepository = itemRepository;
    }

    public Photo storeFile(Long itemId, MultipartFile file) {
        // Normalize file name
        String fileName = StringUtils.cleanPath(file.getOriginalFilename());

        try {
            // Check if the file's name contains invalid characters
            if(fileName.contains("..")) {
                throw new PhotoStorageException("Sorry! Filename contains invalid path sequence " + fileName);
            }

            Item item = itemRepository.getOne(itemId);
            Photo photo = new Photo(fileName, file.getContentType(), file.getBytes(), item);

            return photoRepository.save(photo);
        } catch (IOException ex) {
            throw new PhotoStorageException("Could not store photo " + fileName + ". Please try again!", ex);
        }
    }

    public Photo getFile(String fileId) {
        return photoRepository.findById(fileId)
                .orElseThrow(() -> new PhotoNotFoundException("Photo not found with id " + fileId));
    }

    public List<Photo> getPhotoByItem(Long itemId){
        return photoRepository.findByItemId(itemId);
    }
}