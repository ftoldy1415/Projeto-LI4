import React from "react";
import {useEffect, useRef, useState} from 'react'
import Select from 'react-select'
import { useHistory } from "react-router-dom";

import '../CSS/AddRestaurant.css';



function listAvaliacoes(){

    const [avaliacoes,SetAvaliacoes] = useState([]);
    
    const getAvaliacoes= async () => {
        const response = await fetch('http://127.0.0.1:8080/api/proprietario/obter_restaurantes', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data1),
        });
        const avaliacoes = await response.json();
        setAvaliacoes(avaliacoes);
    }

    useEffect( () => {
        getAvaliacoes();
    },[]);

    const handleChange = (e) => {
        setSelected(e.value);
    }

    return(
        <div>
            <h1>Lista de avaliacoes : </h1>
            {
                avaliacoes.map((avaliacao) => (
                    <div>
                        <h2>Pontuação : {avaliacao.estrelas}</h2>
                        <h4>Comentário  : {avaliacao.comentario}</h4>

                    </div>  
                ))
            }
        </div>

    )
}
