package se.sda.communityfirst.items;

import org.springframework.core.convert.converter.Converter;
import org.springframework.stereotype.Component;



@Component
public class ItemToItemDTO implements Converter<Item, ItemDTO> {
    @Override
    public ItemDTO convert(Item item) {
        if (item == null) {
            return null;
        }
        final ItemDTO itemDTO = new ItemDTO();
        itemDTO.setId(item.getId());
        itemDTO.setTitle(item.getTitle());
        itemDTO.setDescription(item.getDescription());
        itemDTO.setItemType(item.getItemType());
        itemDTO.setPostedDate(item.getPostedDate());
        itemDTO.setCommunityId(item.getCommunity().getId());
        if (item.getUser() != null) {
            itemDTO.setUserId(item.getUser().getId());
            itemDTO.setFirstname(item.getUser().getFirstname());
            itemDTO.setLastname(item.getUser().getLastname());
            itemDTO.setEmail(item.getUser().getEmail());
        }
        return itemDTO;
    }
}