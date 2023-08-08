import React, { useState } from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import Pictures from '../Pictures';

const data: string[] = [
    "FrontEnd",
    "BackEnd",
    "Design",
    "Python",
    "FullStack",
];

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
    left: 150px;
    right: 0;
    margin: auto;
    z-index: 1;
`;

const List = styled.ul`
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 20px;
`;
const ListItem = styled.li<{ text: string }>`
    font-size: 70px;
    font-weight: bold;
    cursor: pointer;
    color: gray;
    -webkit-text-stroke: 1px gray;
    position: relative;

    &::after {
        content: "${(props) => props.text}";
        position: absolute;
        font-size: 100px;
        top: 0;
        left: 0;
        color: darkblue;
        width: 0px;
        overflow: hidden;
        white-space: nowrap;
        -webkit-text-stroke: 1px darkblue;
    }

    &:hover {
        &::after {
            animation: moveText 0.5s linear both;

            @keyframes moveText {
                to {
                    width: 100%;
                }
            }
        }
    }
`;

const TableWrapper = styled.div`
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0px;
    width: 1000px;
    height: 1000px;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 4;
`;

const Hero: React.FC = () => {
    const [selectedWork, setSelectedWork] = useState<string | null>(null);

    const setWork = (item: string) => {
        setSelectedWork(item);
    };
    return (
        <Section>
            <Container>
                <Left>
                    <Title>&ldquo;Explore .&rdquo;</Title>
                    <WhatWeDo>
                        <Line src="./img/line.png" alt="line" />
                        <Subtitle>Documentations</Subtitle>
                    </WhatWeDo>
                    <List>
                        {data.map((item) => (
                            <ListItem key={item} text={item} onClick={() => setWork(item)}>
                                {item}
                            </ListItem>
                        ))}
                    </List>
                    <Link href="/morelinks">
                        <Button>More Links</Button>
                    </Link>
                </Left>
                <Right>
                <TableWrapper>
                    {selectedWork ? (
                        <Pictures selected={selectedWork} />
                    ) : (
                        <Img src="./img/hacker5.png" alt="Default" />
                    )}
                </TableWrapper>
                </Right>
            </Container>
        </Section>
    );
};

export default Hero;
