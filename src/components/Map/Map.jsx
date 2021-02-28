import React, { useState, useEffect } from "react";
import CovidMap from '../CovidMap/CovidMap';
import CovidMapLegend from '../CovidMapLegend/CovidMapLegend';
import { features } from '../../Data/countries.json';
import Loading from '../Loading/Loading';
import Densities from '../CovidMapLegend/Densities';
import { fetchCountryData } from '../../api/Covid19Api';

const Map = () => {
    const [fetchedCountryData, setFetchedCountryData] = useState([]);
    useEffect(() => {
    const fetchedAPI = async () => {
      setFetchedCountryData(await fetchCountryData());
    };
    fetchedAPI();
    }, [setFetchedCountryData]);

    if (!fetchedCountryData || fetchedCountryData.length === 0) {
        return (
            <div className='d-flex justify-content-center'>
                <Loading/>
            </div>
        );
    }

    for (let i = 0; i < features.length; ++i) {
        const country = features[i];
        if (i === 0 && fetchedCountryData[9] !== undefined) {
        }
        const covid19Country = fetchedCountryData.find((covid19Country) => country.properties.ISO_A3 === covid19Country.iso3);
        country.properties.confirmed = 0;
        country.properties.confirmedText = 0;
        if (covid19Country != null) {
            let confirmed = Number(covid19Country.confirmed);
            country.properties.confirmed = confirmed;
            country.properties.confirmedText = confirmed.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","); // convert number to one with commas
        }
        const density = Densities.find((item) =>
        item.isFor(country.properties.confirmed)
        );
        if (density != null) country.properties.color = density.backgroundColor;
    }
    
    return (
        <div>
            <div>
                <CovidMap countries={features}/>
                <CovidMapLegend/>
            </div>
        </div>
    );
}

export default Map;