import React, { useState } from 'react';
import Navbar from '../../../components/Navbar';

const Hero: React.FC = () => {
    return (
        <section className="h-screen snap-center flex flex-col justify-between items-center">
        <Navbar />
        <div className="h-[110vh] snap-center w-[1400px] flex justify-between">
                <div className='gap-7 justify-center flex-2 flex flex-col'>
                    <h1 className='text-6xl'>Coming Soon...</h1>
                    <div className='flex items-center gap-2'>
                        <img src="./img/line.png" alt="line" className='h-2'/>
                        <h2 className='text-pink-300'>Dont Worry, I will update this page as soon as i can! For now, enjoy what we have so far !</h2>
                    </div>
                </div>
                <div className='relative w-3/4'>
                </div>
            </div>
        </section>
    );
};

export default Hero;