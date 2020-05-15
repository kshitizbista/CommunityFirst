package se.sda.communityfirst.location;

import org.springframework.data.repository.CrudRepository;

import java.util.Set;

public interface CommunityRepository extends CrudRepository<Community, Long> {
    Set<Community> findCommunitiesByCityIdOrderByNameAsc(Long id);
}
