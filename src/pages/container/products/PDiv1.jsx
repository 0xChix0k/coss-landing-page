import imgEarth from 'assets/img_product_earth.png';
import { StPDiv1 } from 'pages/styles/products/StylesPDiv1';
import { useTranslation } from 'react-i18next';

const PDiv1 = () => {
  const { t } = useTranslation('products');
  return (
    <StPDiv1>
      <div className="subDiv">
        <div className="textDiv">
          <div className="title">
            {t('products:mainTitle1')}
            {/* <br /> */}
            <div className='br'/>
            {t('products:mainTitle2')}
          </div>
          <div className="des">{t('products:mainDes')}</div>
        </div>
        <div className="imgDiv">
          <img src={imgEarth} alt="earth" />
        </div>
      </div>
    </StPDiv1>
  );
};

export default PDiv1;
