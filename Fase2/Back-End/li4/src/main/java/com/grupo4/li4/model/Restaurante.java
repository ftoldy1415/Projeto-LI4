package com.grupo4.li4.model;

import javax.persistence.*;

@Entity
@Table(name = "restaurante")
public class Restaurante {
    @Id
    private String nome;

    @Column(name = "rua")
    private String rua;
    @Column(name = "localidade")
    private String localidade;
    @Column(name = "num_telefone")
    private int num_telefone;
    @Column(name = "horario")
    private String horario;
    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "proprietario_email", referencedColumnName = "email")
    private Proprietario proprietario;


    public Restaurante(){

    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getRua() {
        return rua;
    }

    public void setRua(String rua) {
        this.rua = rua;
    }

    public String getLocalidade() {
        return localidade;
    }

    public void setLocalidade(String localidade) {
        this.localidade = localidade;
    }

    public int getNum_telefone() {
        return num_telefone;
    }

    public void setNum_telefone(int num_telefone) {
        this.num_telefone = num_telefone;
    }

    public String getHorario() {
        return horario;
    }

    public void setHorario(String horario) {
        this.horario = horario;
    }

    public Proprietario getProprietario() {
        return proprietario;
    }

    public void setProprietario(Proprietario proprietario) {
        this.proprietario = proprietario;
    }

    @Override
    public String toString() {
        return "Restaurante{" +
                "nome='" + nome + '\'' +
                ", rua='" + rua + '\'' +
                ", localidade='" + localidade + '\'' +
                ", num_telefone=" + num_telefone +
                ", horario='" + horario + '\'' +
                ", proprietario=" + proprietario +
                '}';
    }
}
