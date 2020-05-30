import React from "react";
import { useGoogleMaps } from "react-hook-google-maps";

// based on https://developers.google.com/maps/documentation/javascript/adding-a-google-map
const melb = { lat: -37.8136, lng: 144.9631 };

// from https://dev.socrata.com/foundry/data.melbourne.vic.gov.au/h4ih-tzqs
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
        let infowindow = new google.maps.InfoWindow();
        google.maps.event.addListener(map, 'click', function() {
            infowindow.close();
        });

        // execute when map object is ready
        // const geoJson = map.data.loadGeoJson(data);
        // console.log(geoJson);
        // map.data.addGeoJson(geoJson);

        // https://stackoverflow.com/questions/59638418/change-markers-of-different-map-data-loadgeojson-data-sets-in-google-maps-api-3
        let layer1 = new google.maps.Data();
        layer1.loadGeoJson(data);
        layer1.setStyle(function(feature) {
            return /** @type {!google.maps.Data.StyleOptions} */ ({
                icon: "http://maps.google.com/mapfiles/ms/micons/blue.png"
            });
        });
        layer1.setMap(map);
        console.log(layer1.Feature.getProperty('lan'));

        function handleClicks(event) {
            infowindow.setContent(
                "<table>" +
                "<tbody>" + "<th>Name:</th>" + "<td>" + event.feature.getProperty('descriptio') + "</td>" + "</tbody>" +
                "<tbody>" + "<th>Latitude:</th>" + "<td>" + event.feature.getProperty('lat') + "</td>" + "</tbody>" +
                "<tbody>" + "<th>Longitude:</th>" + "<td>" + event.feature.getProperty('lon') + "</td>" + "</tbody>" +
                "<tbody>" + "<th>Fountain Page:</th>" + "<td><a href='https://www.youtube.com/watch?v=cMFHUTJ13Ys'>Can't you see meeeeeeeeeeeee</a></td>" + "</tbody>"

            );
            infowindow.setPosition(event.latLng);
            infowindow.setOptions({
                pixelOffset: new google.maps.Size(0, -34)
            });
            infowindow.open(map);
        }
        layer1.addListener('click', handleClicks);

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