package com.grupo4.li4.model;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.annotation.processing.Generated;
import javax.persistence.*;
import java.sql.Date;
import java.sql.Time;
import java.util.List;

@Entity
@Table(name = "reserva")
public class Reserva {

    @Id
    @GeneratedValue
    @Column(name = "idreserva")
    private int id_reserva;
    @Column(name = "data")
    private Date data;

    @Column(name = "hora")
    private Time hora;

    @Column(name = "num_pessoas")
    private int num_pessoas;

    @Column(name = "nome")
    private String nome;

    @ManyToOne(fetch = FetchType.LAZY)
    @JsonIgnore
    @JoinColumn(name = "cliente_nif", referencedColumnName = "nif")
    private Cliente cliente;

    @ManyToOne(fetch = FetchType.LAZY)
    @JsonIgnore
    @JoinColumn(name = "restaurante_nome", referencedColumnName = "nome")
    private Restaurante restaurante;


    @ManyToMany
    @JoinTable(
            name = "engloba",
            joinColumns = @JoinColumn(name = "reserva_idreserva"),
            inverseJoinColumns = @JoinColumn(name = "prato_id"))
    private List<Prato> pratos;



    public Reserva(){
    }

    public Reserva(Date data, Time hora, int num_pessoas, String nome, Cliente cliente, Restaurante restaurante , List<Prato> pratos){
        this.data = data;
        this.hora = hora;
        this.num_pessoas = num_pessoas;
        this.nome = nome;
        this.cliente = cliente;
        this.restaurante = restaurante;
        this.pratos = pratos;
    }

    public int getId_reserva() {
        return id_reserva;
    }

    public void setId_reserva(int id_reserva) {
        this.id_reserva = id_reserva;
    }

    public Date getData() {
        return data;
    }

    public void setData(Date data) {
        this.data = data;
    }

    public Time getHora() {
        return hora;
    }

    public void setHora(Time hora) {
        this.hora = hora;
    }

    public int getNum_pessoas() {
        return num_pessoas;
    }

    public void setNum_pessoas(int num_pessoas) {
        this.num_pessoas = num_pessoas;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public Cliente getCliente() {
        return cliente;
    }

    public void setCliente(Cliente cliente) {
        this.cliente = cliente;
    }

    public Restaurante getRestaurante() {
        return restaurante;
    }

    public void setRestaurante(Restaurante restaurante) {
        this.restaurante = restaurante;
    }

    public List<Prato> getPratos() {
        return pratos;
    }

    public void setPratos(List<Prato> pratos) {
        this.pratos = pratos;
    }
}
