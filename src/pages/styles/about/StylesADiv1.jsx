import styled from '@emotion/styled';
import banner from 'assets/img_about_bg_master.png';
import bannerMobile from 'assets/mobile/img_mobile_about_bg_master.png';
import bannerTablet from 'assets/tablet/img_tablet_about_bg_master.png';
import { cssDes, cssPageTitle, cssPmT } from 'styles/commonCss';

export const StADiv1 = styled.div`
  width: 100%;
  height: 1159px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: url(${banner});
  background-size: cover;
  background-repeat: no-repeat;
  position: relative;
  @media (max-width: 1024px) {
    height: 1120px;
    background-image: url(${bannerTablet});
  }
  @media (max-width: 980px) {
    height: auto;
    background-image: url(${bannerMobile});
  }
  .bottom {
    width: 100%;
    height: 300px;
    background-color: var(--gery-white);
    border-radius: 50px 50px 0px 0px;
    position: absolute;
    bottom: 0;
    @media (max-width: 980px) {
      width: 100%;
      height: 700px;
    }
    @media (max-width: 750px) {
      height: 1070px;
    }
  }
  .subDiv {
    width: min(100%, 1440px);
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding: 0px 100px 50px 100px;
    position: relative;
    z-index: 2;
    @media (max-width: 1024px) {
      padding: 0px 40px 50px 40px;
    }
    @media (max-width: 980px) {
      padding: 150px 30px 100px 30px;
      gap: 150px;
    }
    .titleDiv {
      width: min(100%, 660px);
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-top: 200px;
      @media (max-width: 500px) {
        width: 100%;
        margin-top: 0px;
      }
      .priTitle {
        ${cssPmT}
        color: var(--primary-50);
        text-align: center;
      }
      .title {
        ${cssPageTitle}
        color: var(--gery-white);
        margin: 15px 0px 30px 0px;
        text-align: center;
        .br {
          display: none;
          @media (max-width: 730px) {
            display: block;
          }
        }
        @media (max-width: 600px) {
          font-size: 40px;
          margin: 15px 20px 20px 20px;
        }
      }
      .des {
        ${cssDes}
        color: var(--gery-white);
        text-align: center;
        /* text-wrap: balance; */
      }
    }
    .cardDIv {
      width: 100%;
      display: flex;
      justify-content: center;
      gap: 29px;
      @media (max-width: 1140px) {
        gap: 22px;
      }
      @media (max-width: 980px) {
        flex-wrap: wrap;
        gap: 20px;
      }
      @media (max-width: 750px) {
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
      }
      .card {
        min-width: 300px;
        max-width: 390px;
        height: 370px;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        gap: 20px;
        padding: 50px 35px 0px 35px;
        border-radius: 40px;
        background: var(--gery-white);
        box-shadow: 0px 4px 50px 0px rgba(0, 0, 0, 0.07);
        @media (max-width: 1024px) {
          height: 330px;
          padding: 50px 23px 0px 23px;
        }
        @media (max-width: 980px) {
          min-width: 330px;
          max-width: 330px;
        }
        @media (max-width: 750px) {
          min-width: 100%;
          max-width: 100%;
        }
        .cardPri {
          font-size: 16px;
          font-weight: 800;
          color: var(--primary-default);
          text-align: justify;
        }
        .cardTitle {
          font-size: 25px;
          font-weight: 800;
          color: var(--blue-dark);
          text-align: justify;
        }
        .cardDes {
          ${cssDes}
        }
      }
    }
  }
`;
