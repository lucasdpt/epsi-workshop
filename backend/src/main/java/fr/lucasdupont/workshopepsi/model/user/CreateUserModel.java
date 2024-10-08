package fr.lucasdupont.workshopepsi.model.user;

import lombok.Data;

@Data
public class CreateUserModel {

    private String username;
    private String email;
    private String password;

}
