package com.grupo4.li4.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "avaliacao")
public class Avaliacao {

    @Id
    private int id_avaliacao;

    @Column(name = "estrelas")
    private int estrelas;

    @Column(name = "comentario")
    private String comentario;

    //ManyToOne -> cliente_nif

    //ManyToOne -> restaurante_nome

    public int getId_avaliacao() {
        return id_avaliacao;
    }

    public void setId_avaliacao(int id_avaliacao) {
        this.id_avaliacao = id_avaliacao;
    }

    public int getEstrelas() {
        return estrelas;
    }

    public void setEstrelas(int estrelas) {
        this.estrelas = estrelas;
    }

    public String getComentario() {
        return comentario;
    }

    public void setComentario(String comentario) {
        this.comentario = comentario;
    }

}
