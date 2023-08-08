"use client";

import { styled } from "styled-components"
import Contact from "./components/sections/Contact"
import Hero from "./components/sections/Hero"
import Who from "./components/sections/Who"
import Works from "./components/sections/Works"

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