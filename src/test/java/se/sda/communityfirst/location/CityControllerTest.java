package se.sda.communityfirst.location;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;

import java.util.HashSet;
import java.util.Set;

import static org.hamcrest.Matchers.equalTo;
import static org.hamcrest.Matchers.hasSize;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;

class CityControllerTest {

    @Mock
    CityService cityService;

    @InjectMocks
    CityController cityController;

    MockMvc mockMvc;

    @BeforeEach
    void setUp() {
        MockitoAnnotations.initMocks(this);
        mockMvc = MockMvcBuilders.standaloneSetup(cityController).build();
    }

    @Test
    void findAll() throws Exception {
        Set<City> cities = new HashSet<>();
        City stockholm = new City();
        stockholm.setName("Stockholm");

        Community taby = new Community();
        taby.setName("Taby");

        Community vallingby = new Community();
        vallingby.setName("Vallingby");

        stockholm.addCommunity(taby);
        stockholm.addCommunity(vallingby);

        cities.add(stockholm);

        when(cityController.findAll()).thenReturn(cities);
        mockMvc.perform(get(CityController.BASE_URL)
                .contentType(MediaType.APPLICATION_JSON))
                .andExpect(jsonPath("$[*]", hasSize(1)))
                .andExpect(jsonPath("$[0].name", equalTo("Stockholm")))
                .andExpect(jsonPath("$[0].community", hasSize(2)));
        verify(cityService).findAll();
    }
}
