import imgOne from 'assets/divBack_img_1.png';
import { ReactComponent as IconFix } from 'assets/icon/icon_fix.svg';
import { ReactComponent as IconHeart } from 'assets/icon/icon_hearthand.svg';
import { ReactComponent as IconLab } from 'assets/icon/icon_lab.svg';
// import CusBtn from 'components/CusBtn/CusBtn';
import { StDivOne } from 'pages/styles/home/StylesDiv1';
import { useTranslation } from 'react-i18next';
// import { useNavigate } from 'react-router-dom';
import Div1Card from './Div1Card';

const Div1 = () => {
  const { t } = useTranslation('common', 'home');
  // const navigate = useNavigate();

  const iconShadow = {
    boxShadow: '0px 4px 20px 0px rgba(0, 0, 0, 0.08)',
    borderRadius: 75,
  };

  return (
    <StDivOne>
      <div className="bgDiv" />
      <div className="subDiv">
        <div className="imgDiv">
          <img src={imgOne} alt="divBackOne" />
        </div>
        <div className="textDiv">
          <div className="pmt">{t('home:cossPre')}</div>
          <div className="titleDiv">
            <span>
              {t('home:mainTitle')}
              <br />
              {t('home:mainTitle2')}
              <div className='br'/>
              <span className="highlight"> {t('home:mainHighlight')}</span>
            </span>
          </div>
          <div className="desDiv">{t('home:mainDes')}</div>
          {/* <CusBtn
            props={{
              fills: true,
              btnStr: t('common:contact'),
              click: () => navigate('/contact'),
            }}
          /> */}
        </div>
        <div className="cardDIv">
          <Div1Card
            icon={<IconLab style={iconShadow} />}
            title={t('home:adTitle1')}
            des={t('home:adDes1')}
          />
          <Div1Card
            icon={<IconHeart style={iconShadow}/>}
            title={t('home:adTitle2')}
            des={t('home:adDes2')}
          />
          <Div1Card
            icon={<IconFix style={iconShadow}/>}
            title={t('home:adTitle3')}
            des={t('home:adDes3')}
          />
        </div>
      </div>
    </StDivOne>
  );
};

export default Div1;
