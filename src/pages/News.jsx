import article from 'data/article.json';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { StNews } from './styles/news/StylesNews';

const News = () => {
  const { t } = useTranslation('common', 'news');
  const navigate = useNavigate();

  const onDetail = (id, link) => {
    if (link) {
      window.open(link, '_blank'); // 使用新分頁開啟連結
    } else {
      navigate(`/news/${id}`);
    }
  };

  return (
    <StNews>
      <div className="banner" />
      <div className="subDiv">
        <div className="articleDiv">
          <div className="pageTitle">{t('common:news')}</div>
          <div className="listDiv">
            {article
              .toSorted((a, b) => new Date(b.date) - new Date(a.date))
              .map((item) => {
                return (
                  <div
                    key={item.id}
                    className="listItem"
                    onClick={() => onDetail(item.id, item.link)}
                  >
                    <div className="leftLine" />
                    <div className="textDev">
                      <div className="text">{item.title}</div>
                      <div className="date">{item.date}</div>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </StNews>
  );
};
export default News;
