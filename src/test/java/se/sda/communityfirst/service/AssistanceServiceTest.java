package se.sda.communityfirst.service;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import se.sda.communityfirst.location.CommunityRepository;
import se.sda.communityfirst.user.UserRepository;

public class AssistanceServiceTest {

    @Mock
    AssistanceRepository assistanceRepository;

    @Mock
    private UserRepository userRepository;

    @Mock
    private CommunityRepository communityRepository;

    @Mock
    private AssistanceDTOToAssistance dtoToAssistance;

    @Mock
    private AssistanceToAssistanceDTO assistanceToDTO;

    private AssistanceService assistanceService;

    @BeforeEach
    public void setUp() {
        MockitoAnnotations.initMocks(this);
        this.assistanceService = new AssistanceService(
                assistanceRepository,
                userRepository,
                communityRepository,
                assistanceToDTO,
                dtoToAssistance);
    }

    @Test
    void getByID() {
    }

    @Test
    void save() {
    }

    @Test
    void update() {
    }

    @Test
    void deleteById() {
    }

    @Test
    void findAllByCommunityIdAndAssistanceTypeIn() {
    }
}
