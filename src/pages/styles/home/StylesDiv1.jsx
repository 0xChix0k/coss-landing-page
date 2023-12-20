import styled from '@emotion/styled';
import divBackOne from 'assets/divBack_1.png';
import divBackOneMobile from 'assets/mobile/img_mobile_home_bg_master.png';
import divBackOneTablet from 'assets/tablet/img_tablet_home_bg_master.png';
import { css25W800BD, cssDes, cssPageTitle, cssPmT } from 'styles/commonCss';

export const StDivOne = styled.div`
  width: 100%;
  height: auto;
  background-color: var(--gery-white);
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  .bgDiv {
    width: 100%;
    height: 1036px;
    background-image: url(${divBackOne});
    clip-path: polygon(0 0, 100% 0, 100% 70%, 0 100%);
    background-size: cover;
    position: absolute;
    top: 0;
    z-index: 1;
    @media (max-width: 1024px) {
      background-image: url(${divBackOneTablet});
    }
    @media (max-width: 500px) {
      background-image: url(${divBackOneMobile});
    }
  }
  .subDiv {
    width: min(100%, 1440px);
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    padding: 40px 100px;
    position: relative;
    z-index: 2;
    @media (max-width: 1024px) {
      padding: 50px 50px 60px 50px;
      gap: 50px;
    }
    @media (max-width: 500px) {
      padding: 0px 30px 50px 30px;
      gap: 0px;
    }
    .imgDiv {
      position: absolute;
      top: 0;
      right: 0;
      width: min(100%, 590px);
      height: min(100%, 770px);
      z-index: -1;
      @media (max-width: 1024px) {
        top: 266px;
      }
      @media (max-width: 500px) {
        top: 391px;
        width: min(100%, 297px);
        height: min(100%, 297px);
      }
      img {
        object-fit: contain;
        width: 100%;
        height: 100%;
      }
    }
    .textDiv {
      width: 100%;
      height: 530px;
      margin-top: 150px;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      @media (max-width: 1024px) {
        margin-top: 74px;
      }
      @media (max-width: 500px) {
        margin-top: 70px;
      }
      .pmt {
        width: min(100%, 690px);
        ${cssPmT};
        @media (max-width: 500px) {
          width: 100%;
        }
      }
      .titleDiv {
        width: min(100%, 690px);
        height: auto;
        margin: 15px 0px 30px 0px;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        @media (max-width: 500px) {
          width: 100%;
          margin: 15px 0px 20px 0px;
        }
        span {
          ${cssPageTitle};
          @media (max-width: 500px) {
            font-size: 2rem;
          }
          :is(.highlight) {
            color: var(--primary-default);
          }
        }
        .br{
            display: none;
            @media (max-width: 780px) {
              display: block;
            }
          }
      }
      .desDiv {
        width: min(100%, 690px);
        height: auto;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        /* margin-bottom: 40px; */
        padding-right: 75px;
        @media (max-width: 500px) {
          width: 100%;
        }
        ${cssDes};
      }
    }
    .cardDIv {
      width: 100%;
      height: auto;
      display: flex;
      justify-content: center;
      gap: 29px;
      position: relative;
      @media (max-width: 1024px) {
        gap: 23px;
      }
      @media (min-width: 751px) and (max-width: 1000px) {
        flex-wrap: wrap;
        gap: 23px;
      }
      @media (max-width: 750px) {
        flex-direction: column;
        align-items: center;
        gap: 20px;
      }
      .card {
        max-width: 394px;
        min-width: 310px;
        height: 370px;
        border-radius: 40px;
        background-color: var(--gery-white);
        box-shadow: 0px 4px 50px 0px rgba(0, 0, 0, 0.07);
        padding: 35px 35px 0px 35px;
        display: flex;
        flex-direction: column;
        align-items: self-start;
        @media (max-width: 1024px) {
          max-width: 310px;
          min-width: 310px;
        }
        @media (max-width: 750px) {
          max-width: 100%;
          min-width: 100%;
          height: 350px;
        }
        .cardTitle {
          ${css25W800BD};
          margin: 30px 0px 20px 0px;
        }
        .cardDes {
          ${cssDes};
        }
      }
    }
  }
`;
