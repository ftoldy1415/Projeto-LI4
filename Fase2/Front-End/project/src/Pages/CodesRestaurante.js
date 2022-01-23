import React from 'react';
import {useState,useEffect} from 'react';


function CodesRestaurante(){

    const [descricoes,setDescricoes] = useState([]);
    const [codigos,setCodigos] = useState([]);
    const [codigo,setCodigo] = useState('');


    const getDescricoes = async () => {
        fetch('http://127.0.0.1:8080/api/cliente/get_descricoes', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(),
        })
        .then(response => {
        })
    }

    // const getCodes = async () => {

    //     for( let i = 0 ; i<descricoes.length ; i++){
    //         getCode(descricoes[i]);
    //         setCodigos({...codigos,codigo});
    //     }

    // }

    useEffect(()=>{
        getDescricoes();
        //getCodes();
    },[]);


    // function getCode(descricao){

    //     const data1 = {
    //         descricao: descricao,
    //     }

    //     catchRainbow(data1)

    //     .catch(error => {
    //         console.log('error!');
    //         console.error(error);
    //     });

    // }

    // async function catchRainbow(data1) {
    //     const response = await fetch('http://127.0.0.1:8080/api/cliente/get_qr_code', {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json',
    //         },
    //         body: JSON.stringify(data1),
    //         });

    //     const blob = await response.blob();
    //     setCodigo(URL.createObjectURL(blob));
    // }


    return(
        <div>
            <h1 style = {{color: "white"}}>Códigos Promocionais</h1>
{/* 
            {
                descricoes.map(
                    (descricao) => {
                        <div className='divAvaliacao'>
                            <p>{descricao.descricao}</p>
                        </div>
                    }
                )
            } */}
            {
                // codigos.map(
                //     (codigo) => {
                //         <div>
                //             <p>{codigo}</p>
                //         </div>
                //     }
                // )
            }
        
        </div>
    );
}

export default CodesRestaurante;