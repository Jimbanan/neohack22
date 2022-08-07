package com.neohack.backend.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import io.swagger.v3.oas.annotations.media.Schema;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Schema(description = "Сущность данных для авторизации")
public class LoginDataDTO {

    @JsonProperty("email")
    private String email;

    @JsonProperty("password")
    private String password;

}
