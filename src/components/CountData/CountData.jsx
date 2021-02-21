import React from 'react';

import CountUp from 'react-countup';

const CountData = ({ data, language }) => (
  <>
      <CountUp
        start={0}
        formattingFn={num => num.toLocaleString('en-US')}
        end={data.endData}
        separator=','
      />
  </>
);

export default CountData;
