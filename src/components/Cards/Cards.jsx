import React from 'react';
import GlobalDataChart from '../Charts/GlobalDataChart';
import LastUpdate from '../LastUpdateInfo/LastUpdateInfo';
import { globalData } from '../../Data/data';
import Card from '../Card/Card';
import './Cards.css';

const Cards = ({ data, language }) => {
  const modifiedData = globalData(data, language);

  return (
	<div className={`vn landing`}>
	  <div className='container'>
		<div className='row py-5 justify-content-between align-items-center global'>
		  <div className='col-md-12'>
			<LastUpdate data={data} language={language} />
		  </div>

		  <div className='col-lg-8 col-sm-12 col-md-12 text-center'>
			<GlobalDataChart />
		  </div>

		  <div className='col-lg-4 my-3'>
			<div className='row'>
			  {modifiedData.map((data, index) => (
				<Card data={data} key={index} language={language} />
			  ))}
			</div>
		  </div>
		</div>
	  </div>
	</div>
  );
};

export default Cards;
