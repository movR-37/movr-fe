/* eslint-disable no-undef */

import React, { useEffect, useState } from "react";
import { GoogleMap, InfoWindow, Marker } from "@react-google-maps/api";
import axios from 'axios';

function MapLatest() {
    const [lat, setLat] = useState(0);
    const [lng, setLng] = useState(0);
    const [moverLat, setMoverLat] = useState(0);
    const [moverLong, setMoverLong] = useState(0);
    const [moverName, setMoverName] = useState("");
    useEffect(() => {
        navigator.geolocation.getCurrentPosition((position) => {
            setLat(position.coords.latitude);
            setLng(position.coords.longitude);
            console.log(lat, lng)
        })

        async function fetchUser() {
            const response = await axios.get('http://localhost:8000/movers/619eddabff6afc76c61df902');
            const data = response.data;
            setMoverLat(data.latitude);
            setMoverLong(data.longitude);
            setMoverName(data.name);
        }

        fetchUser();


    }, [lat, lng, moverLat, moverLong])


    const markers = [
        {
            id: 2,
            name: moverName,
            position: { lat: moverLat, lng: moverLong }
        },


    ];


    const [activeMarker, setActiveMarker] = useState(null);

    const handleActiveMarker = (marker) => {
        if (marker === activeMarker) {
            return;
        }
        setActiveMarker(marker);
    };

    const handleOnLoad = (map) => {
        const bounds = new google.maps.LatLngBounds();
        markers.forEach(({ position }) => bounds.extend(position));
        // bounds.extend({ lat, lng })
        map.fitBounds(bounds);
    };

    return (
        <GoogleMap
            onLoad={handleOnLoad}
            onClick={() => setActiveMarker(null)}
            mapContainerStyle={{ width: "100vw", height: "100vh" }}
            zoom={50}
            panTo={{ lat, lng }}
        >
            {markers.map(({ id, name, position }) => (
                <Marker
                    key={id}
                    position={position}
                    onClick={() => handleActiveMarker(id)}
                    icon={{
                        url: "https://img.icons8.com/external-konkapp-outline-color-konkapp/64/000000/external-truck-transportation-konkapp-outline-color-konkapp.png",
                        anchor: new google.maps.Point(position.lat, position.lng),
                        scaledSize: new google.maps.Size(75, 75)
                    }}
                >
                    {activeMarker === id ? (
                        <InfoWindow onCloseClick={() => setActiveMarker(null)}>
                            <div>{name}</div>
                        </InfoWindow>
                    ) : null}
                </Marker>
            ))
            }
            <Marker
                id={1}
                position={{ lat, lng }}
                name={"Current Location"}
                onClick={() => handleActiveMarker(1)}
            >
                {activeMarker === 1 ? (
                    <InfoWindow onCloseClick={() => setActiveMarker(null)}>
                        <div>Current Location</div>
                    </InfoWindow>
                ) : null}
            </Marker>
        </GoogleMap >
    );
}

export default MapLatest;
