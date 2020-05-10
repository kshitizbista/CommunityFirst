package se.sda.communityfirst.itemresponses;

import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("comments")
public class ItemResponseController {

    private ItemResponseService commentService;

    public ItemResponseController(ItemResponseService commentService) {
        this.commentService = commentService;
    }

    @PostMapping
    public ItemResponse save(@RequestParam Long itemId, @RequestBody ItemResponse comment) {
        return commentService.save(itemId, comment);
    }

    @GetMapping
    public List<ItemResponse> findAllByItemId(@RequestParam Long itemId) {
        return commentService.findAllByItemId(itemId);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id) {
        commentService.deleteById(id);
    }

    @PutMapping
    public ItemResponse update(@RequestParam Long itemId, @RequestBody ItemResponse comment) {
        return commentService.update(itemId, comment);
    }
}
