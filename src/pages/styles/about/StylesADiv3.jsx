import styled from '@emotion/styled';
import { cssDes, cssMainTitle, linediv } from 'styles/commonCss';

export const StADiv3 = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  .subDiv {
    width: min(100%, 1440px);
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 100px 100px 220px 100px;
    @media (max-width: 1024px) {
      padding: 100px 50px 130px 50px;
    }
    @media (max-width: 500px) {
      padding: 90px 30px 130px 30px;
    }
    .contentDiv {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 0px 84px;
      @media (max-width: 1024px) {
        padding: 0px;
      }
      .title {
        ${cssMainTitle};
        text-align: center;
        @media (max-width: 500px) {
          text-wrap: balance;
          font-size: 35px;
        }
      }
      .des {
        width: min(100%, 642px);
        margin: 30px 0px 70px 0px;
        ${cssDes};
        text-align: center;
        @media (max-width: 500px) {
          margin: 26px 0px 38px 0px;
          text-wrap: balance;
        }
      }
      .line {
        ${linediv};
        margin: 70px 0px;
        @media (max-width: 500px) {
          display: none;
        }
      }
      .subTitle {
        font-size: 25px;
        font-weight: 800;
        color: var(--blue-dark);
        text-align: center;
        margin-bottom: 40px;
        @media (max-width: 500px) {
          display: none;
        }
      }
      .gridBox {
        width: 100%;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 25px;
        @media (max-width: 1305px) {
          grid-gap: 21px;
        }
        @media (max-width: 830px) {
          grid-gap: 18px;
        }
        .card {
          max-width: 341px;
          min-width: 99px;
          height: 200px;
          border-radius: 17px;
          box-shadow: 0px 4px 50px 0px rgba(0, 0, 0, 0.07);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 20px;
          @media (max-width: 700px) {
            gap: 8px;
            height: 150px;
          }
          @media (max-width: 600px) {
            height: 100px;
          }
          .icon {
            svg {
              width: 65px;
              height: 65px;
              @media (max-width: 600px) {
                width: 40px;
                height: 40px;
              }
            }
          }
          .text {
            font-size: 20px;
            font-weight: 600;
            color: var(--blue-dark);
            @media (max-width: 500px) {
              font-size: 14px;
            }
          }
        }
      }
    }
  }
`;
