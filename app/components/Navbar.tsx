import { GithubIcon, LinkedinIcon } from 'lucide-react';
import React from 'react';
import { styled, keyframes } from 'styled-components';

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
  gap: 50px;
`;
const spinAnimation = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;
const glowAnimation = keyframes`
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
`;
const Logo = styled.img`
  height: 30px;
  animation: ${spinAnimation} 5s linear infinite, ${glowAnimation} 2s ease-in-out infinite alternate;
`;
const List = styled.ul`
  display: flex;
  gap: 20px;
`;
const ListItem = styled.li``;
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

const Navbar: React.FC = () => {
  return (
    <Section>
      <Container>
        <Links>
          <Logo src="./img/Ball.png" />
          <List>
            <ListItem><a href="/">Home</a></ListItem>
            <ListItem><a href="/links">Links</a></ListItem>
            <ListItem><a href='/tutorials'>Tutorials</a> </ListItem>
            <ListItem><a href='/projects'>Projects</a></ListItem>
            <ListItem><a href='/apps'>Apps</a></ListItem>
            <ListItem><a href='/games'>Games</a></ListItem>
            <ListItem><a href='/about'>About</a></ListItem>
          </List>
        </Links>
        <Icons>
      <button>
        <a href='https://github.com/JackSlice-2'>
          <GithubIcon /></a>
        </button>
      <button>
        <a href='https://www.linkedin.com/in/pc-nunes-8a26a2248/'>
          <LinkedinIcon /></a>
        </button>
      <Icon src="./img/line.png" />
      <Button>Hire Now</Button>
    </Icons>

      </Container>
    </Section>
  );
};

export default Navbar;
