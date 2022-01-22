import React from 'react';
import ReactDOM from 'react-dom';
import { useHistory } from "react-router-dom";
import {useEffect, useRef, useState} from 'react'


import '../CSS/AddRestaurant.css';

function EditRestaurant(){
    const[restaurante,setRestaurante] = useState({
            nome:'',
            rua:'',
            localidade:'',
            num_telefone:'',
            horario:'',
            proprietario:''
    });

    const history = useHistory();
    
    const num_telefone = useRef(null);
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

    const codigoDescricao = useRef(null);

    const pratoNome = useRef(null);
    const pratoPreco = useRef(null);

    const data1 = {
        nothing : ''
    }

    useEffect( ()=>{
        fetch('http://127.0.0.1:8080/api/proprietario/obtem_restaurante', {
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
                setRestaurante(data);
            })
    },[]);




    const horarioArr = parseHorario(restaurante.horario);

    function getHora(dia,option) {
        if ( option === 1) return ((dia.split("--"))[0]);
        else return ((dia.split("--"))[1]); 
    }

    function parseHorario(horario){
        return horario.split(';'); 
    }

    const handleSubmit = (e) => {
        
        let horario = createHorario();
        e.preventDefault();

        const data1 = {
            num_telefone: num_telefone.current.value,
            horario: horario,
        }

        fetch('http://127.0.0.1:8080/api/proprietario/alterar_dados', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data1),
        })
        .then(reponse => {
            let path = '/FrontPageOwner';
            history.push(path);
        })
    }

    const handleSubmitCodigo = (e) => {

        const data1 = {
            codigoDescricao: codigoDescricao,
        }

        
        fetch('http://127.0.0.1:8080/api/proprietario/alterar_dados', { ////add codigo
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data1),
        })
        .then(reponse => {
            let path = '/FrontPageOwner';
            history.push(path);
        })
    }


    const handleSubmitPrato = (e) => {

        const data1 = {
            nome: pratoNome,
            preco: pratoPreco,
        }

        fetch('http://127.0.0.1:8080/api/proprietario/inserir_prato', { /////add prato
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data1),
        })
        .then(reponse => {
            let path = '/FrontPageOwner';
            history.push(path);
        })
        
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
    <div>
        <div className="split left">
            <div className="centered">
                <h1>{restaurante.nome}</h1><br></br>
                <h2>{restaurante.num_telefone}</h2> 
                <h3>Horario Atual</h3>

                <h4 style = {{color : 'white'}}>Segunda-feira : </h4>
                <p style = {{color : 'white'}}>{getHora(horarioArr[0],1)}   --  {getHora(horarioArr[0],2)}</p><br/>
                
                <h4 style = {{color : 'white'}}>Terca-feira : </h4>
                <p style = {{color : 'white'}}>{getHora(horarioArr[1],1)}   --  {getHora(horarioArr[1],2)}</p><br/>

                <h4 style = {{color : 'white'}}>Quarta-feira : </h4>
                <p style = {{color : 'white'}}>{getHora(horarioArr[2],1)}   --  {getHora(horarioArr[2],2)}</p><br/>

                <h4 style = {{color : 'white'}}>Quinta-feira : </h4>
                <p style = {{color : 'white'}}>{getHora(horarioArr[3],1)}   --  {getHora(horarioArr[3],2)}</p><br/>

                <h4 style = {{color : 'white'}}>Sexta-feira : </h4>
                <p style = {{color : 'white'}}>{getHora(horarioArr[4],1)}   --  {getHora(horarioArr[4],2)}</p><br/>

                <h4 style = {{color : 'white'}}>Sabado : </h4>
                <p style = {{color : 'white'}}>{getHora(horarioArr[5],1)}   --  {getHora(horarioArr[5],2)}</p><br/>

                <h4 style = {{color : 'white'}}>Domingo : </h4>
                <p style = {{color : 'white'}}>{getHora(horarioArr[6],1)}   --  {getHora(horarioArr[6],2)}</p><br/>
            </div>
        </div>

        {/* <div className="split right">
            <div>
                
                    <h1>Editar dados Restaurante</h1>
                    <form className = "changes" onSubmit= {handleSubmit}>
                        <button className="goBack" onclick="toFrontPage()">Voltar</button>
                        <label for="novoNumero">Novo Número</label>
                        <input type="text" name="novoNumero" ref = {num_telefone}/>

                        <br/><br/>

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

                        <br/><br/>
                        <button type = 'submit' className = "button">Alterar</button>
                    </form>



                    <form className = "codigos" onSubmit= {handleSubmitCodigo}>
                        <label for = "codigoDescricao">Insira a descrição do código que pretende adicionar: </label>
                        <input type="text" name="codigoDescricao" ref={codigoDescricao}/>
                        <button type = 'submit' className = "button">Alterar</button>
                    </form>

                    <form className = "pratos" onSubmit = {handleSubmitPrato}>
                        <label for = "prato"> Insira o nome do prato : </label>
                        <input type="text" name = "prato" ref = {pratoNome}/>
                        <label for = "pratoPreco"> Preco :  </label>
                        <input type= "text" name = "pratoPreco" ref = {pratoPreco}/>
                    </form>

            </div>
        </div>  */}
    </div>
    );
}



export default EditRestaurant;