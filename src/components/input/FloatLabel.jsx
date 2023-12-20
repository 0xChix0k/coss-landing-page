import styled from '@emotion/styled';
import { cloneElement, useState } from 'react';

const FloatLabel = ({ props, children }) => {
  const { value, label, required, error, w, h } = props;
  const [focused, setFocused] = useState(false);
  const [hover, setHover] = useState(false);
  const handleFocus = () => setFocused(true);
  const handleBlur = () => setFocused(false);
  const handleHover = () => setHover(true);
  const handleLeave = () => setHover(false);
  const isFOrV = focused || !!value;

  const getBColor = () => {
    if (error) {
      return '#ff3232';
    } else if (focused) {
      return '#367aff';
    } else if (hover) {
      return '#1e1e1e';
    } else {
      return '#b9b9b9';
    }
  };

  const childWithProps = cloneElement(children, {
    onFocus: (e) => {
      handleFocus(); // 調用 FloatLabel 內部的 onBlur 處理函數
      children.props.onFocus && children.props.onFocus(e); // 調用外部傳入的 onBlur 處理函數
    },
    onBlur: (e) => {
      handleBlur(); // 調用 FloatLabel 內部的 onBlur 處理函數
      children.props.onBlur && children.props.onBlur(e); // 調用外部傳入的 onBlur 處理函數
    },
    onMouseEnter: handleHover,
    onMouseLeave: handleLeave,
    style: {
      borderWidth: focused ? 2 : 1,
      borderStyle: 'solid',
      borderColor: getBColor(),
      borderRadius: 10,
    },
  });

  const reqSymbol = `\u00A0*`;
  return (
    <div
      style={{
        width: w,
        minHeight: h,
        maxHeight: '100%',
        position: 'relative',
      }}
    >
      <div style={{ position: 'relative', height: h }}>
        {childWithProps}
        {!!label && (
          <StyleLabel
            style={{
              padding: isFOrV ? '0 4px' : 0,
              fontSize: isFOrV ? 12 : 15,
              fontWeight: isFOrV ? 600 : 500,
              color: error ? '#ff3232' : focused ? '#367aff' : '#939393',
              top: isFOrV ? '-8px' : '50%',
              left: isFOrV ? '12px' : '14px',
              transform: isFOrV ? 'none' : 'translateY(-50%)',
              zIndex: isFOrV ? 9999 : 2,
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center' }}>
              {label}
              {!!label && required && (
                <span style={{ color: '#ff3232' }}>{reqSymbol}</span>
              )}
            </div>
          </StyleLabel>
        )}
      </div>
      {error && <StyleErrDiv>{error}</StyleErrDiv>}
    </div>
  );
};
export default FloatLabel;

const StyleLabel = styled.label`
  pointer-events: none; //點擊事件可穿過該元素
  position: absolute;
  background-color: white;
  transition: top 0.2s ease-out, left 0.2s ease-out, transform 0.2s ease-out;
`;

const StyleErrDiv = styled.div`
  font-size: 14px;
  font-weight: 500;
  color: #ff3232;
  padding-top: 8px;
  height: 25px;
  vertical-align: end;
  text-align: left;
`;
