import React from 'react';
import Navbar from '../../../components/Navbar';
import styled from 'styled-components';

const Img = styled.img`
  animation: animate 2s infinite ease alternate;

  @media only screen and (max-width: 768px) {
    width: 150px;
    bottom: 65px;
  }
`;
const Mac = styled.img`
`;
const Iphone = styled.img`
`;
const Android = styled.img`
`;
const Button = styled.button`
`;
const Mac1 = styled.img`
transform: translateY(360px);
`;
const Iphone1 = styled.img`
  transform: translateX(-470px);
`;
const Android1 = styled.img`
transform: translateY(-350px) translateX(-250px);
`;
const Button1 = styled.button`
transform: translateY(-910px) translateX(-480px);
`;
const Mac2 = styled.img`
transform: translateY(-160px);
`;
const Iphone2 = styled.img`
  transform: translateX(500px) translateY(210px);
`;
const Android2 = styled.img`
transform: translateY(220px) translateX(280px);
`;
const Button2 = styled.button`
transform: translateY(20px) translateX(90px);
`;
const Hero = () => {
  return (
    <section className="h-screen snap-center flex flex-col justify-between items-center">
      <Navbar />
      <div className="h-[110vh] snap-center w-[1400px] flex justify-between mt-32">
        <div className="flex flex-col justify-center -ml-52 mr-40 md:gap-10 md:flex-1 md:w-full md:items-center">
          <h1 className="text-6xl text-start md:text-40">
            &rdquo;Patience is Key When Troubleshooting.&rdquo;
          </h1>
          <div className="flex self-start gap-3">
            <img src="./img/line.png" alt="line" className="h-2" />
            <h2 className="text-pink-400">What we do</h2>
          </div>
          <p className="text-2xl text-gray-300 text-start">
            We strive to create the most intuitive and sophisticated User
            Interface for the best User Experience, in Web, iOS & Android
            applications.
          </p>
          <button className="bg-blue-900 text-white self-start font-medium w-36 py-2 rounded-lg cursor-pointer">
            <a href="/about">Learn More</a>
          </button>
        </div>            
        <div className="flex-1 relative">
          <Mac className='w-[950px] h-[800px] left-10 object-contain absolute inset-0 mx-auto' 
            src="./img/MacRS.png"/>
          <Iphone className='w-[640px] h-[320px] object-contain absolute inset-0 mx-auto top-96 left-3/4' src="./img/IphoneRS.png" />
          <Android className='w-[640px] h-[320px] object-contain absolute inset-0 mx-auto top-96 left-80' src="./img/AndroidRS.png" />
          <a href='https://redeexames.netlify.app/'>
            <Button className='w-[110px] h-[80px] object-contain absolute inset-0 mx-auto top-52 left-full translate-x-20 bg-yellow-500 text-black rounded'>See Live Demo!</Button>
        </a>
        </div>
      </div>

      
      <div className="h-[110vh] snap-center w-[1400px] flex justify-between mt-96 py-56  mb-20">
        <div className="flex flex-col justify-center -ml-10 mr-40 md:gap-10 md:flex-1 md:w-full md:items-center">
          
        <Mac1 className='w-[950px] h-[800px] right-10 object-contain  inset-0 mx-auto' 
            src="./img/Mac.png"/>
          <Iphone1 className='w-[640px] h-[320px] object-contain inset-0 mx-auto' src="./img/Iphone.png" />
          <Android1 className='w-[640px] h-[320px] object-contain inset-0 mx-auto' src="./img/Android.png" />
          <a href=''>
            <Button1 className='w-[110px] h-[80px] object-contain inset-0 mx-auto top-52 bg-yellow-500 text-black rounded'>See Live Demo!</Button1>
        </a>
        </div>  
        <div className="flex-1 relative -mr-52">
        <h1 className="text-6xl text-end md:text-40">
            &rdquo;Patience is Key When Troubleshooting.&rdquo;
          </h1>
          <div className="flex self-end gap-3">
            <img src="./img/line.png" alt="line" className="h-2" />
            <h2 className="text-pink-400">What we do</h2>
          </div>
          <p className="text-2xl text-gray-300 text-end">
            We strive to create the most intuitive and sophisticated User
            Interface for the best User Experience, in Web, iOS & Android
            applications.
          </p>
          <button className="bg-blue-900 text-white self-end font-medium w-36 py-2 rounded-lg cursor-pointer">
            <a href="/about">Learn More</a>
          </button>
        </div>
      </div>

      
      <div className="h-[110vh] snap-center w-[1400px] flex justify-between mt-16">
        <div className="flex flex-col justify-center -ml-52 mr-40 md:gap-10 md:flex-1 md:w-full md:items-center">
          <h1 className="text-6xl text-start md:text-40">
            &rdquo;Patience is Key When Troubleshooting.&rdquo;
          </h1>
          <div className="flex self-start gap-3">
            <img src="./img/line.png" alt="line" className="h-2" />
            <h2 className="text-pink-400">What we do</h2>
          </div>
          <p className="text-2xl text-gray-300 text-start">
            We strive to create the most intuitive and sophisticated User
            Interface for the best User Experience, in Web, iOS & Android
            applications.
          </p>
          <button className="bg-blue-900 text-white self-start font-medium w-36 py-2 rounded-lg cursor-pointer">
            <a href="/about">Learn More</a>
          </button>
        </div>            
        <div className="flex-1 relative">
          <Mac2 className='w-[950px] h-[800px] left-10 object-contain absolute inset-0 mx-auto' 
            src="./img/Mac.png"/>
          <Iphone2 className='w-[640px] h-[320px] object-contain absolute inset-0 mx-auto' src="./img/Iphone.png" />
          <Android2 className='w-[640px] h-[320px] object-contain absolute inset-0 mx-auto' src="./img/Android.png" />
          <a href=''>
            <Button2 className='w-[110px] h-[80px] object-contain absolute inset-0 mx-auto left-full translate-x-20 bg-yellow-500 text-black rounded'>See Live Demo!</Button2>
        </a>
        </div>
      </div>

      <div className="h-[110vh] snap-center w-[1400px] flex justify-between mt-96 py-56  mb-20">
        <div className="flex flex-col justify-center -ml-10 mr-40 md:gap-10 md:flex-1 md:w-full md:items-center">
          
        <Mac1 className='w-[950px] h-[800px] right-10 object-contain  inset-0 mx-auto' 
            src="./img/Mac.png"/>
          <Iphone1 className='w-[640px] h-[320px] object-contain inset-0 mx-auto' src="./img/Iphone.png" />
          <Android1 className='w-[640px] h-[320px] object-contain inset-0 mx-auto' src="./img/Android.png" />
          <a href=''>
            <Button1 className='w-[110px] h-[80px] object-contain inset-0 mx-auto top-52 bg-yellow-500 text-black rounded'>See Live Demo!</Button1>
        </a>
        </div>  
        <div className="flex-1 relative -mr-52">
        <h1 className="text-6xl text-end md:text-40">
            &rdquo;Patience is Key When Troubleshooting.&rdquo;
          </h1>
          <div className="flex self-end gap-3">
            <img src="./img/line.png" alt="line" className="h-2" />
            <h2 className="text-pink-400">What we do</h2>
          </div>
          <p className="text-2xl text-gray-300 text-end">
            We strive to create the most intuitive and sophisticated User
            Interface for the best User Experience, in Web, iOS & Android
            applications.
          </p>
          <button className="bg-blue-900 text-white self-end font-medium w-36 py-2 rounded-lg cursor-pointer">
            <a href="/about">Learn More</a>
          </button>
        </div>
      </div>

      
      <div className="h-[110vh] snap-center w-[1400px] flex justify-between mt-16">
        <div className="flex flex-col justify-center -ml-52 mr-40 md:gap-10 md:flex-1 md:w-full md:items-center">
          <h1 className="text-6xl text-start md:text-40">
            &rdquo;Patience is Key When Troubleshooting.&rdquo;
          </h1>
          <div className="flex self-start gap-3">
            <img src="./img/line.png" alt="line" className="h-2" />
            <h2 className="text-pink-400">What we do</h2>
          </div>
          <p className="text-2xl text-gray-300 text-start">
            We strive to create the most intuitive and sophisticated User
            Interface for the best User Experience, in Web, iOS & Android
            applications.
          </p>
          <button className="bg-blue-900 text-white self-start font-medium w-36 py-2 rounded-lg cursor-pointer">
            <a href="/about">Learn More</a>
          </button>
        </div>            
        <div className="flex-1 relative">
          <Mac2 className='w-[950px] h-[800px] left-10 object-contain absolute inset-0 mx-auto' 
            src="./img/Mac.png"/>
          <Iphone2 className='w-[640px] h-[320px] object-contain absolute inset-0 mx-auto' src="./img/Iphone.png" />
          <Android2 className='w-[640px] h-[320px] object-contain absolute inset-0 mx-auto' src="./img/Android.png" />
          <a href=''>
            <Button2 className='w-[110px] h-[80px] object-contain absolute inset-0 mx-auto left-full translate-x-20 bg-yellow-500 text-black rounded'>See Live Demo!</Button2>
        </a>
        </div>
      </div>

      <div className="h-[110vh] snap-center w-[1400px] flex justify-between mt-96 py-56  mb-20">
        <div className="flex flex-col justify-center -ml-10 mr-40 md:gap-10 md:flex-1 md:w-full md:items-center">
          
        <Mac1 className='w-[950px] h-[800px] right-10 object-contain  inset-0 mx-auto' 
            src="./img/Mac.png"/>
          <Iphone1 className='w-[640px] h-[320px] object-contain inset-0 mx-auto' src="./img/Iphone.png" />
          <Android1 className='w-[640px] h-[320px] object-contain inset-0 mx-auto' src="./img/Android.png" />
          <a href=''>
            <Button1 className='w-[110px] h-[80px] object-contain inset-0 mx-auto top-52 bg-yellow-500 text-black rounded'>See Live Demo!</Button1>
        </a>
        </div>  
        <div className="flex-1 relative -mr-52">
        <h1 className="text-6xl text-end md:text-40">
            &rdquo;Patience is Key When Troubleshooting.&rdquo;
          </h1>
          <div className="flex self-end gap-3">
            <img src="./img/line.png" alt="line" className="h-2" />
            <h2 className="text-pink-400">What we do</h2>
          </div>
          <p className="text-2xl text-gray-300 text-end">
            We strive to create the most intuitive and sophisticated User
            Interface for the best User Experience, in Web, iOS & Android
            applications.
          </p>
          <button className="bg-blue-900 text-white self-end font-medium w-36 py-2 rounded-lg cursor-pointer">
            <a href="/about">Learn More</a>
          </button>
        </div>
      </div>

      
      <div className="h-[110vh] snap-center w-[1400px] flex justify-between mt-16">
        <div className="flex flex-col justify-center -ml-52 mr-40 md:gap-10 md:flex-1 md:w-full md:items-center">
          <h1 className="text-6xl text-start md:text-40">
            &rdquo;Patience is Key When Troubleshooting.&rdquo;
          </h1>
          <div className="flex self-start gap-3">
            <img src="./img/line.png" alt="line" className="h-2" />
            <h2 className="text-pink-400">What we do</h2>
          </div>
          <p className="text-2xl text-gray-300 text-start">
            We strive to create the most intuitive and sophisticated User
            Interface for the best User Experience, in Web, iOS & Android
            applications.
          </p>
          <button className="bg-blue-900 text-white self-start font-medium w-36 py-2 rounded-lg cursor-pointer">
            <a href="/about">Learn More</a>
          </button>
        </div>            
        <div className="flex-1 relative">
          <Mac2 className='w-[950px] h-[800px] left-10 object-contain absolute inset-0 mx-auto' 
            src="./img/Mac.png"/>
          <Iphone2 className='w-[640px] h-[320px] object-contain absolute inset-0 mx-auto' src="./img/Iphone.png" />
          <Android2 className='w-[640px] h-[320px] object-contain absolute inset-0 mx-auto' src="./img/Android.png" />
          <a href=''>
            <Button2 className='w-[110px] h-[80px] object-contain absolute inset-0 mx-auto left-full translate-x-20 bg-yellow-500 text-black rounded'>See Live Demo!</Button2>
        </a>
        </div>
      </div>

      <div className="h-[110vh] snap-center w-[1400px] flex justify-between mt-96 py-56  mb-20">
        <div className="flex flex-col justify-center -ml-10 mr-40 md:gap-10 md:flex-1 md:w-full md:items-center">
          
        <Mac1 className='w-[950px] h-[800px] right-10 object-contain  inset-0 mx-auto' 
            src="./img/Mac.png"/>
          <Iphone1 className='w-[640px] h-[320px] object-contain inset-0 mx-auto' src="./img/Iphone.png" />
          <Android1 className='w-[640px] h-[320px] object-contain inset-0 mx-auto' src="./img/Android.png" />
          <a href=''>
            <Button1 className='w-[110px] h-[80px] object-contain inset-0 mx-auto top-52 bg-yellow-500 text-black rounded'>See Live Demo!</Button1>
        </a>
        </div>  
        <div className="flex-1 relative -mr-52">
        <h1 className="text-6xl text-end md:text-40">
            &rdquo;Patience is Key When Troubleshooting.&rdquo;
          </h1>
          <div className="flex self-end gap-3">
            <img src="./img/line.png" alt="line" className="h-2" />
            <h2 className="text-pink-400">What we do</h2>
          </div>
          <p className="text-2xl text-gray-300 text-end">
            We strive to create the most intuitive and sophisticated User
            Interface for the best User Experience, in Web, iOS & Android
            applications.
          </p>
          <button className="bg-blue-900 text-white self-end font-medium w-36 py-2 rounded-lg cursor-pointer">
            <a href="/about">Learn More</a>
          </button>
        </div>
      </div>

      
      <div className="h-[110vh] snap-center w-[1400px] flex justify-between mt-16">
        <div className="flex flex-col justify-center -ml-52 mr-40 md:gap-10 md:flex-1 md:w-full md:items-center">
          <h1 className="text-6xl text-start md:text-40">
            &rdquo;Patience is Key When Troubleshooting.&rdquo;
          </h1>
          <div className="flex self-start gap-3">
            <img src="./img/line.png" alt="line" className="h-2" />
            <h2 className="text-pink-400">What we do</h2>
          </div>
          <p className="text-2xl text-gray-300 text-start">
            We strive to create the most intuitive and sophisticated User
            Interface for the best User Experience, in Web, iOS & Android
            applications.
          </p>
          <button className="bg-blue-900 text-white self-start font-medium w-36 py-2 rounded-lg cursor-pointer">
            <a href="/about">Learn More</a>
          </button>
        </div>            
        <div className="flex-1 relative">
          <Mac2 className='w-[950px] h-[800px] left-10 object-contain absolute inset-0 mx-auto' 
            src="./img/Mac.png"/>
          <Iphone2 className='w-[640px] h-[320px] object-contain absolute inset-0 mx-auto' src="./img/Iphone.png" />
          <Android2 className='w-[640px] h-[320px] object-contain absolute inset-0 mx-auto' src="./img/Android.png" />
          <a href=''>
            <Button2 className='w-[110px] h-[80px] object-contain absolute inset-0 mx-auto left-full translate-x-20 bg-yellow-500 text-black rounded'>See Live Demo!</Button2>
        </a>
        </div>
      </div>


      <div className="h-[110vh] snap-center w-[1400px] flex justify-between mt-96 py-56  mb-20">

        <div className="flex flex-col justify-center -ml-10 mr-40 md:gap-10 md:flex-1 md:w-full md:items-center">          
        <Mac1 className='w-[950px] h-[800px] right-10 object-contain  inset-0 mx-auto' 
            src="./img/Mac.png"/>
          <Iphone1 className='w-[640px] h-[320px] object-contain inset-0 mx-auto' src="./img/Iphone.png" />
          <Android1 className='w-[640px] h-[320px] object-contain inset-0 mx-auto' src="./img/Android.png" />
          <a href=''>
            <Button1 className='w-[110px] h-[80px] object-contain inset-0 mx-auto top-52 bg-yellow-500 text-black rounded'>See Live Demo!</Button1>
        </a>
        </div>  
        <div className="flex-1 relative -mr-52">
        <h1 className="text-6xl text-end md:text-40">
            &rdquo;Patience is Key When Troubleshooting.&rdquo;
          </h1>
          <div className="flex self-end gap-3">
            <img src="./img/line.png" alt="line" className="h-2" />
            <h2 className="text-pink-400">What we do</h2>
          </div>
          <p className="text-2xl text-gray-300 text-end">
            We strive to create the most intuitive and sophisticated User
            Interface for the best User Experience, in Web, iOS & Android
            applications.
          </p>
          <button className="bg-blue-900 text-white self-end font-medium w-36 py-2 rounded-lg cursor-pointer">
            <a href="/about">Learn More</a>
          </button>
        </div>
      </div>
      
      <div className="h-[110vh] snap-center w-[1400px] flex justify-between mt-16">
        <div className="flex flex-col justify-center -ml-52 mr-40 md:gap-10 md:flex-1 md:w-full md:items-center">
          <h1 className="text-6xl text-start md:text-40">
            &rdquo;Patience is Key When Troubleshooting.&rdquo;
          </h1>
          <div className="flex self-start gap-3">
            <img src="./img/line.png" alt="line" className="h-2" />
            <h2 className="text-pink-400">What we do</h2>
          </div>
          <p className="text-2xl text-gray-300 text-start">
            We strive to create the most intuitive and sophisticated User
            Interface for the best User Experience, in Web, iOS & Android
            applications.
          </p>
          <button className="bg-blue-900 text-white self-start font-medium w-36 py-2 rounded-lg cursor-pointer">
            <a href="/about">Learn More</a>
          </button>
        </div>            
        <div className="flex-1 relative">
          <Mac2 className='w-[950px] h-[800px] left-10 object-contain absolute inset-0 mx-auto' 
            src="./img/Mac.png"/>
          <Iphone2 className='w-[640px] h-[320px] object-contain absolute inset-0 mx-auto' src="./img/Iphone.png" />
          <Android2 className='w-[640px] h-[320px] object-contain absolute inset-0 mx-auto' src="./img/Android.png" />
          <a href=''>
            <Button2 className='w-[110px] h-[80px] object-contain absolute inset-0 mx-auto left-full translate-x-20 bg-yellow-500 text-black rounded'>See Live Demo!</Button2>
        </a>
        </div>
      </div>

    </section>
  );
};

export default Hero;





