package com.grupo4.li4.controllers;

import com.grupo4.li4.model.Prato;
import com.grupo4.li4.model.Restaurante;
import com.grupo4.li4.services.AppService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("api/restaurante")
public class RestauranteController {



    @Autowired
    private AppService appService;


    @CrossOrigin
    @PostMapping(value = "/registar")
    public void registarRestaurante(@RequestBody Restaurante restaurante){
        System.out.println("latitude: " + restaurante.getLatitude());
        System.out.println("longitude: " + restaurante.getLongitude());
        appService.registarRestaurante(restaurante);
    }

    @CrossOrigin
    @PostMapping(value = "/obtem_info")
    public Restaurante obterInfo(@RequestBody Map<String,Object> nome){
        return this.appService.obtemInfoRestaurante((String) nome.get("nome"));
    }

    @CrossOrigin
    @PostMapping(value = "/recebe_coordenadas")
    public void recebeCoordenadas(@RequestBody Map<String,Object> input){
        this.appService.setLat_restaurante((double) input.get("lat"));
        this.appService.setLng_restaurante((double) input.get("lng"));
    }

    @CrossOrigin
    @PostMapping(value = "/info_restaurante")
    public Restaurante infoRestaurante(){
        return this.appService.infoRestauranteCoordenadas();
    }

    @CrossOrigin
    @PostMapping(value = "/info_pratos")
    public List<Map<String,Object>> infoPratos(){
        return this.appService.infoPratos();
    }

}
