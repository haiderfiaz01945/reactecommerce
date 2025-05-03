import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Hero() {
  const handleClick = () => {
    toast.success("Get Started clicked!");
  };

  return (
    <div className='text-white'>
      <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
        <p className='uppercase text-[#00df9a] font-bold p-2'>Grow with data analytics</p>
        <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>Grow with data</h1>

        <p className='md:text-5xl sm:text-4xl text-xl font-bold py-4'>
          Fast, flexible financing for
        </p>
        <p className='md:text-2xl text-xl font-bold text-gray-500'>
          Monitor your data analytics to increase for BTB, BTC & SASS
        </p>

        <button
          onClick={handleClick}
          className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black hover:bg-[#00c27a] hover:scale-105 transition duration-300'
        >
          Get Started
        </button>
        <ToastContainer position='top-center' autoClose={2000} />
      </div>
    </div>
  );
}

export default Hero;
