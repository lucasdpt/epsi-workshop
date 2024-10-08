package fr.lucasdupont.workshopepsi.entity;

import lombok.Getter;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Getter
@Document(collection = "addictionCategories")
public class AddictionCategory {

    @Id
    private String categoryId;

    private String label;

    private String icon;

    private String iconColor;

}
