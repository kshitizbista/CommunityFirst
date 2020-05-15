package se.sda.communityfirst.location;

import org.springframework.stereotype.Service;

import java.util.HashSet;
import java.util.Set;

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

    public Set<CommunityDTO> findCommunitiesByCityId(Long id) {
        Set<CommunityDTO> communities = new HashSet<>();
        communityRepository.findCommunitiesByCityIdOrderByNameAsc(id).forEach(community -> {
            CommunityDTO communityDTO = new CommunityDTO(community.getId(), community.getName());
            communities.add(communityDTO);
        });
        return communities;
    }


}
