package se.sda.communityfirst.location;

import org.springframework.data.repository.CrudRepository;

import java.util.List;


public interface CityRepository extends CrudRepository<City, Long> {
    List<City> findAllByOrderByName();
}
