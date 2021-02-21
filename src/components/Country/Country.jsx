import React from 'react';

import CountryPicker from '../CountryPicker/CountryPicker';
import CountryLocalData from '../CountryLocalData/CountryLocalData';
import CountryTodaysData from '../CountryTodaysData/CountryTodaysData';
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
    <div className='en'>
      <CountryPicker
        handleCountryChange={handleCountryChange}
        localData={data}
        country={country}
        language={language}
      />

      <div className='row local'>
        {modifiedData.map((data, index) => (
          <CountryLocalData key={index} data={data} language={language} />
        ))}
      </div>

      <div className='row local'>
        <div className='col-md-12 my-2 py-2 text-left'>
          {language === 'vn' ? (
            <h3>Cập nhật gần nhất của ngày hôm nay : </h3>
          ) : (
            <h3>Today's Last Updates :</h3>
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
