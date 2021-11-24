/* eslint-disable no-undef */

import React, { useEffect, useState } from "react";
import { GoogleMap, InfoWindow, Marker } from "@react-google-maps/api";

function MapLatest() {
    const [lat, setLat] = useState(0);
    const [lng, setLng] = useState(0);
    useEffect(() => {
        navigator.geolocation.getCurrentPosition((position) => {
            setLat(position.coords.latitude);
            setLng(position.coords.longitude);
            console.log(lat, lng)
        })

    }, [lat, lng])

    const markers = [
        {
            id: 2,
            name: "Driver 2",
            position: { lat: 45.5130, lng: -73.5666 }
        },


        {
            id: 3,
            name: "Driver 3",
            position: { lat: 45.512, lng: -73.5685 }
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
