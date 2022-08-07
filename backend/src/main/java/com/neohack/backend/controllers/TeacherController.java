package com.neohack.backend.controllers;

import com.neohack.backend.dto.MessageDTO;
import com.neohack.backend.models.Courses;
import com.neohack.backend.services.TeacherServiceImpl;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@CrossOrigin
@RestController
@Slf4j
@RequestMapping(("/teacher"))
@Tag(name = "TeacherController", description = "Контроллер по обработке роли <Учитель> ")
public class TeacherController {

    private final TeacherServiceImpl teacherService;

    public TeacherController(TeacherServiceImpl teacherService) {
        this.teacherService = teacherService;
    }

    //http://localhost:3001/teacher/courses/{id}
    @GetMapping("/courses/{id}")
    public ResponseEntity<?> getCourseById(@PathVariable("id") Long id) {

        Optional<Courses> courses = teacherService.findCourseById(id);
        if (courses.isEmpty()) {
            log.warn("getCourseById(): Курса с id: {} не существует", id);
            return new ResponseEntity<>(MessageDTO.builder().message("Такого курса не существует").build(), HttpStatus.OK);
        }
        log.warn("getCourseById(): Найден курс с id: {}", id);

        return new ResponseEntity<>(courses, HttpStatus.OK);
    }

}
