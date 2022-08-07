package com.neohack.backend.services;

import com.neohack.backend.dto.RegistrationDataDTO;
import com.neohack.backend.models.User;

public interface RegistrationService {

    User registrationNewUser(RegistrationDataDTO registrationDataDTO);

}
