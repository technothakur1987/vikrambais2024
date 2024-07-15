import React,{memo} from "react";
import Particle from "./Particle";
import mainlogo from "../assets/mainlogo2.png";
import telegram from "../assets/telegram.svg";
import blueLogo from "../assets/bluelogo.png";
import "./Hero.css";

const Hero = ({ showAboutUs, SetShowAboutUs }) => {
  console.log(showAboutUs);
  return (
    <div className="min-h-screen  relative w-full bg-[#111] sm:bg-[#18181d] overflow-x-hidden" >
      <div className="absolute z-[9999]  bg-transparent right-0  top-[23vh] sm:top-[25vh] w-[14vw] sm:w-[5vw] text-white h-[40vh] sm:h-[47vh]   flex flex-col items-center justify-around text-[#ffffff80] pointer-events-auto" data-aos="zoom-in"
        data-aos-offset="0"
        data-aos-delay="50"
        data-aos-duration="1200"
        data-aos-easing="ease-in-sine"
        data-aos-mirror="true"
        data-aos-once="true"
        data-aos-anchor-placement="top-center">
        <a
          href="https://www.linkedin.com/in/technothakur/"
          target="_blank"
          className="hover:cursor-pointer "
        >
          <i className="fab fa-linkedin-in text-3xl text-[#ffffff80]  hover:text-white"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/technothakur/"
          target="_blank"
          className="hover:cursor-pointer"
        >
          <i className="fab fa-twitter text-3xl text-[#ffffff80] hover:text-white"></i>
        </a>
        <a
          href="https://www.instagram.com/technothakur1987/"
          target="_blank"
          className="hover:cursor-pointer"
        >
          <i className="fab fa-instagram text-3xl text-[#ffffff80] hover:text-white"></i>
        </a>
        <a
          href="mailto:vikrambais09021987@gmail.com"
          target="_blank"
          className="hover:cursor-pointer"
        >
          <i className="far fa-envelope text-3xl text-[#ffffff80] hover:text-white"></i>
        </a>
        <a
          href="https://github.com/technothakur1987"
          target="_blank"
          className="hover:cursor-pointer"
        >
          <i className="fab fa-github text-3xl text-[#ffffff80] hover:text-white"></i>
        </a>
      </div>
      <div
        className="absolute z-[9999] left-0 top-[-6vh] bg-transparent  w-full text-white min-h-screen pointer-events-none flex justify-center items-center"
        data-aos="fade-right"
        data-aos-offset="200"
        data-aos-delay="50"
        data-aos-duration="1000"
        data-aos-easing="ease-in-sine"
        data-aos-mirror="true"
        data-aos-once="false"
        data-aos-anchor-placement="top-center"
      >
        <img src={blueLogo} alt="blue Logo" className="" />
      </div>
      <div className="absolute z-[9999] left-0 top-0 bg-transparent  w-full text-white min-h-screen pointer-events-none ">
        {/*Header*/}
        <div className=" h-[15vh]  pe-4 sm:px-20 flex items-center justify-between ">
          <img src={mainlogo} alt="mainLogo" className="h-[12vh]" />
          <a
            href="https://drive.google.com/file/d/1TVIF2XviIx3zpXVtd0ZleBrRvlQhgQ8N/view?usp=sharing"
            target="_blank"
            title="RESUME DOWNLOAD"
          >
            <img
              src={telegram}
              alt="telegramLogo"
              className="h-[5vh] brightness-50 hover:brightness-75 pointer-events-auto"
            />
          </a>
        </div>

        {/*body*/}
        <div className="h-[85vh]  px-10 flex flex-col  ps-[15vw]" data-aos="fade-left"
        data-aos-offset="200"
        data-aos-delay="50"
        data-aos-duration="1000"
        data-aos-easing="ease-in-sine"
        data-aos-mirror="true"
        data-aos-once="false"
        data-aos-anchor-placement="top-center"
      >
          <h2 className=" text-6xl font-bold mb-5 mt-[15vh]  font-family-['Spartan', sans-serif]">
            Vikram Bais
          </h2>
          <p className="italic mb-6 text-xl font-family-['Merriweather', sans-serif] font-normal  ">
            Frontend Developer
          </p>
          <button
            type="button"
            className="arrowafter max-w-fit bg-[rgb(21,149,182,0.2)] bg-gradient-to-l from-[#1595b6] to-[rgba(31, 38, 103, 0.9)] text-[14px] font-extrabold px-4 py-2 flex items-center rounded cursor-pointer pointer-events-auto hover:scale-110 duration-300 "
            onClick={() => {
              SetShowAboutUs(true);
            }}
          >
            <span>About Me</span>
          </button>
        </div>
      </div>

      <div className="absolute z-[9999] left-0 bottom-0 bg-transparent  w-full text-white min-h-[18vh] pointer-events-none" 
      data-aos="zoom-in"
        data-aos-offset="0"
        data-aos-delay="50"
        data-aos-duration="1200"
        data-aos-easing="ease-in-sine"
        data-aos-mirror="false"
        data-aos-once="true"
        data-aos-anchor-placement="top">
        <a
          href="#latestWorks"
          className="arrowdown  max-w-fit bg-[rgb(21,149,182,0.2)] bg-gradient-to-l from-[#1595b6] to-[rgba(31, 38, 103, 0.9)] text-[14px] font-extrabold px-4 py-2 flex items-center rounded cursor-pointer pointer-events-auto hover:scale-110 duration-300 mx-auto"
          onClick={(e) => {
            e.preventDefault();
            const latestWorks = document.getElementById("latestWorks");
            const yOffset = latestWorks.offsetTop;
            const speed = 0.5; // adjust the speed to your liking
            window.scrollTo({ top: yOffset, behavior: "smooth" });
          }}
        >
          <span>Latest Works</span>
        </a>
      </div>

      <div className="bg-[#444]  w-[2px] h-[1.25em] absolute  z-[9999] bottom-[0] cursor-pointer  left-1/2 -translate-x-1/2 "></div>
      <div className="absolute min-h-screen w-full z-[9998] hidden sm:block">
        <Particle />
      </div>
    </div>
  );
};

export default memo( Hero);
