package com.grupo4.li4.controllers;

import com.grupo4.li4.model.*;
import com.grupo4.li4.services.AppService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping(value = "api/proprietario")
public class ProprietarioController {

    @Autowired
    private AppService appService;

    @GetMapping(value = "/teste")
    public String teste(){
        return "";//this.email;
    }

    @CrossOrigin
    @PostMapping(value = "/login")
    public String login(@RequestBody LoginForm loginForm){
        boolean res = appService.loginProprietario(loginForm);
        return "{ \"login\": " + res +"}";
    }

    @CrossOrigin
    @PostMapping(value = "/logout")
    public void logout(){
        this.appService.logoutProprietario();
    }

    @CrossOrigin
    @PostMapping(value = "/registar")
    public void registar(@RequestBody Proprietario proprietario){
        this.appService.registarProprietario(proprietario);
    }

    @CrossOrigin
    @PostMapping(value = "/obtem_restaurante")
    public Map<String,Object> obtemRestaurante(){
        Map<String,Object> res = new HashMap<>();
        Restaurante r = this.appService.obtemRestaurante();
        res.put("nome", r.getNome());
        res.put("rua", r.getRua());
        res.put("localidade", r.getLocalidade());
        res.put("num_telefone", r.getNum_telefone());
        res.put("horario", r.getHorario());
        return res;
    }

    @CrossOrigin
    @PostMapping(value = "/obter_restaurantes")
    public List<Map<String,Object>> obtemRestaurantes(){
        List<Map<String, Object>> res = new ArrayList<>();
        List<Restaurante> rs =  this.appService.obterRestaurantesProprietario();

        for(Restaurante r : rs){
            Map<String, Object> m = new HashMap<>();
            m.put("label", r.getNome());
            m.put("value", r.getNome());
            res.add(m);
        }
        return res;
    }

    @CrossOrigin
    @PostMapping(value = "/remover_restaurante")
    public void removerRestaurante(@RequestBody Map<String,Object> param){
        this.appService.removerRestaurante((String)param.get("nome"));
    }

    @CrossOrigin
    @PostMapping(value = "/nome_restaurante")
    public void restauranteAtual(@RequestBody Map<String, Object> input){
        this.appService.setRestaurante_atual((String) input.get("nome"));
    }

    @CrossOrigin
    @PostMapping(value = "/alterar_numero")
    public void alterar_numero_restaurante(@RequestBody Map<String, Object> input){
        this.appService.alterar_numero_restaurante(input);
    }

    @CrossOrigin
    @PostMapping(value = "/alterar_horario")
    public void alterar_horario_restaurante(@RequestBody Map<String, Object> input){
        this.appService.alterar_horario_restaurante(input);
    }

    @CrossOrigin
    @PostMapping(value = "/inserir_prato")
    public void inserirPrato(@RequestBody Map<String, Object> input){
        this.appService.inserirPrato((String) input.get("nome"), Float.parseFloat((String) input.get("preco")));
    }

    @CrossOrigin
    @PostMapping(value = "/generate_qr_code")
    public void generateQRCode(@RequestBody CodigoQR codigoQR){
        this.appService.generateQRCode(codigoQR);
    }


}
