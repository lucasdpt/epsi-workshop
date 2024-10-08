package fr.lucasdupont.workshopepsi.service.impl;

import fr.lucasdupont.workshopepsi.entity.Addiction;
import fr.lucasdupont.workshopepsi.entity.AddictionCategory;
import fr.lucasdupont.workshopepsi.exception.DataNotFoundException;
import fr.lucasdupont.workshopepsi.model.AddictionCategoryModel;
import fr.lucasdupont.workshopepsi.repository.AddictionCategoryRepository;
import fr.lucasdupont.workshopepsi.repository.AddictionRepository;
import fr.lucasdupont.workshopepsi.service.AddictionService;
import fr.lucasdupont.workshopepsi.service.UserService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
@AllArgsConstructor
public class DefaultAddictionService implements AddictionService {

    private final AddictionCategoryRepository addictionCategoryRepository;

    private final AddictionRepository addictionRepository;

    private final UserService userService;

    @Override
    public List<AddictionCategoryModel> getAllAddictionsForUser() throws DataNotFoundException {
        List<AddictionCategory> categories = addictionCategoryRepository.findAll();
        List<Addiction> addictions = addictionRepository.findAddictionByScope(1000);
        addictions.addAll(addictionRepository.findAddictionByStuffIdAndScope(userService.currentUser().getId(), 2000));

        List<AddictionCategoryModel> models = new ArrayList<>();
        categories.forEach(category -> {
            List<Addiction> categoryAddictions = addictions.stream().filter(addiction -> addiction.getCategoryId().equals(category.getCategoryId())).toList();
            models.add(AddictionCategoryModel.fromEntities(category, categoryAddictions));
        });

        return models;
    }

}
