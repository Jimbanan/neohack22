package com.neohack.backend.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import io.swagger.v3.oas.annotations.media.Schema;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import java.time.LocalDate;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Schema(description = "Сущность регистрационных данных")
public class RegistrationDataDTO {

    @NotNull
    @Size(min = 5, max = 30, message = "Длина имени: 5-30 символов")
    @JsonProperty("name")
    private String name;

    @NotNull
    @Size(min = 5, max = 30, message = "Длина фамилии: 5-30 символов")
    @JsonProperty("surname")
    private String surname;

    @NotNull
    @Email
    @JsonProperty("email")
    private String email;

    @NotNull
    @JsonProperty("birthDate")
    private LocalDate birthDate;

    @NotNull
    @Size(min = 6, max = 30, message = "Длина пароля: 6-30 символов")
    @JsonProperty("password")
    private String password;

    @NotNull
    @JsonProperty("location")
    private String location;

    @JsonProperty("number")
    private String number;

    @NotNull
    @JsonProperty("education")
    private String education;


}
