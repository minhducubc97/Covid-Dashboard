import casesImg from '../images/infected_cases.svg';
import deathsImg from '../images/deaths_cases.svg';
import recoveredImg from '../images/recoveries_from_covid.svg';
import criticalImg from '../images/criticalImg.png';
import activeCasesImg from '../images/activeCasesImg.svg';

export const globalData = (data, language) => {
  const modifiedData = [
    {
      id: 0,
      name: 'Cases',
      img: casesImg,
      endData: data.cases,
      textStyle: 'text-info',
      smallText: '',
      text: language === 'vn' ? 'TỔNG SỐ CA' : 'TOTAL CASES',
    },
    {
      id: 1,
      name: 'Active case',
      img: activeCasesImg,
      endData: data.active,
      textStyle: 'text-dark',
      smallText: '',
      text: language === 'vn' ? 'TỔNG SỐ CA ĐANG BỊ' : 'ACTIVE CASES',
    },
    {
      id: 2,
      name: 'Deaths',
      img: deathsImg,
      endData: data.deaths,
      textStyle: 'text-danger',
      smallText: '',
      text: language === 'vn' ? 'TỔNG SỐ TỬ VONG' : 'TOTAL DEATHS',
    },
    {
      id: 3,
      name: 'Recover',
      img: recoveredImg,
      endData: data.recovered,
      textStyle: 'text-success',
      smallText: '',
      text: language === 'vn' ? 'TỔNG SỐ CA ĐÃ KHỎI' : 'TOTAL RECOVERIES',
    },
  ];

  return modifiedData;
};

export const localData = (data, language) => {
  const modifiedData = [
    {
      name: 'Confirmed',
      img: casesImg,
      endData: data.cases,
      textStyle: 'text-info',
      smallText: '',
      text: language === 'vn' ? 'SỐ CA ĐANG BỊ' : 'Confirmed',
    },
    {
      name: 'Deaths',
      img: deathsImg,
      endData: data.deaths,
      textStyle: 'text-danger',
      smallText: '',
      text: language === 'vn' ? 'SỐ CA TỬ VONG' : 'Deaths',
    },
    {
      name: 'Recovered',
      img: recoveredImg,
      endData: data.recovered,
      textStyle: 'text-success',
      smallText: '',
      text: language === 'vn' ? 'SỐ CA ĐÃ KHỎI' : 'Recovered',
    },
  ];

  const todaysData = [
    {
      name: 'Confirmed',
      img: casesImg,
      imgClass: 'img-fluid',
      endData: data.todayCases,
      textStyle: 'text-info',
      smallText: '',
      text: language === 'vn' ? 'SỐ CA MỚI MẮC' : 'New Cases',
    },
    {
      name: 'Deaths',
      img: deathsImg,
      imgClass: 'img-fluid',
      endData: data.todayDeaths,
      textStyle: 'text-danger',
      smallText: '',
      text: language === 'vn' ? 'SỐ CA MỚI TỬ VONG' : 'New Deaths',
    },
    {
      name: 'Recoverd',
      img: criticalImg,
      imgClass: 'img-fluid criticalImg',
      endData: data.critical,
      textStyle: 'text-warning',
      smallText: '',
      text: language === 'vn' ? 'SỐ CA ĐANG NGUY KỊCH' : 'Critical',
    },
  ];

  return [modifiedData, todaysData];
};

// export default globalBangliData;
