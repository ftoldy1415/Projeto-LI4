import React from 'react';
import ReactDOM from 'react-dom';
import { useHistory } from "react-router-dom";


import '../CSS/addRestaurante.css';

function addRestaurante(){

    return(
        <div >
            <h1 >Adicionar Restaurante</h1>
            <div className = "divForm1">
                <form className = "form1" action="">
                    <label for="nome">Nome :</label>
                    <input type="text" id="nome" name = "nome"/>
                    <br/>
                    <br/>

                    <label for="rua">Endereço : </label>
                    <input type="text" name = "rua" id = "rua"/>
                    <br/>
                    <br/>

                    <label for="localidade">Localidade : </label>
                    <input type="text" name = "localidade" id = "localidade"/>
                    <br/>
                    <br/>

                    <label for="telefone">Contacto Telefónico : </label>
                    <input type="text" name = "telefone" id = "telefone"/>
                    <br/>

                    <p>Adicione as suas coordenadas : <span><input type="number" name="lat" id="lat" placeholder="latitude"/></span> e   <span><input type="number" name ="longitude" id="longitude" placeholder="longitude"/></span></p>
                    <div >
                        <h4>Insira o horário :</h4>
                        <label className = "horario" for = "segundaAbertura">Segunda-feira : </label>
                        <input type="time" name="segundaAbertura" id="segundaAbertura"/>
                        <label for="segundaFecho"> -- </label>
                        <input type="time" name="segundaFecho" id="segundaFecho"/>
                        <br/>
                        <br/>
        
                        <label className = "horario" for = "tercaAbertura">Terça-feira : </label>
                        <input className = "horarioTerca" type="time" name="tercaAbertura" id="tercaAbertura"/>
                        <label for="tercaFecho"> -- </label>
                        <input type="time" name="tercaFecho" id="tercaFecho"/>
                        <br/>
                        <br/>


                        <label className = "horario" for = "quartaAbertura">Quarta-feira : </label>
                        <input type="time" name="quartaAbertura" id="quartaAbertura"/>
                        <label for="quartaFecho"> -- </label>
                        <input type="time" name="quartaFecho" id="quartaFecho"/>
                        <br/>
                        <br/>


                        <label className = "horario" for = "quintaAbertura">Quinta-feira : </label>
                        <input type="time" name="quintaAbertura" id="quintaAbertura"/>
                        <label for="quintaFecho"> -- </label>
                        <input type="time" name="quintaFecho" id="quintaFecho"/>
                        <br/>
                        <br/>


                        <label className = "horario" for = "sextaAbertura">Sexta-feira : </label>
                        <input type="time" name="sextaAbertura" id="sextaAbertura"/>
                        <label for="sextaFecho"> -- </label>
                        <input type="time" name="sextaFecho" id="sextaFecho"/>
                        <br/>
                        <br/>


                        <label className = "horario"  for = "sabadoAbertura">Sábado : </label>
                        <input type="time" name="sabadoAbertura" id="sabadoAbertura"/>
                        <label for="sabadoFecho"> -- </label>
                        <input type="time" name="sabadoFecho" id="sabadoFecho"/>
                        <br/>
                        <br/>


                        <label className = "horario" for = "domingoAbertura">Domingo : </label>
                        <input type="time" name="domingoAbertura" id="domingoAbertura"/>
                        <label for="domingoFecho"> -- </label>
                        <input type="time" name="domingoFecho" id="domingoFecho"/>
                    </div>

                </form>
                <button className = "button" onclick="addRestaurant()">Confirmar</button>
                <button className = "button" onclick="toRestaurante()">Cancelar</button>
            </div>

        </div>
    )
}