package se.sda.communityfirst.items;


import org.springframework.stereotype.Service;
import se.sda.communityfirst.exception.ResourceNotFoundException;

import java.util.List;

@Service
public class ItemService {
    private ItemRepository itemRepository;

    public ItemService(ItemRepository postRepository) {
        this.itemRepository = postRepository;
    }

    public List<Item> getAll() {
        return itemRepository.findAll();
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
