import React from "react";
import "./Connect.css";
import ContactImage from '../assets/contactimage.svg'
import ConnectForm from "./ConnectForm";

const Connect = () => {
  return (
    <div className=" min-h-[100vh] overflow-x-hidden">
      <div className="flex  justify-center items-center  pt-5" data-aos="zoom-in"
        data-aos-offset="0"
        data-aos-delay="50"
        data-aos-duration="1200"
        data-aos-easing="ease-in-sine"
        data-aos-mirror="false"
        data-aos-once="false"
        data-aos-anchor-placement="top">
        <h2 className='  md:border-l-2 md:border-b-2 md:border-r-2 md:border-t-2 md:border-[#1788ae] rounded-b-lg rounded-t-lg  text-3xl md:text-4xl text-[#1788ae] font-family-["Nunito", sans-serif ] font-bold py-2 md:px-4 mb-0 cursor-crosshair md:hover:scale-95 duration-300 ease-linear text-center'>
          Let's Connect
        </h2>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-center md:h-[85vh] ">
        <div className="basis-full md:basis-1/2 flex justify-center items-center   h-full "data-aos="fade-left"
        data-aos-offset="0"
        data-aos-delay="50"
        data-aos-duration="1200"
        data-aos-easing="ease-in-sine"
        data-aos-mirror="false"
        data-aos-once="false"
        data-aos-anchor-placement="top">
         <img src={ContactImage} alt=""   loading="lazy" className=" cursor-crosshair md:hover:scale-95 duration-500 ease-linear"/>
        </div>
        <div className="basis-full md:basis-1/2  h-full  w-full md:w-fit" data-aos="fade-right"
        data-aos-offset="0"
        data-aos-delay="50"
        data-aos-duration="1200"
        data-aos-easing="ease-in-sine"
        data-aos-mirror="false"
        data-aos-once="false"
        data-aos-anchor-placement="top">
        
        <ConnectForm/>
        
        
        
        
        
        </div>

      </div>
    </div>
  );
};

export default Connect;
