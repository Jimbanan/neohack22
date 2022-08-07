package com.neohack.backend.services;

public interface MailSender {

    void sendEmail(String to, String subject, String text);

}
