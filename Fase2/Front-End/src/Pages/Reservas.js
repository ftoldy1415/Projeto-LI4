import React from 'react';
import ReactDOM from 'react-dom';
import { useHistory } from "react-router-dom";
import {useEffect, useRef, useState} from 'react'


import '../CSS/reservas.css';

function addReservas(){
    return(
        <div>
            <div>
                <h1>Reserva Editor</h1>
                <div className = "divForm1">
                    <form className = "form1" action="">
                        <label  for="nome">Nome: </label>
                        <input className = "nomeInputs" type  = "text" id = "nome" name = "nome"/>
                        <br/>
                        <br/>
                        <label for = "data">Data: </label>
                        <input className = "date" type = "date" id = "data" name = "data"/>
                        <br/>
                        <br/>
                        <label for = "hora">Hora :</label>
                        <input className = "horaInput" type = "time" id = "hora" name = "hora"/>
                        <br/>
                        <br/>
                        <label  for="numPessoas">Número de Pessoas </label>
                        <input className = "numPessoas" type  = "text" id = "numPessoas" name = "numPessoas"/>


                    </form>
                </div>

            </div>

            <h1>Detalhes do pedido</h1>
            <div class = "divForm2">        
                <br/>
                <br/>
                <button className = "button" onclick="confirm()">Confirmar</button>
                <button className = "button" onclick="toRestaurante()">Cancelar</button>

            </div>
        </div>
    )
}