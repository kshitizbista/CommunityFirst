package se.sda.communityfirst.items;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Collection;
import java.util.List;

public interface ItemRepository extends JpaRepository<Item, Long> {
    List<Item> findAllByCommunityIdAndItemTypeInAndTitleContainingIgnoreCaseOrderByIdDescPostedDateDesc(Long communityId, Collection<ItemType> itemTypes, String searchText);

    List<Item> findAllByUserIdAndItemTypeInAndTitleContainingIgnoreCaseOrderByIdDescPostedDateDesc(Long userId, Collection<ItemType> itemTypes, String searchText);
}


