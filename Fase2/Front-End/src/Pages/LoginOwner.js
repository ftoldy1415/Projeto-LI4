import React from 'react';
import ReactDOM from 'react-dom';
import { useHistory } from "react-router-dom";
import {useEffect, useRef, useState} from 'react'



function LoginOwner(){

    const [user, setUser] = useState({email: '', palavra_passe: ''});
    const history = useHistory();

    const handleChange = (e) => {

        const name = e.target.name;
        const value = e.target.value;

        setUser( {...user, [name] : value});
    }

    const LoginOwner = () => {

        fetch('http://127.0.0.1:8080/api/proprietario/login', { 
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(user),
        })

        .then(response => {
            return response.json()
        })
        .then((data) => {
            console.log(data.login);
            if(data.login){
                window.location.replace("http://127.0.0.1:5500/HTML/frontPageOwner.html")
            }
            else{
                document.getElementById("response").textContent = "Credencias fornecidas inválidas";
            }
        })
    }

    const Back = () => {
        let path = '/';
        history.push(path);
    }

    return(
    
        <div>
            <img src="logo.png" alt="" id=""/>

            <div>

                <form action="">
                    <input id="email"       type="email"    placeholder="Email"    name='email'         value={user.email}          onChange={handleChange}/><br/>
                    <input id="password"    type="password" placeholder="Password" name='palavra_passe' value={user.palavra_passe}  onChange={handleChange}/>
                </form>
                <button onClick={LoginOwner}>Login</button>
                <button onClick="SignInOwner">Registar</button>

            </div>

            <button id="back" onClick={Back}>Back</button>
        </div>

    )
};

export default LoginOwner;