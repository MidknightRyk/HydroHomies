import React from "react";
import { useGoogleMaps } from "react-hook-google-maps";

// based on https://developers.google.com/maps/documentation/javascript/adding-a-google-map
const melb = { lat: -37.8136, lng: 144.9631 };

const data = "https://data.melbourne.vic.gov.au/resource/h4ih-tzqs.geojson";

export const Map = React.memo(function Map() {
    const { ref, map, google } = useGoogleMaps(
        "AIzaSyAhS6x_m-g8WE9QHArKO63hlMzLD5ItcCU",
        {
            zoom: 13,
            center: melb,
        },
    );
    console.log("render MapWithMarkers");


    if (map) {
        // execute when map object is ready
        const geoJson = map.data.loadGeoJson(data);
        console.log(geoJson);
        map.data.addGeoJson(geoJson);

        const infoWindow = new google.maps.InfoWindow();

        // Try HTML5 geolocation.
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function(position) {
                let pos = {
                    lat: position.coords.latitude,
                    lng: position.coords.longitude
                };

                infoWindow.setPosition(pos);
                infoWindow.setContent("You're here");
                infoWindow.open(map);
                map.setCenter(pos);
                console.log(pos);
            }, function() {
                handleLocationError(true, infoWindow, map.getCenter());
            });
        } else {
            // Browser doesn't support Geolocation
            handleLocationError(false, infoWindow, map.getCenter());
        }
    }

    function handleLocationError(browserHasGeolocation, infoWindow, pos) {
        infoWindow.setPosition(pos);
        infoWindow.setContent(browserHasGeolocation ?
            'Error: The Geolocation service failed.' :
            'Error: Your browser doesn\'t support geolocation.');
        infoWindow.open(map);

    }

    return (
        <div>
            <div ref={ref} style={{ width: 1530, height: 650 }} />
        </div>
    );
});