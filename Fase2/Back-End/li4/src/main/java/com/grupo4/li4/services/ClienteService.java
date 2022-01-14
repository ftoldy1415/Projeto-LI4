package com.grupo4.li4.services;

import com.grupo4.li4.model.AtualizarDadosForm;
import com.grupo4.li4.model.Cliente;
import com.grupo4.li4.model.LoginForm;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.grupo4.li4.repositories.ClienteRepo;

import javax.persistence.EntityNotFoundException;

@Service
public class ClienteService {

    @Autowired
    private ClienteRepo clienteRepo;

    public boolean login(LoginForm lf){
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

}
