import CusBtn from 'components/CusBtn/CusBtn';
import { StPDiv3 } from 'pages/styles/products/StylesPDiv3';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

const PDiv3 = () => {
  const { t } = useTranslation('common', 'products');
  const navigate = useNavigate();
  return (
    <StPDiv3>
      <div className="subDiv">
        <div className="title">
          {t('products:ftTitle1')}
          <div className="br" />
          {t('products:ftTitle2')}
        </div>
        <div className="des">
          {t('products:ftDes1')}
          <div className="br" />
          {t('products:ftDes2')}
          </div>
        {/* <CusBtn
          props={{
            btnStr: t('common:contact'),
            click: () => navigate('/contact'),
          }}
        /> */}
      </div>
    </StPDiv3>
  );
};

export default PDiv3;
