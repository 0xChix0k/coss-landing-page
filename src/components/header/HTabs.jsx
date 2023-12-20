import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useLocation, useNavigate } from 'react-router-dom';

const HTabs = () => {
  const { t } = useTranslation('common');
  const navigate = useNavigate();
  const location = useLocation();
  const [activeTab, setActiveTab] = useState(location.pathname);

  useEffect(() => {
    setActiveTab(location.pathname);
  }, [location]);

  const handleClick = (path) => {
    navigate(`/${path}`);
    // setActiveTab(`/${path}`);
  };

  const tabClass = (path) => {
    return activeTab === path ? 'tab active' : 'tab';
  };

  return (
    <div className="tabDiv">
      <div
        className={tabClass('/products')}
        tabIndex="0"
        onClick={() => handleClick('products')}
      >
        {t('products')}
      </div>
      <div
        className={tabClass('/news')}
        tabIndex="0"
        onClick={() => handleClick('news')}
      >
        {t('news')}
      </div>
      <div
        className={tabClass('/about')}
        tabIndex="0"
        onClick={() => handleClick('about')}
      >
        {t('about')}
      </div>
    </div>
  );
};
export default HTabs;
