package se.sda.communityfirst.location;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Set;

@RestController
@RequestMapping(CityController.BASE_URL)
public class CityController {

    public static final String BASE_URL = "/cities";
    private CityService cityService;

    public CityController(CityService cityService) {
        this.cityService = cityService;
    }

    @GetMapping({"/", ""})
    public Set<CityDTO> findAllCities() {
        return cityService.findAllCities();
    }

    @GetMapping("/communities")
    public List<CommunityDTO> findCommunitiesByCityId(@RequestParam Long id) {
        return cityService.findCommunitiesByCityId(id);
    }

}
