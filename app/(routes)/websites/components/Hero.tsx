import React, { useState } from 'react';
import Navbar from '../../../components/Navbar';
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

const images = [
  {
    original: "https://picsum.photos/id/1018/1000/600/",
    thumbnail: "https://picsum.photos/id/1018/250/150/",
  },
  {
    original: "https://picsum.photos/id/1015/1000/600/",
    thumbnail: "https://picsum.photos/id/1015/250/150/",
  },
  {
    original: "https://picsum.photos/id/1019/1000/600/",
    thumbnail: "https://picsum.photos/id/1019/250/150/",
  },
  {
    original: "https://picsum.photos/id/1018/1000/600/",
    thumbnail: "https://picsum.photos/id/1018/250/150/",
  },
  {
    original: "https://picsum.photos/id/1015/1000/600/",
    thumbnail: "https://picsum.photos/id/1015/250/150/",
  },
  {
    original: "https://picsum.photos/id/1019/1000/600/",
    thumbnail: "https://picsum.photos/id/1019/250/150/",
  },
];

const Hero: React.FC = () => {
    return (
      <section className="h-screen snap-center flex flex-col justify-between items-center">
        <Navbar />
        <div className="h-screen snap-center w-[77%]">
          <h1 className='flex flex-col text-center text-6xl py-5'>Navigate Through My Past Projects</h1>
        <div className='justify-center w-100%'>
        <ImageGallery items={images} 
        autoPlay={true} 
        lazyLoad={true}
        thumbnailPosition='left'
        slideDuration={3000}
        />
       </div>
       </div>
      </section>
    );
};

export default Hero;