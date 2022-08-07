package com.neohack.backend.services;

import com.neohack.backend.dto.LoginDataDTO;
import com.neohack.backend.dto.RegistrationDataDTO;
import com.neohack.backend.enums.Roles;
import com.neohack.backend.models.User;
import com.neohack.backend.repository.RoleRepository;
import com.neohack.backend.repository.UserDataRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.NoSuchElementException;

@Service
@Slf4j
@RequiredArgsConstructor
public class UserDataServiceImpl implements UserDataService {

    @Autowired
    UserDataRepository userDataRepository;
    @Autowired
    RoleRepository roleRepository;

    public User insertUserData(RegistrationDataDTO registrationDataDTO) {
        return userDataRepository.save(User.builder()
                .name(registrationDataDTO.getName())
                .surname(registrationDataDTO.getSurname())
                .email(registrationDataDTO.getEmail())
                .birthDate(registrationDataDTO.getBirthDate())
                .password(registrationDataDTO.getPassword())
                .location(registrationDataDTO.getLocation())
                .number(registrationDataDTO.getNumber())
                .education(registrationDataDTO.getEducation())
                .roles(List.of(roleRepository.findByName(Roles.STUDENT.toString())))
                .build());
    }

    public User getUser(Long userId) {
        return userDataRepository.findById(userId).orElseThrow(()
                -> new NoSuchElementException("with id='" + userId + "' does not exist"));
    }

    public User findUser(LoginDataDTO loginDataDTO) {
        return userDataRepository.findByEmailAndPassword(loginDataDTO.getEmail(), loginDataDTO.getPassword());
    }

    public void updateUser(User user) {
        userDataRepository.save(user);
    }

    public User findByEmail(String email) {
        return userDataRepository.findByEmail(email);
    }
}
