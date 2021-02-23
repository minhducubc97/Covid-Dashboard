import React from 'react';
const Footer = ({ font, language }) => (
  <footer className='page-footer font-small mdb-color bg-secondary pt-2'>
      <div className='d-flex flex-column'>
        <div>
          <p className='lead text-center mb-0 p-2'>
            {language === 'vn' ? (
              <>
                Được viết bởi 
                <a
                  className='text-info font-weight-bold'
                  href='https://ducnguyen.site/'
                  target='blank'
                >
                  {' '}
                  Đức Nguyễn
                </a>
              </>
            ) : (
              <>
                Developed by 
                <a
                  className='text-info font-weight-bold'
                  href='https://ducnguyen.site/'
                  target='blank'
                >
                 {' '}
                  Duc Nguyen
                </a>
              </>
            )}
          </p>
        </div>
        <div>
          <div className='text-center text-md-right'>
            <ul className='list-unstyled list-inline'>
              <li className='list-inline-item'>
                <a
                  href='https://github.com/minhducubc97'
                  className='btn-floating btn-sm rgba-white-slight mx-1 github'
                  target='blank'
                >
                  <i className='fab fa-github fa-2x'></i>
                </a>
              </li>
              <li className='list-inline-item'>
                <a
                  href='https://www.linkedin.com/in/duc-nguyen-096881130/'
                  className='btn-floating btn-sm rgba-white-slight mx-1 linkedin'
                  target='blank'
                >
                  <i className='fab fa-linkedin fa-2x'></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
  </footer>
);

export default Footer;