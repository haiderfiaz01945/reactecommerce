import React from 'react';
import { useState } from 'react'
import { RiMenuSearchLine } from "react-icons/ri";
import { IoIosClose } from "react-icons/io";
import { Link } from "react-router-dom";
import Home from '../pages/Home';


const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handlenav = ()=>{
        setNav(!nav)
    }
  return (
    <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white'>
      
      <h1 className='text-3xl font-bold text-[#00df9a]'>React.</h1>

      <ul className='hidden md:flex'>
  <li className='p-4 hover:text-[#00df9a] hover:scale-105 transition duration-300 cursor-pointer'><Link to ="/home">Home</Link></li>
  <li className='p-4 hover:text-[#00df9a] hover:scale-105 transition duration-300 cursor-pointer'><Link to ="/company">Company</Link></li>
  <li className='p-4 hover:text-[#00df9a] hover:scale-105 transition duration-300 cursor-pointer'>Resources</li>
  <li className='p-4 hover:text-[#00df9a] hover:scale-105 transition duration-300 cursor-pointer'>About</li>
  <li className='p-4 hover:text-[#00df9a] hover:scale-105 transition duration-300 cursor-pointer'>Contact</li>
</ul>


      <div
  onClick={handlenav}
  className='block md:hidden cursor-pointer hover:scale-110 hover:text-[#00df9a] transition-transform duration-300'
>
  {!nav ? <RiMenuSearchLine size={25} /> : <IoIosClose size={25} /> }
</div>
 

<div className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500' : 'fixed left-[-100%]'}>

        <h1 className='text-3xl font-bold text-[#00df9a] m-4'>React.</h1>
        <ul className='uppercase'>
          <li className='p-4 border-b border-gray-600'>Home</li>
          <li className='p-4 border-b border-gray-600'>Company</li>
          <li className='p-4 border-b border-gray-600'>Resources</li>
          <li className='p-4 border-b border-gray-600'>About</li>
          <li className='p-4'>Contact</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
