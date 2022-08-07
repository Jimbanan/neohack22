package com.neohack.backend.models;

import lombok.Data;

import javax.persistence.*;

@Entity
@Data
@Table(name = "t_lessons")
public class Lessons {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false)
    private Long id;

    @Column
    private String lessonName;

    @Column
    private String lessonContent;

    @ManyToOne
    @JoinColumn(name = "courses_id")
    private Courses courses;

    @ManyToOne
    @JoinColumn(name = "tests_id")
    private Tests tests;

}