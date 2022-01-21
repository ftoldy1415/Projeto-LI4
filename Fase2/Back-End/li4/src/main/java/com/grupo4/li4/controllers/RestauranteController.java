package com.grupo4.li4.controllers;

import com.grupo4.li4.model.Restaurante;
import com.grupo4.li4.services.AppService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("api/restaurante")
public class RestauranteController {

    @Autowired
    private AppService appService;

    @Autowired
    private ProprietarioController proprietarioController;

    @CrossOrigin
    @PostMapping(value = "/registar")
    public void registarRestaurante(@RequestBody Restaurante restaurante){
        System.out.println("latitude: " + restaurante.getLatitude());
        System.out.println("longitude: " + restaurante.getLongitude());
        appService.registarRestaurante(restaurante, proprietarioController.getEmail());
    }

    @CrossOrigin
    @PostMapping(value = "/obtem_info")
    public Restaurante obterInfo(@RequestBody Map<String,Object> nome){
        return this.appService.obtemInfoRestaurante((String) nome.get("nome"));
    }


}
