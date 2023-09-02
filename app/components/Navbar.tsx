import { GithubIcon, LinkedinIcon } from 'lucide-react';
import React from 'react';
import { styled, keyframes } from 'styled-components';
import HamburgerMenu from "./MobileNav"

const Section = styled.div`
  justify-content: center;

  @media only screen and (max-width: 768px) {
    width: 100%;
  }
`;

const Container = styled.div`
  justify-content: space-between;
  width: 1400px;
  display: flex;
  align-items: center;
  padding: 5px 0px;

  @media only screen and (max-width: 768px) {
    width: 100%;
    padding: 5px;
  }
`;

const glowAnimation = keyframes`
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.2;
  }
`;

const Logo = styled.img`
  height: 90px;
  animation: ${glowAnimation} 5s ease-in-out infinite alternate;

  @media only screen and (max-width: 768px) {
    height: 50px
  }
  `;

  const List = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;

  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

const Icons = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  width: 40%;
`;

const Button = styled.button`
  width: 100px;
  padding: 10px;
  background-color: darkred;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

const HideMenu = styled.div`
display: block;
@media (min-width: 768px) {
  display: none;
}
font-size: 0.875rem;
padding: 0.5rem;
`;

const Navbar: React.FC = () => {
  return (
    <Section>
      <Container>
        <div className='flex items-center gap-10'>
        <div>
        <a href='/'><Logo src="./img/LogoWhite.png"/></a>
        </div>
          <List>
            <li><a href="/">Home</a></li>
            <li><a href='/websites'>Websites</a></li>
            <li><a href='/apps'>Apps</a></li>
            <li><a href='/games'>Games</a></li>
            <li><a href='/about'>About</a></li>
          </List>
        </div>
        <Icons>
      <button>
        <a href='https://github.com/JackSlice-2'>
          <GithubIcon /></a>
        </button>
      <button>
        <a href='https://www.linkedin.com/in/pc-nunes-8a26a2248/'>
          <LinkedinIcon /></a>
        </button>
        <HideMenu>
        <HamburgerMenu />
      </HideMenu>

      <Button><a href='/hirenow' >Hire Now</a></Button>
    </Icons>

      </Container>
    </Section>
  );
};

export default Navbar;
