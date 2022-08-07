package com.neohack.backend.controllers;

import com.neohack.backend.dto.LoginDataDTO;
import com.neohack.backend.dto.MessageDTO;
import com.neohack.backend.dto.RegistrationDataDTO;
import com.neohack.backend.models.Courses;
import com.neohack.backend.models.User;
import com.neohack.backend.services.AuthorizedServiceImpl;
import com.neohack.backend.services.LoginServiceImpl;
import com.neohack.backend.services.RegistrationServiceImpl;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@CrossOrigin
@RestController
@Slf4j
@Tag(name = "StartController", description = "Контроллер по обработке Регистрации и авторизации пользователя")
public class StartController {

    private final RegistrationServiceImpl registrationService;
    private final LoginServiceImpl loginService;
    private final AuthorizedServiceImpl authorizedService;

    public StartController(RegistrationServiceImpl registrationService,
                           LoginServiceImpl loginService,
                           AuthorizedServiceImpl authorizedService) {
        this.registrationService = registrationService;
        this.loginService = loginService;
        this.authorizedService = authorizedService;
    }

    //https://localhost3001/registration
    @PostMapping("/registration")
    public ResponseEntity<?> registration(@RequestBody @Valid RegistrationDataDTO registrationDataDTO) {
        log.info("registration: {}", registrationDataDTO);

        User newUser = registrationService.registrationNewUser(registrationDataDTO);

        if (newUser == (null)) {
            log.error("registration(): Пользователь с почтой {} уже существует", registrationDataDTO.getEmail());
            return new ResponseEntity<>(MessageDTO.builder().message("Пользователь с такой почтой уже существует").build(), HttpStatus.OK);
        }

        log.info("Добавлен пользователь с id:{}", newUser.getId());

        return ResponseEntity.ok(newUser);
    }

    //https://localhost3001/login
    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody LoginDataDTO loginDataDTO) {
        log.info("login: {}", loginDataDTO);

        User user = loginService.findUser(loginDataDTO);

        if (user == (null)) {
            log.error("login(): Неверный логин или пароль");
            return new ResponseEntity<>(MessageDTO.builder().message("Неверный логин или пароль").build(), HttpStatus.OK);
        }

        log.info("Найден пользователь с id:{}", user.getId());

        return new ResponseEntity<>(user, HttpStatus.OK);
    }

    //https://localhost3001/courses
    @GetMapping("/courses")
    public ResponseEntity<List<Courses>> courses() {
        log.info("courses: {}");
        List<Courses> allCourses = authorizedService.getAllCourses();
        log.info("Получен отфильтрованный список из всех активных курсов {}", allCourses);
        return new ResponseEntity<>(allCourses, HttpStatus.OK);
    }

}