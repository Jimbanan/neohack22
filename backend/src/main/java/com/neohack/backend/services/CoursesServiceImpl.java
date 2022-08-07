package com.neohack.backend.services;

import com.neohack.backend.models.Courses;
import com.neohack.backend.repository.CoursesRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.NoSuchElementException;
import java.util.Optional;

@Service
public class CoursesServiceImpl implements CoursesService {

    @Autowired
    CoursesRepository coursesRepository;

    public List<Courses> findAll() {
        return coursesRepository.findAll();
    }

    public Optional<Courses> findCourseById(Long id) {

        Optional<Courses> courses;
        try {
            courses = coursesRepository.findById(id);
        } catch (NoSuchElementException e) {
            return null;
        }

        return courses;
    }

}
