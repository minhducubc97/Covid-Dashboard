import papa from 'papaparse';
import { features } from '../../Data/countries.json';
import Densities from '../CovidMapLegend/Densities';

class MapCountries {
    covidUrl = "https://raw.githubusercontent.com/CSSEGISandData/COVID-19/web-data/data/cases_country.csv";
    setState = null;

    onLoad = (setState) => {
        this.setState = setState;
        papa.parse(this.covidUrl, {
            download: true,
            header: true,
            complete: (result) => this.processData(result.data),
        });
    };

    processData = (countries) => {
        for (let i = 0; i < features.length; i++) {
            const country = features[i];
            const covid19Country = countries.find((covid19Country) => country.properties.ISO_A3 === covid19Country.ISO3);
            country.properties.confirmed = 0;
            country.properties.confirmedText = 0;
            if (covid19Country != null) {
                let confirmed = Number(covid19Country.Confirmed);
                country.properties.confirmed = confirmed;
                country.properties.confirmedText = confirmed.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","); // convert number to one with commas
            }
            this.setCountryColor(country);
        }
        this.setState(features);
    };

    setCountryColor = (country) => {
        const density = Densities.find((item) =>
        item.isFor(country.properties.confirmed)
        );
        if (density != null) country.properties.color = density.backgroundColor;
    };
}

export default MapCountries;