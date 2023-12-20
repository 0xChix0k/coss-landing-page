import styled from '@emotion/styled';

const CusBtn = ({ props }) => {
  const { fills = true, btnStr, click, isDisabled = false, w = 162 } = props;

  const StyleBtn = styled.button`
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid
      ${isDisabled ? 'var(--primary-50)' : 'var(--primary-default)'};
    background-color: ${isDisabled
      ? 'var(--primary-50)'
      : fills
      ? 'var(--primary-default)'
      : 'var(--gery-white)'};
    color: ${fills ? 'var(--gery-white)' : 'var(--primary-default)'};
    border-radius: 10px;
    font-size: 16px;
    font-weight: 600;
    cursor: ${isDisabled ? 'not-allowed' : 'pointer'};
    &:hover {
      border: ${isDisabled
        ? 'var(--primary-50)'
        : fills
        ? '1px solid var(--primary-60)'
        : '1px solid var(--primary-default)'};
      background-color: ${isDisabled
        ? 'var(--primary-50)'
        : fills
        ? 'var(--primary-60)'
        : 'var(--gery-lighter)'};
    }
  `;

  return (
    <StyleBtn onClick={click} disabled={isDisabled} style={{ width: w }}>
      {btnStr}
    </StyleBtn>
  );
};

export default CusBtn;
