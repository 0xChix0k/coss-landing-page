import styled from '@emotion/styled';
import {
  css25W800BD,
  css40W800BD,
  cssDes,
  css30W800BD,
} from 'styles/commonCss';

export const StPDiv2 = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: var(--gery-white);
  .subDiv {
    width: min(100%, 1440px);
    height: 100%;
    display: flex;
    flex-direction: column;
    padding: 30px 100px 150px 100px;
    gap: 50px;
    @media (max-width: 1024px) {
      padding: 30px 40px 100px 40px;
    }
    @media (max-width: 600px) {
      padding: 0px;
      gap: 0px;
    }
    .card {
      width: 100%;
      height: min(100%, 700px);
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 75px 0px 75px 60px;
      border-radius: 50px;
      position: relative;
      @media (max-width: 1024px) {
        height: min(100%, 575px);
        padding: 60px 0px 0px 50px;
      }
      @media (max-width: 600px) {
        height: 950px;
        padding: 70px 30px 30px 30px;
        border-radius: 0px;
        flex-direction: column;
        align-items: flex-start;
        gap: 20px;
      }
      .textDIv {
        width: min(51.33%, 580px);
        height: 100%;
        padding: 40px 7px 94px 0px;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
        @media (max-width: 1024px) {
          width: min(51.33%, 456px);
          padding: 0px 0px 94px 0px;
        }
        @media (max-width: 600px) {
          width: 100%;
          padding: 0px;
        }
        .pmt {
          ${css25W800BD}
          margin-top: 40px;
          @media (max-width: 600px) {
            margin-top: 15px;
          }
        }
        .title {
          ${css40W800BD}
          margin: 20px 0px 30px 0px;
          @media (max-width: 1024px) {
            ${css30W800BD}
          }
          .br {
            display: block;
            @media (max-width: 600px) {
              display: none;
            }
          }
        }
        .des {
          ${cssDes}
        }
      }
      .imgDiv {
        width: min(48.67%, 550px);
        height: min(100%, 550px);
        display: flex;
        justify-content: center;
        align-items: center;
        @media (max-width: 1024px) {
          width: min(48.67%, 438px);
          height: min(100%, 438px);
        }
        @media (max-width: 600px) {
          width: 100%;
          height: 100%;
        }
        img {
          object-fit: cover;
          width: 100%;
          height: 100%;
        }
      }
    }
  }
`;
