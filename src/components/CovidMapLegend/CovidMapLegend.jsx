import React from "react";
import Densities from './Densities';

const CovidMapLegend = () => {
    return (
        <div style={{display: 'flex', alignItems: 'stretch'}}>
            {
                Densities.map((Density) => (
                    <div key = {Density.title} style = {{
                        backgroundColor: Density.backgroundColor,
                        flex: 1,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: Density.textColor,
                        height: '8vh',
                        fontWeight: "bold"
                    }}>
                        <span>{Density.title}</span>
                    </div>
                ))
            }
        </div>
    );
}

export default CovidMapLegend;