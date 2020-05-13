package se.sda.communityfirst.items;

import org.springframework.core.convert.converter.Converter;
import org.springframework.stereotype.Component;


@Component
public class ItemDTOToItem implements Converter<ItemDTO, Item> {

    @Override
    public Item convert(ItemDTO itemDTO) {
        if (itemDTO == null) {
            return null;
        }

        final Item item = new Item();
        item.setId(itemDTO.getId());
        item.setTitle(itemDTO.getTitle());
        item.setDescription(itemDTO.getDescription());
        item.setItemType(itemDTO.getItemType());
        item.setPostedDate(itemDTO.getPostedDate());
        return item;
    }
}