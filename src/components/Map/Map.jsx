import React, { useState, useEffect } from "react";
import CovidMap from '../CovidMap/CovidMap';
import CovidMapLegend from '../CovidMapLegend/CovidMapLegend';
import LoadCountriesTask from './LoadCountriesTask'
import Loading from '../Loading/Loading';

const Map = () => {
    const [countries, setCountries] = useState([]); 
    const loadMap = () => {
        const loadCountriesTask = new LoadCountriesTask();
        loadCountriesTask.load(setCountries);
    }
    useEffect(loadMap, []);
    return (
        <div>
            {countries.length === 0 ? (
                <div className='d-flex justify-content-center'>
                    <Loading/>
                </div>
            ) : (
                <div>
                    <CovidMap countries={countries}/>
                    <CovidMapLegend/>
                </div>
            )}
        </div>
    );
}

export default Map;