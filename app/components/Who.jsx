"use client";

import { styled } from 'styled-components'

const Section = styled.div`
height: 100vh;
scroll-snap-align: center;
display: flex;
justify-content: center;
`;

const Container = styled.div`
height: 100vh;
scroll-snap-align: center;
width: 1400px;
display: flex;
justify-content: space-between;
`;

const Left = styled.div`
flex: 1;
`;
const Title = styled.h1`
font-size: 74px;
`;

const Right = styled.div`
flex: 1;
display: flex;
flex-direction: column;
justify-content: center;
gap: 20px;
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

const Who = () => {
  return (
    <Section>
            <Container>
                <Left>
                </Left>
                <Right>
                <Title>Imagine.</Title>
                <Title>Learn.</Title>
                <Title> Solve.</Title>
                    <WhatWeDo>
                        <Line src="./img/line.png" />
                        <Subtitle>Difficult Takes a Day, Impossible Takes a Week</Subtitle>
                    </WhatWeDo>
                    <Desc>Before you, lies a relentless explorer with an affinity for unraveling the complexities of our modern world`s diverse software, 
                      languages, and frameworks. A silent conqueror of uncharted realms, I thrive in the realm of perpetual learning, 
                      turning the unknown into a sandbox of possibilities.</Desc>
                    <Button>Learn More</Button>
                </Right>
            </Container>
    </Section>
  )
}

export default Who