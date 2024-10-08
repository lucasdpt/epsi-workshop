package fr.lucasdupont.workshopepsi.repository;

import fr.lucasdupont.workshopepsi.entity.AddictionCategory;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AddictionCategoryRepository extends MongoRepository<AddictionCategory, String> {
}
