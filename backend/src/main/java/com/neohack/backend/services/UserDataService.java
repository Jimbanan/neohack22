package com.neohack.backend.services;

import com.neohack.backend.dto.LoginDataDTO;
import com.neohack.backend.dto.RegistrationDataDTO;
import com.neohack.backend.models.User;

public interface UserDataService {

    User insertUserData(RegistrationDataDTO registrationDataDTO);

    User getUser(Long userId);

    User findUser(LoginDataDTO loginDataDTO);

    void updateUser(User user);

    User findByEmail(String email);
}
