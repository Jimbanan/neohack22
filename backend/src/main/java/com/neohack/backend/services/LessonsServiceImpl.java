package com.neohack.backend.services;

import com.neohack.backend.models.Lessons;
import com.neohack.backend.repository.LessonsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.NoSuchElementException;
import java.util.Optional;

@Service
public class LessonsServiceImpl implements LessonsService {

    @Autowired
    LessonsRepository lessonsRepository;

    public Optional<Lessons> findLessonById(Long id) {

        Optional<Lessons> lessons;
        try {
            lessons = lessonsRepository.findById(id);
        } catch (NoSuchElementException e) {
            return null;
        }

        return lessons;

    }

    List<Lessons> findAllByCoursesId(Long id) {
        return lessonsRepository.findAllByCoursesId(id);
    }

}
