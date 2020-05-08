package se.sda.communityfirst.items;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@RequestMapping("/items")

public class ItemController {

    @Autowired
    private ItemService itemService;

    public ItemController(ItemService itemService) {
        this.itemService = itemService;
    }


    @GetMapping("")
    public List<Item> getAll(@RequestParam(value="pageNo", defaultValue="0") Integer pageNo,
                                          @RequestParam(value="sortKey", defaultValue="title") String sortKey)
    {
        return itemService.getAll(pageNo, sortKey);
    }

    @GetMapping("/{id}")
    public Item getByID(@PathVariable Long id) {
        return itemService.getByID(id);
    }

    @PostMapping("")
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
