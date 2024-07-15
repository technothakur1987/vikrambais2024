import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./MyClients.css";

// import required modules
import {
  Pagination,
  Navigation,
  Mousewheel,
  Keyboard,
  HashNavigation,
} from "swiper/modules";

const MyClients = () => {
  return (
    <div className=" min-h-[50vh] md:min-h-[90vh] overflow-x-hidden">
      <div className="flex  justify-center items-center  " data-aos="zoom-in"
        data-aos-offset="0"
        data-aos-delay="50"
        data-aos-duration="1200"
        data-aos-easing="ease-in-sine"
        data-aos-mirror="false"
        data-aos-once="true"
        data-aos-anchor-placement="top">
        <h2 className='  md:border-l-2 md:border-b-2 md:border-r-2 md:border-t-2 md:border-[#1788ae] rounded-b-lg rounded-t-lg  text-3xl md:text-4xl text-[#1788ae] font-family-["Nunito", sans-serif ] font-bold py-2 px-4 mb-0 text-center cursor-crosshair md:hover:scale-95 duration-300 ease-linear'>
          What my clients are saying?
        </h2>
      </div>

      {/*testinomails*/}

      <div className=" h-[55vh] mt-[0] md:h-[70vh] md:mt-[10vh] " data-aos="fade-left"
        data-aos-offset="0"
        data-aos-delay="50"
        data-aos-duration="1200"
        data-aos-easing="ease-in-sine"
        data-aos-mirror="false"
        data-aos-once="true"
        data-aos-anchor-placement="top">
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          pagination={{
            clickable: true,
          }}
          hashNavigation={{
            watchState: true,
          }}
          mousewheel={true}
          keyboard={true}
          navigation={true}
          modules={[
            Navigation,
            Pagination,
            Mousewheel,
            Keyboard,
            HashNavigation,
          ]}
          className="mySwiper h-[55vh] w-[100vw] md:h-[60vh] md:w-[70vw] "
        >
          <SwiperSlide className=" flex justify-center items-center ">
            <div className=" h-[47vh] md:h-[50vh] w-[94vw] md:w-[55vw] shadow-[0_0px_5px_3px_#80808029] rounded flex flex-col md:flex-row items-center">
              <div className=" basis-full md:basis-2/5   md:h-full  flex justify-center items-center pt-2">
                <img
                  src="https://i.ibb.co/FXB76fY/daisy-1.jpg"
                  alt=""
                  loading="lazy"
                  className="rounded-full h-[12vh] md:h-[10rem] md:w-[10rem] shadow-[0_0px_5px_3px_#80808029]"
                />
              </div>

              <div className=" basis-full md:basis-3/5   md:h-full flex flex-col justify-around items-center md:items-end p-5">
                <p className="text-base font-family-['Nunito', sans-serif ] text-justify text-[#585858] font-normal ">
                  "Vikram's exceptional work on our Pinklay Ecommerce 
                  has significantly enhanced our UX. His attention
                  to detail and commitment to visual consistency are truly
                  impressive."
                </p>

                <div className="designation flex flex-col items-center md:items-end pt-3">
                  <h1 className=' text-3xl md:text-4xl text-[#1788ae] font-family-["Nunito", sans-serif ] font-bold'>
                    Daisy Tanwani
                  </h1>
                  <p className='text-base text-[#1788ae] font-family-["Nunito", sans-serif ] font-medium '>
                    Founder, PinkLay{" "}
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide className=" flex justify-center items-center ">
            <div className=" h-[47vh] md:h-[50vh] w-[94vw] md:w-[55vw] shadow-[0_0px_5px_3px_#80808029] rounded flex flex-col md:flex-row items-center">
              <div className=" basis-full md:basis-2/5   md:h-full  flex justify-center items-center pt-2">
                <img
                  src="https://i.ibb.co/4M0fJch/bitamin.jpg"
                  alt=""
                  loading="lazy"
                  className="rounded-full h-[12vh] md:h-[10rem] md:w-[10rem] shadow-[0_0px_5px_3px_#80808029]"
                />
              </div>

              <div className=" basis-full md:basis-3/5   md:h-full flex flex-col justify-around items-center md:items-end p-5">
                <p className="text-base font-family-['Nunito', sans-serif ] text-justify text-[#585858] font-normal ">
                  "Vikram was excellent! He anticipated my website needs, added
                  extra details I hadn't considered.
                  
                </p>

                <div className="designation flex flex-col items-center md:items-end pt-3">
                  <h1 className=' text-3xl md:text-4xl text-[#1788ae] font-family-["Nunito", sans-serif ] font-bold'>
                    Karthik Paladugu
                  </h1>
                  <p className='text-base text-[#1788ae] font-family-["Nunito", sans-serif ] font-medium '>
                    Founder, Bitamin Naturals
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide className=" flex justify-center items-center ">
            <div className=" h-[47vh] md:h-[50vh] w-[94vw] md:w-[55vw] shadow-[0_0px_5px_3px_#80808029] rounded flex flex-col md:flex-row items-center">
              <div className=" basis-full md:basis-2/5   md:h-full  flex justify-center items-center pt-2">
                <img
                  src="https://i.ibb.co/MCWwjYC/chakuli-1.png"
                  alt=""
                  loading="lazy"
                  className="rounded-full h-[12vh] md:h-[10rem] w-[12vh] md:w-[10rem] shadow-[0_0px_5px_3px_#80808029] md:rotate-[-30deg] object-cover" 
                />
              </div>

              <div className=" basis-full md:basis-3/5   md:h-full flex flex-col justify-around items-center md:items-end p-5">
                <p className="text-base font-family-['Nunito', sans-serif ] text-justify text-[#585858] font-normal ">
                  "It was a nice experience working with Vikram , He Understood the requirement carefully and translated it beautifully. A great help in my Project"
                </p>

                <div className="designation flex flex-col items-center md:items-end pt-3">
                  <h1 className=' text-3xl md:text-4xl text-[#1788ae] font-family-["Nunito", sans-serif ] font-bold'>
                    Nandini Parihar
                  </h1>
                  <p className='text-base text-[#1788ae] font-family-["Nunito", sans-serif ] font-medium '>
                    Frontend Developer , NJ Graphics{" "}
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>

        
        </Swiper>
      </div>
    </div>
  );
};

export default MyClients;
