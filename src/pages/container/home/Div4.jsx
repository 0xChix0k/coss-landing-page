// import CusBtn from 'components/CusBtn/CusBtn';
import { StDiv4 } from 'pages/styles/home/StylesDiv4';
import { useTranslation } from 'react-i18next';
// import { useNavigate } from 'react-router-dom';

const Div4 = () => {
  const { t } = useTranslation('home', 'common');
  // const navigate = useNavigate();
  return (
    <StDiv4>
      <div className="title">{t('home:fourTitle')}</div>
      {/* <CusBtn
        props={{
          btnStr: t('common:contact'),
          click: () => navigate('/contact'),
        }}
      /> */}
    </StDiv4>
  );
};

export default Div4;
