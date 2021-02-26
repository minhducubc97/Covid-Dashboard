import React from 'react';
import { MapContainer, GeoJSON } from 'react-leaflet';

const CovidMap = (countries) => {
    const eachCountry = (country, layer) => {
        layer.options.fillColor = country.properties.color;
        var name = country.properties.ADMIN;
        var confirmedText = country.properties.confirmedText;
        layer.bindPopup(`${name} ${confirmedText}`);
    }
    return (
        <MapContainer style={{height: "50vh"}} zoom={1} center={[20, 100]}>
            <GeoJSON 
            style={{
                fillColor: "white",
                weight: 1,
                color: "#fda000",
                fillOpacity: 1}
            }
            data={countries}
            onEachFeature={eachCountry}
            />
        </MapContainer>
    );
};

export default CovidMap;