import { StADiv3 } from 'pages/styles/about/StylesADiv3';
import { useTranslation } from 'react-i18next';
import ADiv3CardList from './ADiv3CardList';

const ADiv3 = () => {
  const { t } = useTranslation('about');
  const list = ADiv3CardList();
  return (
    <StADiv3>
      <div className="subDiv">
        <div className="contentDiv">
          <div className="title">{t('about:div3Title')}</div>
          <div className="des">{t('about:div3Des')}</div>
          <div className="line" />
          <div className="subTitle">{t('about:div3SubTitle')}</div>
          <div className="gridBox">
            {list?.map((item) => {
              return (
                <div
                  key={item.id}
                  className="card"
                  style={{
                    background:
                      item.id % 2 !== 0
                        ? 'var(--primary-10)'
                        : 'var(--gery-white)',
                  }}
                >
                  <div className="icon">{item.icon}</div>
                  <div className="text">{item.text}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </StADiv3>
  );
};

export default ADiv3;
