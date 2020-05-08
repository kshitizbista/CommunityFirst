package se.sda.communityfirst.service;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;

import java.util.ArrayList;
import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.BDDMockito.given;

public class AssistanceServiceTest {
    @Mock
    AssistanceRepository assistanceRepository;

    private AssistanceService assistanceService;

    @BeforeEach
    public void setUp() {
        MockitoAnnotations.initMocks(this);
        this.assistanceService = new AssistanceService(assistanceRepository);
    }
    @Test
    void getAll() {
        List<Assistance> services = new ArrayList<>();

        Assistance shoppingService = new Assistance();
        shoppingService.setId(1L);
        shoppingService.setTitle("Foo");
        shoppingService.setDescription("Lorem ipsum");
        shoppingService.setOffering(true);
        shoppingService.setUserId(1L);
        shoppingService.setCommunityId(1L);

        services.add(shoppingService);

        given(assistanceRepository.findAll()).willReturn(services);
        List<Assistance> expected = assistanceService.getAll();
        assertEquals(expected, services);
    }

}
