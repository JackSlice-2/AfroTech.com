import React from 'react';
import Navbar from '../Navbar';
import styled, { keyframes } from 'styled-components';

const Img = styled.img`
  animation: animate 2s infinite ease alternate;

  @media only screen and (max-width: 768px) {
    width: 150px;
    bottom: 65px;
  }

  @keyframes animate {
    to {
      transform: translateY(75px);
    }
  }
`;
const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;
const ImgBall = styled.img`
  margin: auto;
  animation: ${rotate} 5s linear infinite;

  @media only screen and (max-width: 768px) {
    height: 40px;
    bottom: 20px;
  }

  @keyframes animate {
    to {
      transform: translateY(35px);
    }
  }
`;
const Hero = () => {
  return (
    <section className="h-screen snap-center flex flex-col justify-between items-center">
      <Navbar />
      <div className="h-[110vh] snap-center w-[1400px] flex justify-between">
        <div className="flex flex-col justify-center gap-20 md:gap-10 md:flex-1 md:w-full md:items-center">
          <h1 className="text-6xl text-center md:text-40">
            &rdquo;Patience is Key When Troubleshooting.&rdquo;
          </h1>
          <div className="flex items-center gap-3">
            <img src="./img/line.png" alt="line" className="h-2" />
            <h2 className="text-pink-400">What we do</h2>
          </div>
          <p className="font-medium text-gray-300 text-center">
            We strive to create the most intuitive and sophisticated User
            Interface for the best User Experience, in Web, iOS & Android
            applications.
          </p>
          <button className="bg-blue-900 text-white font-medium w-36 py-2 rounded-lg cursor-pointer">
            <a href="/about">Learn More</a>
          </button>
        </div>
        <div className="flex-1 relative">
          <Img className='w-[1100px] h-[850px] object-contain absolute inset-0 mx-auto' 
            src="./img/hacker.png"/>
          <ImgBall className='w-[160px] h-[80px] object-contain absolute inset-0 mx-auto animate-spin' src="./img/Ball.png" />
        </div>
      </div>
    </section>
  );
};

export default Hero;