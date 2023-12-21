import styled from '@emotion/styled';
// import { useNavigate } from 'react-router-dom';

const ErrPage = () => {
  // const navigate = useNavigate();
  return (
    <ErrorPageWrapper>
      <BackgroundAnimation />
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Title data-h1="404">404</Title>
        <Message data-p="NOT FOUND">NOT FOUND</Message>
        {/* <BackLink onClick={() => navigate('/')}>GO BACK</BackLink> */}
      </div>
    </ErrorPageWrapper>
  );
};

export default ErrPage;

const BackgroundAnimation = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: linear-gradient(45deg, #f7fafc, #e3f2fd, #e1f5fe, #ffffff);
  background-size: 400% 400%;
  animation: GradientBackground 15s ease infinite;

  @keyframes GradientBackground {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
  z-index: -1;
`;

const ErrorPageWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  height: 100%;
  font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif;
`;

const Title = styled.h1`
  font-size: 30vh;
  font-weight: bold;
  position: relative;
  margin: -8vh 0 0;
  padding: 0;
  &:after {
    content: attr(data-h1);
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    color: transparent;
    background: -webkit-repeating-linear-gradient(
      -45deg,
      #71b7e6,
      #69a6ce,
      #b98acc,
      #ee8176,
      #b98acc,
      #69a6ce,
      #9b59b6
    );
    background-clip: text;
    -webkit-text-fill-color: transparent;
    background-size: 400%;
    text-shadow: 1px 1px 2px rgba(255, 255, 255, 0.25);
    animation: animateTextBackground 10s ease-in-out infinite;
  }
`;

const Message = styled.p`
  color: #d6d6d6;
  font-size: 8vh;
  font-weight: bold;
  line-height: 10vh;
  max-width: 600px;
  position: relative;
  &:after {
    content: attr(data-p);
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    color: transparent;
    background: -webkit-repeating-linear-gradient(
      -45deg,
      #71b7e6,
      #69a6ce,
      #b98acc,
      #ee8176,
      #b98acc,
      #69a6ce,
      #9b59b6
    );
    text-shadow: 1px 1px 2px rgba(255, 255, 255, 0.5);
    -webkit-background-clip: text;
    -moz-background-clip: text;
    background-clip: text;
  }
`;

// const BackLink = styled.div`
//   position: relative;
//   font-size: 4vh;
//   font-weight: bold;
//   text-decoration: none;
//   color: #000;
//   cursor: pointer;
// `;
