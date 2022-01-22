import React from 'react';
import { useHistory } from "react-router-dom";
import { useRef } from "react";


import '../CSS/AddRestaurant.css';

function AddRestaurant(){

    const history = useHistory();

    const nome = useRef(null);
    const rua = useRef(null);
    const localidade = useRef(null);
    const num_telefone = useRef(null);
    const lat = useRef(null);
    const lng = useRef(null);
    const aSegunda = useRef(null);
    const fSegunda = useRef(null);
    const aTerca = useRef(null);
    const fTerca = useRef(null);
    const aQuarta = useRef(null);
    const fQuarta = useRef(null);
    const aQuinta = useRef(null);
    const fQuinta = useRef(null);
    const aSexta = useRef(null);
    const fSexta = useRef(null);
    const aSabado = useRef(null);
    const fSabado = useRef(null);
    const aDomingo = useRef(null);
    const fDomingo = useRef(null);



    function handleSubmit(e){
        let horario = createHorario();
        e.preventDefault();

        const data1 = {
            nome: nome.current.value,
            rua: rua.current.value,
            localidade: localidade.current.value,
            num_telefone: num_telefone.current.value,
            horario: horario,
            latitude : lat.current.value,
            longitude : lng.current.value,
        }


        fetch('http://127.0.0.1:8080/api/restaurante/registar', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data1),
            })
            .then((data) => {
                let path = '/FrontPageOwner';
                history.push(path);

            })
            .catch((error) => {
            console.error('Error:', error);
        });    
    }

    function Back(){
        let path = '/FrontPageOwner';
        history.push(path);
    }
    
    function createHorario(){
        let segundaHorario = aSegunda.current.value + "--" + fSegunda.current.value + ";";
        let tercaHorario = aTerca.current.value + "--" + fTerca.current.value +";";
        let quartaHorario = aQuarta.current.value + "--" + fQuarta.current.value +";";
        let quintaHorario = aQuinta.current.value + "--" + fQuinta.current.value +";";
        let sextaHorario = aSexta.current.value + "--" + fSexta.current.value + ";";
        let sabadoHorario = aSabado.current.value + "--" + fSabado.current.value+ ";";
        let domingoHorario = aDomingo.current.value + "--" + fDomingo.current.value + ";";
    
        return segundaHorario + tercaHorario + quartaHorario + quintaHorario + sextaHorario + sabadoHorario + domingoHorario;
    }


    return(
        <div >
            <h1 >Adicionar Restaurante</h1>
            <div className = "divForm1">
                <form className = "form1" onSubmit={handleSubmit} >
                    <label for="nome">Nome :</label>
                    <input type="text" name = "nome" ref={nome}/>
                    <br/>
                    <br/>

                    <label for="rua">Endereço : </label>
                    <input type="text" name = "rua" ref={rua}/>
                    <br/>
                    <br/>

                    <label for="localidade">Localidade : </label>
                    <input type="text" name = "localidade" ref={localidade}/>
                    <br/>
                    <br/>

                    <label for="telefone">Contacto Telefónico : </label>
                    <input type="text" name = "num_telefone"  ref={num_telefone} />
                    <br/>

                    <p>Adicione as suas coordenadas : <span><input type="number" placeholder="lat" ref={lat} step="0.000001" /></span> e   <span><input type="number" placeholder="lng" ref={lng} step="0.000001" /></span></p>
                    <div>
                        <h4>Insira o horário :</h4>
                        <label className = "horario" for = "aSegunda">Segunda-feira : </label>
                        <input type="text" name  = "aSegunda" ref={aSegunda}/>
                        <input type="text" name  = "fSegunda" ref={fSegunda}/>
                        
                        <br/>
                        <br/>
                        <label className = "horario" for = "aTerca">Terca-feira : </label>
                        <input type="text" name  = "aTerca" ref={aTerca}/>
                        <input type="text" name  = "fTerca" ref={fTerca}/>

                        <br/>
                        <br/>
                        <label className = "horario" for = "aQuarta">Quarta-feira : </label>
                        <input type="text" name  = "aQuarta" ref={aQuarta}/>
                        <input type="text" name  = "fQuarta" ref={fQuarta}/>

                        <br/>
                        <br/>
                        <label className = "horario" for = "aQuinta">Quinta-feira : </label>
                        <input type="text" name  = "aQuinta" ref={aQuinta}/>
                        <input type="text" name  = "fQuinta" ref={fQuinta}/>


                        <br/>
                        <br/>
                        <label className = "horario" for = "aSexta">Sexta-Feira: </label>
                        <input type="text" name  = "aSexta" ref={aSexta}/>
                        <input type="text" name  = "fSexta" ref={fSexta}/>

                        <br/>
                        <br/>
                        <label className = "horario" for = "aSabado">Sábado : </label>
                        <input type="text" name  = "aSabado" ref={aSabado}/>
                        <input type="text" name  = "fSabado" ref={fSabado}/>

                        <br/>
                        <br/>
                        <label className = "horario" for = "aDomingo">Domingo : </label>
                        <input type="text" name  = "aDomingo" ref={aDomingo}/>
                        <input type="text" name  = "fDomingo" ref={fDomingo}/>
                        
                    </div>

                    <button type='submit' className ="button" >Confirmar</button>

                </form>
                <button className = "button" onClick={Back}>Cancelar</button>
            </div>

        </div>
    );
}

export default AddRestaurant;