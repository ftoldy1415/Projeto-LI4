import React from "react";
import {useEffect, useRef, useState} from 'react'
import Select from 'react-select'
import { useHistory } from "react-router-dom";

import '../CSS/AddRestaurant.css';



function ChooseEditRestaurant(){

    const [restaurantes, setRestaurantes] = useState([]);
    const [selected, setSelected] = useState('');
    let history = useHistory();


    const data1 = { nothing: ''};

    const getRestaurants = async () => {
        const response = await fetch('http://127.0.0.1:8080/api/proprietario/obter_restaurantes', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data1),
        });
        const restaurants = await response.json();
        setRestaurantes(restaurants);
    }

    useEffect( () => {
        getRestaurants();
    },[]);

    const handleChange = (e) => {
        setSelected(e.value);
    }

    const Edit = () => {

        const data1 = {
            nome: selected
        }
        
        fetch('http://127.0.0.1:8080/api/proprietario/nome_restaurante', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data1),
        })
        .catch((error) => {
            console.error('Error:', error);
        });

        let path = '/EditRestaurant';
        history.push(path);   
    }

    const Back = () => {
        let path = '/FrontPageOwner';
        history.push(path);         
    }


    return(
        <div>
            <h1>Selecione o restaurante que pretende editar : </h1>
            <Select options={restaurantes} onChange={handleChange}/>
            <button onClick={Edit}>Editar</button>
            <button onClick={Back}>Back</button>
        </div>

    );
}

export default ChooseEditRestaurant;
