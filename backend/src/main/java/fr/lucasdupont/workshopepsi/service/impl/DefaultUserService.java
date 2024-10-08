package fr.lucasdupont.workshopepsi.service.impl;

import fr.lucasdupont.workshopepsi.entity.User;
import fr.lucasdupont.workshopepsi.exception.DataNotFoundException;
import fr.lucasdupont.workshopepsi.model.user.CreateUserModel;
import fr.lucasdupont.workshopepsi.model.user.LoginUserModel;
import fr.lucasdupont.workshopepsi.repository.UserRepository;
import fr.lucasdupont.workshopepsi.security.JwtTokenProvider;
import fr.lucasdupont.workshopepsi.service.UserService;
import lombok.AllArgsConstructor;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
public class DefaultUserService implements UserService {

    private final UserRepository userRepository;

    private final PasswordEncoder passwordEncoder;

    private final AuthenticationManager authenticationManager;

    private final JwtTokenProvider jwtTokenProvider;

    @Override
    public void createUser(CreateUserModel createUserModel) {
        if (userRepository.findByEmail(createUserModel.getEmail()).isPresent()) {
            throw new IllegalArgumentException("User already exists");
        }

        User user = new User();
        user.setEmail(createUserModel.getEmail());
        user.setName(createUserModel.getEmail());
        user.setPassword(passwordEncoder.encode(createUserModel.getPassword()));
        userRepository.save(user);
    }

    @Override
    public void deleteUser(String id) {
        userRepository.deleteById(id);
    }

    @Override
    public User currentUser() throws DataNotFoundException {
        String email = SecurityContextHolder.getContext().getAuthentication().getCredentials().toString();
        return userRepository.findByEmail(email).orElseThrow(() -> new DataNotFoundException("User not found"));
    }

    @Override
    public String login(LoginUserModel loginUserModel) throws IllegalAccessException {
        try {
            Authentication authentication = authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(loginUserModel.getEmail(), loginUserModel.getPassword()));

            SecurityContextHolder.getContext().setAuthentication(authentication);
            return jwtTokenProvider.createToken(loginUserModel.getEmail());
        } catch (AuthenticationException e) {
            throw new IllegalAccessException("Invalid username/password supplied");
        }
    }
}
