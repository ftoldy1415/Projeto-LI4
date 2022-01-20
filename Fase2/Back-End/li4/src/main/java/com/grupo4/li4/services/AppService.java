package com.grupo4.li4.services;

import com.grupo4.li4.model.*;
import com.grupo4.li4.repositories.ProprietarioRepo;
import com.grupo4.li4.repositories.RestauranteRepo;
import org.springframework.beans.factory.annotation.Autowired;
import com.grupo4.li4.repositories.ClienteRepo;
import org.springframework.stereotype.Service;

@Service
public class AppService {

    @Autowired
    private ClienteRepo clienteRepo;

    @Autowired
    private RestauranteRepo restauranteRepo;

    @Autowired
    private ProprietarioRepo proprietarioRepo;


    public boolean loginCliente(LoginForm lf){
        if(clienteRepo.encontraPorEmail(lf.getEmail()) == null) return false;
        else return clienteRepo.encontraPorEmail(lf.getEmail()).
                                getPalavra_passe().
                                equals(lf.getPalavra_passe());
    }

    public void registar(Cliente cliente){
        clienteRepo.save(cliente);
    }


    public String atualizarDados(AtualizarDadosForm form, String email){
        String nome = form.getNome();
        String nome_utilizador = form.getNome_utilizador();
        String palavra_passe = form.getPalavra_passe();
        String num_telemovel = form.getNum_telemovel();
        String palavra_passe_antiga = form.getPalavra_passe_antiga();
        String novo_email = form.getEmail();


        Cliente c = clienteRepo.encontraPorEmail(email);
        if(palavra_passe_antiga.equals(c.getPalavra_passe())){
            if(!nome.equals("")) c.setNome(nome);
            if(!nome_utilizador.equals("")) c.setNome_utilizador(nome);
            if(!palavra_passe.equals("")) c.setPalavra_passe(palavra_passe);
            if(!num_telemovel.equals("")) c.setNum_telemovel(Integer.parseInt(num_telemovel));
            if(!novo_email.equals("")) c.setEmail(novo_email);
            clienteRepo.save(c);
        }
        return novo_email;
    }

    public void registarProprietario(Proprietario proprietario){
        System.out.println(proprietario.getEmail());
        System.out.println(proprietario.getNif());
        this.proprietarioRepo.save(proprietario);
    }


    public void registarRestaurante(Restaurante restaurante, String email){
        Proprietario p = proprietarioRepo.encontraPorEmail(email);
        restaurante.setProprietario(p);
        restauranteRepo.save(restaurante);
    }

    public boolean loginProprietario(LoginForm loginForm){
        if(proprietarioRepo.encontraPorEmail(loginForm.getEmail()) == null) return false;
        else return (proprietarioRepo.encontraPorEmail(loginForm.getEmail())
                                     .getPassword()
                                     .equals(loginForm.getPalavra_passe()));
    }

    public Restaurante obtemInfoRestaurante(String nome){
        Restaurante r = restauranteRepo.getById(nome);
        return new Restaurante(r.getNome(), r.getRua(), r.getLocalidade(), r.getNum_telefone(), r.getHorario());
    }

    public Cliente obtemInfoCliente(String email){
        return this.clienteRepo.encontraPorEmail(email);
    }

    public Restaurante obtemRestaurante(String nome, String email){
        return this.proprietarioRepo.encontraPorEmail(email).getRestauranteNome(nome);
    }

    public void teste(){
    }

}
