package com.neohack.backend.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import io.swagger.v3.oas.annotations.media.Schema;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Schema(description = "Сущность полных данных о зарегистрированном пользователе")
public class FullDataDTO {

    @JsonProperty("id")
    private Long id;

    @JsonProperty("name")
    private String name;

    @JsonProperty("surname")
    private String surname;

    @JsonProperty("email")
    private String email;

    @JsonProperty("birthDate")
    private LocalDate birthDate;

    @JsonProperty("password")
    private String password;

    @JsonProperty("location")
    private String location;

    @JsonProperty("number")
    private String number;

    @JsonProperty("education")
    private String education;

}
