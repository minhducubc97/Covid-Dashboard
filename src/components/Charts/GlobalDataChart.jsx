import React, { useState, useEffect } from 'react';
import { fetchData } from '../../api/Covid19Api';
import { Pie } from 'react-chartjs-2';
import Spinner from '../Spinner/Spinner';

const GlobalDataChart = () => {
  const [globalData, setGlobalData] = useState({});
  useEffect(() => {
    const fetchDataAPI = async () => {
      setGlobalData(await fetchData());
    };
    fetchDataAPI();
  }, []);
  if (!globalData?.cases) return <Spinner />;
  const pie = globalData?.cases ? (
    <Pie 
    data={{
      labels: ['Confirmed', 'Recovered', 'Deaths'],
      datasets: [
        {
          label: 'COVID-19',
          backgroundColor: [
            '#336699',
            'green',
            'red',
          ],
          borderColor: '#fff',
          data: [
            globalData?.cases,
            globalData?.recovered,
            globalData?.deaths,
          ],
        },
      ],
    }}
     />
  ) : null;

  return pie;
};

export default GlobalDataChart;
