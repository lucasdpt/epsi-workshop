package fr.lucasdupont.workshopepsi.repository;

import fr.lucasdupont.workshopepsi.entity.Addiction;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface AddictionRepository extends MongoRepository<Addiction, String> {

    List<Addiction> findAddictionByStuffIdAndScope(String stuffId, int scope);

    List<Addiction> findAddictionByScope(int scope);

    Optional<Addiction> findByLabel(String label);

}
