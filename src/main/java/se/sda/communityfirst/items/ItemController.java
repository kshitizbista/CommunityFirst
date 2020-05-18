package se.sda.communityfirst.items;

import org.springframework.web.bind.annotation.*;
import se.sda.communityfirst.service.AssistanceDTO;
import se.sda.communityfirst.service.AssistanceService;
import se.sda.communityfirst.service.AssistanceType;

import javax.validation.Valid;
import java.util.List;
import java.util.Map;


@RestController
@RequestMapping(ItemController.BASE_URL)

public class ItemController {

    public static final String BASE_URL = "/items";
    private ItemService itemService;

    public ItemController(ItemService itemService) {
        this.itemService = itemService;
    }

    @GetMapping("/{id}")
    public ItemDTO getByID(@PathVariable Long id) {
        return itemService.getByID(id);
    }

    @PostMapping("/create")
    public ItemDTO save(@RequestBody @Valid ItemDTO itemDTO) {
        return itemService.save(itemDTO);
    }

    @PutMapping
    public ItemDTO update(@RequestBody ItemDTO itemDTO) {
        return itemService.update(itemDTO);
    }

    @DeleteMapping("/{id}")
    public void deleteById(@PathVariable Long id) {
        itemService.deleteById(id);
    }

    @PostMapping(params = "communityId")
    public List<ItemDTO> findAllByCommunityIdAndItemTypeIn(@RequestParam Long communityId, @RequestBody Map<String, List<ItemType>> map, @RequestParam String searchText) {
        return itemService.performFilter(itemService.findAllByCommunityIdAndItemTypeIn(communityId, map.get("itemTypes")), searchText);
    }

    @PostMapping(params = "userId")
    public List<ItemDTO> findAllByUserIdOrderByPostedDateDesc(@RequestParam Long userId, @RequestBody Map<String, List<ItemType>> map, @RequestParam String searchText) {
        return itemService.performFilter(itemService.findAllByUserIdOrderByPostedDateDesc(userId, map.get("itemTypes")),searchText);
    }

}
