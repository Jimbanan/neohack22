package com.neohack.backend.repository;

import com.neohack.backend.models.Courses;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface CoursesRepository extends CrudRepository<Courses, Long> {

    List<Courses> findAll();

}
