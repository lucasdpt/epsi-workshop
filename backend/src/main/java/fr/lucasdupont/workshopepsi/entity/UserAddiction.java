package fr.lucasdupont.workshopepsi.entity;

import lombok.Getter;
import lombok.Setter;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Getter
@Setter
@Document(collection = "user_addictions")
public class UserAddiction {

    @Id
    private String id;

    private String userId;

    private String addictionId;

}
