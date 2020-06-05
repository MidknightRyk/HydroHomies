import React from "react";
import { useGoogleMaps } from "react-hook-google-maps";

// based on https://developers.google.com/maps/documentation/javascript/adding-a-google-map
const melb = { lat: -37.8136, lng: 144.9631 };

// from https://dev.socrata.com/foundry/data.melbourne.vic.gov.au/h4ih-tzqs
const data = "https://data.melbourne.vic.gov.au/resource/h4ih-tzqs.geojson";

export const Map = React.memo(function Map() {
    const { ref, map, google } = useGoogleMaps(
        "AIzaSyAtv2cSSylQG9URJkpiSSMmaLFx1ClMCYs",
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

        function handleClicks(event) {
            infowindow.setContent(
                "<table>" +
                "<tbody>" + "<th>Name:</th>" + "<td>" + event.feature.getProperty('descriptio') + "</td>" + "</tbody>" +
                "<tbody>" + "<th>Latitude:</th>" + "<td>" + event.feature.getProperty('lat') + "</td>" + "</tbody>" +
                "<tbody>" + "<th>Longitude:</th>" + "<td>" + event.feature.getProperty('lon') + "</td>" + "</tbody>" +
                "<tbody>" + "<th>Fountain Page:</th>" + "<td><a href = './Fountain'>More info</a></td>" + "</tbody>"
            );
            
	    let end = new google.maps.LatLng({ lat : event.feature.getProperty('lat'), lng : event.feature.getProperty('lon')});
            console.log("end =" + end);
            
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

                let start = new google.maps.LatLng({ lat : pos.lat, lng : pos.lng });
                console.log("start = " + start)

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
        
	console.log("1 - here");
        if (typeof start !== 'undefined') {
	    console.log("2 - here");
	    if (typeof end !== 'undefined') {
		console.log("3 - here")
	        let directionsService = new google.maps.DirectionsService();
                let directionsRenderer = new google.maps.DirectionsRenderer();
                directionsRenderer.setMap(map);
	    
	        let request = {
	            origin : start,
            	    destination : end,
            	    travelMode : 'WALKING'
	        }
        
                directionsService.route(request, function(result, status) {
                    if (status == 'OK') {
                        directionsRenderer.setDirections(result);
                    }
                });
	    }
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
