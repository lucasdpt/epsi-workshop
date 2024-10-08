package fr.lucasdupont.workshopepsi.model;

import fr.lucasdupont.workshopepsi.entity.User;
import lombok.Data;

@Data
public class UserModel {

    private String id;

    private String email;

    private String name;

    public static UserModel fromEntity(User user) {
        UserModel userModel = new UserModel();
        userModel.setId(user.getId());
        userModel.setEmail(user.getEmail());
        userModel.setName(user.getName());
        return userModel;
    }

}
