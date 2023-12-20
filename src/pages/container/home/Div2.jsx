import { ReactComponent as IconMa } from 'assets/icon/icon_material.svg';
import { ReactComponent as IconMoney } from 'assets/icon/icon_money.svg';
import { ReactComponent as IconOp } from 'assets/icon/icon_operation.svg';
import { ReactComponent as IconMan } from 'assets/icon/icon_people.svg';
import { ReactComponent as IconExpense } from 'assets/icon/icon_expense.svg';
import { ReactComponent as IconAppCheck } from 'assets/icon/icon_appcheck.svg';
import { StDivTwo } from 'pages/styles/home/StylesDiv2';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import Div2Card from './Div2Card';

const Div2 = () => {
  const { t } = useTranslation('home');
  const navigate = useNavigate();

  const onClick = (id) => {
    navigate('/products', { state: { id } });
  };

  return (
    <StDivTwo>
      <div className="subDiv">
        <div className="textDiv">
          {t('home:twoTitle')}
          <br />
          {t('home:twoTitle2')}
        </div>
        <div className="cardDiv">
          <Div2Card
            icon={<IconOp />}
            title={t('home:twoCardTitle1')}
            des={t('home:twoCardDes1')}
            click={() => onClick('anchor1')}
          />
          <Div2Card
            icon={<IconMan />}
            title={t('home:twoCardTitle2')}
            des={t('home:twoCardDes2')}
            click={() => onClick('anchor2')}
          />
          <Div2Card
            icon={<IconMoney />}
            title={t('home:twoCardTitle3')}
            des={t('home:twoCardDes3')}
            click={() => onClick('anchor3')}
          />
          <Div2Card
            icon={<IconMa />}
            title={t('home:twoCardTitle4')}
            des={t('home:twoCardDes4')}
            click={() => onClick('anchor4')}
          />
          <Div2Card
            icon={<IconExpense />}
            title={t('home:twoCardTitle5')}
            des={t('home:twoCardDes5')}
            click={() => onClick('anchor5')}
          />
          <Div2Card
            icon={<IconAppCheck />}
            title={t('home:twoCardTitle6')}
            des={t('home:twoCardDes6')}
            click={() => onClick('anchor6')}
          />
        </div>
      </div>
    </StDivTwo>
  );
};

export default Div2;
