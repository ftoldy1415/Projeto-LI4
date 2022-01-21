package com.grupo4.li4.model;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.util.List;

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

    @Column(name = "latitude")
    private double latitude;

    @Column(name = "longitude")
    private double longitude;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "proprietario_nif", referencedColumnName = "nif")
    @JsonIgnore
    private Proprietario proprietario;

    @OneToMany(mappedBy = "restaurante", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    private List<Reserva> reservas;

    @ManyToMany
    @JoinTable(
            name = "serve",
            joinColumns = @JoinColumn(name = "restaurante_nome"),
            inverseJoinColumns = @JoinColumn(name = "prato_id"))
    private List<Prato> pratos;

    public Restaurante(){
    }

    public Restaurante(String nome, String rua, String localidade, int num_telefone, String horario){
        this.nome = nome;
        this.rua = rua;
        this.localidade = localidade;
        this.num_telefone = num_telefone;
        this.horario = horario;
        this.proprietario = null;
    }

    public void addPrato(Prato prato){
        this.pratos.add(prato);
    }

    public void addReserva(Reserva r){
        this.addReserva(r);
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

    public List<Prato> getPratos(){
        return this.pratos;
    }

    public double getLatitude(){
        return this.latitude;
    }

    public double getLongitude(){
        return this.longitude;
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
