package com.neohack.backend.services;

import com.neohack.backend.models.Courses;

import java.util.Optional;

public interface TeacherService {

    Optional<Courses> findCourseById(Long id);

}
