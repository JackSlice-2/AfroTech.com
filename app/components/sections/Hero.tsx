import React from 'react';
import { styled, keyframes } from 'styled-components';
import Navbar from './../Navbar';

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
      transform: translateY(35px);
    }
  }
`;
const WhatWeDo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Hero: React.FC = () => {
  return (
    <Section>
      <Navbar />
      <Container>
        <Left>
          <h1 className='text-6xl'>&rdquo;Pacience is Key When Troubleshooting.&rdquo;</h1>
          <WhatWeDo>
            <img src="./img/line.png" className='h-1' alt='line' />
            <h2 className='text-pink-400'>What we do</h2>
          </WhatWeDo>
          <p className='font-medium text-gray-300'>We strive to create the most intuitive and sofisticated User Interface for the best User Experience, in Web, IOS & Android applications.</p>
          <button className="bg-blue-900 text-white font-medium w-36 py-2 rounded-lg cursor-pointer">Learn More</button>
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
