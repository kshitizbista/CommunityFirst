package se.sda.communityfirst.photo;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.GenericGenerator;
import se.sda.communityfirst.items.Item;
import se.sda.communityfirst.user.User;

import javax.persistence.*;

    @Entity
    @Data
    @AllArgsConstructor
    @NoArgsConstructor
    @Table(name = "photos")
    public class Photo {
        @Id
        @GeneratedValue(generator = "uuid")
        @GenericGenerator(name = "uuid", strategy = "uuid2")
        private String id;

        private String photoName;

        private String photoType;

        @Lob
        private byte[] data;

        @ManyToOne(fetch = FetchType.LAZY)
        @JoinColumn(name = "item_id")
        private Item item;

        public Photo(String photoName, String photoType, byte[] data) {
            this.photoName = photoName;
            this.photoType = photoType;
            this.data = data;
        }
    }



