import { StContact } from 'pages/styles/contact/StylesContact';
import CFormDiv from 'pages/container/contact/CFormDiv';
import { useState } from 'react';
import CusBtn from 'components/CusBtn/CusBtn';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Footer from 'components/footer/Footer';

const Contact = () => {
  const { t } = useTranslation('contact', 'common');
  const navigate = useNavigate();
  const [isSubmit, setIsSubmit] = useState(false);

  const handleBack = () => {
    setIsSubmit(false);
    navigate('/');
  };

  return (
    <div style={{ width: '100%' }}>
      <StContact>
        <div className="subDiv">
          {isSubmit ? (
            <div className="submitDiv">
              <div className="textDiv">
                <div className="title">
                  {t('contact:submitedTitle1')}
                  <br />
                  {t('contact:submitedTitle2')}
                </div>
                <div className="des">{t('contact:submitedDes')}</div>
              </div>
              <CusBtn
                props={{
                  btnStr: t('common:backHome'),
                  click: handleBack,
                  w: '100%',
                }}
              />
            </div>
          ) : (
            <div className="formDiv">
              <div className="textDiv">
                <div className="line" />
                <div className="title">{t('contact:title')}</div>
                <div className="des">{t('contact:des')}</div>
              </div>
              <CFormDiv fn={setIsSubmit} />
            </div>
          )}
        </div>
      </StContact>
      <Footer />
    </div>
  );
};
export default Contact;
