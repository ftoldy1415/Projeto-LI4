import React from 'react';
import ReactDOM from 'react-dom';
import { useHistory } from "react-router-dom";
import {useEffect, useRef, useState} from 'react'

import '../CSS/FrontPageOwner.css';
import EditRestaurant from './ChooseEditRestaurant';

function FrontPageOwner(){

    const history = useHistory();

    const AddRestaurant = () => {
        let path = '/AddRestaurant';
        history.push(path);
    }

    const RemoveRestaurant = () => {
        let path = '/RemoveRestaurant';
        history.push(path);
    }

    const EditRestaurant = () => {
        let path = '/ChooseEditRestaurant';
        history.push(path);        
    }

    const Back = () => {
        let path = '/';
        history.push(path);
    }

    return( 

    <div>
        <div className="split left">
            <div className="centered">

                <img id="logo" src="logo.png" alt=""/>
                <br/>
                <br/>

                <button onClick={AddRestaurant}>Adicionar Restaurante</button><br/>
                <button onClick={RemoveRestaurant}>Remover Restaurante</button><br/>
                <button onClick={EditRestaurant}>Editar Restaurante</button><br/>
                
                <div className="bottom">
                <button onClick={Back}>Log Out</button>
                </div>

            </div>
        </div>

        <div className="split right">
            <div className="centered">

                <h1>Bem-Vindo a Braga</h1>
                <img src="braga.png" alt="" id="braga"/>

            </div>
        </div>
    </div>


    );

}

export default FrontPageOwner;