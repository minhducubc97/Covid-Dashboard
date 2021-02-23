import React from 'react';
import logo from '../../images/virus-icon.png'
import { Link } from 'react-router-dom';
import { Button } from 'antd';
const Navbar = ({ link, nav, font, language }) => (
  <div className='navbar navbar-dark bg-primary sticky-top border-bottom'>
    <div className='container'>
      <div className='d-flex align-items-center'>
        <h1 className='mb-0 text-white font-weight-bold'>
          COVID-19
        </h1>
        <img
          className='logo ml-3'
          src={logo}
          style={{ width: '55px' }}
          alt='&nbsp;'
        />
      </div>
      <ul className='navbar-nav flex-row ml-auto'>
        <li className='nav-item ml-3'>
          <Link className={`${font} nav-link`} to={link}>
            <Button type='dashed'>{nav}</Button>
          </Link>
        </li>
      </ul>
    </div>
  </div>
);

export default Navbar;