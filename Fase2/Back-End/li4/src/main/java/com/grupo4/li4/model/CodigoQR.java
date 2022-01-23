package com.grupo4.li4.model;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;

@Entity
@Table(name = "codigoqr")
public class CodigoQR {
    @Id
    @GeneratedValue
    @Column(name = "id")
    private int id;

    @Column(name = "descricao")
    private String descricao;

    @ManyToOne(fetch = FetchType.LAZY)
    @JsonIgnore
    @JoinColumn(name = "restaurante_nome", referencedColumnName = "nome")
    private Restaurante restaurante;


    public CodigoQR() {
    }

    public CodigoQR(String descricao, Restaurante r){
        this.descricao = descricao;
        this.restaurante = r;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getDescricao() {
        return descricao;
    }

    public void setDescricao(String descricao) {
        this.descricao = descricao;
    }

    public Restaurante getRestaurante() {
        return restaurante;
    }

    public void setRestaurante(Restaurante restaurante) {
        this.restaurante = restaurante;
    }
}
