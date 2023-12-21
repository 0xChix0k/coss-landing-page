import Header from 'components/header/Header';
import { ScrollContext } from 'context/ScrollContext';
import { useCallback, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Outlet, useLocation } from 'react-router-dom';
import { selectApp, setTabId } from 'store/slice/appSlice';
import SEO from './SEO';

function App() {
  const dispatch = useDispatch();
  const { tabId } = useSelector(selectApp);
  const scrollRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    const stickyTabHeight = 150;
    const { id } = location.state || {};
    if (id) {
      const element = document.getElementById(id);
      if (element) {
        const elementTop =
          element.getBoundingClientRect().top + scrollContainer.scrollTop;
        // console.log('elementTop:', elementTop);
        const scrollPosition = elementTop - stickyTabHeight;
        scrollContainer.scrollTo({ top: scrollPosition, behavior: 'instant' });
      }
    } else {
      scrollContainer.scrollTo({ top: 0, behavior: 'instant' });
    }
  }, [location]);

  const handleScroll = useCallback(() => {
    const anchors = [
      'anchor1',
      'anchor2',
      'anchor3',
      'anchor4',
      'anchor5',
      'anchor6',
    ];
    let closestAnchor = '';
    let minDistance = Infinity;

    anchors.forEach((anchorId) => {
      const anchorElement = document.getElementById(anchorId);
      if (anchorElement) {
        const distance = Math.abs(anchorElement.getBoundingClientRect().top);
        if (distance < minDistance) {
          minDistance = distance;
          closestAnchor = anchorId;
        }
      }
    });

    // console.log('最接近的錨點是:', closestAnchor);
    tabId !== 'closestAnchor' && dispatch(setTabId(closestAnchor));
  }, [tabId, dispatch]);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (scrollContainer) {
      scrollContainer.addEventListener('scroll', handleScroll);

      return () => {
        scrollContainer.removeEventListener('scroll', handleScroll);
      };
    }
  }, [handleScroll]); // 確保依賴數組包含所有應該觸發此effect重運行的變量

  return (
    <ScrollContext.Provider value={scrollRef}>
      <SEO />
      <Header />
      <div ref={scrollRef} className="container">
        <Outlet />
      </div>
    </ScrollContext.Provider>
  );
}

export default App;
