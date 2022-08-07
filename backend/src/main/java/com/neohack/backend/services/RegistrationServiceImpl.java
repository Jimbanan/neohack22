package com.neohack.backend.services;

import com.neohack.backend.dto.RegistrationDataDTO;
import com.neohack.backend.models.User;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.MailException;
import org.springframework.stereotype.Service;

@Service
@Slf4j
public class RegistrationServiceImpl implements RegistrationService {

    private static final String MESSAGE_SEND = "Сообщение успешно отправлено";
    private static final String MESSAGE_NOT_SEND = "Сообщение успешно отправлено";

    @Autowired
    UserDataServiceImpl userDataService;
    @Autowired
    MailSenderImpl mailSender;

    public User registrationNewUser(RegistrationDataDTO registrationDataDTO) {

        User userFromDB = userDataService.findByEmail(registrationDataDTO.getEmail());

        if (userFromDB != null) {
            log.warn("registrationNewUser(): Пользователь с почтой {} уже существует", registrationDataDTO.getEmail());
            return null;
        }

        User newUser = userDataService.insertUserData(registrationDataDTO);

        StringBuilder body = new StringBuilder();

        try {
            body.append("Поздравляем с успешной регистрацией на образовательной платформе\n")
                    .append("Ваши данные для входа:\n")
                    .append("Логин: ").append(registrationDataDTO.getEmail()).append("\n")
                    .append("Пароль: ").append(registrationDataDTO.getPassword());

            mailSender.sendEmail(registrationDataDTO.getEmail(), "Завершение регистрации", body.toString());
            log.info(MESSAGE_SEND);
        } catch (MailException mailException) {
            log.info(MESSAGE_NOT_SEND);
            mailException.printStackTrace();
        }

        return newUser;
    }
}
