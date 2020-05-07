package se.sda.communityfirst.item;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import se.sda.communityfirst.items.Item;
import se.sda.communityfirst.items.ItemRepository;
import se.sda.communityfirst.items.ItemService;
import se.sda.communityfirst.location.Community;
import se.sda.communityfirst.user.User;

import java.util.ArrayList;
import java.util.List;

import static org.assertj.core.api.Assertions.assertThat;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.BDDMockito.given;

public class ItemServiceTest {
    @Mock
    ItemRepository itemRepository;

    private ItemService itemService;

    @BeforeEach
    public void setUp() {
        MockitoAnnotations.initMocks(this);
        this.itemService = new ItemService(itemRepository);
    }
    @Test
    void getAll() throws Exception {
        List<Item> items = new ArrayList<>();

        Item dress = new Item();
        dress.setId(1L);
        dress.setTitle("Foo");
        dress.setDescription("Lorem ipsum");
        dress.setOffering(true);

        User user = new User();
        user.setId(1L);
        dress.setUser(user);

        Community taby = new Community();
        taby.setId(1L);
        dress.setCommunity(taby);

        items.add(dress);

        given(itemRepository.findAll()).willReturn(items);
        List<Item> expected = itemService.getAll();
        assertEquals(expected, items);
    }
    @Test
    void save() throws Exception {
        List<Item> items = new ArrayList<>();

        Item dress = new Item();
        dress.setId(1L);
        dress.setTitle("Foo");
        dress.setDescription("Lorem ipsum");
        dress.setOffering(true);

        User user = new User();
        user.setId(1L);
        dress.setUser(user);

        Community taby = new Community();
        taby.setId(1L);
        dress.setCommunity(taby);

        items.add(dress);

        given(itemRepository.save(dress)).willReturn(dress);
        Item expected = itemService.save(dress);
        assertThat(expected).isNotNull();
        assertEquals(expected, dress);
    }
}
