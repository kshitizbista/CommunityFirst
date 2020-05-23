package se.sda.communityfirst.service;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Collection;
import java.util.List;

public interface AssistanceRepository extends JpaRepository<Assistance, Long> {
    List<Assistance> findAllByCommunityIdAndAssistanceTypeInAndTitleContainingIgnoreCaseOrderByIdDescPostedDateDesc(Long communityId, Collection<AssistanceType> assistanceTypes, String searchText);

    List<Assistance> findAllByUserIdAndAssistanceTypeInAndTitleContainingIgnoreCaseOrderByIdDescPostedDateDesc(Long userId, Collection<AssistanceType> assistanceTypes, String searchText);
}
