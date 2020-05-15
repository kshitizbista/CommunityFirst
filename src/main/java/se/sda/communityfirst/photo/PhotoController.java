package se.sda.communityfirst.photo;

import org.springframework.web.bind.annotation.RestController;
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

import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;
@RestController
public class PhotoController {
    private static final Logger logger = LoggerFactory.getLogger(PhotoController.class);

    @Autowired
    private PhotoStorageService dbPhotoStorageService;

    @PostMapping("/uploadFile")
    public UploadPhotoResponse uploadFile(@RequestParam("file") MultipartFile file) {
        Photo dbFile = dbPhotoStorageService.storePhoto(file);

        String photoDownloadUri = ServletUriComponentsBuilder.fromCurrentContextPath()
                .path("/downloadFile/")
                .path(dbFile.getId())
                .toUriString();

        return new UploadPhotoResponse(dbFile.getPhotoName(), photoDownloadUri,
                file.getContentType(), file.getSize());
    }

    @PostMapping("/uploadMultipleFiles")
    public List<UploadFileResponse> uploadMultipleFiles(@RequestParam("files") MultipartFile[] files) {
        return Arrays.asList(files)
                .stream()
                .map(file -> uploadFile(file))
                .collect(Collectors.toList());
    }

    @GetMapping("/downloadFile/{fileId}")
    public ResponseEntity<Resource> downloadFile(@PathVariable String photoId) {
        // Load file from database
        Photo dbPhoto = dbPhotoStorageService.getPhoto(photoId);

        return ResponseEntity.ok()
                .contentType(MediaType.parseMediaType(dbPhoto.getPhotoType()))
                .header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=\"" + dbPhoto.getPhotoName() + "\"")
                .body(new ByteArrayResource(dbPhoto.getData()));
    }
}
