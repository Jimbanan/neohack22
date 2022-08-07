package com.neohack.backend.services;

import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

@Service
@Slf4j
public class MailSenderImpl implements MailSender {

    @Autowired
    private JavaMailSender javaMailSender;


    private SimpleMailMessage templateMessage = new SimpleMailMessage();

    @Override
    public void sendEmail(String to, String subject, String text) {
        SimpleMailMessage message = new SimpleMailMessage(templateMessage);
        message.setFrom("neohack22@mail.ru");
        message.setTo(to);
        message.setSubject(subject);
        message.setText(text);
        javaMailSender.send(message);
        log.info("sendEmail() - void: Сообщение отправлено на почту {}", to);

    }

}