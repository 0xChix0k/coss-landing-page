import styled from '@emotion/styled';
import { cssDes, cssLink, cssMainTitle, cssPmT } from 'styles/commonCss';

export const StDiv3 = styled.div`
  width: 100%;
  height: 840;
  background-color: var(--gery-lighter);
  display: flex;
  flex-direction: column;
  align-items: center;
  .subDiv {
    width: min(100%, 1440px);
    height: 100%;
    display: flex;
    padding: 100px;
    @media (max-width: 1024px) {
      height: 630px;
      padding: 40px 40px 40px 50px;
    }
    @media (max-width: 500px) {
      height: 863px;
      flex-direction: column;
      padding: 100px 30px 90px 30px;
      gap: 50px;
    }
    .textDIv {
      width: min(50%, 610px);
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      padding-top: 130px;
      padding-right: 30px;
      @media (max-width: 1024px) {
        padding-top: 110px;
      }
      @media (max-width: 500px) {
        padding: 0px;
        width: 100%;
      }
      .pmt {
        ${cssPmT}
      }
      .title {
        ${cssMainTitle}
        margin-top: 25px;
        margin-bottom: 30px;
        @media (max-width: 1024px) {
          margin-bottom: 25px;
          font-size: 38px;
          text-align: left;
        }
        @media (max-width: 500px) {
          margin-top: 16px;
          margin-bottom: 20px;
          font-size: 35px;
          text-align: left;
        }
      }
      .des {
        ${cssDes}
        margin-bottom: 40px;
        @media (max-width: 500px) {
          margin-bottom: 20px;
        }
      }
      .link {
        ${cssLink}
      }
    }
    .imgDiv {
      width: min(50%,610px);
      height: 100%;
      padding: 95px 0px 95px 62px;
      img {
        object-fit: contain;
        width: 100%;
        height: 100%;
      }
      @media (max-width: 1024px) {
        width: 50%;
        padding: 87px 0px;
      }
      @media (max-width: 500px) {
        padding: 0px;
        width: 100%;
        img {
          object-fit: cover;
          width: 100%;
          height: 100%;
        }
      }
    }
  }
`;
