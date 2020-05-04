package se.sda.communityfirst.location;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;

import java.util.HashSet;
import java.util.Set;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.*;

public class CityServiceTest {

    @Mock
    CityRepository cityRepository;

    private CityService cityService;

    @BeforeEach
    public void setUp() {
        MockitoAnnotations.initMocks(this);
        this.cityService = new CityService(cityRepository);
    }

    @Test
    public void findAllTest() {
        Set<City> cities = new HashSet<>();

        City stockholm = new City();
        stockholm.setName("Stockholm");

        Community taby = new Community();
        taby.setName("Taby");

        Community vallingby = new Community();
        vallingby.setName("Vallingby");

        stockholm.addCommunity(taby);
        stockholm.addCommunity(vallingby);

        City gothenberg = new City();
        gothenberg.setName("gothenberg");

        cities.add(stockholm);
        cities.add(gothenberg);

        when(cityRepository.findAll()).thenReturn(cities);
        Set<City> savedCity = cityService.findAll();
        verify(cityRepository, times(1)).findAll();
        assertEquals(2, savedCity.size());
        savedCity.stream().forEach(city -> {
            if(city.getName().equals("Stockholm")) {
                assertEquals(2, city.getCommunity().size());
            }
        });
    }

}
