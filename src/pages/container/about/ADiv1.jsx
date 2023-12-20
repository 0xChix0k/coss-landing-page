import { StADiv1 } from 'pages/styles/about/StylesADiv1';
import { useTranslation } from 'react-i18next';

const ADiv1 = () => {
  const { t } = useTranslation('about');
  return (
    <StADiv1>
      <div className="subDiv">
        <div className="titleDiv">
          <div className="priTitle">{t('about:aboutPri')}</div>
          <div className="title">
            {t('about:mainTitle1')}
            <br/>
            {t('about:mainTitle2')}
            <div className='br' />
            {t('about:mainTitle3')}
            </div>
          <div className="des">{t('about:mainDes')}</div>
        </div>
        <div className="cardDIv">
          <div className="card">
            <div className="cardPri">{t('about:div1CardPri1')}</div>
            <div className="cardTitle">{t('about:div1CardTitle1')}</div>
            <div className="cardDes">{t('about:div1CardDes1')}</div>
          </div>
          <div className="card">
            <div className="cardPri">{t('about:div1CardPri2')}</div>
            <div className="cardTitle">{t('about:div1CardTitle2')}</div>
            <div className="cardDes">{t('about:div1CardDes2')}</div>
          </div>
          <div className="card">
            <div className="cardPri">{t('about:div1CardPri3')}</div>
            <div className="cardTitle">{t('about:div1CardTitle3')}</div>
            <div className="cardDes">{t('about:div1CardDes3')}</div>
          </div>
        </div>
      </div>
      <div className="bottom" />
    </StADiv1>
  );
};

export default ADiv1;
