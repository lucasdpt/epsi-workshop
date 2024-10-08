package fr.lucasdupont.workshopepsi.service.impl;

import fr.lucasdupont.workshopepsi.entity.Addiction;
import fr.lucasdupont.workshopepsi.entity.AddictionCategory;
import fr.lucasdupont.workshopepsi.exception.DataNotFoundException;
import fr.lucasdupont.workshopepsi.model.addiction.AddictionCategoryModel;
import fr.lucasdupont.workshopepsi.model.addiction.CreateAddictionModel;
import fr.lucasdupont.workshopepsi.repository.AddictionCategoryRepository;
import fr.lucasdupont.workshopepsi.repository.AddictionRepository;
import fr.lucasdupont.workshopepsi.service.AddictionService;
import fr.lucasdupont.workshopepsi.service.UserService;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class DefaultAddictionService implements AddictionService {

    private final AddictionCategoryRepository addictionCategoryRepository;

    private final AddictionRepository addictionRepository;

    private final UserService userService;

    private final String otherCategoryId;

    public DefaultAddictionService(AddictionCategoryRepository addictionCategoryRepository, AddictionRepository addictionRepository, UserService userService) {
        this.addictionCategoryRepository = addictionCategoryRepository;
        this.addictionRepository = addictionRepository;
        this.userService = userService;

        AddictionCategory soiree = addictionCategoryRepository.findByLabel("Soirée").orElseGet(() -> addictionCategoryRepository.save(new AddictionCategory("Soirée", "beer", "#FFD700")));
        AddictionCategory moneyGames = addictionCategoryRepository.findByLabel("Jeux d'argent").orElseGet(() -> addictionCategoryRepository.save(new AddictionCategory("Jeux d'argent", "casino", "#FF4500")));
        AddictionCategory social = addictionCategoryRepository.findByLabel("Social").orElseGet(() -> addictionCategoryRepository.save(new AddictionCategory("Social", "users", "#00BFFF")));
        AddictionCategory drugs = addictionCategoryRepository.findByLabel("Drogues").orElseGet(() -> addictionCategoryRepository.save(new AddictionCategory("Drogues", "syringe", "#FF0000")));
        AddictionCategory food = addictionCategoryRepository.findByLabel("Nourriture").orElseGet(() -> addictionCategoryRepository.save(new AddictionCategory("Nourriture", "utensils", "#32CD32")));
        AddictionCategory other = addictionCategoryRepository.findByLabel("Autres").orElseGet(() -> addictionCategoryRepository.save(new AddictionCategory("Autres", "question", "#808080")));
        otherCategoryId = other.getCategoryId();

        addictionRepository.findByLabel("Alcool").orElseGet(() -> addictionRepository.save(new Addiction("Alcool", 1000, "0", Addiction.AddictionType.AMOUNT, soiree.getCategoryId())));
        addictionRepository.findByLabel("Cigarettes").orElseGet(() -> addictionRepository.save(new Addiction("Cigarettes", 1000, "0", Addiction.AddictionType.AMOUNT, soiree.getCategoryId())));
        addictionRepository.findByLabel("Boite de nuit").orElseGet(() -> addictionRepository.save(new Addiction("Boite de nuit", 1000, "0", Addiction.AddictionType.AMOUNT, soiree.getCategoryId())));

        addictionRepository.findByLabel("Casino").orElseGet(() -> addictionRepository.save(new Addiction("Casino", 1000, "0", Addiction.AddictionType.AMOUNT, moneyGames.getCategoryId())));
        addictionRepository.findByLabel("Jeux à gratter").orElseGet(() -> addictionRepository.save(new Addiction("Jeux à gratter", 1000, "0", Addiction.AddictionType.AMOUNT, moneyGames.getCategoryId())));
        addictionRepository.findByLabel("Paris sportifs").orElseGet(() -> addictionRepository.save(new Addiction("Paris sportifs", 1000, "0", Addiction.AddictionType.AMOUNT, moneyGames.getCategoryId())));

        addictionRepository.findByLabel("Réseaux sociaux").orElseGet(() -> addictionRepository.save(new Addiction("Réseaux sociaux", 1000, "0", Addiction.AddictionType.DELAY, social.getCategoryId())));
        addictionRepository.findByLabel("Jeux vidéos").orElseGet(() -> addictionRepository.save(new Addiction("Jeux vidéos", 1000, "0", Addiction.AddictionType.DELAY, social.getCategoryId())));

        addictionRepository.findByLabel("Cannabis").orElseGet(() -> addictionRepository.save(new Addiction("Cannabis", 1000, "0", Addiction.AddictionType.AMOUNT, drugs.getCategoryId())));
        addictionRepository.findByLabel("Cocaïne").orElseGet(() -> addictionRepository.save(new Addiction("Cocaïne", 1000, "0", Addiction.AddictionType.AMOUNT, drugs.getCategoryId())));
        addictionRepository.findByLabel("MDMA").orElseGet(() -> addictionRepository.save(new Addiction("MDMA", 1000, "0", Addiction.AddictionType.AMOUNT, drugs.getCategoryId())));
        addictionRepository.findByLabel("LSD").orElseGet(() -> addictionRepository.save(new Addiction("LSD", 1000, "0", Addiction.AddictionType.AMOUNT, drugs.getCategoryId())));
        addictionRepository.findByLabel("Héroïne").orElseGet(() -> addictionRepository.save(new Addiction("Héroïne", 1000, "0", Addiction.AddictionType.AMOUNT, drugs.getCategoryId())));
        addictionRepository.findByLabel("Kétamine").orElseGet(() -> addictionRepository.save(new Addiction("Kétamine", 1000, "0", Addiction.AddictionType.AMOUNT, drugs.getCategoryId())));

        addictionRepository.findByLabel("Grignotage").orElseGet(() -> addictionRepository.save(new Addiction("Grignotage", 1000, "0", Addiction.AddictionType.AMOUNT, food.getCategoryId())));
        addictionRepository.findByLabel("Café").orElseGet(() -> addictionRepository.save(new Addiction("Café", 1000, "0", Addiction.AddictionType.AMOUNT, food.getCategoryId())));
        addictionRepository.findByLabel("Fast food").orElseGet(() -> addictionRepository.save(new Addiction("Fast food", 1000, "0", Addiction.AddictionType.AMOUNT, food.getCategoryId())));
    }

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

    @Override
    public void addAddictionForUser(CreateAddictionModel createAddictionModel) throws DataNotFoundException {
        Addiction addiction = new Addiction();
        addiction.setLabel(createAddictionModel.getLabel());
        addiction.setScope(2000);
        addiction.setStuffId(userService.currentUser().getId());
        addiction.setAddictionType(Addiction.AddictionType.UNKNOWN);
        addiction.setCategoryId(otherCategoryId);
        addictionRepository.save(addiction);
    }

}
