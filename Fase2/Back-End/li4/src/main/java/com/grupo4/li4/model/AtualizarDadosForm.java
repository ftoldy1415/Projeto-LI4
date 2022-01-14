package com.grupo4.li4.model;

public class AtualizarDadosForm {

    private String nome_utilizador;
    private String palavra_passe;
    private int num_telemovel;

    public AtualizarDadosForm() {
    }

    public String getNome_utilizador() {
        return nome_utilizador;
    }

    public void setNome_utilizador(String username) {
        this.nome_utilizador = username;
    }

    public String getPalavra_passe() {
        return palavra_passe;
    }

    public void setPalavra_passe(String password) {
        this.palavra_passe = password;
    }

    public int getNum_telemovel() {
        return num_telemovel;
    }

    public void setNum_telemovel(int num_telemovel) {
        this.num_telemovel = num_telemovel;
    }
}
