package com.grupo4.li4.model;

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

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "cliente_nif", referencedColumnName = "nif")
    private Cliente cliente;

    @ManyToOne(fetch = FetchType.LAZY)
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

    public Reserva(Date data, Time hora, int num_pessoas, Cliente cliente, Restaurante restaurante , List<Prato> pratos){
        this.data = data;
        this.hora = hora;
        this.num_pessoas = num_pessoas;
        this.cliente = cliente;
        this.restaurante = restaurante;
        this.pratos = pratos;
    }

    public int getId_reserva(){
        return this.id_reserva;
    }

    public Date getData(){
        return this.data;
    }

    public Time getTime(){
        return this.hora;
    }

}
