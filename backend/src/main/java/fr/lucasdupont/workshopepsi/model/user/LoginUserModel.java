package fr.lucasdupont.workshopepsi.model.user;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class LoginUserModel {

    private String email;

    private String password;

}
