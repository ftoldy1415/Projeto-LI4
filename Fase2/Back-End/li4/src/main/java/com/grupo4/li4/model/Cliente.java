package com.grupo4.li4.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "cliente")
public class Cliente {
    @Id
    private int nif;

    @Column(name = "nome")
    private String nome;
    @Column(name = "nome_utilizador")
    private String nome_utilizador;
    @Column(name = "palavra_passe")
    private String palavra_passe;
    @Column(name = "num_telemovel")
    private int num_telemovel;
    @Column(name = "email")
    private String email;

    public Cliente() {
    }

    public int getNif() {
        return this.nif;
    }

    public String getNome() {
        return this.nome;
    }

    public String getEmail() {
        return this.email;
    }

    public String getPalavra_passe() {
        return this.palavra_passe;
    }

    public int getNum_telemovel() {
        return this.num_telemovel;
    }

    public String getNome_utilizador() {
        return this.nome_utilizador;
    }

    public void setNif(int nif) {
        this.nif = nif;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public void setPalavra_passe(String palavra_passe) {
        this.palavra_passe = palavra_passe;
    }

    public void setNum_telemovel(int num_telemovel) {
        this.num_telemovel = num_telemovel;
    }

    public void setNome_utilizador(String nome_utilizador) {
        this.nome_utilizador = nome_utilizador;
    }

}
