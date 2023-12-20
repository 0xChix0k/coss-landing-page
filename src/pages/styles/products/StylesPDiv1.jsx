import styled from '@emotion/styled';
import imgBg from 'assets/img_product_bg_master.png';
import imgBgMobile from 'assets/mobile/img_mobile_product_bg_master.png';
import imgBgTablet from 'assets/tablet/img_tablet_product_bg_master.png';
import { cssDes, cssPageTitle } from 'styles/commonCss';

export const StPDiv1 = styled.div`
  width: 100%;
  height: 760px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: url(${imgBg});
  background-size: cover;
  background-repeat: no-repeat;
  @media (max-width: 1024px) {
    height: 810px;
    background-image: url(${imgBgTablet});
  }
  @media (max-width: 500px) {
    height: 780px;
    background-image: url(${imgBgMobile});
  }
  .subDiv {
    width: min(100%, 1440px);
    height: 100%;
    display: flex;
    gap: 30px;
    padding: 40px 100px 50px 100px;
    position: relative;
    @media (max-width: 1024px) {
      padding: 50px 50px 70px 50px;
    }
    @media (max-width: 500px) {
      padding: 109px 30px 435px 30px;
    }
    .textDiv {
      width: min(100%, 560px);
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      margin-top: 180px;
      @media (max-width: 1024px) {
        margin-top: 86px;
        height: 690px;
      }
      @media (max-width: 500px) {
        margin-top: 0px;
      }
      .title {
        ${cssPageTitle}
        margin-bottom: 30px;
        @media (max-width: 500px) {
          font-size: 40px;
          margin-bottom: 20px;
        }
        .br {
          display: none;
          @media (max-width: 500px) {
            display: block;
          }
        }
      }
      .des {
        ${cssDes}
      }
    }
    .imgDiv {
      width: min(100%,700px);
      height: auto;
      position: absolute;
      top: 0;
      right: 0;
      img {
        object-fit: cover;
        width: 100%;
        height: 100%;
      }
      @media (max-width: 1024px) {
        width: min(100%,582px);
        top: auto;
        bottom: 0;
      }
      @media (max-width: 500px) {
        width: 100%;
        padding: 0px;
        top: auto;
        bottom: 0;
      }
    }
  }
`;
