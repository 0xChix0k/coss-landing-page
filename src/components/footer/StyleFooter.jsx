import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { linediv } from 'styles/commonCss';

export const StFlex = styled.div`
  display: flex;
  align-items: center;
  @media (max-width: 1024px) {
    gap: 10px;
  }
`;

export const linkStyle = css`
  cursor: pointer;
  &:hover {
    color: var(--gery-darkest);
  }
`;

export const StFooter = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  background: var(--gery-lighter);
  @media (max-width: 1024px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const StFooterSub = styled.div`
  width: min(100%, 1440px);
  height: auto;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 40px 100px;
  @media (max-width: 1024px) {
    padding: 50px 30px;
  }
  @media (max-width: 900px) {
    flex-direction: column;
    justify-content: flex-start;
  }
`;

export const StIconDiv = styled.div`
  max-width: 350px;
  min-width: 224px;
  height: 280px;
  display: flex;
  justify-content: flex-start;
  @media (max-width: 1024px) {
    height: 230px;
  }
  @media (max-width: 900px) {
    width: 100%;
    height: 60px;
  }
`;

export const StInfoContain = styled.div`
  display: flex;
  justify-content: center;
  gap: 60px;
  @media (max-width: 1024px) {
    gap: 30px;
  }
  @media (max-width: 900px) {
    gap: 40px;
    width: 100%;
    flex-direction: column;
    margin-top: 35px;
    margin-bottom: 50px;
  }
`;

export const StInfoDiv = styled.div`
  width: 160px;
  @media (max-width: 900px) {
    width: 100%;
  }
`;

export const StContact = styled.div`
  /* @media (max-width: 1024px) {
    display: none;
  } */
  width: 330px;
  display: flex;
  flex-direction: column;
`;

export const StLine = styled.div`
  display: none;
  @media (max-width: 900px) {
    ${linediv}
    display: flex;
    margin-bottom: 50px;
  }
`;

export const StContactTablet = styled.div`
  display: none; // 默认不显示
  @media (max-width: 1024px) {
    width: 330px;
    display: flex;
    flex-direction: column;
    gap: 27px;
  }
`;

export const StItemsDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 15px;
`;

export const StItemTitle = styled.div`
  font-size: 14px;
  font-weight: 600;
  color: var(--primary-30);
`;

export const StItem = styled.div`
  font-size: 14px;
  font-weight: 500;
  color: var(--gery-default);
`;

export const StItemLink = styled(StItem)`
  ${linkStyle}
`;

export const StCompanyDiv = styled.div`
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

export const StCompanyName = styled.div`
  display: flex;
  font-size: 16px;
  font-weight: 600;
  color: var(--gery-default);
`;

export const StPolicyName = styled.div`
  display: flex;
  font-size: 12px;
  font-weight: 400;
  color: var(--gery-dark);
`;
