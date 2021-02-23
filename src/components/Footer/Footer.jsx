import React from 'react';
const Footer = ({ font, language }) => (
  <footer className='page-footer font-small mdb-color bg-secondary pt-2 mt-4'>
      <div className='d-flex flex-column'>
          <p className='lead text-center text-white mb-0 p-2'>
            {language === 'vn' ? (
                <>
                Được viết bởi Đức Nguyễn
                </>
            ) : (
              <>
                Developed by Duc Nguyen
              </>
            )}
          </p>
          <div className='text-center'>
            <ul className='list-unstyled list-inline'>
              <li className='list-inline-item'>
                <a
                  href='https://www.ducnguyen.site'
                  className='btn-floating btn-lg btn-dark'
                  target='blank'
                >
                  <i className='fa fa-info-circle'></i>
                </a>
              </li>
              <li className='list-inline-item'>
                <a
                  href='https://github.com/minhducubc97'
                  className='btn-floating btn-lg btn-dark'
                  target='blank'
                >
                  <i className='fa fa-github'></i>
                </a>
              </li>
              <li className='list-inline-item'>
                <a
                  href='https://www.linkedin.com/in/duc-nguyen-096881130/'
                  className='btn-floating btn-lg btn-dark'
                  target='blank'
                >
                  <i className='fa fa-linkedin'></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
  </footer>
);

export default Footer;