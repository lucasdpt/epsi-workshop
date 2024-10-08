package fr.lucasdupont.workshopepsi.model.addiction;

import fr.lucasdupont.workshopepsi.entity.Addiction;
import lombok.Data;

@Data
public class AddictionModel {

    private String id;

    private String label;

    private Addiction.AddictionType addictionType;

    private String categoryId;

    private int scope;

    public static AddictionModel fromEntity(Addiction addiction) {
        if (addiction != null) {
            AddictionModel addictionModel = new AddictionModel();
            addictionModel.setId(addiction.getId());
            addictionModel.setLabel(addiction.getLabel());
            addictionModel.setAddictionType(addiction.getAddictionType());
            addictionModel.setCategoryId(addiction.getCategoryId());
            addictionModel.setScope(addiction.getScope());
            return addictionModel;
        }
        return null;
    }

}
