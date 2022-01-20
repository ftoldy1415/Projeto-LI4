import React from 'react';
import ReactDOM from 'react-dom';
import { useHistory } from "react-router-dom";


import '../CSS/avaliacao.css';

function Avaliacao(){

    const [pontuacao, setPontuacao] = UseState('');
    const [comentario, setComentario] = UseState('Sem comentário');


    const sendAvaliacao = () => {
        var data1 = {
            pontuacao : pontuacao,
            comentario : comentario
        };

        fetch('http://127.0.0.1:8080/api/cliente/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data1),
        })

        .then(response => {
            return response.json()
        })
        .catch((error) => {
            console.error('Error:', error);
        })

    }

    return(
        <div>
            <h1 className = "avalEditor">Avaliação Editor</h1>
            <div className = "divForm1">
                <form className = "form1" action="">
                    <label for="estrelas">Numero de estrelas:</label>
                    <select className = "estrelasInput" name="estrelas" id="estrelas">
                        <option value="0">0</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                    <br/>
                    <br/>
                    <label for = "labels">Coloque a sua opinião aqui:</label>
                    <br/>
                    <textarea className = "textoAval" id="textoAval" name="textoAval" rows="20" cols="100"></textarea>
                    <br/>
                </form>
                <button className = "button" onclick="confirm()">Confirmar</button>
                <button className = "button" onclick="toRestaurante()">Cancelar</button>
            </div>
        </div>
    )
}