package se.sda.communityfirst.service;

import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("services")
public class AssistanceController {

    public static final String BASE_URL = "/services";
    private AssistanceService assistanceService;

    public AssistanceController(AssistanceService assistanceService) {
        this.assistanceService = assistanceService;
    }

    @GetMapping()
    public List<Assistance> getAll() {
        return assistanceService.getAll();
    }

    @GetMapping("/{id}")
    public Assistance getByID(@PathVariable Long id) {
        return assistanceService.getByID(id);
    }

    @PostMapping()
    public Assistance save(@RequestBody Assistance assistance) {
        return assistanceService.save(assistance);
    }

    @PutMapping
    public Assistance update(@RequestBody Assistance assistance) {
        return assistanceService.update(assistance);
    }

    @DeleteMapping("/{id}")
    public void deleteById(@PathVariable Long id) {
        assistanceService.deleteById(id);
    }
}
