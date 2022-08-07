package com.neohack.backend.services;

import com.neohack.backend.models.Courses;

import java.util.List;
import java.util.Optional;

public interface CoursesService {

    List<Courses> findAll();

    Optional<Courses> findCourseById(Long id);

}
