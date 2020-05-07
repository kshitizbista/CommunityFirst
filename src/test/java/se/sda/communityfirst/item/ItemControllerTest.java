package se.sda.communityfirst.item;

import com.fasterxml.jackson.databind.ObjectMapper;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.MvcResult;
import org.springframework.test.web.servlet.ResultActions;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;
import se.sda.communityfirst.items.Item;
import se.sda.communityfirst.items.ItemController;
import se.sda.communityfirst.items.ItemRepository;
import se.sda.communityfirst.items.ItemService;
import se.sda.communityfirst.location.Community;
import se.sda.communityfirst.user.User;

import static org.assertj.core.api.Assertions.assertThat;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.BDDMockito.given;
import static org.mockito.Mockito.*;
import static org.springframework.test.web.client.match.MockRestRequestMatchers.content;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;

import java.util.ArrayList;
import java.util.List;

import static org.hamcrest.Matchers.*;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

public class ItemControllerTest {
    @Mock
    ItemService itemService;

    @InjectMocks
    ItemController itemController;

    MockMvc mockMvc;

    @BeforeEach
    void setUp() {
        MockitoAnnotations.initMocks(this);
        mockMvc = MockMvcBuilders.standaloneSetup(itemController).build();
    }

    @Test
    void getAll() throws Exception {
        List<Item> items = new ArrayList<>();

        Item dress = new Item();
        dress.setId(1L);
        dress.setTitle("Foo");
        dress.setText("Lorem ipsum");
        dress.setOffering(true);

        User user = new User();
        user.setId(1L);
        dress.setUser(user);

        Community taby = new Community();
        taby.setId(1L);
        dress.setCommunity(taby);

        items.add(dress);

        when(itemService.getAll()).thenReturn(items);
        mockMvc.perform(get(ItemController.BASE_URL)
                .contentType(MediaType.APPLICATION_JSON))
                .andExpect(jsonPath("$[*]", hasSize(1)))
                .andExpect(jsonPath("$[0].id", is (1)))
                .andExpect(jsonPath("$[0].title", equalTo("Foo")))
                .andExpect(jsonPath("$[0].text", equalTo("Lorem ipsum")))
                .andExpect(jsonPath("$[0].offering", is(true)))
                .andExpect(jsonPath("$[0].user.id", is (1)))
                .andExpect(jsonPath("$[0].community.id", is (1)));
        verify(itemService).getAll();
    }

    @Test
    void getByID() throws Exception {
        List<Item> items = new ArrayList<>();

        Item dress = new Item();
        dress.setId(1L);
        dress.setTitle("Foo");
        dress.setText("Lorem ipsum");
        dress.setOffering(true);

        User user = new User();
        user.setId(1L);
        dress.setUser(user);

        Community taby = new Community();
        taby.setId(1L);
        dress.setCommunity(taby);

        items.add(dress);

        when(itemService.getByID(1L)).thenReturn(dress);

        Item item = itemController.getByID(1L);
        verify(itemService).getByID(1L);
        assertEquals(1l, item.getId().longValue());
    }

    @Test
    void save() throws Exception {
        List<Item> items = new ArrayList<>();

        Item dress = new Item();
        dress.setId(1L);
        dress.setTitle("Foo");
        dress.setText("Lorem ipsum");
        dress.setOffering(true);

        User user = new User();
        user.setId(1L);
        dress.setUser(user);

        Community taby = new Community();
        taby.setId(1L);
        dress.setCommunity(taby);

        items.add(dress);

        when(itemService.save(dress)).thenReturn(dress);

        Item item = itemController.save(dress);
        verify(itemService).save(dress);
        assertEquals(1l, item.getId());

    }

}
