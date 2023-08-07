import React from 'react';
import { styled, keyframes } from 'styled-components';
import Navbar from './Navbar';

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

const Container = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  width: 1400px;
  display: flex;
  justify-content: space-between;
`;

const Left = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
`;
const Title = styled.h1`
  font-size: 74px;
`;
const WhatWeDo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;
const Line = styled.img`
  height: 5px;
`;
const Subtitle = styled.h2`
  color: pink;
`;
const Desc = styled.p`
  font-size: 24px;
  color: lightgray;
`;
const Button = styled.button`
  background-color: darkblue;
  color: white;
  font-weight: 500;
  width: 150px;
  padding: 5px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const Right = styled.div`
  flex: 3;
  position: relative;
`;
const Img = styled.img`
  width: 1100px;
  height: 850px;
  object-fit: contain;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  animation: animate 2s infinite ease alternate;

  @keyframes animate {
    to {
      transform: translateY(75px);
    }
  }
`;
const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;
const ImgBall = styled.img`
  width: 160px;
  height: 80px;
  object-fit: contain;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  animation: ${rotate} 5s linear infinite;

  @keyframes animate {
    to {
      transform: translateY(20px);
    }
  }
`;

const Hero: React.FC = () => {
  return (
    <Section>
      <Navbar />
      <Container>
        <Left>
          <Title>&rdquo;Pacience is Key When Troubleshooting.&rdquo;</Title>
          <WhatWeDo>
            <Line src="./img/line.png" />
            <Subtitle>What we do</Subtitle>
          </WhatWeDo>
          <Desc>We strive to create the most intuitive and sofisticated User Interface for the best User Experience, in Web, IOS & Android applications.</Desc>
          <Button>Learn More</Button>
        </Left>
        <Right>
          <Img src="./img/hacker.png"/>
          <ImgBall src="./img/Ball.png" />
        </Right>
      </Container>
    </Section>
  );
};

export default Hero;
