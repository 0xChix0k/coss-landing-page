import styled from '@emotion/styled';
import imgBg from 'assets/homeDiv4Bg.png';
import imgBgMobile from 'assets/mobile/img_mobile_home_bg_secondary.png';
import imgBgTablet from 'assets/tablet/img_tablet_home_bg_secondary.png';
import { cssMainTitle } from 'styles/commonCss';

export const StDiv4 = styled.div`
  width: 100%;
  height: 640px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: url(${imgBg});
  background-size: cover;
  background-repeat: no-repeat;
  @media (max-width: 1024px) {
    height: 530px;
    background-image: url(${imgBgTablet});
  }
  @media (max-width: 500px) {
    height: 530px;
    background-image: url(${imgBgMobile});
  }
  .title {
    max-width: 516px;
    min-width: 307px;
    ${cssMainTitle}
    text-align: center;
    color: var(--gery-white);
    margin-bottom: 30px;
    @media (max-width: 1024px) {
      font-size: 35px;
      padding-inline: 43px;
    }
    @media (max-width: 500px) {
    }
  }
`;
