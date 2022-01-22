import React from 'react';
import ReactDOM from 'react-dom';
import { useHistory } from "react-router-dom";
import {useEffect, useRef, useState} from 'react'
import Select from 'react-select'


import '../CSS/Reservas.css';

function Reservar(){
    const [pratos,setPratos] = useState([]);
    const [numPeople,setNumPeople] = useState(1);
    const pratosSelected = [];
    const [reserva,setReserva] = useState('');

    const nome = useRef(null);
    const data = useRef(null);
    const hora = useRef(null);

    let history = useHistory();

    const data1 = {nothing : ''};

    const getPratos= async () => {
        const response = await fetch('http://127.0.0.1:8080/api/restaurante/info_pratos', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data1),
        });
        const pratoss = await response.json();
        setPratos(pratoss);
        
        for(let i=0 ; i<pratos.length; i++){
            pratosSelected[i] = 0;
        }
    }

    useEffect( () => {
        getPratos();
    },[]);

    function handleChange(e){

        let {label, value} = e;
        pratosSelected[value] = label;
        
    }

    function getSelects(){
        const ret = [];
        
        for( let i=0 ; i<numPeople ; i++ ){
            const pratosI = [];
            for (let j = 0 ; j<pratos.length ;j++){
                pratosI.push({label : pratos[j].label , value : i});
            }
            ret.push(<Select options={pratosI} onChange={(e)=>handleChange(e)}/>);
        }
        
        return ret;
    }

    function Confirm() {

        const info = {
            nome: nome.current.value,
            data: data.current.value,
            hora: hora.current.value,
            num_pessoas: numPeople,
            pratos: pratosSelected,
        };

        console.log(info);

        fetch('http://127.0.0.1:8080/api/cliente/reserva', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(info),
        })

        let path = '/Restaurante';
        history.push(path);  

    }

    function Back(){
        let path = '/Restaurante';
        history.push(path);        
    }

    return(
        <div>
            <div>
                <h1>Reserva Editor</h1>
                <div className = "divForm1">
                    <form className = "form1" action="">
                        <label  for="nome">Nome: </label>
                        <input type  = "text" name = "nome" ref={nome}/>
                        <br/>
                        <br/>
                        <label for = "data">Data: </label>
                        <input type = "date" name = "data" ref={data}/>
                        <br/>
                        <br/>
                        <label for = "hora">Hora :</label>
                        <input type = "time" name = "hora" ref={hora}/>
                        <br/>
                        <br/>
                        <label  for="numPessoas">Número de Pessoas </label>
                        <input type  = "text" name = "numPessoas" value={numPeople} onChange={(e) => setNumPeople(e.target.value)}/>

                    </form>
                </div>

            </div>

            <h1>Detalhes do pedido</h1>
            <div class = "divForm2">        
                <br/>
                <br/>
                <h1>Selecione o prato : </h1>
                {getSelects()}
                <button className = "button" onClick={Confirm}>Confirmar</button>
                <button className = "button" onClick={Back}>Cancelar</button>

            </div>
        </div>
    );
}

export default Reservar;