import React, { Component } from 'react';
import { withGoogleMap, GoogleMap } from 'react-google-maps';

class Map extends Component {
    render() {
        const GoogleMapExample = withGoogleMap(props => (
            <GoogleMap
                defaultCenter = { { lat: -37.8136, lng: 144.9631 } }
                defaultZoom = { 13 }
            >
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