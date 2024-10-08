package fr.lucasdupont.workshopepsi.model;

import fr.lucasdupont.workshopepsi.entity.Addiction;
import fr.lucasdupont.workshopepsi.entity.AddictionCategory;
import lombok.Data;

import java.util.List;

@Data
public class AddictionCategoryModel {

    private String categoryId;

    private String label;

    private String icon;

    private String iconColor;

    private List<AddictionModel> addictions;

    public static AddictionCategoryModel fromEntities(AddictionCategory category, List<Addiction> addictions) {
        AddictionCategoryModel model = new AddictionCategoryModel();
        model.setCategoryId(category.getCategoryId());
        model.setLabel(category.getLabel());
        model.setIcon(category.getIcon());
        model.setIconColor(category.getIconColor());
        List<AddictionModel> addictionModels = addictions.stream().map(AddictionModel::fromEntity).toList();
        model.setAddictions(addictionModels);
        return model;
    }

}
