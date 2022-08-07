package com.neohack.backend.models;

import com.neohack.backend.enums.Level;
import com.neohack.backend.enums.Status;
import lombok.*;

import javax.persistence.*;
import java.util.List;

@Entity
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Data
@Table(name = "t_courses")
public class Courses {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false)
    private Long id;

    @Column
    private String courseName;

    @Column
    @Enumerated(EnumType.STRING)
    private Status status;

    @Column
    private Float successPoint;

    @Enumerated(EnumType.STRING)
    private Level level;

    @ManyToMany(fetch = FetchType.EAGER)
    @ToString.Exclude
    @EqualsAndHashCode.Exclude
    private List<Interests> interests;


}
