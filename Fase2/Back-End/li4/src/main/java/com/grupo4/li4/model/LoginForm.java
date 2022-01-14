package com.grupo4.li4.model;

public class LoginForm {

    private String email;

    private String palavra_passe;


    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPalavra_passe() {
        return palavra_passe;
    }

    public void setPalavra_passe(String palavra_passe) {
        this.palavra_passe = palavra_passe;
    }


    @Override
    public String toString() {
        return "LoginForm{" +
                "nome_utilizador='" + email + '\'' +
                ", palavra_passe='" + palavra_passe + '\'' +
                '}';
    }
}
