import React,{memo} from "react";
import "./AboutUs.css";
import coder from "../assets/coder.svg";

const AboutUs = ({ SetShowAboutUs }) => {
  return (
    <div className=" bg-[#191919]  fixed top-[5vh] sm:top-0 left-0 min-h-[30vh] sm:min-h-screen w-[90vw] z-[9999] ms-[1.25rem] sm:ms-[5vw]  flex justify-between overflow-y-auto  rounded  mx-auto font-family-['Nunito', sans-serif ]">
      <div
        className="absolute top-5 right-5 bg-[#0f0303] text-white rounded-full px-2 sm:px-4 sm:py-2    duration-500 hover:cursor-pointer hover:rotate-180"
        onClick={() => {
          SetShowAboutUs(false);
        }}
      >
        X
      </div>

      <div className="basis-full sm:basis-1/2 flex flex-col py-3 md:py-0 px-5 md:px-10">
        <div className="basis-full  flex flex-col justify-evenly">
          <h2 className='text-[#1788ae] text-2xl font-family-["Nunito", sans-serif ] font-bold  mb-3 md:mb-0'>
            ABOUT ME
          </h2>
          <p className='text-white font-family-["Nunito", sans-serif ] text-justify text-[0.7rem] md:text-base'>
            I help business owners and busy web developers to design &amp;
            develop creative websites that fits their vision and attracts the
            visitors to stay for ever. Technologies and tools that I use to
            create such awesome websites.
          </p>
          <div className=" text-white flex  flex-wrap  gap-1 md:gap-[0.6rem]  text-[0.5rem] md:text-[0.8rem]  py-1 md:py-2 ">
            <div className="rounded-full border py-1 px-3 border-[#ffffff80] text-center">
              #javascript
            </div>
            <div className="rounded-full border py-1 px-3 border-[#ffffff80] text-center">
              #typescript
            </div>
            <div className="rounded-full border py-1 px-3 border-[#ffffff80] text-center">
              #reactjs
            </div>
            <div className="rounded-full border py-1 px-3 border-[#ffffff80] text-center">
            #reduxtoolkit
            </div>
            <div className="rounded-full border py-1 px-3 border-[#ffffff80] text-center">
            #materialui
            </div>
            <div className="rounded-full border py-1 px-3 border-[#ffffff80] text-center">
            #threejs
            </div>
            <div className="rounded-full border py-1 px-3 border-[#ffffff80] text-center">
            #html5
            </div>
            <div className="rounded-full border py-1 px-3 border-[#ffffff80] text-center">
            #css3
            </div>
            <div className="rounded-full border py-1 px-3 border-[#ffffff80] text-center">
            #bootstrap
            </div>
            <div className="rounded-full border py-1 px-3 border-[#ffffff80] text-center">
            #tailwindcss
            </div>
            <div className="rounded-full border py-1 px-3 border-[#ffffff80] text-center">
            #git
            </div>
            <div className="rounded-full border py-1 px-3 border-[#ffffff80] text-center">
            #github
            </div>
            <div className="rounded-full border py-1 px-3 border-[#ffffff80] text-center">
            #firebase
            </div>
            <div className="rounded-full border py-1 px-3 border-[#ffffff80] text-center">
            #sql
            </div>
            <div className="rounded-full border py-1 px-3 border-[#ffffff80] text-center">
            #figma
            </div>
            
          </div>
        </div>
        <div className="basis-full  hidden sm:flex flex-col justify-around  ">
          <h2 className='text-[#1788ae] text-2xl font-family-["Nunito", sans-serif ] font-bold '>
            FRONTEND STACK
          </h2>

          <div className="   hidden md:flex flex-wrap ms-[-2.5rem]">
            <div className=" basis-1/5 flex justify-center items-center cursor-pointer">
              <div className=" w-full flex flex-col items-center justify-between relative showstack group">
                <div className="absolute font-medium bg-[#1788ae] top-[-2.25rem] rounded px-2 text-white  text-[1.00rem] opacity-0 transform translate-y-2 transition duration-300 ease-in-out group-hover:opacity-100 group-hover:translate-y-0">
                  React Js
                  <i
                    className="fa-solid fa-caret-down absolute text-lg text-[#1788ae] left-1/2 mt-[0.75rem] top-0 transform -translate-x-1/2"
                    aria-hidden="true"
                  ></i>
                </div>
                <i
                  className="fa-brands fa-react text-5xl text-[#1788ae]"
                  aria-hidden="true"
                ></i>
                <h2 className="text-center font-bold text-[#1788ae] text-2xl">
                  R
                </h2>
              </div>
            </div>

            <div className=" basis-1/5 flex justify-center items-center cursor-pointer">
              <div className=" w-full flex flex-col items-center justify-between relative showstack group">
                <div className="absolute font-medium bg-[#ae4e17] top-[-2.25rem] rounded px-2 text-white  text-[1.00rem] opacity-0 transform translate-y-2 transition duration-300 ease-in-out group-hover:opacity-100 group-hover:translate-y-0">
                  Html5
                  <i
                    className="fa-solid fa-caret-down absolute text-lg text-[#ae4e17] left-1/2 mt-[0.75rem] top-0 transform -translate-x-1/2"
                    aria-hidden="true"
                  ></i>
                </div>
                <i
                  className="fa-brands fa-html5 text-5xl text-[#ae4e17]"
                  aria-hidden="true"
                ></i>
                <h2 className="text-center font-bold text-[#ae4e17] text-2xl">
                  H
                </h2>
              </div>
            </div>
            <div className=" basis-1/5 flex justify-center items-center cursor-pointer">
              <div className=" w-full flex flex-col items-center justify-between relative showstack group">
                <div className="absolute font-medium bg-[#1788ae] top-[-2.25rem] rounded px-2 text-white  text-[1.00rem] opacity-0 transform translate-y-2 transition duration-300 ease-in-out group-hover:opacity-100 group-hover:translate-y-0">
                  Css3
                  <i
                    className="fa-solid fa-caret-down absolute text-lg text-[#1788ae] left-1/2 mt-[0.75rem] top-0 transform -translate-x-1/2"
                    aria-hidden="true"
                  ></i>
                </div>
                <i
                  className="fa-brands fa-css3 text-5xl text-[#1788ae]"
                  aria-hidden="true"
                ></i>
                <h2 className="text-center font-bold text-[#1788ae] text-2xl">
                  C
                </h2>
              </div>
            </div>
            <div className=" basis-1/5 flex justify-center items-center cursor-pointer">
              <div className=" w-full flex flex-col items-center justify-between relative showstack group">
                <div className="absolute font-medium bg-[#70561d] top-[-2.25rem] rounded px-2 text-white  text-[1.00rem] opacity-0 transform translate-y-2 transition duration-300 ease-in-out group-hover:opacity-100 group-hover:translate-y-0">
                  Javascript
                  <i
                    className="fa-solid fa-caret-down absolute text-lg text-[#70561d] left-1/2 mt-[0.75rem] top-0 transform -translate-x-1/2"
                    aria-hidden="true"
                  ></i>
                </div>
                <i
                  className="fab fa-js text-5xl text-[#70561d]"
                  aria-hidden="true"
                ></i>
                <h2 className="text-center font-bold text-[#70561d] text-2xl">
                  J
                </h2>
              </div>
            </div>
            <div className=" basis-1/5 flex justify-center items-center cursor-pointer">
              <div className=" w-full flex flex-col items-center justify-between relative showstack group">
                <div className="absolute font-medium bg-[#1788ae] top-[-2.25rem] rounded px-2 text-white  text-[1.00rem] opacity-0 transform translate-y-2 transition duration-300 ease-in-out group-hover:opacity-100 group-hover:translate-y-0">
                  Typescript
                  <i
                    className="fa-solid fa-caret-down absolute text-lg text-[#1788ae] left-1/2 mt-[0.75rem] top-0 transform -translate-x-1/2"
                    aria-hidden="true"
                  ></i>
                </div>
                <i
                  className="fab fa-js text-5xl text-[#1788ae]"
                  aria-hidden="true"
                ></i>
                <h2 className="text-center font-bold text-[#1788ae] text-2xl">
                  T
                </h2>
              </div>
            </div>
          </div>

          <div className="  hidden md:flex flex-wrap ms-[-2.5rem]">
            <div className=" basis-1/5 flex justify-center items-center cursor-pointer">
              <div className=" w-full flex flex-col items-center justify-between relative showstack group">
                <div className="absolute font-medium bg-[#df31c7] top-[-2.25rem] rounded px-2 text-white  text-[1.00rem] opacity-0 transform translate-y-2 transition duration-300 ease-in-out group-hover:opacity-100 group-hover:translate-y-0">
                  Bootstrap
                  <i
                    className="fa-solid fa-caret-down absolute text-lg text-[#df31c7] left-1/2 mt-[0.75rem] top-0 transform -translate-x-1/2"
                    aria-hidden="true"
                  ></i>
                </div>
                <i
                  className="fa-brands fa-bootstrap text-5xl text-[#df31c7]"
                  aria-hidden="true"
                ></i>
                <h2 className="text-center font-bold text-[#df31c7] text-2xl">
                  B
                </h2>
              </div>
            </div>

            <div className=" basis-1/5 flex justify-center items-center cursor-pointer">
              <div className=" w-full flex flex-col items-center justify-between relative showstack group">
                <div className="absolute font-medium bg-[#70561d] top-[-2.25rem] rounded px-2 text-white  text-[1.00rem] opacity-0 transform translate-y-2 transition duration-300 ease-in-out group-hover:opacity-100 group-hover:translate-y-0">
                  Firebase
                  <i
                    className="fa-solid fa-caret-down absolute text-lg text-[#70561d] left-1/2 mt-[0.75rem] top-0 transform -translate-x-1/2"
                    aria-hidden="true"
                  ></i>
                </div>
                <i
                  className="fa-solid fa-database text-5xl text-[#70561d]"
                  aria-hidden="true"
                ></i>
                <h2 className="text-center font-bold text-[#70561d] text-2xl">
                  F
                </h2>
              </div>
            </div>
            <div className=" basis-1/5 flex justify-center items-center cursor-pointer">
              <div className=" w-full flex flex-col items-center justify-between relative showstack group">
                <div className="absolute font-medium bg-[#1788ae] top-[-2.25rem] rounded px-2 text-white  text-[1.00rem] opacity-0 transform translate-y-2 transition duration-300 ease-in-out group-hover:opacity-100 group-hover:translate-y-0">
                  Tailwind
                  <i
                    className="fa-solid fa-caret-down absolute text-lg text-[#1788ae] left-1/2 mt-[0.75rem] top-0 transform -translate-x-1/2"
                    aria-hidden="true"
                  ></i>
                </div>
                <i
                  className="fa-solid fa-wind text-5xl text-[#1788ae]"
                  aria-hidden="true"
                ></i>
                <h2 className="text-center font-bold text-[#1788ae] text-2xl">
                  T
                </h2>
              </div>
            </div>
            <div className=" basis-1/5 flex justify-center items-center cursor-pointer">
              <div className=" w-full flex flex-col items-center justify-between relative showstack group">
                <div className="absolute font-medium bg-[#ae4e17] top-[-2.25rem] rounded px-2 text-white  text-[1.00rem] opacity-0 transform translate-y-2 transition duration-300 ease-in-out group-hover:opacity-100 group-hover:translate-y-0">
                  Php
                  <i
                    className="fa-solid fa-caret-down absolute text-lg text-[#ae4e17] left-1/2 mt-[0.75rem] top-0 transform -translate-x-1/2"
                    aria-hidden="true"
                  ></i>
                </div>
                <i
                  className="fa-brands fa-php text-5xl text-[#ae4e17]"
                  aria-hidden="true"
                ></i>
                <h2 className="text-center font-bold text-[#ae4e17] text-2xl">
                  P
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" basis-full sm:basis-1/2 hidden md:flex justify-evenly items-center">
        <img
          src={coder}
          alt="coderIcon"
          loading="lazy"
          className=" cursor-crosshair md:hover:scale-90 duration-500 ease-linear"
        />
      </div>
    </div>
  );
};

export default memo(AboutUs);
