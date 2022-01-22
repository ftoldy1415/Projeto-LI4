package com.grupo4.li4.model;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.util.List;
import java.util.ArrayList;

@Entity
@Table(name = "prato")
public class Prato {

    @Id
    @GeneratedValue
    @Column(name = "id")
    private int id;

    @Column(name = "nome")
    private String nome;

    @Column(name = "preco")
    private float preco;

    @ManyToMany(mappedBy = "pratos")
    @JsonIgnore
    private List<Restaurante> restaurantes;

    @ManyToMany(mappedBy = "pratos")
    @JsonIgnore
    private List<Reserva> reservas;

    public Prato(){
    }

    public Prato(String nome, float preco){
        this.nome = nome;
        this.preco = preco;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public float getPreco(){
        return this.preco;
    }

    public void setPreco(float preco){
        this.preco = preco;
    }

    /*
    public List<Reserva> getReservas(){
        return this.reservas;
    }
     */

    @Override
    public String toString() {
        return "Prato{" +
                "id=" + id +
                ", nome='" + nome + '\'' +
                ", preco=" + preco +
                '}';
    }
}
