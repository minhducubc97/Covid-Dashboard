import React from 'react';
import './Notice.css';

const Notice = ({ language }) => (
  <div>
    <hr style={{ background: '#343a40' }} />
    <div className='row text-center tex-lg-left'>
      <div className='col-lg-12 col-md-12 col-sm-12 mb-4'>
        <div className='page-title '>
          <div className='title-center'>
            {language === 'vn' ? (
              <h2>Hiểu biết về Coronavirus (Covid 19)</h2>
            ) : (
              <h2>Awareness for Coronavirus (Covid 19)</h2>
            )}
          </div>
        </div>

        <div className='field field-type-text-textarea-with-summary field-body'>
          <div className='field-item text-left'>
            <p>
              {language === 'vn' ? (
                <strong>Coronavirus (SARS-CoV-2) và Covid-19 là gì?</strong>
              ) : (
                <strong>What is Coronavirus (SARS-CoV-2) and Covid-19?</strong>
              )}
            </p>
            {language === 'vn' ? (
              <p>
                Coronavirus (CoV) là vi-rút RNA gây bệnh ở động vật có vú và chim. Ở người và chim, chúng gây bệnh về hô hấp, có thể rất nhẹ và cũng có thể gây chết người.{' '}
              </p>
            ) : (
              <p>
                Coronavirus (CoV) is a RNA virus that causes diseases in mammals and birds. In humans and birds, they cause respiratory tract infections that can range from mild to lethal.
              </p>
            )}
          </div>
        </div>
      </div>

      <div className='collapseBtn container col-lg-10 col-md-10 col-sm-12 mb-4'>
        <div id='accordion'>
          <div className='card panel-box-body panel-box'>
            <div className='card-header text-left panel-head-title'>
              <a className='h6' data-toggle='collapse' href='#collapseOne'>
                {language === 'vn' ? 'Triệu chứng' : 'Symptoms'}
              </a>
            </div>
            <div id='collapseOne' className='collapse' data-parent='#accordion'>
              <div className='card-body'>
                <p className='SymptomsPtag'>
                  <img
                    className='symptomImg'
                    alt='symptomImage'
                    src='https://user-images.githubusercontent.com/58518192/80411047-5b620a80-88ed-11ea-8f44-9d1385f1666a.png'
                  />
                </p>

                <ul className='list-group list-group-flush'>
                  <li className='list-group-item'>
                    {language === 'vn'
                      ? 'Triệu chứng thường xuất hiện trong vòng 2-14 ngày.'
                      : 'Symptoms generally appear within 2-14 days.'}
                  </li>
                  <li className='list-group-item'>
                    {language === 'vn'
                      ? 'Trong hầu hết các trường hợp, triệu chứng đầu tiên là sốt (hơn 100 độ F/38 độ C).'
                      : 'In most cases, the first symptom is fever (more than 100 degrees Fahrenheit/38 degree Celsius).'}
                  </li>
                  <li className='list-group-item'>
                    {language === 'vn'
                      ? 'Ho khan/đau họng hoặc vấn đề về hô hấp cũng có thể xảy ra.'
                      : 'Dry cough/sore throat or any other respiratory issues may also occur.'}
                  </li>
                  <li className='list-group-item'>
                    {language === 'vn'
                      ? 'Những căn bệnh sẵn có (béo phì, phế quản, bệnh tim, ... có thể làm cho bệnh trở nên trầm trọng hơn.' 
                      : 'Other existing illnesses (diabetes/hypertension/respiratory/heart disease/kidney problems etc.) can result in worsening conditions.'}
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className='card panel-box'>
            <div className='card-header text-left panel-head-title'>
              <a
                className='collapsed card-link h6'
                data-toggle='collapse'
                href='#collapseTwo'
              >
                {language === 'vn' ? 'Phòng chống' : 'Prevent'}
              </a>
            </div>
            <div id='collapseTwo' className='collapse' data-parent='#accordion'>
              <div className='card-body'>
                <p className='SymptomsPtag'>
                  <img
                    className='preventImg'
                    alt='preventImg'
                    src='https://user-images.githubusercontent.com/58518192/80411004-49806780-88ed-11ea-9b86-975f2db7b411.png'
                  />
                </p>

                <ul className='list-group list-group-flush'>
                  <li className='list-group-item'>
                    {language === 'vn'
                      ? 'Rửa tay thường xuyên với xà phòng/đồ có cồn ít nhất 30 giây.'
                      : 'Wash your hands frequently with soap/alcoholic sanitizer for at least 30 seconds.'}
                  </li>
                  <li className='list-group-item'>
                    {language === 'vn'
                      ? 'Không chạm vào mắt, mũi, miệng với tay bẩn.'
                      : 'Do not touch your eyes, nose and mouth with unwashed hands.'}
                  </li>
                  <li className='list-group-item'>
                    {language === 'vn'
                      ? 'Sử dụng tay/giấy/vải để che miệng khi ho hoặc hắt xì.'
                      : 'Use arm/tissue/cloth to cover your mouth while coughing or sneezing.'}
                  </li>
                  <li className='list-group-item'>
                    {language === 'vn'
                      ? 'Hạn chế tụ tập đông người.'
                      : 'Avoid gatherings.'}
                  </li>
                  <li className='list-group-item'>
                    {language === 'vn'
                      ? 'Giãn cách xã hội, đứng cách nhau ít nhất 2 mét.'
                      : 'Maintain social distancing by keeping at least a 6 ft distance from people around you.'}
                  </li>
                  <li className='list-group-item'>
                    {language === 'vn'
                      ? 'Ở nhà càng nhiều càng tốt.'
                      : 'Stay home as much as possible.'}
                  </li>
                  <li className='list-group-item'>
                    {language === 'vn'
                      ? 'Tự cách ly nếu mình vừa đi xa về.'
                      : 'Self-quarantine in case of any recent travel.'}
                  </li>
                  <li className='list-group-item'>
                    {language === 'vn'
                      ? 'Tránh tiếp xúc với người đã bị nhiễm.'
                      : 'Avoid contact with people who have already been infected.'}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* <hr style={{ background: '#343a40' }} /> */}
  </div>
);

export default Notice;
