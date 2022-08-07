package com.neohack.backend.services;

import com.neohack.backend.enums.Status;
import com.neohack.backend.models.Courses;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class AuthorizedServiceImpl implements AuthorizedService {

    @Autowired
    CoursesServiceImpl coursesService;

    public List<Courses> getAllCourses() {
        return coursesService.findAll()
                .stream()
                .filter(courses -> courses.getStatus() == Status.ACTIVE)
                .collect(Collectors.toList());
    }

}
