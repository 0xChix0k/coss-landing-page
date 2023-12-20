import styled from '@emotion/styled';
import imgSec from 'assets/img_product_bg_secondary.png';
import imgSecMobile from 'assets/mobile/img_mobile_product_bg_secondary.png';
import imgSecTablet from 'assets/tablet/img_tablet_product_bg_secondary.png';
import { cssDes, cssPageTitle } from 'styles/commonCss';

export const StPDiv3 = styled.div`
  width: 100%;
  height: 650px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: var(--gery-white);
  background-image: url(${imgSec});
  background-size: cover;
  background-repeat: no-repeat;
  @media (max-width: 1024px) {
    background-image: url(${imgSecTablet});
  }
  @media (max-width: 500px) {
    background-image: url(${imgSecMobile});
  }
  .subDiv {
    width: min(100%, 1240px);
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    @media (min-width: 501px) and (max-width: 950px) {
      padding-inline: 45px;
    }
    .title {
      ${cssPageTitle}
      color: var(--gery-white);

      @media (max-width: 515px) {
        font-size: 35px;
      }
      .br {
        display: none;
        @media (max-width: 940px) {
          display: block;
        }
      }
    }
    .des {
      ${cssDes}
      color: var(--gery-white);
      margin-bottom: 40px;
      margin-top: 20px;
      @media (max-width: 640px) {
        text-align: center;
      }
      @media (max-width: 500px) {
        font-size: 16px;
        margin-bottom: 30px;
      }
      .br {
        display: none;
        @media (max-width: 640px) {
          display: block;
        }
      }
    }
  }
`;
