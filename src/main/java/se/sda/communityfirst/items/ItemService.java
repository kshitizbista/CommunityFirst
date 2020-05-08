package se.sda.communityfirst.items;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import se.sda.communityfirst.exception.ResourceNotFoundException;
import se.sda.communityfirst.location.CommunityDTO;

import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Service
public class ItemService {
    @Autowired
    private ItemRepository itemRepository;

    public ItemService(ItemRepository itemRepository) {
        this.itemRepository = itemRepository;
    }

    public List<Item> getAll(Integer pageNo, String sortKey) {
        int noOfRecords = 10;

        Pageable page = PageRequest.of(pageNo, noOfRecords, Sort.by(sortKey));
        Page<Item> pagedResult = itemRepository.findAll(page);
        // changing to List
        return pagedResult.getContent();
    }

    public Item getByID(Long id) {
        return itemRepository.findById(id).orElseThrow(ResourceNotFoundException::new);
    }

    public Item save(Item post) {
        return itemRepository.save(post);
    }

    public Item update(Item post) {
        if (getByID(post.getId()) != null) {
            return itemRepository.save(post);
        } else {
            return null;
        }
    }

    public void deleteById(Long id) {
        itemRepository.deleteById(id);
    }
}

