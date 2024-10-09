package fr.lucasdupont.workshopepsi.repository;

import fr.lucasdupont.workshopepsi.entity.UserAddiction;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface UserAddictionRepository extends MongoRepository<UserAddiction, String> {

    List<UserAddiction> findAllByUserId(String userId);

}
