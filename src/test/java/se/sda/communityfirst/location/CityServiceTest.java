package se.sda.communityfirst.location;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.*;

public class CityServiceTest {

    @Mock
    CityRepository cityRepository;

    @Mock
    CommunityRepository communityRepository;

    private CityService cityService;

    @BeforeEach
    public void setUp() {
        MockitoAnnotations.initMocks(this);
        this.cityService = new CityService(cityRepository, communityRepository);
    }

    @Test
    public void findAllCitiesTest() {
        List<City> cities = new ArrayList<>();
        List<CityDTO> citiesDTO = new ArrayList<>();

        City stockholm = new City();
        stockholm.setName("Stockholm");

        City gothenberg = new City();
        gothenberg.setName("gothenberg");

        CityDTO stockholmDTO = new CityDTO();
        stockholm.setName("Stockholm");

        CityDTO gothenbergDTO = new CityDTO();
        gothenberg.setName("gothenberg");

        cities.add(stockholm);
        cities.add(gothenberg);

        citiesDTO.add(stockholmDTO);
        citiesDTO.add(gothenbergDTO);

        when(cityRepository.findAll()).thenReturn(cities);
        List<CityDTO> returnedCity = cityService.findAllCities();
        verify(cityRepository, times(1)).findAll();
        assertEquals(2, returnedCity.size());
    }

    @Test
    public void findCommunitiesByCityIdTest() {
        List<Community> communities = new ArrayList<>();
        List<CommunityDTO> communityDTOS = new ArrayList<>();

        Community vallingby = new Community();
        vallingby.setId(1L);
        vallingby.setName("Vallingby");

        CommunityDTO vallingbyDTO = new CommunityDTO();
        vallingbyDTO.setId(1L);
        vallingbyDTO.setName("Vallingby");

        communities.add(vallingby);
        communityDTOS.add(vallingbyDTO);

        when(communityRepository.findCommunitiesByCityIdOrderByNameAsc(anyLong())).thenReturn(communities);
        List<CommunityDTO> returnedCommunities = cityService.findCommunitiesByCityId(1L);
        verify(communityRepository, times(1)).findCommunitiesByCityIdOrderByNameAsc(anyLong());
        assertEquals(1, returnedCommunities.size());
    }

}
