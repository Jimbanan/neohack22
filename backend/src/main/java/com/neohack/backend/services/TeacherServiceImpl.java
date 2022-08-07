package com.neohack.backend.services;

import com.neohack.backend.models.Courses;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class TeacherServiceImpl implements TeacherService {

    @Autowired
    CoursesServiceImpl coursesService;

    public Optional<Courses> findCourseById(Long id) {
        return coursesService.findCourseById(id);
    }

}
