"use client";

import React from 'react'
import { styled } from 'styled-components'

const Section = styled.div`
justify-content: center;
`;
const Container = styled.div`
width: 1400px;
display: flex;
justify-content: space-between;
align-items: center;
padding: 10px 0px;
`;
const Links = styled.div`
display: flex;
align-items: center;
gap: 50px
`;
const Logo = styled.img`
height: 50px;
`;
const List = styled.ul`
display: flex;
gap: 20px;
`;
const ListItem = styled.li`
`;
const Icons = styled.div`
display: flex;
align-items: center;
gap: 20px;
`;
const Icon = styled.img`
width: 20px;
cursor: pointer;
`;
const Button = styled.button`
width: 100px;
padding: 10px;
background-color: darkred;
color: white;
border: none;
border-radius: 5px;
cursor: pointer;
`;

const Navbar = () => {
  return (
    <Section>
        <Container>
            <Links>
                <Logo src="./img/logo.png" />
                <List>
                    <ListItem><a href="/">Home</a></ListItem>
                    <ListItem><a href="/links">Links</a></ListItem>
                    <ListItem>Tutorials</ListItem>
                    <ListItem>Projects</ListItem>
                    <ListItem>Apps</ListItem>
                    <ListItem>Games</ListItem>
                </List>
            </Links>
            <Icons>
                <Icon src="./img/line.png" />
                <Button>Hire Now</Button>
            </Icons>
        </Container>
    </Section>
  )
}

export default Navbar