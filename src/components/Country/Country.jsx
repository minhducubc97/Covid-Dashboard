import React from 'react';

import CountryPicker from '../CountryPicker/CountryPicker';
import CountryLocalData from '../CountryLocalData/CountryLocalData';
import CountryTodaysData from '../CountryTodaysData/CountryTodaysData';
import CountryChart from '../Charts/CountryChart'
import { localData } from '../../Data/data';

import './Country.css';

const Country = ({
  handleCountryChange,
  data,
  country,
  language,
}) => {
  const [modifiedData, todaysData] = localData(data, language);

  return (
    <div>
      <CountryPicker
        handleCountryChange={handleCountryChange}
        localData={data}
        country={country}
        language={language}
      />

      {language === 'vn' ? (<CountryChart
        font='font-en'
        msg={`Thông tin về tháng gần nhất của nước ${country}`}
        country={country}
        language={language}
      />) : (<CountryChart
        font='font-en'
        msg={`Last 30 day's information of ${country}`}
        country={country}
        language={language}
      />)}
      

      <div className='row local'>
        <div className='col-md-12 my-2 py-2 text-left'>
            {language === 'vn' ? (
                <h5 className='en'>Số liệu từ trước đến nay : </h5>
            ) : (
                <h5 className='en'>Cumulative sum :</h5>
            )}
        </div>
      </div>

      <div className='row local'>
        {modifiedData.map((data, index) => (
          <CountryLocalData key={index} data={data} language={language} />
        ))}
      </div>

      <div className='row local mb-5'>
        <div className='col-md-12 my-2 py-2 text-left'>
          {language === 'vn' ? (
            <h5 className='en'>Cập nhật gần nhất của ngày hôm nay : </h5>
          ) : (
            <h5 className='en'>Today's Last Updates :</h5>
          )}
        </div>

        {todaysData.map((data, index) => (
          <CountryTodaysData key={index} data={data} language={language} />
        ))}
      </div>
    </div>
  );
};

export default Country;
