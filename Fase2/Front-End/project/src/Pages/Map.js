import React from "react";
import {GoogleMap, useLoadScript, Marker, InfoWindow} from "@react-google-maps/api";
import {useState, useEffect} from 'react';


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
    const [restaurants,setRestaurants] = useState([]);
    //const firstRender = useRef(true);

    //const [markers, setMarkers] = useState([{lat:20,lng:20,id: "hello",},{lat:30,lng:30,id: "hey",}]);

    const {isLoaded, loadError} = useLoadScript({
        googleMapsApiKey: "AIzaSyChQt7M_XtYb4zpRdZpiaM6SMd25mOvngA",
        libraries: ["places"],
    }); 



    const getMyLocation = async () => {

        navigator.geolocation.getCurrentPosition(
        (position => {
            setLocation({
                lat: position.coords.latitude,
                lng: position.coords.longitude,
            });        
        }), () => null);

        const response = await fetch('http://127.0.0.1:8080/api/proprietario/obter_restaurantes', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(location),
        });
        const restaurants = await response.json();
        setRestaurants(restaurants);

        console.log()

    };


    useEffect( () => {
        getMyLocation();
    },[]);


    if(loadError) return "Error Loading";
    if(!isLoaded) return "Loading";


    return(
        <div>
            {/* <GoogleMap
            mapContainerStyle={mapContainerStyle}
            zoom={8}
            center={center}
            >
            {
                restaurants.map( (marker) => (
                    <Marker 
                        key={marker.id} 
                        position={ {lat: marker.lat, lng: marker.lng} }
                    />
                ))
            }    
            </GoogleMap> */}
        </div>
    );
}
