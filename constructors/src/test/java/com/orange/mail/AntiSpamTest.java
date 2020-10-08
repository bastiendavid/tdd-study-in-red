package com.orange.mail;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

import static org.assertj.core.api.Assertions.assertThat;

class AntiSpamTest {

    AntiSpam antiSpam;

    @BeforeEach
    public void setup() {
        antiSpam = new AntiSpam();
    }

    @Test
    @DisplayName("Mails with 'credit card' in text are considered as spam")
    void mails_mentioning_credit_card_are_rejected() {
        Mail mail = new Mail("bob@gmail.com", "alice@gmail.com", "hello", "hello please give me your credit card number");

        boolean accept = antiSpam.accept(mail);

        assertThat(accept).isFalse();
    }

    @Test
    @DisplayName("Mails with insults in the subject are rejected")
    void mails_with_insults_in_subject_are_rejected() {
        Mail mail = new Mail("bob@gmail.com", "alice@gmail.com", "SAFe training", "hello your training is starting in 5 minutes");

        boolean accept = antiSpam.accept(mail);

        assertThat(accept).isFalse();
    }

    @Test
    @DisplayName("Mails from an orange mailbox are always accepted")
    void mails_from_orange_are_accepted() {
        Mail mail = new Mail("bob@gmail.com", "me@orange.fr", "hello", "hello can I get your credit card number?");

        boolean accept = antiSpam.accept(mail);

        assertThat(accept).isTrue();
    }

    @Test
    @DisplayName("Other mails are accepted")
    void other_mails_are_accepted() {
        Mail mail = new Mail("bob@gmail.com", "alice@gmail.com", "Hello", "Hello here is my public key");

        boolean accept = antiSpam.accept(mail);

        assertThat(accept).isTrue();
    }
}
