package se.sda.communityfirst.itemresponses;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import se.sda.communityfirst.exception.ResourceNotFoundException;
import se.sda.communityfirst.items.*;

import java.util.List;
import java.util.Optional;

@Service
public class ItemResponseService {

    private ItemResponseRepository commentRepository;
    private ItemRepository postRepository;

    public ItemResponseService(ItemResponseRepository commentRepository, ItemRepository postRepository) {
        this.commentRepository = commentRepository;
        this.postRepository = postRepository;
    }

    public ItemResponse save(Long postId, ItemResponse comment) {
        Optional<Item> optionalPost = postRepository.findById(postId);
        if (optionalPost.isEmpty()) {
            throw new ResourceNotFoundException("Post with Id" + postId + "not found");
        } else {
            Item post = optionalPost.get();
            post.addItemResponse(comment);
            return commentRepository.save(comment);
        }
    }

    @Transactional
    public ItemResponse update(Long postId, ItemResponse comment) {
        Optional<Item> optionalPost = postRepository.findById(postId);
        Item post = optionalPost.get();
        Optional<ItemResponse> optionalComment = post.getItemReponses().stream().filter(val -> val.getId() == comment.getId()).findFirst();

        if (optionalComment.isEmpty()) {
            throw new ResourceNotFoundException("Comment with id" + comment.getId() + "not found");
        }
        optionalComment.get().setBody(comment.getBody());
        return commentRepository.save(optionalComment.get());
    }

    public void deleteById(Long commentId) {
        commentRepository.deleteById(commentId);
    }

    @Transactional
    public List<ItemResponse> findAllByItemId(Long itemId) {
        return commentRepository.findAllByItemId(itemId);
    }
}
