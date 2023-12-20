import styled from '@emotion/styled';
import banner from 'assets/img_news_bg_master.png';
import bannerMobile from 'assets/mobile/img_mobile_news_bg_master.png';
import bannerTablet from 'assets/tablet/img_tablet_news_bg_master.png';
import { css30W800BD, cssPageTitle } from 'styles/commonCss';

export const StNews = styled.div`
  width: 100%;
  height: 1014px;
  display: flex;
  flex-direction: column;
  align-items: center;

  .banner {
    width: 100%;
    height: 100px;
    background-image: url(${banner});
    background-size: cover;
    background-repeat: no-repeat;
    @media (max-width: 1024px) {
      background-image: url(${bannerTablet});
    }
    @media (max-width: 500px) {
      background-image: url(${bannerMobile});
    }
  }
  .subDiv {
    width: min(100%, 1440px);
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    padding-top: 70px;
    @media (max-width: 800px) {
      padding-top: 40px;
    }
    .articleDiv {
      width: 700px;
      height: auto;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 20px;
      @media (max-width: 700px) {
        align-items: center;
        width: 100%;
      }
      .pageTitle {
        ${cssPageTitle}
        width: 100%;
        @media (max-width: 800px) {
          ${css30W800BD}
        }
      }
      .listDiv {
        width: 100%;
        display: flex;
        flex-direction: column;
      }
      .listItem {
        width: 100%;
        height: 98px;
        display: flex;
        align-items: center;
        padding: 25px 10px;
        border-radius: 10px;
        cursor: pointer;
        .leftLine {
          flex-shrink: 0;
          width: 5px;
          height: 48px;
          background-color: var(--gery-light);
          margin-right: 20px;
        }
        .textDev {
          width: calc(100% - 25px);
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 5px;
          .text {
            width: 100%;
            font-size: 20px;
            font-weight: 600;
            color: var(--blue-dark);
            text-align: justify;
            white-space: nowrap; /* 防止文本換行 */
            overflow: hidden; /* 隱藏超出的部分 */
            text-overflow: ellipsis;
          }
          .date {
            font-size: 16px;
            font-weight: 500;
            color: var(--gery-dark);
          }
        }

        &:hover {
          background-color: var(--gery-lighter);
        }
      }
    }
  }
`;

export const StDetailBar = styled.div`
  width: 100%;
  height: 40px;
  background-color: var(--gery-lighter);
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 500px) {
    height: 50px;
  }
  .subDiv {
    width: min(100%, 700px);
    height: auto;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    @media (max-width: 1024px) {
      padding-inline: 50px;
    }
    @media (max-width: 500px) {
      padding-inline: 30px;
    }
    .text {
      width: 100px;
      height: 100%;
      display: flex;
      align-items: center;
      font-size: 16px;
      font-weight: 500;
      color: var(--primary-70);
      cursor: pointer;
      @media (max-width: 500px) {
        font-size: 14px;
      }
    }
  }
`;

export const StSubDetail = styled.div`
  width: min(100%, 700px);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px 0px 100px 0px;
  @media (max-width: 1024px) {
    padding-inline: 50px;
  }
  @media (max-width: 500px) {
    padding-inline: 30px;
  }
  .title {
    font-size: 50px;
    font-weight: 800;
    color: var(--blue-dark);
    text-align: justify;
    @media (max-width: 500px) {
      font-size: 30px;
    }
  }
  .dateDiv {
    width: 100%;
    display: flex;
    align-items: center;
    gap: 30px;
    margin: 30px 0px 40px 0px;
    @media (max-width: 500px) {
      margin-block: 20px;
    }
    .date {
      font-size: 16px;
      font-weight: 500;
      color: var(--gery-default);
      text-align: justify;
    }
    .dateLine {
      flex-grow: 1;
      height: 1px;
      background-color: var(--gery-light);
    }
  }
  .content {
    width: 100%;
    height: auto;
    min-height: 450px;
    font-size: 20px;
    font-weight: 500;
    color: var(--gery-default);
    text-align: justify;
  }
`;
