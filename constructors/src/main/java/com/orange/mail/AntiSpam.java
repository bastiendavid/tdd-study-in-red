package com.orange.mail;

public class AntiSpam {

    public boolean accept(Mail mail) {
        if (mail.sender.endsWith("@orange.fr")) {
            return true;
        }
        if (mail.message.contains("credit card")) {
            return false;
        }
        if (mail.subject.contains("SAFe")) {
            return false;
        }

        return true;
    }
}
