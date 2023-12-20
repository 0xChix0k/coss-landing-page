import styled from '@emotion/styled';

export const StyleContain = styled.div`
  width: 100%;
  height: 0;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  background-color: var(--gery-white);
  visibility: hidden;
  opacity: 0;
  transition: height 0.3s ease, opacity 0.3s ease;
  :is(.visible) {
    visibility: visible;
    height: 850px;
    opacity: 1;
  }
  .headr {
    width: 100%;
    height: 83px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding-inline: 10px;
  }
  .dropdown-menu {
    width: 100%;
    display: flex;
    flex-direction: column;
  }
  .item {
    width: 100%;
    height: 70px;
    font-size: 20px;
    font-weight: 800;
    display: flex;
    align-items: center;
    color: var(--gery-default);
    cursor: pointer;
    padding-inline: 30px;
    &:hover {
      color: var(--gery-darkest);
    }
  }
`;
