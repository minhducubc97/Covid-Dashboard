import React, { Fragment } from 'react';
import { v4 as uuidv4 } from 'uuid';
import CountData from '../CountData/CountData';

const CountryData = ({ data, language }) => (
  <div className='col-md-4 my-3 hvr-bob'>
    <div className='row shadow align-items-center justify-content-between no-gutters'>
      <div className='col-3'>
        <img src={data.img} alt='&nbsp;' className='img-fluid' />
      </div>
      <div className='col-8'>
        <h2 className={data.textStyle}>
          {data?.endData >= 0 ? (
            <Fragment key={uuidv4()}>
              <CountData data={data} language={language} />
              <small className='text-dark'>{data.smallText}</small>
            </Fragment>
          ) : (
            <small className='en text-primary'>Loading . . .</small>
          )}
        </h2>
        <p className='text-muted'>{data.text}</p>
      </div>
    </div>
  </div>
);

export default CountryData;
