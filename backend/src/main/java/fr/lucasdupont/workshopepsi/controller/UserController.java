package fr.lucasdupont.workshopepsi.controller;

import fr.lucasdupont.workshopepsi.exception.DataNotFoundException;
import fr.lucasdupont.workshopepsi.model.CreateUserModel;
import fr.lucasdupont.workshopepsi.model.LoginUserModel;
import fr.lucasdupont.workshopepsi.model.UserModel;
import fr.lucasdupont.workshopepsi.service.UserService;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/user")
@AllArgsConstructor
public class UserController {

    private final UserService userService;

    @PostMapping("/login")
    public ResponseEntity<String> login(@RequestBody LoginUserModel loginUserModel) throws IllegalAccessException {
        return ResponseEntity.ok(userService.login(loginUserModel));
    }

    @PostMapping("/register")
    public ResponseEntity<String> register(@RequestBody CreateUserModel createUserModel) throws IllegalAccessException {
        userService.createUser(createUserModel);
        return ResponseEntity.ok(userService.login(new LoginUserModel(createUserModel.getEmail(), createUserModel.getPassword())));
    }

    @GetMapping("/me")
    public ResponseEntity<UserModel> getCurentUser() throws DataNotFoundException {
        return ResponseEntity.ok(UserModel.fromEntity(userService.currentUser()));
    }

}
