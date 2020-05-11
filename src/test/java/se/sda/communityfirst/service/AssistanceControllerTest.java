package se.sda.communityfirst.service;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;
import se.sda.communityfirst.location.Community;
import se.sda.communityfirst.user.User;

import java.util.ArrayList;
import java.util.List;

import static org.hamcrest.Matchers.*;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;

public class AssistanceControllerTest {
    @Mock
    AssistanceService assistanceService;

    @InjectMocks
    AssistanceController assistanceController;

    MockMvc mockMvc;

    @BeforeEach
    void setUp() {
        MockitoAnnotations.initMocks(this);
        mockMvc = MockMvcBuilders.standaloneSetup(assistanceController).build();
    }

//    @Test
//    void getAll() throws Exception {
//        List<Assistance> services = new ArrayList<>();
//
//        Assistance shoppingService = new Assistance();
//        shoppingService.setId(1L);
//        shoppingService.setTitle("Foo");
//        shoppingService.setDescription("Lorem ipsum");
////        shoppingService.setOffering(true);
//
//        User user = new User();
//        user.setId(1L);
//        shoppingService.setUser(user);
//
//        Community taby = new Community();
//        taby.setId(1L);
////        shoppingService.setCommunity(taby);
//
//        services.add(shoppingService);
//
//        when(assistanceService.getAll()).thenReturn(services);
//        mockMvc.perform(get(AssistanceController.BASE_URL)
//                .contentType(MediaType.APPLICATION_JSON))
//                .andExpect(jsonPath("$[*]", hasSize(1)))
//                .andExpect(jsonPath("$[0].id", is (1)))
//                .andExpect(jsonPath("$[0].title", equalTo("Foo")))
//                .andExpect(jsonPath("$[0].description", equalTo("Lorem ipsum")))
//                .andExpect(jsonPath("$[0].offering", is(true)))
//                .andExpect(jsonPath("$[0].user.id", is (1)))
//                .andExpect(jsonPath("$[0].community.id", is (1)));
//        verify(assistanceService).getAll();
//    }



}
