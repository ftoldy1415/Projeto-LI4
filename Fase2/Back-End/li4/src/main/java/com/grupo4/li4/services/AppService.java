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
        if(!clienteRepo.existsById(lf.getEmail())) return false;
        else return clienteRepo.getById(lf.getEmail()).
                                getPalavra_passe().
                                equals(lf.getPalavra_passe());
    }

    public void registar(Cliente cliente){
        clienteRepo.save(cliente);
    }


    public void atualizarDados(AtualizarDadosForm form, String email){
        String nome = form.getNome_utilizador();
        String password = form.getPalavra_passe();
        int num_telemovel = form.getNum_telemovel();

        Cliente c = clienteRepo.getById(email);
        if(!nome.equals("")) c.setNome_utilizador(nome);
        if(!password.equals("")) c.setPalavra_passe(password);
        if(num_telemovel != 0) c.setNum_telemovel(num_telemovel);
        clienteRepo.save(c);
    }

    public void registarProprietario(Proprietario proprietario){
        this.proprietarioRepo.save(proprietario);
    }


    public void registarRestaurante(Restaurante restaurante, String email){
        Proprietario p = proprietarioRepo.getById(email);
        restaurante.setProprietario(p);
        //p.setRestaurante(restaurante);
        restauranteRepo.save(restaurante);
    }

    public boolean loginProprietario(LoginForm loginForm){
        if(!proprietarioRepo.existsById(loginForm.getEmail())) return false;
        else return (proprietarioRepo.getById(loginForm.getEmail())
                                     .getPassword()
                                     .equals(loginForm.getPalavra_passe()));
    }


}
