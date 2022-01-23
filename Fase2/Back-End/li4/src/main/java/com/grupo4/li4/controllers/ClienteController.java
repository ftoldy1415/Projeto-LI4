package com.grupo4.li4.controllers;

import com.grupo4.li4.model.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import com.grupo4.li4.services.AppService;

import java.sql.Date;
import java.sql.Time;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("api/cliente")
public class ClienteController {

    @Autowired
    private AppService appService;

    @GetMapping("/teste")
    public void teste(){
        appService.teste();
    }

    @GetMapping("/hello")
    public String hello(){
        return "";//this.email;
    }

    @CrossOrigin
    @PostMapping(value = "/login")
    public String login(@RequestBody LoginForm loginForm){
        boolean res = appService.loginCliente(loginForm);

        return "{ \"login\": " + res +"}";
    }

    @CrossOrigin
    @PostMapping(value = "/logout")
    public void logout(){
        this.appService.logoutCliente();
    }

    @CrossOrigin
    @PostMapping(value = "/registar")
    public void registar(@RequestBody Cliente cliente){
        cliente.setFiltro_distancia(5);
        cliente.setFiltro_estrelas(5);
        appService.registar(cliente);
    }

    @CrossOrigin
    @PostMapping(value = "/alterar_dados")
    public void alterarDados(@RequestBody AtualizarDadosForm atualizarDadosForm){
        appService.atualizarDados(atualizarDadosForm);
    }

    @CrossOrigin
    @PostMapping(value = "/dados_cliente")
    public Cliente forneceDados() {
        return appService.obtemInfoCliente();
    }

    @CrossOrigin
    @PostMapping(value = "/filtro_distancia")
    public void aterarFiltro(@RequestBody Map<String, Object> input){
        this.appService.alterarFiltro(input);
    }

    @CrossOrigin
    @PostMapping(value = "/avaliacao")
    public void avaliacao(@RequestBody AvaliacaoForm form){
        appService.avaliacao(form);
    }

    @CrossOrigin
    @PostMapping(value = "/reserva")
    public void reserva(@RequestBody Map<String,Object> input){
        // nome, data, hora, num_pessoas, pratos
        String nome = (String) input.get("nome");
        String data = (String) input.get("data");
        String hora = (String) input.get("hora") + ":00";
        String num_pessoas = (String) input.get("num_pessoas");
        List<String> pratos = (List<String>) input.get("pratos");
        Date dataSql = Date.valueOf(data);
        Time timeSql = Time.valueOf(hora);
        System.out.println(timeSql);
        appService.criarReserva(dataSql, timeSql, Integer.parseInt(num_pessoas), nome, pratos);
    }

    @CrossOrigin
    @PostMapping(value = "/filtra_restaurantes")
    public List<Map<String, Object>> filtra_restaurantes(){
        return appService.filtra_restaurantes();
    }

    @CrossOrigin
    @PostMapping(value = "/filtra_restaurantes_estrelas")
    public List<Map<String, Object>> filtra_restaurantes_estrelas(){
        return appService.filtra_restaurantes_estrelas();
    }

    @CrossOrigin
    @PostMapping(value = "/filtra_restaurantes_ambos")
    public List<Map<String, Object>> filtra_restaurantes_ambos(){
        return appService.filtra_restaurantes_ambos();
    }

    @CrossOrigin
    @PostMapping(value = "/recebe_localizacao")
    public void recebeLocalizacao(@RequestBody Map<String,Object> input){
        this.appService.setLat_utilizador((double) input.get("lat"));
        this.appService.setLng_utilizador((double) input.get("lng"));
    }

    @CrossOrigin
    @PostMapping(value = "/filtro_estrelas")
    public void alteraFiltroEstrelas(@RequestBody Map<String,Object> input){
        this.appService.alterarFiltroEstrelas((String) input.get("filtro"));
    }

    @CrossOrigin
    @PostMapping(value = "/set_mapa_atual")
    public void setMapaAtual(@RequestBody Map<String, Object> input){
        this.appService.setMapaAtual((String) input.get("mapa"));
    }

    @CrossOrigin
    @PostMapping(value = "/get_mapa_atual")
    public Map<String, Object> getMapaAtual(){
        Map<String, Object> res = new HashMap<>();
        res.put("mapa", this.appService.getMapaAtual());
        return res;
    }

    @CrossOrigin
    @PostMapping(value = "/get_reservas")
    public List<Map<String, Object>> getReservas(){
        return this.appService.getReservas();
    }


    @CrossOrigin
    @PostMapping(value = "/get_qr_code")
    public byte[] getQRCode(@RequestBody Map<String, String> input){
        return this.appService.getQRCode(input.get("descricao"));
    }


    @CrossOrigin
    @PostMapping(value = "/get_descricoes")
    public List<String> getDescricoes(){
        return this.appService.getDescricoes();
    }

}
