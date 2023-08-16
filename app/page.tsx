"use client";

import { styled } from "styled-components"
import Contact from "./components/sections/Contact"
import Hero from "./components/sections/Hero"
import Who from "./components/sections/Imagine"
import Works from "./components/sections/Explore"

const Container = styled.div`

scroll-snap-type: y mandatory;
scroll-behavior: smooth;
overflow-y: auto;
scrollbar-width: none;
background: url("./img/bg.jpeg");
&::-webkit-scrollbar{
  display: none;
}
`;

const App:React.FC = (props) => {
  return (
    <>
      <Container className="h-screen overflow-y-auto scrollbar-none text-gray-300">
      <Hero />
      <Who />
      <Works />
      <Contact />
      </Container>
    </>
  )
}


export default App