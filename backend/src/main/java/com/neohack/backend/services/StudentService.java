package com.neohack.backend.services;

import com.neohack.backend.dto.FullDataDTO;
import com.neohack.backend.models.Courses;
import com.neohack.backend.models.Lessons;

import java.util.List;
import java.util.Optional;

public interface StudentService {

    Boolean updateUserData(FullDataDTO fullDataDTO);

    Optional<Courses> findCourseById(Long id);

    List<Lessons> findLessonById(Long id);

}
