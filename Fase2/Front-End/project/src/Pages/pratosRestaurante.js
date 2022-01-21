import React from 'react';
import ReactDOM from 'react-dom';
import { useHistory } from "react-router-dom";
import {useEffect, useRef, useState} from 'react'


import '../CSS/Reservas.css';


function pratosRestaurante() {
    
    const [pratos,SetAvaliacoes] = useState([]);
    
    const getPratos= async () => {
        const response = await fetch('http://127.0.0.1:8080/api/proprietario/obter_restaurantes', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data1),
        });
        const pratos = await response.json();
        setPratos(pratos);

    }

    useEffect( () => {
        getPratos();
    },[]);

    const handleChange = (e) => {
        setSelected(e.value);
    }

    
    return(
        <div>
            <h1>Pratos : </h1>
            {
                pratos.map((pratos) => (
                    <div>
                        <h2>Nome : {prato.nome}</h2>
                        <h4>Preco : {prato.preco}</h4>
                    </div>  
                ))
            }
        </div>

    )
}