package se.sda.communityfirst.location;

import org.springframework.stereotype.Service;

import java.util.HashSet;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

@Service
public class CityService {

    private CityRepository cityRepository;
    private CommunityRepository communityRepository;

    public CityService(CityRepository cityRepository, CommunityRepository communityRepository) {
        this.cityRepository = cityRepository;
        this.communityRepository = communityRepository;
    }

    public Set<CityDTO> findAllCities() {
        Set<CityDTO> cities = new HashSet<>();
        cityRepository.findAll().forEach(city -> {
            CityDTO cityDTO = new CityDTO(city.getId(), city.getName());
            cities.add(cityDTO);
        });
        return cities;
    }

    public List<CommunityDTO> findCommunitiesByCityId(Long id) {
        return communityRepository.findCommunitiesByCityIdOrderByNameAsc(id).stream().map(community ->
                new CommunityDTO(community.getId(), community.getName())
        ).collect(Collectors.toList());
    }


}
