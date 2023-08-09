import React, { useState } from 'react';
import styled from 'styled-components';
import Navbar from '../../../components/Navbar';

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


const Right = styled.div`
    flex: 3;
    position: relative;
`;

const Hero: React.FC = () => {
    
    return (
        <Section>
            <Navbar />
            <Container>
                <Left>
                    <Title>Coming Soon...</Title>
                    <WhatWeDo>
                        <Line src="./img/line.png" alt="line" />
                        <Subtitle>Dont Worry, I will update this page as soon as i can! For now, enjoy what we have so far !</Subtitle>
                    </WhatWeDo>
                </Left>
                <Right>
                </Right>
            </Container>
        </Section>
    );
};

export default Hero;
