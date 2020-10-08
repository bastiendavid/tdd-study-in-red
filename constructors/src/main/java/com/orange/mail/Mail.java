package com.orange.mail;

public class Mail {

    public final String recipient;
    public final String sender;
    public final String subject;
    public final String message;

    public Mail(String recipient, String sender, String subject, String message) {
        this.recipient = recipient;
        this.sender = sender;
        this.subject = subject;
        this.message = message;
    }
}
