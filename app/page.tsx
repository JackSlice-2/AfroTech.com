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
overflow-x: hidden;
background: url("./img/bg.jpeg");
&::-webkit-scrollbar{
  display: none;
}
@media only screen and (max-width: 768px) {
    overflow-x: hidden;
}
`;

const App:React.FC = (props) => {
  return (
    <>
      <Container className="h-screen overflow-y-auto overflow-x-hidden scrollbar-none text-gray-300 w-max-full">
      <Hero />
      <Who />
      <Works />
      <Contact />
      </Container>
    </>
  )
}


export default App