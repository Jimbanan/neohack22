package com.neohack.backend.services;

import com.neohack.backend.dto.LoginDataDTO;
import com.neohack.backend.models.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class LoginServiceImpl implements LoginService{

    @Autowired
    UserDataServiceImpl userDataService;

    public User findUser(LoginDataDTO loginDataDTO) {
        return userDataService.findUser(loginDataDTO);
    }
}
