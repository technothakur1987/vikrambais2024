import React from 'react'
import './Footer.css'
import bluelogo from '../assets/bluelogo.png'

const Footer = () => {
  return (
    <div className='mt-5 md:mt-0'>
        <p className='text-center mb-1 text-[#585858] text-[0.8rem] opacity-[0.7]'>Vikram Bais &copy; 2024</p>
        <img src={bluelogo} alt="" className='mx-auto h-[10vh] opacity-[0.7] mb-2'/>
        <div className='mx-auto w-[70vw] md:w-[30vw]  flex items-center justify-evenly mb-[3vh]'>
        <a
          href="https://www.linkedin.com/in/technothakur/"
          target="_blank"
          className="hover:cursor-pointer hover:scale-125 duration-300 ease-linear "
        >
          <i className="fab fa-linkedin-in  text-[#1788ae] text-2xl"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/technothakur/"
          target="_blank"
          className="hover:cursor-pointer hover:scale-125 duration-300 ease-linear"
        >
          <i className="fab fa-twitter text-[#1788ae] text-2xl"></i>
        </a>
        <a
          href="https://www.instagram.com/technothakur1987/"
          target="_blank"
          className="hover:cursor-pointer hover:scale-125 duration-300 ease-linear"
        >
          <i className="fab fa-instagram text-[#1788ae] text-2xl"></i>
        </a>
        <a
          href="mailto:vikrambais09021987@gmail.com"
          target="_blank"
          className="hover:cursor-pointer hover:scale-125 duration-300 ease-linear"
        >
          <i className="far fa-envelope  text-[#1788ae] text-2xl"></i>
        </a>
        <a
          href="https://github.com/technothakur1987"
          target="_blank"
          className="hover:cursor-pointer hover:scale-125 duration-300 ease-linear"
        >
          <i className="fab fa-github text-[#1788ae] text-2xl"></i>
        </a>
        </div>



    </div>
  )
}

export default Footer