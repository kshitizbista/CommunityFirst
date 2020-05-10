package se.sda.communityfirst.service;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import se.sda.communityfirst.exception.ResourceNotFoundException;
import se.sda.communityfirst.location.Community;
import se.sda.communityfirst.location.CommunityRepository;
import se.sda.communityfirst.user.User;
import se.sda.communityfirst.user.UserRepository;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class AssistanceService {
    private AssistanceRepository assistanceRepository;
    private UserRepository userRepository;
    private CommunityRepository communityRepository;
    private AssistanceDTOToAssistance dtoToAssistance;
    private AssistanceToAssistanceDTO assistanceToDTO;

    public AssistanceService(AssistanceRepository assistanceRepository,
                             UserRepository userRepository,
                             CommunityRepository communityRepository,
                             AssistanceToAssistanceDTO assistanceToDTO, AssistanceDTOToAssistance dtoToAssistance) {
        this.assistanceRepository = assistanceRepository;
        this.userRepository = userRepository;
        this.communityRepository = communityRepository;
        this.assistanceToDTO = assistanceToDTO;
        this.dtoToAssistance = dtoToAssistance;
    }

    public AssistanceDTO getByID(Long id) {
        Assistance assistance = assistanceRepository.findById(id).orElseThrow(ResourceNotFoundException::new);
        return assistanceToDTO.convert(assistance);
    }

    @Transactional
    public AssistanceDTO save(AssistanceDTO assistanceDTO) {
        Optional<User> user = this.userRepository.findById(assistanceDTO.getUserId());
        if (user.isEmpty()) {
            // todo handle exception
        }
        Optional<Community> community = this.communityRepository.findById(assistanceDTO.getCommunityId());

        if (community.isEmpty()) {
            // todo handle exception
        }

        Assistance assistance = dtoToAssistance.convert(assistanceDTO);
        community.get().addAssistance(assistance);
        assistance.setUser(user.get());
        Assistance savedAssistance = assistanceRepository.save(assistance);
        return assistanceToDTO.convert(savedAssistance);
    }

    public AssistanceDTO update(AssistanceDTO assistanceDTO) {
        return assistanceRepository.findById(assistanceDTO.getCommunityId()).map(assistance -> {
            if (assistanceDTO.getTitle() != null) {
                assistance.setTitle(assistanceDTO.getTitle());
            }
            if (assistanceDTO.getDescription() != null) {
                assistance.setDescription(assistanceDTO.getDescription());
            }
            return assistanceToDTO.convert(assistanceRepository.save(assistance));
        }).orElseThrow(ResourceNotFoundException::new);
    }

    public void deleteById(Long id) {
        assistanceRepository.deleteById(id);
    }

    @Transactional
    public List<AssistanceDTO> findAllByCommunityIdAndAssistanceTypeIn(Long id, List<AssistanceType> assistanceTypes) {
        return assistanceRepository.findAllByCommunityIdAndAssistanceTypeInOrderByPostedDateDesc(id, assistanceTypes).stream().map(assistance ->
                assistanceToDTO.convert(assistance)).collect(Collectors.toList());
    }
}
