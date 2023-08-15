import React from 'react';
import { styled } from 'styled-components';

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  justify-content: center;
`;

const Container = styled.div`
  height: 100%;
  scroll-snap-align: center;
  width: 1400px;
  display: flex;
  justify-content: space-between;

  @media only screen and (max-width: 768px) {
    width: 100%;
    height: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

const Left = styled.div`
  flex: 1;

  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

const Title = styled.h1`
  font-size: 74px;
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;

  @media only screen and (max-width: 768px) {
    align-items: center;
    text-align: center;
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

const Img = styled.img`
  width: 600px;
  height: 900px;
  object-fit: contain;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  animation: animate 2s infinite ease alternate;

  @keyframes animate {
    to {
      transform: translateY(35px);
    }
  }
`;

const Who: React.FC = () => {
  return (
    <Section>
      <Container>
        <Left>
        <Img src="./img/hacker3.png" />
        </Left>
        <Right>
          <Title>Imagine.</Title>
          <Title>Learn.</Title>
          <Title> Solve.</Title>
          <WhatWeDo>
            <Line src="./img/line.png" alt="line" />
            <p className='text-pink-400'>Difficult Takes a Day, Impossible Takes a Week</p>
          </WhatWeDo>
          <Desc>
            Before you, lies a relentless explorer with an affinity for unraveling the complexities of our modern world&apos;s diverse software,
            languages, and frameworks. A silent conqueror of uncharted realms, I thrive in the realm of perpetual learning,
            turning the unknown into a sandbox of possibilities.
          </Desc>
          <Button><a href='/tutorials' >More</a></Button>
        </Right>
      </Container>
    </Section>
  );
};

export default Who;
