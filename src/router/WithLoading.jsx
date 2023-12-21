import React, { useState, useEffect, Suspense } from 'react';
import Loading from 'components/common/Loading';


const WithLoading = (Component, delay = 2000) => {
  return function DelayedLoadingComponent(props) {
    const [showLoading, setShowLoading] = useState(false);

    useEffect(() => {
      const timer = setTimeout(() => {
        setShowLoading(true);
      }, delay);

      return () => clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [delay]);

    return (
      <Suspense fallback={showLoading ? <Loading /> : null}>
        <Component {...props} />
      </Suspense>
    );
  };
};

export default WithLoading;
