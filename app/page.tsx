"use client";

import { styled } from "styled-components"
import Contact from "./components/Contact"
import Hero from "./components/Hero"
import Who from "./components/Who"
import Works from "./components/Works"
import Navbar from "./components/Navbar";

const Container = styled.div`
height: 100vh;
scroll-snap-type: y mandatory;
scroll-behavior: smooth;
overflow-y: auto;
scrollbar-width: none;
color: white;
background: url("./img/bg.jpeg");
&::-webkit-scrollbar{
  display: none;
}
`;

const App:React.FC = (props) => {
  return (
    <>
      <Container>
      <Hero />
      <Who />
      <Works />
      <Contact />
      </Container>
    </>
  )
}


export default App