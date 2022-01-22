import React from 'react';
import ReactDOM from 'react-dom';
import { useHistory } from "react-router-dom";
import {useEffect, useRef, useState} from 'react'


import '../CSS/Reservas.css';


function MenuRestaurante() {
    
    const [pratos,setPratos] = useState([]);
    const data1 = {
        nothing: '',
    }
    
    const getPratos= async () => {
        const response = await fetch('http://127.0.0.1:8080/api/proprietario/obter_restaurantes', { // url
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
    

    return(
        <div>
            <h1>Menu do restaurante:</h1>
            {pratos.map(
                (prato) => { return <p>Nome: {prato.nome} Preço: {prato.preco}</p>}
            )}
        </div>
    )
}

export default MenuRestaurante;