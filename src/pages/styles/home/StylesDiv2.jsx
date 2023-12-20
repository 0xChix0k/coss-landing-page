import styled from '@emotion/styled';
import {
  css30W800BD,
  cssDes,
  cssLink,
  cssMainTitle,
  cssMainTitleM,
} from 'styles/commonCss';

export const StDivTwo = styled.div`
  width: 100%;
  height: auto;
  background-color: var(--gery-white);
  display: flex;
  flex-direction: column;
  align-items: center;
  .subDiv {
    width: min(100%, 1440px);
    height: auto;
    display: flex;
    flex-direction: column;
    padding: 150px 100px;
    gap: 50px;
    @media (max-width: 1024px) {
      padding: 150px 50px;
    }
    @media (max-width: 500px) {
      padding: 100px 30px;
    }
    .textDiv {
      ${cssMainTitle}
      @media (max-width: 500px) {
        ${cssMainTitleM}
      }
    }
    .cardDiv {
      width: 100%;
      height: auto;
      display: grid;
      
      grid-template-columns: repeat(2, 1fr);
      grid-gap: 20px;
      position: relative;
      @media (max-width: 1024px) {
        row-gap: 20px;
        column-gap: 15.45px;
      }
      @media (min-width: 501px) and (max-width: 950px) {
        justify-items: center;
        grid-template-columns:repeat(auto-fit, minmax(333px, 1fr));
      }
      @media (max-width: 500px) {
        justify-items: center;
        grid-template-columns: repeat(1, 1fr);
        row-gap: 20px;
        column-gap: 0px;
      }
      .card {
        max-width: 610px;
        min-width: 430px;
        height: 380px;
        border-radius: 40px;
        background-color: var(--gery-lighter);
        padding: 50px;
        display: flex;
        flex-direction: column;
        @media (max-width: 1024px) {
          max-width: 454px;
          min-width: 430px;
        }
        @media (min-width: 501px) and (max-width: 950px) {
          max-width: 454px;
          min-width: 333px;
          padding: 50px 24px;
        }
        @media (max-width: 500px) {
          max-width: 333px;
          min-width: 333px;
          padding: 50px 24px;
        }
        .icon {
          display: flex;
          justify-content: flex-start;
          svg {
            width: 80px;
            height: 80px;
          }
          @media (max-width: 1024px) {
            svg {
              width: 60px;
              height: 60px;
            }
          }
          @media (max-width: 500px) {
            svg {
              width: 50px;
              height: 50px;
            }
          }
        }
        .title {
          ${css30W800BD}
          margin-top: 30px;
          @media (max-width: 1024px) {
            margin-top: 24px;
          }
          @media (max-width: 500px) {
            margin-top: 20px;
          }
        }
        .des {
          ${cssDes}
          margin: 16px 0px;
          @media (max-width: 500px) {
            margin: 16px 0px 20px 0px;
          }
        }
        .link {
          ${cssLink}
        }
      }
    }
  }
`;
