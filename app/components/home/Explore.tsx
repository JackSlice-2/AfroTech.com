import React, { useEffect, useState } from 'react';
import styled, { StyleSheetManager } from 'styled-components';
import Link from 'next/link';
import Pictures from './Pictures';

const data: string[] = [
    "Modern Design",
    "Clean UE/UI",
    "Interactivity",
    "Unique Layouts",
    "Fast & Secure",
    "Responsive",
    "Hire Now"
];

const Section = styled.div`
    min-height: 100vh;
    scroll-snap-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;

    @media only screen and (max-width: 768px) {
        width: 100%;
        height: 100vh;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 10px;
      }
`;

const Container = styled.div`
    min-height: 100vh;
    scroll-snap-align: center;
    max-width: 1400px;
    width: 100%;
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
        padding:20px;
        height: 40%;
        margin-top: 10px;
        gap: 5px;
    }
`;

const Title = styled.h1`
    font-size: 80px;
    
    @media only screen and (max-width: 768px) {
        font-size: 30px;
    }
`;

const WhatWeDo = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    
    @media only screen and (max-width: 768px) {
        font-size: 18px;
        gap: 2px;
    }
`;

const Line = styled.img`
    height: 5px;

    @media only screen and (max-width: 768px) {
        flex: 1;
        width: 100%;
        align-items: center;
      }
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

    @media only screen and (max-width: 768px) {
    flex:3;
    height:100%
    width: 10%;
  }
    
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

    @media only screen and (max-width: 768px) {
    width: 100%;
    height: 39%;
    bottom: 25px;
    right: 500px;
    left: -420px;
`;

const List = styled.ul`
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 25px;

    @media only screen and (max-width: 768px) {
        gap: 0px
    }
`;
const ListItem = styled.li<{ text: string }>`
    font-size: 40px;
    font-weight: bold;
    cursor: pointer;
    color: gray;
    -webkit-text-stroke: 1px gray;
    position: relative;

    @media only screen and (max-width: 768px) {
        font-size: 24px;
    }

    &::after {
        content: "${(props) => props.text}";
        position: absolute;
        font-size: 70px;
        top: 0;
        left: 0;
        color: darkblue;
        width: 0px;
        overflow: hidden;
        white-space: nowrap;
        -webkit-text-stroke: 1px darkblue;

        @media only screen and (max-width: 768px) {
            font-size: 30px;
        }
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
    right: 0;
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

    const handleDocumentClick = (event: MouseEvent) => {
        const target = event.target as HTMLElement;
        if (!data.includes(target.textContent || '')) {
            setSelectedWork(null);
        }
    };

    useEffect(() => {
        document.addEventListener('click', handleDocumentClick);
        return () => {
            document.removeEventListener('click', handleDocumentClick);
        };
    }, []);

    return (
        <StyleSheetManager shouldForwardProp={(prop) => prop !== 'text'}>
        <Section>
            <Container>
                <Left>
                    <Title>&ldquo;Explore .&rdquo;</Title>
                    <WhatWeDo>
                        <Line src="./img/line.png" alt="line" />
                        <Subtitle>Tailor made to suit every need, and never afraid to innovate with</Subtitle>
                    </WhatWeDo>
                    <List>
                        {data.map((item) => (
                            <ListItem key={item} text={item} onClick={() => setWork(item)}>
                                {item}
                            </ListItem>
                        ))}
                    </List>
                    <Link href="/projects">
                        <Button>Learn More</Button>
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
        </StyleSheetManager>

    );
};

export default Hero;
