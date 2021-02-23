import React, { Fragment, useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './index.css'
import Navbar from './components/Navbar/Navbar'
import Cards from './components/Cards/Cards'
import Charts from './components/Charts/Charts'
import Country from './components/Country/Country'
import Notice from './components/Notice/Notice'
import Footer from './components/Footer/Footer'
import { fetchData, fetchLocalCountry } from './api/Covid19Api';

function App() {
    const [data, setData] = useState({});
  const [localData, setLocalData] = useState({});
  const [country, setCountry] = useState('Canada');

  useEffect(() => {
    const fetchFunc = async () => {
      const data = await fetchData();
      const localData = await fetchLocalCountry();

      setData(data);
      setLocalData(localData);
    };

    fetchFunc();
  },[]);

  const handleCountryChange = async countryName => {
    const localData = await fetchLocalCountry(countryName);
    const { country } = localData;
    setLocalData(localData);
    setCountry(country);
  };

  return (
    <Router>
      <div>
        <Switch>          
          {/* English UI */}
          <Route
            exact
            path='/'
            render={props => (
              <Fragment>
                <Navbar font='font-en' language='en' link='/vn' nav='Vietnamese' />
                <Cards data={data} language='en' />
                <div className='container'>
                  <Country
                    country={country}
                    data={localData}
                    handleCountryChange={handleCountryChange}
                    language='en'
                  />
                  <Charts
                    font='font-en'
                    msg={`Last 30 day's information of ${country}`}
                    country={country}
                    language='en'
                  />
                  <Notice language='en' />
                </div>
                <Footer font='font-en' language='en' />
              </Fragment>
            )}
          />

          {/* Vietnamese UI */}
          <Route
            exact
            path='/vn'
            render={props => (
              <Fragment>
                <Navbar font='font-en' language='vn' link='/' nav='Tiếng Anh' />
                <Cards data={data} language='vn' />
                <div className='container'>
                  <Country
                    country={country}
                    data={localData}
                    handleCountryChange={handleCountryChange}
                    language='vn'
                  />
                  <Charts
                    font='font-en'
                    msg={`Thông tin trong vòng 30 ngày gần nhất của ${country}`}
                    country={country}
                    language='vn'
                  />
                  <Notice language='vn' />
                </div>
                <Footer font='font-en' language='vn' />
              </Fragment>
            )}
          />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
