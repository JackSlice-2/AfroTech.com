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

  @media only screen and (max-width: 768px) {
    height: 110vh;
  }
`;

const Container = styled.div`
  height:90vh;
  scroll-snap-align: center;
  width: 1400px;
  display: flex;
  justify-content: space-between;

  @media only screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 1000px;
  }
`;

const Left = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;

  @media only screen and (max-width: 768px) {
    flex: 1;
    align-items: center;
    gap: 10px;
    top: 0px;
  }
`;

const Right = styled.div`
  flex: 3;
  position: relative;

  @media only screen and (max-width: 768px) {
  flex: 1;
  width: 100%;
}
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

  @media only screen and (max-width: 768px) {
    width: 250px;
    bottom: 150px;
  }

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

const Line = styled.img`
  height: 5px;
`;

const H1 = styled.h1`
@media only screen and (max-width: 768px) {
  text-align: center;

`;

const P = styled.p`
@media only screen and (max-width: 768px) {
  padding: 20px;
  text-align: center;
`;


const Hero: React.FC = () => {
  return (
    <Section>
      <Navbar />
      <Container>
        <Left>
          <H1 className='text-6xl md'>&rdquo;Pacience is Key When Troubleshooting.&rdquo;</H1>
          <WhatWeDo>
          <Line src="./img/line.png" alt="line" />
            <h2 className='text-pink-400'>What we do</h2>
          </WhatWeDo>
          <P className='font-medium text-gray-300'>We strive to create the most intuitive and sofisticated User Interface for the best User Experience, in Web, IOS & Android applications.</P>
          <button className="bg-blue-900 text-white font-medium w-36 py-2 rounded-lg cursor-pointer"><a href='/about'>Learn More</a></button>
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
