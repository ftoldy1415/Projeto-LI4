import React from 'react';
import ReactDOM from 'react-dom';
import { useHistory } from "react-router-dom";
import {useState} from 'react';



import '../CSS/FrontPageUser.css';

function FrontPageUser(){

    const history = useHistory();


    const toMap = () => {





        let path = '/Map';
        history.push(path);        
    }

    const AboutUs = ()=>{
        let path = '/AboutUs';
        history.push(path);
    } 

    const Perfil = () => {
        let path = '/Perfil';
        history.push(path);
    }

    const LogOutUser = () => {

        var data1 = {
            nothing: ""
        }

        fetch('http://127.0.0.1:8080/api/cliente/logout', { 
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data1),
        })

        .catch((error) => {
            console.error('Error:', error);
        })

        let path = '/';
        history.push(path);

    }


    return(
        <div>
            <div className='split left'>
                <div className='centered'>
                <img id="logo" src="logo.png" alt=""></img>
                <br />
                <br />

                <button onClick={toMap}>Mapa</button><br/>
                <button onclick="toCodes()">Códigos Promocionais</button><br/>
                <button onclick="toBookings()">Reservas</button><br/>
                <button onClick={AboutUs}>About Us</button><br/>

                <div className='bottom'>
                    <button onClick={Perfil}>Perfil</button>
                    <button onClick={LogOutUser}>Log Out</button>
                </div>

                </div>
            </div>

            <div className='split right'>
                <div className='centered'>
                    <img src="braga.png" alt="" id="braga"></img>
                </div>
            </div>
        </div>
        
    )
};

export default FrontPageUser;