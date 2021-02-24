import React from 'react';
import './Awareness.css';

const Awareness = ({ language }) => (
  <div>
    <hr style={{ background: '#343a40' }} />
    <div className='row text-center tex-lg-left'>
      <div className='col-lg-12 col-md-12 col-sm-12 mb-4 mt-4'>
        <div className='page-title '>
          <div className='title-center'>
            {language === 'vn' ? (
              <h2>Hiểu biết về Covid-19</h2>
            ) : (
              <h2>Awareness for Covid-19</h2>
            )}
          </div>
        </div>

        <div className='field field-type-text-textarea-with-summary field-body'>
          <div className='field-item text-left'>
            <p>
              {language === 'vn' ? (
                <strong>Covid-19 là gì?</strong>
              ) : (
                <strong>What is Covid-19?</strong>
              )}
            </p>
            {language === 'vn' ? (
              <p>
                Covid-19 là vi-rút RNA gây bệnh ở động vật có vú và chim. Ở người và chim, chúng gây bệnh về hô hấp, có thể rất nhẹ và cũng có thể gây chết người.{' '}
              </p>
            ) : (
              <p>
                Covid-19 is a RNA virus that causes diseases in mammals and birds. In humans and birds, they cause respiratory tract infections that can range from mild to lethal.
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
                <div className='ml-2 text-left'>
                    <p>
                        {language === 'vn'
                        ? 'Triệu chứng của Covid-19 khác nhau với mỗi người. Chúng cũng có thể khác nhau ở từng độ tuổi. Những triệu chứng phổ biến nhất gồm có:'
                        : 'Symptoms of Covid-19 can vary from person to person. They may also vary in different age groups. Some of the more commonly reported symptoms include:'}
                    </p>
                </div>
                <ul className='list-group list-group-flush'>
                  <li className='list-group-item'>
                    {language === 'vn'
                      ? 'Ho khan'
                      : 'New or worsening cough'}
                  </li>
                  <li className='list-group-item'>
                    {language === 'vn'
                      ? 'Thở dốc hoặc khó thở'
                      : 'Shortness of breath or difficulty breathing'}
                  </li>
                  <li className='list-group-item'>
                    {language === 'vn'
                      ? 'Nhiệt độ cơ thể ít nhất 38°C' 
                      : 'Temperature equal to or over 38°C'}
                  </li>
                  <li className='list-group-item'>
                    {language === 'vn'
                      ? 'Cảm thấy mệt mỏi' 
                      : 'Feeling feverish'}
                  </li>
                  <li className='list-group-item'>
                    {language === 'vn'
                      ? 'Mất đi vị giác' 
                      : 'Loss of smell or taste'}
                  </li>
                </ul>
                <div className='ml-2 mt-2 text-left'>
                    <p>
                        {language === 'vn'
                        ? 'Triệu chứng sẽ xuất hiện trong vòng 14 ngày kể từ khi tiếp xúc với Covid-19.'
                        : 'Symptoms may take up to 14 days to appear after exposure to Covid-19.'}
                    </p>
                </div>
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
                <div className='ml-2 text-left'>
                    <p>
                    {language === 'vn'
                      ? 'Để ngăn ngừa sự lây lan Covid-19:'
                      : 'To prevent the spread of Covid-19:'}
                    </p>
                </div>
                <ul className='list-group list-group-flush'>
                  <li className='list-group-item'>
                    {language === 'vn'
                      ? 'Rửa tay thường xuyên với xà phòng và nước, hoặc đồ có cồn.'
                      : 'Clean your hands often. Use soap and water, or an alcohol-based hand rub.'}
                  </li>
                  <li className='list-group-item'>
                    {language === 'vn'
                      ? 'Đứng xa người hắt xì hơi hoặc ho.'
                      : 'Maintain a safe distance from anyone who is coughing or sneezing.'}
                  </li>
                  <li className='list-group-item'>
                    {language === 'vn'
                      ? 'Đeo khẩu trang khi không thể giãn cách xã hội.'
                      : 'Wear a mask when physical distancing is not possible.'}
                  </li>
                  <li className='list-group-item'>
                    {language === 'vn'
                      ? 'Không chạm vào mắt, mũi, miệng.'
                      : 'Do not touch your eyes, nose or mouth.'}
                  </li>
                  <li className='list-group-item'>
                    {language === 'vn'
                      ? 'Che mũi và miệng bằng tay hoặc giấy khi ho hoặc hắt xì.'
                      : 'Cover your nose and mouth with your bent elbow or a tissue when you cough or sneeze.'}
                  </li>
                  <li className='list-group-item'>
                    {language === 'vn'
                      ? 'Ở nhà nếu bạn cảm thấy không ổn.'
                      : 'Stay home if you feel unwell.'}
                  </li>
                  <li className='list-group-item'>
                    {language === 'vn'
                      ? 'Nếu bạn bị sốt, ho hoặc khó thở, hay liên lạc với cơ sở y tế.'
                      : 'If you have a fever, cough and difficulty breathing, seek medical attention.'}
                  </li>
                </ul>
                <div className='ml-2 mt-2 text-left'>
                    <p>
                    {language === 'vn'
                      ? 'Gọi điện để cơ quan y tế hướng dẫn bạn liên lạc với trự sở y tế phù hợp. Điều này bảo vệ bạn, và ngăn ngừa sự lây lan của vi-rút và các bệnh lây nhiễm khác.'
                      : 'Calling in advance allows your healthcare provider to quickly direct you to the right health facility. This protects you, and prevents the spread of viruses and other infections.'}
                    </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Awareness;
