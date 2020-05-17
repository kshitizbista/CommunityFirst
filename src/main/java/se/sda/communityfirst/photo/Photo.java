package se.sda.communityfirst.photo;

import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.GenericGenerator;
import org.hibernate.annotations.Type;
import se.sda.communityfirst.items.Item;

import javax.persistence.*;

@Entity
@Data
@NoArgsConstructor
@Table(name = "photos")
public class Photo {
    @Id
    @GeneratedValue(generator = "uuid")
    @GenericGenerator(name = "uuid", strategy = "uuid2")
    private String id;

    private String fileName;

    private String fileType;

    @Lob
    @Type(type = "org.hibernate.type.ImageType")
    private byte[] data;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "item_id")
    private Item item;

    public Photo(String fileName, String fileType, byte[] data, Item item) {
        this.fileName = fileName;
        this.fileType = fileType;
        this.data = data;
        this.item = item;
    }
}