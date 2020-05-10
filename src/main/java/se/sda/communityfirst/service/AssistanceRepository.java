package se.sda.communityfirst.service;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Collection;
import java.util.List;

public interface AssistanceRepository extends JpaRepository<Assistance, Long> {
    List<Assistance> findAllByCommunityIdAndAssistanceTypeInOrderByPostedDateDesc(Long id, Collection<AssistanceType> assistanceTypes);
}
