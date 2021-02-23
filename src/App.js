import React, { Fragment, useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './index.css'
import Navbar from './components/Navbar/Navbar'
import Cards from './components/Cards/Cards'
import Country from './components/Country/Country'
import Awareness from './components/Awareness/Awareness'
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
                  <hr style={{ background: '#343a40' }} />
                  <Country
                    country={country}
                    data={localData}
                    handleCountryChange={handleCountryChange}
                    language='en'
                  />
                  <Awareness language='en' />
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
                  <Awareness language='vn' />
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
