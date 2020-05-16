package se.sda.communityfirst.service;

import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping(AssistanceController.BASE_URL)
public class AssistanceController {

    public static final String BASE_URL = "/services";
    private AssistanceService assistanceService;

    public AssistanceController(AssistanceService assistanceService) {
        this.assistanceService = assistanceService;
    }

    @GetMapping("/{id}")
    public AssistanceDTO getByID(@PathVariable Long id) {
        return assistanceService.getByID(id);
    }

    @PostMapping("/create")
    public AssistanceDTO save(@RequestBody @Valid AssistanceDTO assistanceDTO) {
        return assistanceService.save(assistanceDTO);
    }

    @PutMapping
    public AssistanceDTO update(@RequestBody AssistanceDTO assistanceDTO) {
        return assistanceService.update(assistanceDTO);
    }

    @DeleteMapping("/{id}")
    public void deleteById(@PathVariable Long id) {
        assistanceService.deleteById(id);
    }

    @PostMapping(params = "communityId")
    public List<AssistanceDTO> findAllByCommunityIdAndAssistanceTypeIn(@RequestParam Long communityId, @RequestBody Map<String, List<AssistanceType>> map, @RequestParam String searchText) {
        return assistanceService.performFilter(assistanceService.findAllByCommunityIdAndAssistanceTypeIn(communityId, map.get("assistanceTypes")),searchText);
    }

    @PostMapping(params = "userId")
    public List<AssistanceDTO> findAllByUserIdAndAssistanceTypeInOrderByIdDescPostedDateDesc(@RequestParam Long userId, @RequestBody Map<String, List<AssistanceType>> map) {
        return assistanceService.findAllByUserIdAndAssistanceTypeInOrderByIdDescPostedDateDesc(userId, map.get("assistanceTypes"));
    }
}
