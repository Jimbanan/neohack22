package com.neohack.backend.services;

import com.neohack.backend.dto.LoginDataDTO;
import com.neohack.backend.models.User;

public interface LoginService {

    User findUser(LoginDataDTO loginDataDTO);

}
