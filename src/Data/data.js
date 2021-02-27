import casesLogo from '../images/casesLogo.png';
import deathsLogo from '../images/deathCasesLogo.png';
import recoveredLogo from '../images/recoveredCasesLogo.svg';
import criticalLogo from '../images/criticalLogo.png';
import activeCasesLogo from '../images/activeCasesLogo.svg';

export const globalData = (data, language) => {
  const modifiedData = [
    {
      id: 0,
      name: 'Cases',
      img: casesLogo,
      endData: data.cases,
      textStyle: 'text-info',
      smallText: '',
      text: language === 'vn' ? 'TỔNG SỐ CA' : 'TOTAL CASES',
    },
    {
      id: 1,
      name: 'Active case',
      img: activeCasesLogo,
      endData: data.active,
      textStyle: 'text-dark',
      smallText: '',
      text: language === 'vn' ? 'TỔNG SỐ CA ĐANG BỊ' : 'TOTAL ACTIVE CASES',
    },
    {
      id: 2,
      name: 'Deaths',
      img: deathsLogo,
      endData: data.deaths,
      textStyle: 'text-danger',
      smallText: '',
      text: language === 'vn' ? 'TỔNG SỐ TỬ VONG' : 'TOTAL DEATHS',
    },
    {
      id: 3,
      name: 'Recover',
      img: recoveredLogo,
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
      img: casesLogo,
      endData: data.cases,
      textStyle: 'text-info',
      smallText: '',
      text: language === 'vn' ? 'SỐ CA ĐANG BỊ' : 'Confirmed',
    },
    {
      name: 'Deaths',
      img: deathsLogo,
      endData: data.deaths,
      textStyle: 'text-danger',
      smallText: '',
      text: language === 'vn' ? 'SỐ CA TỬ VONG' : 'Deaths',
    },
    {
      name: 'Recovered',
      img: recoveredLogo,
      endData: data.recovered,
      textStyle: 'text-success',
      smallText: '',
      text: language === 'vn' ? 'SỐ CA ĐÃ KHỎI' : 'Recovered',
    },
  ];

  const todaysData = [
    {
      name: 'Confirmed',
      img: casesLogo,
      imgClass: 'img-fluid',
      endData: data.todayCases,
      textStyle: 'text-info',
      smallText: '',
      text: language === 'vn' ? 'SỐ CA MỚI MẮC' : 'New Cases',
    },
    {
      name: 'Deaths',
      img: deathsLogo,
      imgClass: 'img-fluid',
      endData: data.todayDeaths,
      textStyle: 'text-danger',
      smallText: '',
      text: language === 'vn' ? 'SỐ CA MỚI TỬ VONG' : 'New Deaths',
    },
    {
      name: 'Recoverd',
      img: criticalLogo,
      imgClass: 'img-fluid criticalImg',
      endData: data.critical,
      textStyle: 'text-warning',
      smallText: '',
      text: language === 'vn' ? 'SỐ CA NGUY KỊCH' : 'Critical',
    },
  ];

  return [modifiedData, todaysData];
};

// export default globalBangliData;
