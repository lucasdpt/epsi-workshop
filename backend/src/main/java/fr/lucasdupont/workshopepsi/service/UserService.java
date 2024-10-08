package fr.lucasdupont.workshopepsi.service;

import fr.lucasdupont.workshopepsi.entity.User;
import fr.lucasdupont.workshopepsi.exception.DataNotFoundException;
import fr.lucasdupont.workshopepsi.model.user.CreateUserModel;
import fr.lucasdupont.workshopepsi.model.user.LoginUserModel;

public interface UserService {

    void createUser(CreateUserModel createUserModel);

    void deleteUser(String id);

    User currentUser() throws DataNotFoundException;

    String login(LoginUserModel loginUserModel) throws IllegalAccessException;

}
