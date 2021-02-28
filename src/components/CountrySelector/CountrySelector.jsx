import React, { useState, useEffect } from 'react';
import { fetchCountryData } from '../../api/Covid19Api';

import { Select } from 'antd';

const { Option } = Select;

const CountrySelector = ({ handleCountryChange, localData, country, language }) => {
  const [fetchedCountryData, setFetchedCountryData] = useState([]);
  useEffect(() => {
    const fetchedAPI = async () => {
      setFetchedCountryData(await fetchCountryData());
    };
    fetchedAPI();
  }, [setFetchedCountryData]);

  return (
    <div className='row justify-content-center align-items-center'>
      <div className='col-md-12 text-center mt-4'>
        <h2>
          {language === 'vn' ? (
            <p className='font-vn font-weight-bold'>Thông tin về nước {country}</p>
          ) : (
            <p className='font-en'>{country}'s Information</p>
          )}
        </h2>
        <div>
          {localData?.flag ? (
            <img src={localData.flag} style={{ width: '70px' }} alt='&nbsp;' />
          ) : null}
        </div>
      </div>
      <div className='my-3'>
        <div className='en form-row'>
          <Select
            onChange={(country) => handleCountryChange(country)}
            showSearch
            size={'large'}
            style={{ width: 200 }}
            placeholder='Select a Country'
            optionFilterProp='children'
            filterOption={(input, option) =>
              option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
            }
          >
            <Option value='canada'>Canada</Option>
            {fetchedCountryData?.map((data, i) => (
              <Option key={i} value={data.code}>
                {data.country}
              </Option>
            ))}
          </Select>
        </div>
      </div>
    </div>
  );
};

export default CountrySelector;

