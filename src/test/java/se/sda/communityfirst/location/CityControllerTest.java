package se.sda.communityfirst.location;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import static org.hamcrest.Matchers.hasSize;
import static org.mockito.ArgumentMatchers.anyLong;
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
    void findAllCities() throws Exception {
        Set<CityDTO> cities = new HashSet<>();
        CityDTO stockholm = new CityDTO();
        stockholm.setName("Stockholm");

        CityDTO gothenberg = new CityDTO();
        gothenberg.setName("Gothenberg");

        cities.add(stockholm);
        cities.add(gothenberg);

        when(cityController.findAllCities()).thenReturn(cities);
        mockMvc.perform(get(CityController.BASE_URL)
                .contentType(MediaType.APPLICATION_JSON))
                .andExpect(jsonPath("$[*]", hasSize(2)));
//                .andExpect(jsonPath("$[0].name", equalTo("Stockholm")));
        verify(cityService).findAllCities();
    }

    @Test
    void findAllCommunitiesByCityId() throws Exception {
        List<CommunityDTO> communityDTOS = new ArrayList<>();

        CommunityDTO vallingby = new CommunityDTO();
        vallingby.setName("Vallingby");

        CommunityDTO taby = new CommunityDTO();
        taby.setName("Gothenberg");

        communityDTOS.add(vallingby);
        communityDTOS.add(taby);

        when(cityController.findCommunitiesByCityId(anyLong())).thenReturn(communityDTOS);
        mockMvc.perform(get(CityController.BASE_URL + "/communities")
                .param("id", "1")
                .contentType(MediaType.APPLICATION_JSON))
                .andExpect(jsonPath("$[*]", hasSize(2)));
        verify(cityService).findCommunitiesByCityId(anyLong());
    }
}
