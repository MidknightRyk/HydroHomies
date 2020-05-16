import React, { Component } from 'react';
import { withGoogleMap, GoogleMap, Marker } from 'react-google-maps';

class Map extends Component {
    // https://medium.com/@dmw9400/using-geojson-with-google-maps-api-5127f7498a33
    /*
    componentDidMount() {
        fetch('')
            .then(res => res.json())
            .then((geoJSON) => {
                this.setState({
                    regions: geoJSON,
                })
            });
    }

    renderRegions() {
        return this.state.regions.map(regionJ => {
            let region = JSON.parse(regionJ.geoJSON)
            let coordinates = region.geometry.coordinates[0][0]
            let coordArr = []
            coordinates.map(coordinate => coordArr.push({lat: coordinate[1], lng: coordinate[0]}))
            const onLoad = marker => {
                console.log('marker: ', marker)
            }
            return (
                <Marker
                    onLoad={onLoad}
                    position={coordArr}
                    />
            )
        })
    }
    */


    render() {
        const GoogleMapExample = withGoogleMap(props => (
            <GoogleMap
                defaultCenter = { { lat: -37.8136, lng: 144.9631 } }
                defaultZoom = { 13 }
            >
                <Marker
                position = { {lat: -37.815185695578855, lng: 144.95257756009232 } }
                />
            </GoogleMap>
        ));



        return(
            <div>
                <GoogleMapExample
                    containerElement={ <div style={{ height: '500px', width: '1200px', position: 'center'}} /> }
                    mapElement={ <div style={{ height: `100%` }} /> }
                />
            </div>
        );
    }
};
export default Map;