package com.neohack.backend.services;

import com.neohack.backend.dto.FullDataDTO;
import com.neohack.backend.models.Courses;
import com.neohack.backend.models.Lessons;
import com.neohack.backend.models.User;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.NoSuchElementException;
import java.util.Optional;

@Service
@Slf4j
public class StudentServiceImpl implements StudentService {

    @Autowired
    UserDataServiceImpl userDataService;
    @Autowired
    CoursesServiceImpl coursesService;
    @Autowired
    LessonsServiceImpl lessonsService;

    public Boolean updateUserData(FullDataDTO fullDataDTO) {
        log.info("updateUserData(): {}", fullDataDTO);
        try {
            User user = userDataService.getUser(fullDataDTO.getId());
            user.setName(fullDataDTO.getName());
            user.setSurname(fullDataDTO.getSurname());
            user.setEmail(fullDataDTO.getEmail());
            user.setBirthDate(fullDataDTO.getBirthDate());
            user.setPassword(fullDataDTO.getPassword());
            user.setLocation(fullDataDTO.getLocation());
            user.setNumber(fullDataDTO.getNumber());
            user.setEducation(fullDataDTO.getEducation());
            userDataService.updateUser(user);
            log.info("Информация о пользователе с id {} обновлена", fullDataDTO.getId());
        } catch (NullPointerException | NoSuchElementException e) {
            log.error("Ошибка при обновлении данных пользователя");
            e.getMessage();
            return false;
        }
        return true;
    }

    public Optional<Courses> findCourseById(Long id) {
        return coursesService.findCourseById(id);
    }

    public List<Lessons> findLessonById(Long id) {
        return lessonsService.findAllByCoursesId(id);
    }
}
