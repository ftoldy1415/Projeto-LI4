import React from 'react';
import ReactDOM from 'react-dom';
import { useHistory } from "react-router-dom";
import {useEffect, useRef, useState} from 'react'


import '../CSS/Perfil.css';

function Perfil(){

    const [user,setUser] = useState({nif: '', nome:'', email:'', palavra_passe:'', num_telemovel:'', nome_utilizador:''});
    const [userChanged, setUserChanged] = useState({nome:'', palavra_passe:'', num_telemovel:'', nome_utilizador:'', palavra_passe_antiga: ''});
    const [secondPassword, setPassword] = useState('');
    const [kms, setKms] = useState(0);
    const data1 = {nothing: ""};
    const history = useHistory();



    useEffect( ()=>{
    
        fetch('http://127.0.0.1:8080/api/cliente/dados_cliente', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data1),
        })

        .then(response => {
            return response.json();
        })
        .then((data) => {

            setUser(data);

        })
        .catch((error) => {
            console.error('Error:', error);
        });
    },[userChanged]);

    const Back = () => {
        let path = '/FrontPageUser';
        history.push(path);
    }

    const HandleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setUserChanged({...userChanged, [name]:value});
    }

    const SavePerfil = () => {

        console.log(userChanged);
        
        if( secondPassword == userChanged.palavra_passe ){

            fetch('http://127.0.0.1:8080/api/cliente/alterar_dados', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(userChanged),
                })
                .then((data) => {
                    console.log(data);
                })
                .catch((error) => {
                console.error('Error:', error);
            });
        }
    }

    const SaveFilter = () => {


        fetch('http://127.0.0.1:8080/api/cliente/filtro', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(kms),
            })
            .then((data) => {
                console.log(data);
            })
            .catch((error) => {
            console.error('Error:', error);
        });

    }


    return (
    <div>
        <div className="split left">
        <div className="centered">

            <h1>Meu perfil</h1><br />
            <p>Nome: {user.nome}</p>
            <p>Nome de utilizador: {user.nome_utilizador}</p>
            <p>Numero de telemóvel: {user.num_telemovel}</p>
            <p>Email: {user.email}</p>

        </div>
        </div>
 
        <div className="split right">
            <div>

                <form action="">
                    <h1>Editar Perfil</h1>

                    <button className="goBack" onClick={Back}>Go Back</button>

                    <input type="text"      name="nome_utilizador"          placeholder="novo username"         value={userChanged.nome_utilizador}      onChange={HandleChange}/><br/><br/><br/>
                    <input type="text"      name="nome"                     placeholder="novo nome"             value={userChanged.nome}                 onChange={HandleChange}/><br/><br/><br/>
                    <input type="number"    name="num_telemovel"            placeholder="número de telemóvel"   value={userChanged.num_telemovel}        onChange={HandleChange}/><br/><br/><br/>
                    <input type="password"  name="palavra_passe_antiga"     placeholder="password antiga"       value={userChanged.palavra_passe_antiga} onChange={HandleChange}/><br/><br/>
                    <input type="password"  name="palavra_passe"            placeholder="password nova"         value={userChanged.palavra_passe}        onChange={HandleChange}/><br/><br/>
                    <input type="password"                                  placeholder="password nova"                                                  onChange={(e) => setPassword(e.target.value)}/>
                    <br/>

                    <button onClick={SavePerfil}>Guardar Alterações</button>

                    <h1>Alterar distância no filtro</h1>

                    <p>Procuro locais perto de mim em <span><input type="number" className="input-box" id="kilometers" value={kms} onChange={ (e) => setKms(e.target.value) }/></span> km</p>
                    <button onClick={SaveFilter} >Guardar Alterações</button>
                </form>
            </div>
        </div>
    </div>

    );

}

export default Perfil;
