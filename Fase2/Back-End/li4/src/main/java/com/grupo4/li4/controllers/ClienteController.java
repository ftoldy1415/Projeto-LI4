package com.grupo4.li4.controllers;

import com.grupo4.li4.model.AtualizarDadosForm;
import com.grupo4.li4.model.Cliente;
import com.grupo4.li4.model.LoginForm;
import netscape.javascript.JSObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import com.grupo4.li4.services.ClienteService;

@RestController
@RequestMapping("api/cliente")
public class ClienteController {

    @Autowired
    private ClienteService clienteService;
    private String nome;

    @GetMapping("/hello")
    public String hello(){
        return this.nome;
    }


    @GetMapping(value = "/login")
    public String login(@RequestBody LoginForm loginForm){
        this.nome = loginForm.getEmail();


        System.out.println(loginForm.toString());

        return "{ \"login\": " + clienteService.login(loginForm) +"}";
    }

    @GetMapping(value = "/logout")
    public void logout(){
        this.nome = null;
    }

    @PostMapping(value = "/registar")
    public void registar(@RequestBody Cliente cliente){
        clienteService.registar(cliente);
    }

    @PostMapping(value = "/alterar_dados")
    public void alterarDados(@RequestBody AtualizarDadosForm atualizarDadosForm ){
        clienteService.atualizarDados(atualizarDadosForm,this.nome);
    }
}
