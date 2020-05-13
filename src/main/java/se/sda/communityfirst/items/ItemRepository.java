package se.sda.communityfirst.items;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Collection;
import java.util.List;

public interface ItemRepository extends JpaRepository<Item, Long> {
    List<Item> findAllByCommunityIdAndItemTypeInOrderByPostedDateDesc(Long communityId, Collection<ItemType> itemTypes);
    List<Item> findAllByUserIdAndItemTypeInOrderByPostedDateDesc(Long userId, Collection<ItemType> itemTypes);
    }


