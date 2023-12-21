import styled from '@emotion/styled';

export const StContain = styled.div`
  width: 100%;
  height: 70px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.03);
  background: var(--gery-white);
  position: relative;
  z-index: 5;
  .subDiv {
    width: min(100%, 1440px);
    height: 100%;
    display: flex;
    padding-inline: 16px;
    justify-content: space-between;
    :is(.f-end) {
      justify-content: flex-end;
    }
    align-items: center;
    padding: 0px 100px;
    @media (max-width: 1024px) {
      padding: 0px 50px;
    }
    @media (max-width: 500px) {
      padding: 0px 10px 0px 16px;
    }
    .leftDiv {
      height: 100%;
      display: flex;
      align-items: center;
      .tabDiv {
        height: 100%;
        display: flex;
        align-items: center;
        gap: 60px;
        margin-left: 40px;
        .tab {
          display: flex;
          align-items: center;
          height: 50px;
          font-size: 16px;
          font-weight: 600;
          color: var(--blue-dark);
          cursor: pointer;
          &:hover {
            color: var(--blue-default);
          }
          &.active {
            border-bottom: 2px solid var(--primary-default);
          }
          @media (max-width: 500px) {
            display: none;
          }
        }
      }
    }
    .btnDiv {
      @media (max-width: 500px) {
        display: none;
      }
    }
    .addBtnDiv {
      display: none;
      @media (max-width: 500px) {
        display: flex;
      }
    }
  }
`;
