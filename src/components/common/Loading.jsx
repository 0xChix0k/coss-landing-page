import styled from '@emotion/styled';

const Loading = () => {
  const StyledContain = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    background-color: var(--gery-white);
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    .dots {
      animation: bounce 1.5s infinite linear;
      background: var(--gery-default);
      border-radius: 50%;
      display: inline-block;
      height: 20px;
      text-align: center;
      width: 20px;
    }

    .dots:nth-child(1) {
      animation-delay: 0.2s;
    }
    .dots:nth-child(2) {
      animation-delay: 0.4s;
    }
    .dots:nth-child(3) {
      animation-delay: 0.6s;
    }
    .dots:nth-child(4) {
      animation-delay: 0.8s;
    }
    .dots:nth-child(5) {
      animation-delay: 1s;
    }
    @keyframes bounce {
      0% {
        transform: translateY(0);
      }
      15% {
        transform: translateY(-15px);
      }
      30% {
        transform: translateY(0);
      }
    }
  `;

  return (
    <StyledContain>
      <div className="dots" />
      <div className="dots" />
      <div className="dots" />
      <div className="dots" />
      <div className="dots" />
    </StyledContain>
  );
};
export default Loading;
