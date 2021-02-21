import React, { useState, useEffect } from 'react';
import { fetchCountryData } from '../../api/Covid19Api';

import { Select } from 'antd';

const { Option } = Select;

const CountryPicker = ({ handleCountryChange, localData, country, language }) => {
  const [fetchedCountryData, setFetchedCountryData] = useState([]);
  useEffect(() => {
    const fetchedAPI = async () => {
      setFetchedCountryData(await fetchCountryData());
    };
    fetchedAPI();
  }, [setFetchedCountryData]);

  return (
    <div className='row justify-content-between align-items-center p-3'>
      <div className='col-md-12 text-center'>
        <h2 className='mb-5'>
          {language === 'vn' ? (
            <p>Bạn đang xem thông tin về nước {country}</p>
          ) : (
            <p>You are viewing {country} data</p>
          )}
        </h2>
      </div>
      <div className='my-3 d-flex align-items-center'>
        <h4 className='en mb-0'>
          {localData?.country ? (
            localData.country
          ) : (
            <small className='en text-primary'>Loading . . .</small>
          )}
        </h4>
        &nbsp; &nbsp;
        <div>
          {localData?.flag ? (
            <img src={localData.flag} style={{ width: '35px' }} alt='&nbsp;' />
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
            <Option value='vietnam'>Vietnam</Option>
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

export default CountryPicker;

