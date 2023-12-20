import { ScrollContext } from 'context/ScrollContext';
import { StPTabs } from 'pages/styles/products/StylesPTabs';
import { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import StickyBox from 'react-sticky-box';
import { selectApp } from 'store/slice/appSlice';

const PTabs = () => {
  const { t } = useTranslation('common');
  const { tabId } = useSelector(selectApp);
  const scrollRef = useContext(ScrollContext);
  const getActive = (id) => {
    return tabId === id ? 'tab active' : 'tab';
  };

  const onScrollTo = (anchorId) => {
    const anchorElement = document.getElementById(anchorId);
    if (anchorElement && scrollRef.current) {
      const elementTop =
        anchorElement.getBoundingClientRect().top + scrollRef.current.scrollTop;
      const stickyTabHeight = 150; // 假設的 sticky tab 高度
      const scrollPosition = elementTop - stickyTabHeight;
      scrollRef.current.scrollTo({ top: scrollPosition, behavior: 'smooth' });
    }
  };

  return (
    <StickyBox
      offsetTop={0}
      offsetBottom={0}
      style={{ background: 'var(--gery-white)', zIndex: 2 }}
    >
      <StPTabs>
        <div className="subDiv">
          <div
            style={{ padding: '28px 40px 28px 0px' }}
            className={getActive('anchor1')}
            onClick={() => onScrollTo('anchor1')}
          >
            <div className="textDiv">
              {t('common:op-ma')}
              <div className="line" />
            </div>
          </div>
          <div
            className={getActive('anchor2')}
            onClick={() => onScrollTo('anchor2')}
          >
            <div className="textDiv">
              {t('common:hr-ma')}
              <div className="line" />
            </div>
          </div>
          <div
            className={getActive('anchor3')}
            onClick={() => onScrollTo('anchor3')}
          >
            <div className="textDiv">
              {t('common:fa-ma')}
              <div className="line" />
            </div>
          </div>
          <div
            className={getActive('anchor4')}
            onClick={() => onScrollTo('anchor4')}
          >
            <div className="textDiv">
              {t('common:mr-ma')}
              <div className="line" />
            </div>
          </div>
          <div
            className={getActive('anchor5')}
            onClick={() => onScrollTo('anchor5')}
          >
            <div className="textDiv">
              {t('common:ex-ma')}
              <div className="line" />
            </div>
          </div>
          <div
            className={getActive('anchor6')}
            onClick={() => onScrollTo('anchor6')}
          >
            <div className="textDiv">
              {t('common:app-check')}
              <div className="line" />
            </div>
          </div>
        </div>
      </StPTabs>
    </StickyBox>
  );
};

export default PTabs;
