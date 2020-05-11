package se.sda.communityfirst.items;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@RequestMapping(ItemController.BASE_URL)

public class ItemController {

    public static final String BASE_URL = "/items";
    private ItemService itemService;

    public ItemController(ItemService itemService) {
        this.itemService = itemService;
    }

    @GetMapping()
    public List<Item> getAll() {
        return itemService.getAll();
    }

    @GetMapping("/{id}")
    public Item getByID(@PathVariable Long id) {
        return itemService.getByID(id);
    }

    @PostMapping()
    public Item save(@RequestBody Item item) {
        return itemService.save(item);
    }

    @PutMapping
    public Item update(@RequestBody Item item) {
        return itemService.update(item);
    }

    @DeleteMapping("/{id}")
    public void deleteById(@PathVariable Long id) {
        itemService.deleteById(id);
    }

}
