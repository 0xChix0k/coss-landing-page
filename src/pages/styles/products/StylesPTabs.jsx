import styled from '@emotion/styled';

export const StPTabs = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: center;
  background-color: var(--gery-white);
  @media (max-width: 1024px) {
    display: none;
  }
  .subDiv {
    width: min(100%, 1440px);
    height: 100%;
    display: flex;
    justify-content: flex-start;
    padding-left: 100px;
    .tab {
      height: 100%;
      display: flex;
      flex-direction: column;
      padding: 28px 40px;
      cursor: pointer;
      .textDiv {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 12px;
        font-size: 20px;
        font-weight: 700;
        color: var(--blue-dark);
      }
      .line {
        width: 30px;
        height: 2px;
      }
      :is(.active) {
        .textDiv {
          color: var(--primary-default);
          .line {
            background: var(--primary-default);
          }
        }
      }
      &:hover:not(.active) {
        .textDiv {
          color: var(--blue-default);
        }
      }
    }
  }
`;
