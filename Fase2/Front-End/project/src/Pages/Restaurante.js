import React from 'react';
import ReactDOM from 'react-dom';
import { useHistory } from "react-router-dom";
import {useState, useEffect} from 'react';



import '../CSS/Restaurante.css';


function Restaurante(){

    const history = useHistory();

    const[restaurante,setRestaurante] = useState({
            nome:'',
            rua:'',
            localidade:'',
            num_telefone:'',
            horario:'',
            latitude:'',
            longitude:'',
            estrelas:''
        });
    
    const data1 = {
        nothing : ''
    }

    useEffect(()=>{
        fetch('http://127.0.0.1:8080/api/restaurante/info_restaurante', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data1),
        })
        .then(response => {
            return response.json()
        })
        .then(data => setRestaurante(data));
    },[]);

    const horarioArr = parseHorario(restaurante.horario);

    function parseHorario(horario){
        return horario.split(';');
    }

    function toMenu(){
        let path = '/MenuRestaurante';
        history.push(path);
    }

    function toRestaurant(){
        window.open(`https://www.google.com/maps?saddr=My+Location&daddr=${restaurante.latitude},${restaurante.longitude}`);
    }

    function toReservas(){
        let path = '/Reservar';
        history.push(path);
    }

    function toAval(){
        let path = '/Avaliar';
        history.push(path); 
    }

    function Back(){

        fetch('http://127.0.0.1:8080/api/cliente/get_mapa_atual', { /////url
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({nothing: ''}),
        })
        .then(response => response.json())
        .then(data => {

        let path = '';

            switch(data.mapa){
                case "distancia":
                    path = '/MapDistancia';
                    history.push(path);          
                    break;     

                case "classificacao":
                    path = '/MapClassificacao';
                    history.push(path);          
                    break;     
                    
                case "ambos":
                    path = '/MapAmbos';
                    history.push(path);          
                    break;     
            }

        })
    }

    return(
        <div>
            <div className="split left">
                <div className="centered">

                    <h1>{restaurante.nome}</h1>
                    <h2>Avaliação  : {restaurante.estrelas}</h2>
                    <button className = "button" onClick={toMenu}>Menu</button>
                    <br/>
                    <br/>
                    <button className = "button" onClick={toRestaurant}>Direções</button>
                    <br/>
                    <br/>
                    <button className = "button" onclick="toCodes()">Códigos Promocionais</button>
                    <br/>
                    <br/>
                    <button className = "button" onClick={toReservas}>Reserva</button>
                    <br/>
                    <br/>
                    <button className = "button" onClick={toAval}>Avaliação</button>
                    <br/>
                    <br/>
                    <button className = "button" onClick={Back}>Voltar</button>
                </div>
            </div>

            <div className="split right">
                <div>

                    <h3>Rua : </h3>
                    <p style = {{color : 'black'}}>{restaurante.rua}</p><br/>

                    <h3>Localidade : </h3>
                    <p style = {{color : 'black'}}>{restaurante.localidade}</p><br/>

                    <h3>Horário : </h3>

                    <h4 style = {{color : 'black'}}>Segunda-feira : </h4>
                    <p style = {{color : 'black'}}>{horarioArr[0]}</p><br/>
                    
                    
                    <h4 style = {{color : 'black'}}>Terca-feira : </h4>
                    <p style = {{color : 'black'}}>{horarioArr[1]}</p><br/>

                    <h4 style = {{color : 'black'}}>Quarta-feira : </h4>
                    <p style = {{color : 'black'}}>{horarioArr[2]}</p><br/>

                    <h4 style = {{color : 'black'}}>Quinta-feira : </h4>
                    <p style = {{color : 'black'}}>{horarioArr[3]}</p><br/>

                    <h4 style = {{color : 'black'}}>Sexta-feira : </h4>
                    <p style = {{color : 'black'}}>{horarioArr[4]}</p><br/>

                    <h4 style = {{color : 'black'}}>Sabado : </h4>
                    <p style = {{color : 'black'}}>{horarioArr[5]}</p><br/>

                    <h4 style = {{color : 'black'}}>Domingo : </h4>
                    <p style = {{color : 'black'}}>{horarioArr[6]}</p><br/>

                    <h3>Telefone : </h3>
                    <p style = {{color : 'black'}}>{restaurante.num_telefone}</p>
                </div>
            </div> 
        </div>
    );
}

export default Restaurante;