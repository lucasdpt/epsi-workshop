package fr.lucasdupont.workshopepsi.model;

import fr.lucasdupont.workshopepsi.entity.Addiction;
import lombok.Data;

@Data
public class AddictionModel {

    private String id;

    private String label;

    private Addiction.AddictionType addictionType;

    private String categoryId;

    public static AddictionModel fromEntity(Addiction addiction) {
        if (addiction != null) {
            AddictionModel addictionModel = new AddictionModel();
            addictionModel.setId(addiction.getId());
            addictionModel.setLabel(addiction.getLabel());
            addictionModel.setAddictionType(addiction.getAddictionType());
            addictionModel.setCategoryId(addiction.getCategoryId());
            return addictionModel;
        }
        return null;
    }

}
