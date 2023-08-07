"use client";

import React, { useState } from 'react'
import { styled } from 'styled-components'

const data = [
    "ReactJs",
    "LinuxOS",
    "Django",
    "TypeScript",
    "Supabase"
];

const Section = styled.div`
height: 100vh;
scroll-snap-align: center;
display: flex;
justify-content: center;
`;
const Container = styled.div`
width: 1400px;
display: flex;
justify-content: space-between;
`;
const Left = styled.div`
flex: 1;
display: flex;
align-items: center;
`;
const List = styled.ul`
list-style: none;
display: flex;
flex-direction: column;
gap: 20px;
`;
const ListItem = styled.li`
font-size: 90px;
font-weight: bold;
cursor: pointer;
color: transparent;
-webkit-text-stroke: 1px white;
position: relative;

    &::after{
        content: "${(props)=>props.text}";
        position: absolute;
        top: 0;
        left: 0;
        color: pink;
        width: 0px;
        overflow: hidden;
        white-space: nowrap;
        }

        &:hover {
            &::after{
                animation: move 0.5s linear both;

                @keyframes moveText {
                    to{
                        width: 100%;
                    }
                }
            }
        }
`;
const Right = styled.div`
flex: 1
`;

const Works = () => {
    const [work, setWork] = useState("React")
  return (
    <Section>
        <Container>
            <Left>
                <List>
                {data.map((item) => (
                    <ListItem key={item} text={item} onClick={()=>setWork(item)} >
                        {item}
                    </ListItem>
                ))}
                </List>
            </Left>
            <Right>
                {work === "React" ? (<p>3</p>) : work === "Linux" ? (<p>2</p>) : <p>1</p>}
             </Right>
        </Container>
    </Section>
  )
}

export default Works