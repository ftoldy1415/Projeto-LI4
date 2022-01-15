package com.grupo4.li4.controllers;

import com.grupo4.li4.model.Restaurante;
import com.grupo4.li4.services.AppService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("api/restaurante")
public class RestauranteController {

    @Autowired
    private AppService appService;

    @Autowired
    private ProprietarioController proprietarioController;

    @PostMapping(value = "/registar")
    public void registarRestaurante(@RequestBody Restaurante restaurante){
        appService.registarRestaurante(restaurante, proprietarioController.getEmail());
    }



}
