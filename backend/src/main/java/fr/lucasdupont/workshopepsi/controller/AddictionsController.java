package fr.lucasdupont.workshopepsi.controller;

import fr.lucasdupont.workshopepsi.exception.DataNotFoundException;
import fr.lucasdupont.workshopepsi.model.addiction.AddictionCategoryModel;
import fr.lucasdupont.workshopepsi.model.addiction.CreateAddictionModel;
import fr.lucasdupont.workshopepsi.service.AddictionService;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/addictions")
@AllArgsConstructor
public class AddictionsController {

    private final AddictionService addictionService;

    @GetMapping
    public ResponseEntity<List<AddictionCategoryModel>> getAllAddictions() throws DataNotFoundException {
        return ResponseEntity.ok(addictionService.getAllAddictionsForUser());
    }

    @PostMapping
    public ResponseEntity<Void> addAddiction(@RequestBody CreateAddictionModel createAddictionModel) throws DataNotFoundException {
        addictionService.addAddictionForUser(createAddictionModel);
        return ResponseEntity.noContent().build();
    }

}
