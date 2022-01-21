package com.grupo4.li4.model;

import javax.persistence.*;

@Entity
@Table(name = "avaliacao")
public class Avaliacao {

    @Id
    @GeneratedValue
    @Column(name = "id_avalicao")
    private int id_avaliacao;

    @Column(name = "estrelas")
    private int estrelas;

    @Column(name = "comentario")
    private String comentario;

    //ManyToOne -> cliente_nif
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "cliente_nif", referencedColumnName = "nif")
    private Cliente cliente;


    //ManyToOne -> restaurante_nome
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "restaurante_nome", referencedColumnName = "nome")
    private Restaurante restaurante;

    public Avaliacao(){

    }

    public Avaliacao(int estrelas, String comentario, Restaurante restaurante, Cliente cliente){
        this.estrelas = estrelas;
        this.comentario = comentario;
        this.restaurante = restaurante;
        this.cliente = cliente;
    }

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
