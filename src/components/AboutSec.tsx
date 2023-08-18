// components/AboutSection.js
import React from 'react';
import Image from 'next/image';
const AboutSection = () => {
  return (
    <div className="lg:py-8 flex lg:w-4/5 grid lg:grid-cols-2  mx-auto">
      {/* Left Column */}
      <div className=" p-8">
        <h2 className="flex mx-auto  lg:max-w-2xl mb-4 font-extrabold tracking-tight leading-none text-4xl  md:text-5xl  xl:text-6xl dark:text-white text-2xl font-bold mb-4">About Us</h2>
        <p className="mb-4 text-white text-xl text-justify">
        At NFTATIVE, our journey began with an insatiable curiosity about the cosmos. We are a passionate team of space enthusiasts, artists, and creators who have united to bring the wonders of the universe to the digital art world. Our mission is to bridge the gap between art and science, allowing you to explore the beauty and mysteries of space through the lens of NFTs.


        </p>
        <p className='text-white text-xl text-justify'>
        Every NFT in our collection is more than just a digital token; it is a piece of cosmic inspiration. We collaborate closely with talented artists to craft intricate and breathtaking space-themed artworks that capture the essence of galaxies, planets, stars, and more. From awe-inspiring nebulae to the serene beauty of distant worlds, each NFT tells a unique story of our connection to the universe.
        </p>
      </div>

      {/* Right Column */}
      <div className=" lg:p-8  border rounded-lg  opacity-75">
        <Image
          className="w-full h-auto object-cover"
          src="/2.jpg"
          alt="About Us"
          width={300}
          height={300}
          
        />
      </div>
    </div>
  );
};

export default AboutSection;
