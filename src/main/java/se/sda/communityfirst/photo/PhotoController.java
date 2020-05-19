package se.sda.communityfirst.photo;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.ByteArrayResource;
import org.springframework.core.io.Resource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping(PhotoController.BASE_URL)
public class PhotoController {

    public static final String BASE_URL = "/photos";
    private static final Logger logger = LoggerFactory.getLogger(PhotoController.class);

    @Autowired
    private PhotoStorageService photoStorageService;

    @PostMapping()
    public PhotoDTO uploadFile(@RequestParam Long itemId, @RequestParam("file") MultipartFile file) {
        Photo photo = photoStorageService.storeFile(itemId, file);

        String fileDownloadUri = ServletUriComponentsBuilder.fromCurrentContextPath()
                .path(photo.getId())
                .toUriString();

        return new PhotoDTO(photo.getFileName(), fileDownloadUri, photo.getFileType());
    }

    @PostMapping("/multiple")
    public List<PhotoDTO> uploadMultipleFiles(@RequestParam Long itemId, @RequestParam("files") MultipartFile[] files) {
        return Arrays.asList(files)
                .stream()
                .map(file -> uploadFile(itemId, file))
                .collect(Collectors.toList());
    }

    @GetMapping("/{photoId}")
    public ResponseEntity<Resource> downloadFile(@PathVariable String photoId) {
        // Load file from database
        Photo photo = photoStorageService.getFile(photoId);

        return ResponseEntity.ok()
                .contentType(MediaType.parseMediaType(photo.getFileType()))
                .header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=\"" + photo.getFileName() + "\"")
                .body(new ByteArrayResource(photo.getData()));
    }

    @GetMapping
    public List<PhotoDTO> downloadPhoto(@RequestParam Long itemId){
        List<Photo> photoList = photoStorageService.getPhotoByItem(itemId);

        List<PhotoDTO> photoDTOList = new ArrayList<>();
        for(Photo photo : photoList){
            String photoDownloadUri = ServletUriComponentsBuilder.fromCurrentContextPath()
                    .path(photo.getId())
                    .toUriString();

            photoDTOList.add(new PhotoDTO(photo.getFileName(), photoDownloadUri, photo.getFileType()));
        }

        return photoDTOList;
    }
}
