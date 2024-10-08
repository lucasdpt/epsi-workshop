package fr.lucasdupont.workshopepsi.entity;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Getter
@Setter
@Document(collection = "addictions")
@NoArgsConstructor
public class Addiction {

    public Addiction(String label, int scope, String stuffId, AddictionType addictionType, String categoryId) {
        this.label = label;
        this.scope = scope;
        this.stuffId = stuffId;
        this.addictionType = addictionType;
        this.categoryId = categoryId;
    }

    @Id
    private String id;

    private String label;

    private int scope; // 1000 = system, 2000 = user

    private String stuffId; // 0 = system else userId

    private AddictionType addictionType;

    private String categoryId;

    public enum AddictionType {
        DELAY,
        AMOUNT,
        UNKNOWN
    }

}
