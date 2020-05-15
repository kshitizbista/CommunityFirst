package se.sda.communityfirst.location;

import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class CityService {

    private CityRepository cityRepository;
    private CommunityRepository communityRepository;

    public CityService(CityRepository cityRepository, CommunityRepository communityRepository) {
        this.cityRepository = cityRepository;
        this.communityRepository = communityRepository;
    }

    public List<CityDTO> findAllCities() {
        return cityRepository.findAllByOrderByName().stream().map(city -> new CityDTO(city.getId(), city.getName()))
                .collect(Collectors.toList());
    }

    public List<CommunityDTO> findCommunitiesByCityId(Long id) {
        return communityRepository.findCommunitiesByCityIdOrderByNameAsc(id).stream().map(community ->
                new CommunityDTO(community.getId(), community.getName())
        ).collect(Collectors.toList());
    }


}
