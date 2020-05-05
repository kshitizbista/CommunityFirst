package se.sda.communityfirst.service;

import org.springframework.stereotype.Service;
import se.sda.communityfirst.exception.ResourceNotFoundException;

import java.util.List;

@Service
public class AssistanceService {
    private AssistanceRepository assistanceRepository;

    public AssistanceService(AssistanceRepository assistanceRepository) {
        this.assistanceRepository = assistanceRepository;
    }

    public List<Assistance> getAll() {
        return assistanceRepository.findAll();
    }

    public Assistance getByID(Long id) {
        return assistanceRepository.findById(id).orElseThrow(ResourceNotFoundException::new);
    }

    public Assistance save(Assistance post) {
        return assistanceRepository.save(post);
    }

    public Assistance update(Assistance post) {
        if (getByID(post.getId()) != null) {
            return assistanceRepository.save(post);
        } else {
            return null;
        }
    }

    public void deleteById(Long id) {
        assistanceRepository.deleteById(id);
    }

}
