import image from 'assets//img_home_office.png';
import { StDiv3 } from 'pages/styles/home/StylesDiv3';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

const Div3 = () => {
  const { t } = useTranslation('common', 'home');
  const navigate = useNavigate();
  return (
    <StDiv3>
      <div className="subDiv">
        <div className="textDIv">
          <div className="pmt">{t('home:aboutCoss')}</div>
          <div className="title">
            {t('home:threeTitle')}
            {/* <br /> */}
            {t('home:threeTitle2')}
          </div>
          <div className="des">{t('home:threeDes')}</div>
          <div className="link" onClick={() => navigate('/about')}>
            {t('common:more')}
          </div>
        </div>
        <div className="imgDiv">
          <img src={image} alt="home" />
        </div>
      </div>
    </StDiv3>
  );
};

export default Div3;
