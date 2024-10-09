package fr.lucasdupont.workshopepsi.model.addiction;

import fr.lucasdupont.workshopepsi.entity.Addiction;
import fr.lucasdupont.workshopepsi.entity.AddictionCategory;
import fr.lucasdupont.workshopepsi.entity.UserAddiction;
import lombok.Data;

import java.util.List;

@Data
public class UserAddictionModel {

    private AddictionCategoryModel addiction;

    public static UserAddictionModel fromEntities(Addiction addiction, AddictionCategory category, UserAddiction userAddiction) {
        UserAddictionModel userAddictionModel = new UserAddictionModel();
        userAddictionModel.setAddiction(AddictionCategoryModel.fromEntities(category, List.of(addiction)));
        return userAddictionModel;
    }

}
