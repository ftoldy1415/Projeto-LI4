import React from 'react';
import ReactDOM from 'react-dom';
import { useHistory } from "react-router-dom";


import '../CSS/Restaurante.css';


function Restaurante(){

    const[restaurante,setRestaurante] = useState({
            nome:'',
            rua:'',
            localidade:'',
            num_telefone:'',
            horario:'',
            proprietario:''
        });
    
    const data1 = {
        nothing : ''
    }

    useEffect( ()=>{
        fetch('http://127.0.0.1:8080/api/cliente/dados_cliente', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data1),
    })

    .then(response => {
        return response.json()
    })
    .then((data) => {

        setUser(data);
        console.log(data);

    })
    },[])


    function getAbertura(dia){
        return dia.slice(2,6);
    }
    
    function getFecho(dia){
        return dia.slide(-5);
    }

    let horarioArr = parseHorario(restaurante.horario);

    function parseHorario(horario){
        let arr = horario.spli(";");
    }

    return(
        <div>
            <div className="split left">
                <div className="centered">

                    <h1>{restaurante.nome}</h1>
                    <h2>Avaliação  : X</h2>
                    <button className = "button" onclick="confirm()">Menu</button>
                    <br/>
                    <br/>
                    <button className = "button" onclick="toRestaurant()">Direções</button>
                    <br/>
                    <br/>
                    <button className = "button" onclick="toCodes()">Códigos Promocionais</button>
                    <br/>
                    <br/>
                    <button className = "button" onclick="toReservas()">Reserva</button>
                    <br/>
                    <br/>
                    <button className = "button" onclick="toAval()">Avaliação</button>
                    <br/>
                    <br/>
                    <button className = "button" onclick="toFrontPage()">Voltar</button>
                </div>
            </div>

            <div className="split right">
                <div>

                    <h3>Morada : </h3>
                    <p>{restaurante.rua}</p>

                    <h3>Localidade : </h3>
                    <p>{restaurante.localidade}</p>
                    <h3>Horário : </h3>

                    <h4>Segunda-feira : </h4>
                    <p>{getAbertura(horarioArr[0])} -- {getFecho(horarioArr[0])}</p>

                    <h4>Terça-feira : </h4>
                    <p>{getAbertura(horarioArr[1])} -- {getFecho(horarioArr[1])}</p>

                    <h4>Quarta-feira : </h4>
                    <p>{getAbertura(horarioArr[2])} -- {getFecho(horarioArr[2])}</p>

                    <h4>Quinta-feira : </h4>
                    <p>{getAbertura(horarioArr[3])} -- {getFecho(horarioArr[3])}</p>

                    <h4>Sexta-feira : </h4>
                    <p>{getAbertura(horarioArr[4])} -- {getFecho(horarioArr[4])}</p>

                    <h4>Sábado : </h4>
                    <p>{getAbertura(horarioArr[5])} -- {getFecho(horarioArr[5])}</p>

                    <h4>Domingo : </h4>
                    <p>{getAbertura(horarioArr[6])} -- {getFecho(horarioArr[6])}</p>

                    <h3>Telefone : </h3>
                    <p>{restaurante.num_telefone}</p>
                </div>
            </div>
        </div>
    );
}