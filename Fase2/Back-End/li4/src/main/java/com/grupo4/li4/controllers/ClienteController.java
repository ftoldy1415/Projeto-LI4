package com.grupo4.li4.controllers;

import com.grupo4.li4.model.AtualizarDadosForm;
import com.grupo4.li4.model.Cliente;
import com.grupo4.li4.model.LoginForm;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import com.grupo4.li4.services.AppService;

@RestController
@RequestMapping("api/cliente")
public class ClienteController {

    @Autowired
    private AppService appService;
    private String nome;


    @GetMapping("/teste")
    public void teste(){
        appService.teste();
    }

    @GetMapping("/hello")
    public String hello(){
        return this.nome;
    }

    @CrossOrigin
    @GetMapping(value = "/login")
    public String login(@RequestBody LoginForm loginForm){
        boolean res = appService.loginCliente(loginForm);

        if(res) this.nome = loginForm.getEmail();

        return "{ \"login\": " + res +"}";
    }

    @CrossOrigin
    @GetMapping(value = "/logout")
    public void logout(){
        this.nome = null;
    }

    @CrossOrigin
    @PostMapping(value = "/registar")
    public void registar(@RequestBody Cliente cliente){
        appService.registar(cliente);
    }

    @CrossOrigin
    @PostMapping(value = "/alterar_dados")
    public void alterarDados(@RequestBody AtualizarDadosForm atualizarDadosForm ){
        appService.atualizarDados(atualizarDadosForm,this.nome);
    }
}
