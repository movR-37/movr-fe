/* eslint-disable no-undef */

import React, { useEffect, useState } from "react";
import { GoogleMap, InfoWindow, Marker } from "@react-google-maps/api";



function MapLatest() {

    const [latitude, setLatitude] = useState();
    const [longitude, setLongitude] = useState();

    useEffect(() => {

        getCurrentLocation();
        return () => {
            setLatitude(); // This worked for me
            setLongitude();
        };
        console.log(latitude);
    }, [])


    const getCurrentLocation = () => {

        navigator.geolocation.getCurrentPosition((position) => {
            setLatitude(position.coords.latitude);
            setLongitude(position.coords.longitude);
        })
    }

    const markers = [
        {
            id: 1,
            name: "Driver 1",
            position: { lat: latitude, lng: longitude }
        }

        // {
        //     id: 2,
        //     name: "Driver 2",
        //     position: { lat: 45.5017, lng: -73.5666 }
        // },


        // {
        //     id: 3,
        //     name: "Driver 3",
        //     position: { lat: 45.5017, lng: -73.5685 }
        // },

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
        map.fitBounds(bounds);
    };

    return (
        <GoogleMap
            onLoad={handleOnLoad}
            onClick={() => setActiveMarker(null)}
            mapContainerStyle={{ width: "100vw", height: "100vh" }}
        >
            {markers.map(({ id, name, position }) => (
                <Marker
                    key={id}
                    position={position}
                    onClick={() => handleActiveMarker(id)}
                >
                    {activeMarker === id ? (
                        <InfoWindow onCloseClick={() => setActiveMarker(null)}>
                            <div>{name}</div>
                        </InfoWindow>
                    ) : null}
                </Marker>
            ))}
        </GoogleMap>
    );
}

export default MapLatest;
