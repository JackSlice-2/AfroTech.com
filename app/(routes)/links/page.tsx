"use client";

import { styled } from "styled-components"
import Hero from "./components/Hero";
import { TodoWrapperLocalStorage } from "./components/todo/TodoWrapperLocalStorage"

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

@media only screen and (max-width: 768px) {
  overflow-x: hidden;
}
`;

const App:React.FC = (props) => {
  return (
      <Container>
      <Hero />
      <TodoWrapperLocalStorage />
      </Container>
  )
}


export default App