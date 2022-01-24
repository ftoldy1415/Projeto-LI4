package com.grupo4.li4.controllers;

import com.grupo4.li4.model.CodigoQR;
import com.grupo4.li4.model.Prato;
import com.grupo4.li4.model.Restaurante;
import com.grupo4.li4.services.AppService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.web.bind.annotation.*;
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
        double lat = (double) input.get("lat");
        double lng = (double) input.get("lng");
        this.appService.setLat_restaurante(lat);
        this.appService.setLng_restaurante(lng);
        this.appService.setRestauranteAtualCoord(lat, lng);
    }

    @CrossOrigin
    @PostMapping(value = "/info_restaurante")
    public Map<String, Object> infoRestaurante(){
        return this.appService.infoRestauranteCoordenadas();
    }

    @CrossOrigin
    @PostMapping(value = "/info_pratos")
    public List<Map<String,Object>> infoPratos(){
        return this.appService.infoPratos();
    }

    @CrossOrigin
    @PostMapping(value = "/menu")
    public List<Prato> menu(){
        return this.appService.menu();
    }

    @CrossOrigin
    @PostMapping(value = "/get_reservas")
    public List<Map<String, Object>> getReservasRestaurante(){
        return this.appService.getReservasRestaurante();
    }

}
