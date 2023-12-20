import { useTranslation } from 'react-i18next';

const Div2Card = ({ icon, title, des, click }) => {
  const { t } = useTranslation('common');
  return (
    <div className="card">
      <div className="icon">{icon}</div>
      <div className="title">{title}</div>
      <div className="des">{des}</div>
      <div className="link" onClick={click}>
        {t('common:more')}
      </div>
    </div>
  );
};

export default Div2Card;