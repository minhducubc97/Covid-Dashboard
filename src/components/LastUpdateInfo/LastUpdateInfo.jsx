import React from 'react';
import Moment from 'react-moment';

const lastUpdateInfo = ({ data, language }) => (
  <div className='row justify-content-between align-items-center'>
    <div className='col-sm-12 text-sm-center'>
      <h2> {language === 'vn' ? 'Thông tin toàn cầu' : 'Global Information : '} </h2>
    </div>
    <div className='col-sm-12 text-sm-center'>
      <h5 className='en'>
        {data?.updated ? (
          <small className='text-muted'>
            Last updated <Moment fromNow>{data?.updated}</Moment>
          </small>
        ) : (
          <small className='en text-info'>Updating . . .</small>
        )}
      </h5>
    </div>
  </div>
);

export default lastUpdateInfo;
