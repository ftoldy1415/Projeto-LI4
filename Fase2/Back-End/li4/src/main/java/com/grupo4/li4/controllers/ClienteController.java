package com.grupo4.li4.controllers;

import com.grupo4.li4.model.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import com.grupo4.li4.services.AppService;

import java.sql.Date;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("api/cliente")
public class ClienteController {

    @Autowired
    private AppService appService;
    private String email;
    private double latitude;
    private double longitude;

    @GetMapping("/teste")
    public void teste(){
        appService.teste();
    }

    @GetMapping("/hello")
    public String hello(){
        return this.email;
    }

    @CrossOrigin
    @PostMapping(value = "/login")
    public String login(@RequestBody LoginForm loginForm){
        boolean res = appService.loginCliente(loginForm);

        if(res) this.email = loginForm.getEmail();

        return "{ \"login\": " + res +"}";
    }

    @CrossOrigin
    @PostMapping(value = "/logout")
    public void logout(){
        this.email = null;
    }

    @CrossOrigin
    @PostMapping(value = "/registar")
    public void registar(@RequestBody Cliente cliente){
        cliente.setFiltro_distancia(5);
        cliente.setFiltro_estrelas(5);
        appService.registar(cliente);
        this.email = cliente.getEmail();
    }

    @CrossOrigin
    @PostMapping(value = "/alterar_dados")
    public void alterarDados(@RequestBody AtualizarDadosForm atualizarDadosForm){
        appService.atualizarDados(atualizarDadosForm,this.email);
    }

    @CrossOrigin
    @PostMapping(value = "/dados_cliente")
    public Cliente forneceDados() {
        return appService.obtemInfoCliente(this.email);
    }

    @CrossOrigin
    @PostMapping(value = "/filtro")
    public void aterarFiltro(){
    }

    @CrossOrigin
    @PostMapping(value = "/avaliacao")
    public void avaliacao(@RequestBody AvaliacaoForm form){
        appService.avaliacao(form,this.email);
    }

    @CrossOrigin
    @PostMapping(value = "/reserva")
    public void reserva(@RequestBody Map<String,Object> input){
        Date dataSql = Date.valueOf((String) input.get("data"));
        int num_pessoas = (Integer) input.get("num_pessoas");
        String nome_restaurante = (String) input.get("nome_restaurante");
        List<String> pratos = (List<String>) input.get("pratos");
        appService.criarReserva(dataSql, num_pessoas, nome_restaurante, pratos, this.email);
    }

    @CrossOrigin
    @PostMapping(value = "/filtra_restaurantes")
    public List<Map<String, Object>> filtra_restaurantes(){
        return appService.filtra_restaurantes(this.latitude, this.longitude, this.email);
    }

    @CrossOrigin
    @PostMapping(value = "/recebe_localizacao")
    public void recebeLocalizacao(@RequestBody Map<String,Object> input){
        this.latitude = (double) input.get("lat");
        this.longitude = (double) input.get("lng");
    }

}
