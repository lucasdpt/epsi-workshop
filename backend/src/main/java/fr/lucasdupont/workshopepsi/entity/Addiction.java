package fr.lucasdupont.workshopepsi.entity;

import lombok.Getter;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Getter
@Document(collection = "addictions")
public class Addiction {

    @Id
    private String id;

    private String label;

    private int scope; // 1000 = system, 2000 = user

    private String stuffId; // 0 = system else userId

    private AddictionType addictionType;

    private String categoryId;

    public enum AddictionType {
        DELAY,
        AMOUNT
    }

}
