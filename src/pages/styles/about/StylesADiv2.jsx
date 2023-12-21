import styled from '@emotion/styled';
import { cssMainTitle, cssDes } from 'styles/commonCss';

export const StADiv2 = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;

  .subDiv {
    width: min(100%, 1440px);
    height: 100%;
    display: flex;
    justify-content: center;
    padding: 100px;
    gap: 70px;
    @media (max-width: 1024px) {
      padding: 90px 50px;
      gap: 50px;
    }
    @media (max-width: 980px) {
      flex-direction: column;
      align-items: center;
      /* padding: 90px 30px; */
      gap: 47px;
    }
    @media (max-width: 500px) {
      padding: 90px 30px;
    }
    .textDiv {
      max-width: 570px;
      min-width: 450px;
      height: 570px;
      padding-top: 70px;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      gap: 30px;
      @media (max-width: 1024px) {
        height: 450px;
        padding-top: 0px;
      }
      @media (max-width: 980px) {
        max-width: 100%;
        min-width: 100%;
        height: auto;
        gap: 26px;
      }
      .title {
        width: min(100%, 477px);
        ${cssMainTitle};
        @media (max-width: 500px) {
          font-size: 35px;
          width: 100%;
        }
      }
      .des {
        width: 100%;
        ${cssDes};
      }
    }
    .imgDiv {
      max-width: 600px;
      min-width: 434px;
      height: 570px;
      display: flex;
      justify-content: center;
      align-items: center;
      @media (max-width: 1024px) {
        height: 450px;
        align-items: center;
      }
      @media (max-width: 500px) {
        max-width: 100%;
        min-width: 100%;
        padding: 0px;
      }
      img {
        width: 100%;
        height: 100%;
        object-fit: contain;
      }
    }
  }
`;
