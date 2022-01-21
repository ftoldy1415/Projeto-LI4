package com.grupo4.li4.model;

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
    private List<Restaurante> restaurantes;

    @ManyToMany(mappedBy = "pratos")
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

    /*
    public List<Reserva> getReservas(){
        return this.reservas;
    }
     */

}
