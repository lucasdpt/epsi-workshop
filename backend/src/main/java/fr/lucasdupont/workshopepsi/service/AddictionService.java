package fr.lucasdupont.workshopepsi.service;

import fr.lucasdupont.workshopepsi.exception.DataNotFoundException;
import fr.lucasdupont.workshopepsi.model.AddictionCategoryModel;

import java.util.List;

public interface AddictionService {

    List<AddictionCategoryModel> getAllAddictionsForUser() throws DataNotFoundException;

}
