package com.grupo4.li4.controllers;

import com.grupo4.li4.model.LoginForm;
import com.grupo4.li4.model.Proprietario;
import com.grupo4.li4.services.AppService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(value = "api/proprietario")
public class ProprietarioController {

    @Autowired
    private AppService appService;

    private String email;

    @GetMapping(value = "/teste")
    public String teste(){
        return this.email;
    }

    @CrossOrigin
    @PostMapping(value = "/login")
    public String login(@RequestBody LoginForm loginForm){
        boolean res = appService.loginProprietario(loginForm);
        if(res) this.email = loginForm.getEmail();
        return "{ \"login\": " + res +"}";
    }

    @CrossOrigin
    @PostMapping(value = "/logout")
    public void logout(){
        this.email = "nao ta ca ninguem";
    }

    @CrossOrigin
    @PostMapping(value = "/registar")
    public void registar(@RequestBody Proprietario proprietario){
        this.appService.registarProprietario(proprietario);
    }

    public String getEmail(){
        return this.email;
    }


}
