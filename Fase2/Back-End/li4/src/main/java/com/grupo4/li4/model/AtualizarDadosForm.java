package com.grupo4.li4.model;

public class AtualizarDadosForm {

    private String nome;
    private String palavra_passe;
    private String num_telemovel;
    private String nome_utilizador;
    private String palavra_passe_antiga;

    public AtualizarDadosForm() {
    }

    public String getNome(){
        return this.nome;
    }

    public String getNome_utilizador() {
        return nome_utilizador;
    }

    public String getPalavra_passe() {
        return palavra_passe;
    }

    public String getNum_telemovel() {
        return num_telemovel;
    }

    public String getPalavra_passe_antiga(){
        return this.palavra_passe_antiga;
    }
}
