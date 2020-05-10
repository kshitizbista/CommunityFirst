package se.sda.communityfirst.itemresponses;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ItemResponseRepository extends JpaRepository<ItemResponse, Long> {
    List<ItemResponse> findAllByItemId(Long itemId);
}
