import React from 'react';
import Moment from 'react-moment';

const lastUpdateInfo = ({ data, language }) => (
  <div className='row justify-content-between align-items-center'>
    <div className='col-sm-12 text-sm-center'>
      {language === 'vn' ? <h2 className='font-vn font-weight-bold'>Thông tin toàn cầu</h2> : <h2>Global Information</h2>} 
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
