package com.grupo4.li4.model;

public class LoginForm {

    private String nome_utilizador;

    private String palavra_passe;


    public String getNome_utilizador() {
        return this.nome_utilizador;
    }

    public void setNome_utilizador(String nome_utilizador) {
        this.nome_utilizador = nome_utilizador;
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
                "nome_utilizador='" + nome_utilizador + '\'' +
                ", palavra_passe='" + palavra_passe + '\'' +
                '}';
    }
}
