package com.neohack.backend.repository;

import com.neohack.backend.models.Lessons;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface LessonsRepository extends CrudRepository<Lessons, Long> {

    List<Lessons> findAllByCoursesId(Long id);

}
