package com.grupo4.li4.model;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name = "proprietario")
public class Proprietario {
    @Id
    @Column(name = "nif")
    private int nif;

    @Column(name = "nome")
    private String nome;
    @Column(name = "password")
    private String password;
    @Column(name = "email")
    private String email;
    @OneToMany(mappedBy = "proprietario", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    private List<Restaurante> restaurantes;

    public Proprietario(){
    }
/*
    public Proprietario(String email, String nome, String password, int nif, Restaurante restaurante){
        this.email = email;
        this.nome = nome;
        this.password = password;
        this.nif = nif;
        this.restaurante = restaurante;
    }
*/
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

    public List<Restaurante> getRestaurante(){
        return this.restaurantes;
    }

    public void setRestaurante(List<Restaurante> restaurantes) {
        this.restaurantes = restaurantes;
    }

    public Restaurante getRestauranteNome(String nome){
        for(Restaurante r : this.restaurantes){
            if(r.getNome().equals(nome)) return r;
        }
        return null;
    }
}
