import React from 'react';
import { useHistory } from "react-router-dom";
import {useState,useEffect} from 'react';

function Codes(){

    const [descricoes,setDescricoes] = useState([]);


    const getDescricoes = async () => {
        fetch('', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(),
        })
        .then(response => {
            return response.json()
        })
        .then((data) => {
            setDescricoes(data);
            console.log(data);
        })
    }

    useEffect( ()=>{
        console.log("hello");
        getDescricoes();
    },[]);




    return(<h1>hello</h1>);
}

export default Codes;