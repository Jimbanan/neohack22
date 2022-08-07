package com.neohack.backend.controllers;

import com.neohack.backend.dto.FullDataDTO;
import com.neohack.backend.dto.MessageDTO;
import com.neohack.backend.models.Courses;
import com.neohack.backend.models.Lessons;
import com.neohack.backend.services.StudentServiceImpl;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@CrossOrigin
@RestController
@Slf4j
@RequestMapping(("/student"))
@Tag(name = "StudentController", description = "Контроллер по обработке роли <Студент> ")
public class StudentController {

    private final StudentServiceImpl studentService;

    public StudentController(StudentServiceImpl studentService) {
        this.studentService = studentService;
    }

    //http://localhost:3001/student/updateData
    @PutMapping("/updateData")
    public ResponseEntity<MessageDTO> updateData(@RequestBody FullDataDTO fullDataDTO) {
        log.info("updateData(): {}", fullDataDTO);

        if (!studentService.updateUserData(fullDataDTO)) {
            log.warn("updateData(): Ошибка при обновлении данных пользователя");
            return new ResponseEntity<>(MessageDTO.builder().message("Ошибка при обновлении данных пользователя").build(), HttpStatus.OK);
        }

        log.info("updateData(): Данные о пользователе успешно обновлены");
        return new ResponseEntity<>(MessageDTO.builder().message("Данные пользователя обновлены").build(), HttpStatus.OK);
    }

    //http://localhost:3001/student/courses/{id}
    @GetMapping("/courses/{id}")
    public ResponseEntity<?> getCourseById(@PathVariable("id") Long id) {

        Optional<Courses> courses = studentService.findCourseById(id);
        if (courses.isEmpty()) {
            log.warn("getCourseById(): Курса с id: {} не существует", id);
            return new ResponseEntity<>(MessageDTO.builder().message("Такого курса не существует").build(), HttpStatus.OK);
        }
        log.warn("getCourseById(): Найден курс с id: {}", id);

        return new ResponseEntity<>(courses, HttpStatus.OK);
    }


    //http://localhost:3001/student/lesson/{id}
    @GetMapping("/lesson/{id}")
    public ResponseEntity<?> getLessonById(@PathVariable("id") Long id) {

        List<Lessons> lessonslist = studentService.findLessonById(id);

        if (lessonslist.size() == 0) {
            log.warn("getCourseById(): Уроков для курса с id: {} не существует", id);
            return new ResponseEntity<>(MessageDTO.builder().message("Уроков для данного курса не существует").build(), HttpStatus.OK);
        }
        log.warn("getCourseById(): Найдены уроки для курса с id: {}", id);

        return new ResponseEntity<>(lessonslist, HttpStatus.OK);
    }

}
