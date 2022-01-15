package com.grupo4.li4.model;

import javax.persistence.*;

@Entity
@Table(name = "proprietario")
public class Proprietario {
    @Id
    @Column(name = "email")
    private String email;

    @Column(name = "nome")
    private String nome;
    @Column(name = "password")
    private String password;
    @Column(name = "nif")
    private int nif;
    @OneToOne(mappedBy = "proprietario", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    private Restaurante restaurante;

    public Proprietario(){

    }

    public Proprietario(String email, String nome, String password, int nif, Restaurante restaurante){
        this.email = email;
        this.nome = nome;
        this.password = password;
        this.nif = nif;
        this.restaurante = restaurante;
    }

    public int getNif() {
        return nif;
    }

    public void setNif(int nif) {
        this.nif = nif;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public Restaurante getRestaurante() {
        return restaurante;
    }

    public void setRestaurante(Restaurante restaurante) {
        this.restaurante = restaurante;
    }
}
