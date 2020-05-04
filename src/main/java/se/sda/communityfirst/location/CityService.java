package se.sda.communityfirst.location;

import org.springframework.stereotype.Service;

import java.util.HashSet;
import java.util.Set;

@Service
public class CityService {

    private CityRepository cityRepository;

    public CityService(CityRepository cityRepository) {
        this.cityRepository = cityRepository;
    }

    public Set<City> findAll() {
        Set<City> cities = new HashSet<>();
        cityRepository.findAll().forEach(cities::add);
        return cities;
    }


}
