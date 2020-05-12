package se.sda.communityfirst.items;


import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import se.sda.communityfirst.exception.ResourceNotFoundException;
import se.sda.communityfirst.location.Community;
import se.sda.communityfirst.location.CommunityRepository;
import se.sda.communityfirst.user.User;
import se.sda.communityfirst.user.UserRepository;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class ItemService {
    private ItemRepository itemRepository;

    private UserRepository userRepository;
    private CommunityRepository communityRepository;
    private ItemDTOToItem dtoToItem;
    private ItemToItemDTO itemToDTO;

    public ItemService(ItemRepository itemRepository,
                             UserRepository userRepository,
                             CommunityRepository communityRepository,
                             ItemToItemDTO itemToDTO, ItemDTOToItem dtoToItem) {
        this.itemRepository = itemRepository;
        this.userRepository = userRepository;
        this.communityRepository = communityRepository;
        this.itemToDTO = itemToDTO;
        this.dtoToItem = dtoToItem;
    }

    public ItemDTO getByID(Long id) {
        Item item = itemRepository.findById(id).get();
        return itemToDTO.convert(item);
    }

    @Transactional
    public ItemDTO save(ItemDTO itemDTO) {
        Optional<User> user = this.userRepository.findById(itemDTO.getUserId());
        if (user.isEmpty()) {
            // todo handle exception
        }
        Optional<Community> community = this.communityRepository.findById(itemDTO.getCommunityId());

        if (community.isEmpty()) {
            // todo handle exception
        }

        Item item = dtoToItem.convert(itemDTO);
        community.get().addItem(item);
        item.setUser(user.get());
        Item savedItem = itemRepository.save(item);
        return itemToDTO.convert(savedItem);
    }

    public ItemDTO update(ItemDTO itemDTO) {
        return itemRepository.findById(itemDTO.getId()).map(item -> {
            if (itemDTO.getTitle() != null) {
                item.setTitle(itemDTO.getTitle());
            }
            if (itemDTO.getDescription() != null) {
                item.setDescription(itemDTO.getDescription());
            }
            return itemToDTO.convert(itemRepository.save(item));
        }).orElseThrow(ResourceNotFoundException::new);
    }

    public void deleteById(Long id) {
        itemRepository.deleteById(id);
    }

    @Transactional
    public List<ItemDTO> findAllByUserIdOrderByPostedDateDesc(Long userId, List<ItemType> itemTypes) {
        return itemRepository.findAllByUserIdAndItemTypeInOrderByPostedDateDesc(userId, itemTypes).stream().map(item ->
                itemToDTO.convert(item)).collect(Collectors.toList());
    }

    @Transactional
    public List<ItemDTO> findAllByCommunityIdAndItemTypeIn(Long communityId, List<ItemType> itemTypes) {
        return itemRepository.findAllByCommunityIdAndItemTypeInOrderByPostedDateDesc(communityId, itemTypes).stream().map(item ->
                itemToDTO.convert(item)).collect(Collectors.toList());
    }


}
