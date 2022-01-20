import React from 'react';
import ReactDOM from 'react-dom';
import { useHistory } from "react-router-dom";


import '../CSS/addRestaurante.css';

function changeRestaurante(){
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
                <h1>Nome Restaurante</h1>
                <h3>Horario Atual</h3>
                <h4>Segunda-feira : </h4>
                <p>{getAbertura(horarioArr[0])} -- {getFech(horarioArr[0])}</p>

                <h4>Terça-feira : </h4>
                <p>{getAbertura(horarioArr[1])} -- {getFech(horarioArr[1])}</p>

                <h4>Quarta-feira : </h4>
                <p>{getAbertura(horarioArr[2])} -- {getFech(horarioArr[2])}</p>

                <h4>Quinta-feira : </h4>
                <p>{getAbertura(horarioArr[3])} -- {getFech(horarioArr[3])}</p>

                <h4>Sexta-feira : </h4>
                <p>{getAbertura(horarioArr[4])} -- {getFech(horarioArr[4])}</p>

                <h4>Sábado : </h4>
                <p>{getAbertura(horarioArr[5])} -- {getFech(horarioArr[5])}</p>

                <h4>Domingo : </h4>
                <p>{getAbertura(horarioArr[6])} -- {getFech(horarioArr[6])}</p>

            </div>
        </div>

        <div className="split right">
            <div>
                <form action="">
                    <h1>Editar dados Restaurante</h1>

                    <button className="goBack" onclick="toFrontPage()">Voltar</button>
                    <label for="novoNumero">Novo Número</label>
                    <input type="text" name="novoNumero" id="novoNumero"/>
                    <button onclick="">Alterar</button>
                    <br/><br/>

                    <label className = "horario" for = "Abertura">Insira o dia que pretende alterar no formato que vê à sua esquerda : </       label>
                    <input type="time" name="Abertura" id="Abertura"/>
                    <label for="quartaFecho"> -- </label>
                    <input type="time" name="Fecho" id="Fecho"/>
                    <button onclick="">Alterar</button>
                    <br/><br/>
                    <label for = "codigoDescricao">Insira a descrição do código que pretende adicionar:
                    </label>
                    <input type="text" name="codigoDescricao" id="codigoDescricao"/>

                </form>
            </div>
        </div>
    </div>
    )

}