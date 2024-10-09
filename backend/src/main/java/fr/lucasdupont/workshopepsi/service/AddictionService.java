package fr.lucasdupont.workshopepsi.service;

import fr.lucasdupont.workshopepsi.exception.DataNotFoundException;
import fr.lucasdupont.workshopepsi.model.addiction.AddictionCategoryModel;
import fr.lucasdupont.workshopepsi.model.addiction.CreateAddictionModel;
import fr.lucasdupont.workshopepsi.model.addiction.UserAddictionModel;

import java.util.List;

public interface AddictionService {

    List<AddictionCategoryModel> getAllAddictionsForUser() throws DataNotFoundException;

    void addAddictionForUser(CreateAddictionModel createAddictionModel) throws DataNotFoundException;

    List<UserAddictionModel> getAddictionsForUser() throws DataNotFoundException;

    void addAddictionToUser(String addictionId) throws DataNotFoundException;

}
