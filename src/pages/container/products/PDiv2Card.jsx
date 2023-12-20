/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { useEffect, useState } from 'react';

const PDiv2Card = ({
  id,
  icon,
  priTitle,
  priColor,
  title = [],
  des = [],
  img,
  bgImg = [],
  reImgObj = [],
  mobileTitleNoBrSize = null,
}) => {
  const IconResize = () => {
    const StyledIcon = styled.div`
      width: 80px; // 預設寬度
      height: auto; // 保持高寬比
      svg {
        width: 100%;
        height: auto;
      }
      @media (max-width: 1024px) {
        width: 60px;
      }
      @media (max-width: 600px) {
        width: 50px;
      }
    `;
    return <StyledIcon>{icon}</StyledIcon>;
  };

  const getBgCss = (bg, bgTablet, bgTabMobile) => {
    return css`
      background-image: url(${bg});
      background-size: cover;
      background-repeat: no-repeat;
      @media (max-width: 1024px) {
        background-image: url(${bgTablet});
      }
      @media (max-width: 600px) {
        background-image: url(${bgTabMobile});
      }
    `;
  };

  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  useEffect(() => {
    // console.log('PDiv2Card screenWidth', screenWidth);
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
      // console.log('window.innerWidth', window.innerWidth);
    };
    // 監聽窗口大小改變事件
    window.addEventListener('resize', handleResize);
    // 清理函數
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div id={id} className="card" css={getBgCss(bgImg[0], bgImg[1], bgImg[2])}>
      <div className="textDIv">
        <IconResize />
        <div className="pmt" style={{ color: priColor }}>
          {priTitle}
        </div>
        <div className="title">
          {title[0]}
          {!!mobileTitleNoBrSize &&
          screenWidth <= mobileTitleNoBrSize ? null : (
            <br />
          )}
          {title[1]}
        </div>
        <div className="des">
          {des[0]}
          <br />
          <br />
          {des[1]}
        </div>
      </div>
      <div className="imgDiv">
        {!!reImgObj.length && screenWidth <= reImgObj[0] ? (
          <img src={reImgObj[1]} alt={priTitle} />
        ) : (
          <img src={img} alt={priTitle} />
        )}
      </div>
    </div>
  );
};

export default PDiv2Card;
