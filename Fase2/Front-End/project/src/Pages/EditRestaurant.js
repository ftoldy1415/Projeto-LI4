import React from 'react';
import { useHistory } from "react-router-dom";
import {useEffect, useRef, useState} from 'react';



function EditRestaurant(){

    const history = useHistory();

    const[restaurante,setRestaurante] = useState({
            nome:'',
            rua:'',
            localidade:'',
            num_telefone:'',
            horario:'',
            proprietario:''
    });

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

    function parseHorario(horario){
        return horario.split(';'); 
    }

    function handleSubmit(e) {
        
        let horario = createHorario();
        e.preventDefault();

        const data1 = {
            num_telefone: num_telefone.current.value,
            horario: horario,
        }

        fetch('http://127.0.0.1:8080/api/proprietario/alterar_horario', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data1),
        })

        let path = '/FrontPageOwner';
        history.push(path);

    }

    function handleSubmitNumero(e) {
        e.preventDefault();

        const data1 = {
            num_telefone: num_telefone.current.value,
        }

        fetch('http://127.0.0.1:8080/api/proprietario/alterar_numero', {
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

    function handleSubmitCodigo(e) {

        const data1 = {
            descricao: codigoDescricao.current.value,
        }

        fetch('http://127.0.0.1:8080/api/proprietario/generate_qr_code', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data1),
        })

        let path = '/FrontPageOwner';
        history.push(path);

    }

    function handleSubmitPrato(e) {

        const data1 = {
            nome: pratoNome.current.value,
            preco: pratoPreco.current.value,
        }

        fetch('http://127.0.0.1:8080/api/proprietario/inserir_prato', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data1),
        })
        
        let path = '/FrontPageOwner';
        history.push(path);
        
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
    <div>
        <div className="float-child1">
            <div className="center">
                <h1 className = "colorWhite" >{restaurante.nome}</h1><br/>
                <h2 className = "colorWhite">{restaurante.num_telefone}</h2><br/>
                <h3 className = "colorWhite">Horario Atual</h3>

                <h4 className = "colorWhite">Segunda-feira : </h4>
                <p className = "colorWhite">{horarioArr[0]}</p>
                
                <h4 className = "colorWhite">Terca-feira : </h4>
                <p className = "colorWhite">{horarioArr[1]}</p>

                <h4 className = "colorWhite">Quarta-feira : </h4>
                <p className = "colorWhite">{horarioArr[2]}</p>

                <h4 className = "colorWhite">Quinta-feira : </h4>
                <p className = "colorWhite">{horarioArr[3]}</p>

                <h4 className = "colorWhite">Sexta-feira : </h4>
                <p className = "colorWhite">{horarioArr[4]}</p>

                <h4 className = "colorWhite">Sabado : </h4>
                <p className = "colorWhite">{horarioArr[5]}</p>

                <h4 className = "colorWhite">Domingo : </h4>
                <p className = "colorWhite">{horarioArr[6]}</p><br/>
            </div>
        </div>

        <div className="float-child2">
            <div className = "center">
                
                    <h1>Editar dados Restaurante</h1>
                    <button className="goBack" onClick={Back}>Voltar</button>

                    <form className = "novoNumero" onSubmit={handleSubmitNumero}>
                        <label >Novo Número</label>
                        <input type="text" name="novoNumero" ref = {num_telefone}/>
                        <button type = 'submit' className = "button">Alterar</button>

                    </form>

                    <form className = "changes" onSubmit= {handleSubmit}>


                        <br/><br/>

                        <h4>Insira o novo horário :</h4>
                        <label className = "horario">Segunda-feira : </label>
                        <input type="text" name  = "aSegunda" ref={aSegunda}/>
                        <label for="fSegunda"> -- </label>
                        <input type="text" name  = "fSegunda" ref={fSegunda}/>
                        
                        <br/>
                        <br/>
                        <label className = "horario">Terca-feira : </label>
                        <input type="text" name  = "aTerca" ref={aTerca}/>
                        <label for="fTerca"> -- </label>
                        <input type="text" name  = "fTerca" ref={fTerca}/>

                        <br/>
                        <br/>
                        <label className = "horario">Quarta-feira : </label>
                        <input type="text" name  = "aQuarta" ref={aQuarta}/>
                        <label for="fQuarta"> -- </label>
                        <input type="text" name  = "fQuarta" ref={fQuarta}/>

                        <br/>
                        <br/>
                        <label className = "horario">Quinta-feira : </label>
                        <input type="text" name  = "aQuinta" ref={aQuinta}/>
                        <label for="fQuinta"> -- </label>
                        <input type="text" name  = "fQuinta" ref={fQuinta}/>


                        <br/>
                        <br/>
                        <label className = "horario">Sexta-Feira: </label>
                        <input type="text" name  = "aSexta" ref={aSexta}/>
                        <label for="fSexta"> -- </label>
                        <input type="text" name  = "fSexta" ref={fSexta}/>

                        <br/>
                        <br/>
                        <label className = "horario">Sábado : </label>
                        <input type="text" name  = "aSabado" ref={aSabado}/>
                        <label for="fSabado"> -- </label>
                        <input type="text" name  = "fSabado" ref={fSabado}/>

                        <br/>
                        <br/>
                        <label className = "horario">Domingo : </label>
                        <input type="text" name  = "aDomingo" ref={aDomingo}/>
                        <label for="fDomingo"> -- </label>
                        <input type="text" name  = "fDomingo" ref={fDomingo}/>

                        <br/><br/>
                        <button type = 'submit' className = "button">Alterar</button>
                    </form>



                    <form className = "codigos" onSubmit= {handleSubmitCodigo}>
                        <label>Insira a descrição do código que pretende adicionar: </label>
                        <input type="text" name="codigoDescricao" ref={codigoDescricao}/>
                        <button type = 'submit' className = "button" >Gerar</button>
                    </form>

                    <form className = "pratos" onSubmit = {handleSubmitPrato}>
                        <label> Insira o nome do prato : </label>
                        <input type="text" name = "prato" ref = {pratoNome}/>
                        <label> Preco :  </label>
                        <input type= "text" name = "pratoPreco" ref = {pratoPreco}/>
                        <button type = 'submit' className = "button">Inserir</button>
                    </form>

            </div>
        </div> 
    </div>
    );
}



export default EditRestaurant;