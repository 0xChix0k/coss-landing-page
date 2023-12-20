import imgHand from 'assets/img_about_shakehands.png';
import { StADiv2 } from 'pages/styles/about/StylesADiv2';
import { useTranslation } from 'react-i18next';

const ADiv2 = () => {
  const { t } = useTranslation('about');
  return (
    <StADiv2>
      <div className="subDiv">
        <div className="textDiv">
          <div className="title">{t('about:div2Title')}</div>
          <div className="des">
            {t('about:div2Des1')}
            <br />
            <br />
            {t('about:div2Des2')}
          </div>
        </div>
        <div className="imgDiv">
          <img src={imgHand} alt="img" />
        </div>
      </div>
    </StADiv2>
  );
};

export default ADiv2;
