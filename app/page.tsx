"use client";

import Contact from "./components/home/Contact";
import Hero from "./components/home/Hero";
import Who from "./components/home/Imagine";
import Works from "./components/home/Explore";

const App: React.FC = (props) => {
  return (
    <>
      <div
        className="h-screen overflow-y-auto overflow-x-hidden
       text-gray-300 w-max-full scroll-behavior-smooth"
        style={{
          backgroundImage: "url('./img/bg.jpeg')",
          scrollSnapType: 'y mandatory',
          WebkitOverflowScrolling: 'touch', // For smooth scrolling on iOS
          scrollbarWidth: 'none', // For Firefox
          msOverflowStyle: 'none', // For Internet Explorer
          overflow: '-webkit-paged-x',
        }}>
        {/* For webkit-based browsers (Chrome and Safari) */}
        <style>
          {`::-webkit-scrollbar {
              width: 0px;
              height: 0px;
            }
          `}
        </style>
        <Hero />
        <Who />
        <Works />
        <Contact />
      </div>
    </>
  );
};

export default App;
