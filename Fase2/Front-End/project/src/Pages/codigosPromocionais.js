import React from 'react';
import ReactDOM from 'react-dom';
import { useHistory } from "react-router-dom";
import {useState} from 'react';

function codigosPromocionais(){
    const [codigos,setCodigos] = useState([]);
    const images = [];

    const getCodigos= async () => {
        const response = await fetch('http://127.0.0.1:8080/api/restaurante/menu', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data1),
        });
        const codigos = await response.json();
        setCodigos(codigos);


    }

    useEffect( () => {
        getCodigos();
    },[]);


    return (
        <div>
            <h1 class="title">Códigos Promocionais</h1>
            <button class="goBack" onclick="toFrontPage()">Back</button>
            <div>
                {codigos.map(
                    (imagem) => {
                    <div className = "divAvaliacao">
                        {imagem.nome}{magem}€</div>}
                )}
            </div>
        </div>

    )

}