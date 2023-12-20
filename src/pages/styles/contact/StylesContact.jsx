import styled from '@emotion/styled';
import banner from 'assets/img_contact_bg_master.png';
import bannerTablet from 'assets/tablet/img_tablet_contact_bg_master.png';

export const StContact = styled.div`
  width: 100%;
  height: 840px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  background-image: url(${banner});
  background-size: cover;
  background-repeat: no-repeat;
  position: relative;
  @media (max-width: 1024px) {
    height: 966px;
    background-image: url(${bannerTablet});
  }
  @media (max-width: 500px) {
    height: 1522px;
    background-image: none;
    background-color: var(--gery-white);
  }
  .subDiv {
    width: min(100%, 1440px);
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 80px 0px 90px 0px;
    @media (max-width: 1024px) {
      padding: 140px 0px 156px 0px;
    }
    @media (max-width: 500px) {
      padding: 60px 30px 140px 30px;
    }
    .submitDiv {
      width: min(100%, 500px);
      height: 668px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-start;
      gap: 58px;
      padding: 100px 80px 0px 80px;
      border-radius: 20px;
      background-color: var(--gery-white);
      box-shadow: 0px 4px 50px 0px rgba(0, 0, 0, 0.07);
      @media (max-width: 1024px) {
        height: 670px;
        padding: 100px 80px 0px 80px;
      }
      @media (max-width: 500px) {
        height: 740px;
        padding: 40px 0px 0px 0px;
        width: 100%;
        padding: 0px;
        box-shadow: none;
      }
      .textDiv {
        width: 100%;
        height: auto;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 20px;
        .title {
          font-size: 30px;
          font-weight: 800;
          color: var(--blue-dark);
          text-align: justify;
        }
        .des {
          font-size: 16px;
          font-weight: 500;
          color: var(--gery-default);
          text-align: justify;
        }
      }
    }
    .formDiv {
      width: min(100%, 500px);
      height: 668px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-start;
      gap: 30px;
      padding: 64px 80px;
      border-radius: 20px;
      background-color: var(--gery-white);
      box-shadow: 0px 4px 50px 0px rgba(0, 0, 0, 0.07);
      @media (max-width: 1024px) {
        height: 670px;
      }
      @media (max-width: 500px) {
        width: 100%;
        height: 740px;
        padding: 0px;
        box-shadow: none;
      }
      .textDiv {
        width: 100%;
        height: auto;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 20px;
        .line {
          width: 40px;
          height: 7px;
          border-radius: 73px;
          background-color: var(--primary-default);
        }
        .title {
          font-size: 40px;
          font-weight: 800;
          color: var(--blue-dark);
        }
        .des {
          font-size: 16px;
          font-weight: 500;
          color: var(--gery-default);
        }
      }
      .inputDiv {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
        gap: 24px;
      }
    }
  }
`;
