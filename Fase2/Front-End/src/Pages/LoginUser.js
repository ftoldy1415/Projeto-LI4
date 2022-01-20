import React from 'react';
import ReactDOM from 'react-dom';
import { useHistory } from "react-router-dom";
import {useEffect, useRef, useState} from 'react'


import '../CSS/LoginUser.css';

function LoginUser(){

    const [ email , setEmail] = useState('');
    const [ password , setPassword] = useState('');
    const history = useHistory();


    const logInUser = () => {


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

                console.log(data.login)
                let path = '/FrontPageUser';
                history.push(path);
                
            }
            else{
                console.log(data.login)
            }
        })

        .catch((error) => {
            console.error('Error:', error);
        })

        
    }

    const signInUser = () =>{
        let path = '/SignInUser';
        history.push(path);
    }

    const Back = () => {
        let path = '/';
        history.push(path);
    }

    return(
    <div>
        
        <img src="logo.png" alt="" id="firstImg"/>

        <div>
            <form>
                <input 
                    id="email" 
                    type="email" 
                    value={email}
                    onChange={ (e) => setEmail(e.target.value)}                
                    placeholder="Email" /><br/>

                <input 
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
};

export default LoginUser;