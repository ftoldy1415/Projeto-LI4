import React from 'react';
import ReactDOM from 'react-dom';
import { useHistory } from "react-router-dom";
import {useEffect, useRef, useState} from 'react'



function LoginUser(){

    const history = useHistory();

    const [ email , setEmail] = useState('');
    const [ password , setPassword] = useState('');


    function logInUser() {

        var data1 = {
            email : email,
            palavra_passe : password
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
        .then((data) => {
            if(data.login){
                let path = '/FrontPageUser';
                history.push(path);
            }
            else{
                console.log(data.login)
            }
        })
        .catch(error => console.log(error));
    }

    function signInUser() {
        let path = '/SignInUser';
        history.push(path);
    }

    function Back() {
        let path = '/';
        history.push(path);
    }

    return(
    <div className = "center">
        
        <img src="logo.png" alt="" id="firstImg"/>

        <div >
            <form>
                <input className = "caixasTextoOrange" 
                    id="email" 
                    type="email" 
                    value={email}
                    onChange={ (e) => setEmail(e.target.value)}                
                    placeholder="Email" /><br/>

                <input className = "caixasTextoOrange"
                    id="password" 
                    type="password" 
                    value={password}
                    onChange={ (e) => setPassword(e.target.value)}
                    placeholder="Password"/>
            </form>
            <button onClick={logInUser}>Login</button>
            <button onClick={signInUser}>Sign In</button>
        </div>

        <button id="back" onClick={Back}>Back</button>

    </div>
    )
}

export default LoginUser;