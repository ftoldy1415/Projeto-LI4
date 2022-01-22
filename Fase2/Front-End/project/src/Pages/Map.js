import React from "react";
import {GoogleMap, useLoadScript, Marker, InfoWindow} from "@react-google-maps/api";
import {useState, useEffect} from 'react';
import { useHistory } from "react-router-dom";



const mapContainerStyle = {
    width: "90vw",
    height: "90vh",
};
const center = {
    lat: -23,
    lng: 23,
};



export default function Map(){

    const [location, setLocation] = useState('');
    const [restaurantes, setRestaurantes] = useState([]);
    const data1 = { nothing: ''};
    const history = useHistory();


    const {isLoaded, loadError} = useLoadScript({
        googleMapsApiKey: "AIzaSyChQt7M_XtYb4zpRdZpiaM6SMd25mOvngA",
        libraries: ["places"],
    }); 


    const getLocation = async () => {
            navigator.geolocation.getCurrentPosition(
            (position => 
                setLocation({
                lat: position.coords.latitude,
                lng: position.coords.longitude,
                })
        ));
    } 


    const getRestaurants = async () => {

        const response = await fetch('http://127.0.0.1:8080/api/cliente/filtra_restaurantes', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data1),
        });
        const restaurants = await response.json();
        setRestaurantes(restaurants);
    }

    useEffect( () => {
        getLocation();
        getRestaurants();
    },[]);

    
    const goToRestaurant = (e) => {

        const data1 = {
            lat: e.latLng.lat(),
            lng: e.latLng.lng(),
        }

        fetch('http://127.0.0.1:8080/api/restaurante/recebe_coordenadas', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data1),
        });

        let path = '/Restaurante';
        history.push(path); 

    }
 

    if(loadError) return "Error Loading";
    if(!isLoaded) return "Loading";


    return(
        <div>
            <GoogleMap
            mapContainerStyle={mapContainerStyle}
            zoom={8}
            center={location}
            >
            {
                restaurantes.map( (marker) => (
                    <Marker 
                        key={marker.id} 
                        position={ {lat: marker.lat, lng: marker.lng} }
                        onClick={goToRestaurant}
                    />
                ))
            }    
            </GoogleMap>
        </div> 
    );
}
