import React from 'react';
import { useHistory } from "react-router-dom";
import Select from 'react-select'
import {useEffect, useRef, useState} from 'react';

function DeleteReserva(){

    let history = useHistory();

    const [reservas, setReservas] = useState([]);
    const [ids, setIds] = useState([]);

    const data1 = { nothing: ''};

    
    const getReservas = async () => {
        const response = await fetch('http://127.0.0.1:8080/api/restaurante/get_reservas', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data1),
        });
        const reservass = await response.json();
        setReservas(reservass);

        for( let i =0 ; i<reservass.length ; i++ ){

            const info = {
                label: reservass[i].id,
                value: reservass[i].id,
            }

            setIds(oldIds => [...oldIds, info ]);
        }

    }

    useEffect( () => {
        getReservas();
    },[]);


    function Back() {
        let path = '/ChooseDeleteReserva';
        history.push(path);  
    }


    return(
        <div>
            <h1 style={{color:"white"}}>As reservas existentes neste restaurante : </h1>
            <div className = "divGrey">
                {
                    // reservas.map((reserva) => (
                    //     <div className="divAvaliacao">
                    //         <p style={{color:"black"}}>Restaurante : {reserva.nome_restaurante}</p>
                    //         <p style={{color:"black"}}>Dia :    {reserva.data}</p>
                    //         <p style={{color:"black"}}>Hora :   {reserva.hora}</p>
                    //         <p style={{color:"black"}}>Número de    pessoas : {reserva.num_pessoas}</p>
                    //         <p style={{color:"black"}}>Representante  : {reserva.nome}</p>
                    //         <p style={{color:"black"}}>Pratos  :    {getPratos(reserva.pratos)}</p>

                    //     </div>  
                    // ))
                }

            <button onClick={Back}>Back</button>
            </div>
        </div>

    );
}

export default DeleteReserva;