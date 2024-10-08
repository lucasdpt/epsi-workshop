package fr.lucasdupont.workshopepsi.entity;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Getter
@Setter
@Document(collection = "addictionCategories")
@NoArgsConstructor
public class AddictionCategory {

    public AddictionCategory(String label, String icon, String iconColor) {
        this.label = label;
        this.icon = icon;
        this.iconColor = iconColor;
    }

    @Id
    private String categoryId;

    private String label;

    private String icon;

    private String iconColor;

}
