// components/AboutSection.js
import Image from 'next/image';
import React from 'react';

const AboutSection = () => {
  return (
    <>
          <div className='flex mx-auto justify-center items-center max-w-2xl my-14 font-extrabold tracking-tight leading-none text-4xl  md:text-5xl  xl:text-6xl dark:text-white'><h1 className='items-center'>HOW IT WORKS</h1></div>

    

    <div className=" lg:py-8 flex lg:w-4/5  grid lg:grid-cols-2 mx-auto">
      {/* Left Column */}
      <div className="lg:grid-cols-8 ">
        <Image
          className="sm:rounded-none  lg:rounded-[30px]"
          src="/last.png"
          alt="About Us"
          width={700}
          height={400}
        />
      </div>

      
      {/* Right Column */}
      <div className="lg:grid-cols-4 p-8 ml-20">
        
<ol className="relative text-gray-500 border-l border-white dark:border-black-700 dark:text-gray-400">                  
    <li className="mb-14 ml-10">            
        <span className="absolute flex items-center justify-center w-10 h-10   bg-gradient-to-r from-red-500 to-violet-500 rounded-full -left-5   ">
          <h3 className='text-white'>1</h3> 
        </span>
        <h3 className="font-medium leading-tight text-white">Personal Info</h3>
       
    </li>
    <li className="mb-14 ml-10">            
        <span className="absolute flex items-center justify-center w-10 h-10   bg-gradient-to-r from-red-500 to-violet-500 rounded-full -left-5   ">
          <h3 className='text-white'>2</h3> 
        </span>
        <h3 className="font-medium leading-tight text-white">Personal Info</h3>
       
    </li>
    <li className="mb-14 ml-10">            
        <span className="absolute flex items-center justify-center w-10 h-10   bg-gradient-to-r from-red-500 to-violet-500 rounded-full -left-5   ">
          <h3 className='text-white'>3</h3> 
        </span>
        <h3 className="font-medium leading-tight text-white">Personal Info</h3>
       
    </li>
    <li className="mb-14 ml-10">            
        <span className="absolute flex items-center justify-center w-10 h-10   bg-gradient-to-r from-red-500 to-violet-500 rounded-full -left-5   ">
          <h3 className='text-white'>4</h3> 
        </span>
        <h3 className="font-medium leading-tight text-white">Personal Info</h3>
       
    </li>
    <li className="mb-14 ml-10">            
        <span className="absolute flex items-center justify-center w-10 h-10   bg-gradient-to-r from-red-500 to-violet-500 rounded-full -left-5   ">
          <h3 className='text-white'>5</h3> 
        </span>
        <h3 className="font-medium leading-tight text-white">Personal Info</h3>
       
    </li>
    <li className="mb-10 ml-10">            
        <span className="absolute flex items-center justify-center w-10 h-10   bg-gradient-to-r from-red-500 to-violet-500 rounded-full -left-5   ">
          <h3 className='text-white'>6</h3> 
        </span>
        <h3 className="font-medium leading-tight text-white">Personal Info</h3>
       
    </li>
</ol>

        
      </div>

    </div>
    </>
  );
};

export default AboutSection;
