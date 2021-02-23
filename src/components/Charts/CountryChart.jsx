import React, { useState, useEffect } from 'react';
import { fetchDaily } from '../../api/Covid19Api';
import Chart from 'react-apexcharts';
import { Bar } from 'react-chartjs-2';
import Loading from '../Loading/Loading';

const CountryChart = ({ msg, font, country, language }) => {
  const [dailyData, setDailyData] = useState({});

  useEffect(() => {
    const fetchAPI = async () => {
      let data = await fetchDaily(country);
      setDailyData(data);
    };
    fetchAPI();
  }, [country]);

  if (!dailyData) {
    return (
      <div className='text-center'>
        <Loading />
      </div>
    );
  }

  const { confirmed, deaths, recovere, date } = dailyData;

  const lineChart = dailyData.confirmed ? (
    <Chart
      options={{
        xaxis: {
          type: 'datetime',
          categories: date.map((da) => da),
        },
        tooltip: {
          x: {
            format: 'dd/MM/yy',
          },
        },
        stroke: {
          curve: 'smooth',
        },
        colors: ['#2E93fA', '#f36', 'green'],
        legend: {
          show: true,
          fontSize: '20px',
          itemMargin: {
            horizontal: 10,
            vertical: 25,
          },
        },
      }}
      series={[
        {
          name: 'Confirmed',
          data: confirmed.map((con) => con),
        },
        { name: 'Deaths', data: deaths.map((de) => de) },
        {
          name: 'Recoverd',
          data: recovere.map((re) => re),
        },
      ]}
      type='area'
    />
  ) : null;

  return (
    <div className='row local'>
        <div className='col-lg- col-md-12 col-sm-12 mt-3'>
        <h5 className={`${font}`}>{msg}</h5>
        <div>{lineChart}</div> 
        </div>
    </div>
  );
};

export default CountryChart;
