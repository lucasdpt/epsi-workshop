package fr.lucasdupont.workshopepsi.controller;

import fr.lucasdupont.workshopepsi.model.LoginUserModel;
import fr.lucasdupont.workshopepsi.service.UserService;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/user")
@AllArgsConstructor
public class UserController {

    private final UserService userService;

    @PostMapping("/login")
    public ResponseEntity<String> login(@RequestBody LoginUserModel loginUserModel) throws IllegalAccessException {
        return ResponseEntity.ok(userService.login(loginUserModel));
    }

}
