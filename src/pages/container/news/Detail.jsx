import article from 'data/article.json';
import { StNews, StSubDetail, StDetailBar } from 'pages/styles/news/StylesNews';
import { useTranslation } from 'react-i18next';
import { useNavigate, useParams } from 'react-router-dom';

const Detail = () => {
  const { t } = useTranslation('common');
  const navigate = useNavigate();
  const { id } = useParams();
  const detail = article.find((item) => item.id === id) || {};
  return (
    <StNews>
      <StDetailBar>
        <div className="subDiv">
          <div className="text" onClick={() => navigate('/news')}>
            {t('common:backNews')}
          </div>
        </div>
      </StDetailBar>
      <StSubDetail>
        <div className="title">{detail.title}</div>
        <div className="dateDiv">
          <div className="date">{detail.date}</div>
          <div className="dateLine" />
        </div>
        <div className="content">{detail.content}</div>
      </StSubDetail>
    </StNews>
  );
};

export default Detail;
