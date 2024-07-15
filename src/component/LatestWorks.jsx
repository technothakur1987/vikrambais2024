import React, { useContext, memo } from "react";
import "./LatestWorks.css";
import { AppContext } from "../store/store";

const LatestWorks = ({ loading }) => {
  let { allwebsites, allapps } = useContext(AppContext);

  if (loading) {
    return (
      <div className="loading text-center text-[#1788ae] h-[30vh] flex justify-center items-center text-2xl font-semibold">
        <h2>Loading...</h2>
      </div>
    );
  }

  return (
    <div
      className="  min-h-[100vh] overflow-x-hidden overflow-y-hidden"
      id="latestWorks"
    >
      <div
        className="flex justify-center items-center   "
        data-aos="zoom-in"
        data-aos-offset="0"
        data-aos-delay="50"
        data-aos-duration="1200"
        data-aos-easing="ease-in-sine"
        data-aos-mirror="false"
        data-aos-once="true"
        data-aos-anchor-placement="top"
      >
        <h2 className='  md:border-l-2 md:border-b-2 md:border-r-2 md:border-[#1788ae] rounded-b-lg text-3xl md:text-4xl text-[#1788ae] font-family-["Nunito", sans-serif ] font-bold py-0 pt-4 text-center md:pt-0 md:py-2 md:px-4 mb-0 cursor-crosshair md:hover:scale-95 duration-300 ease-in-out '>
          Latest Works
        </h2>
      </div>
      {/*websites*/}

      {allwebsites.map((project, index) => {
        const {
          Project_name,
          Project_Color,
          Project_Content,
          Project_Link,
          Project_cat,
          Project_img,
          Project_sno,
          Project_tag,
          Project_type,
        } = project;

        let textColor = `text-[${Project_Color}]`;
        console.log(textColor);

        return index % 2 === 0 ? (
          <div
            className="flex flex-col md:flex-row md:justify-center md:items-start   "
            key={Project_sno}
          >
            <div
              className={`basis-full md:basis-1/2 md:border-r-2 md:border-[#1788ae]  h-[50vh] flex justify-center md:justify-start items-center  relative  md:px-24 `}
            >
              <div
                style={{ borderColor: `${Project_Color}` }}
                className={`hidden md:block absolute   top-50 left-[99%] h-[1rem]  w-[1rem]  rounded-full border-4 border-[${Project_Color}]  bg-white cursor-pointer  transition duration-500 ease-out md:hover:scale-150`}
              ></div>
              <div
                style={{ borderColor: `${Project_Color}` }}
                className={` hidden md:block absolute   top-[50%]  right-[1%] w-[20vw]  border border-[${Project_Color}] `}
                data-aos="zoom-in"
                data-aos-offset="0"
                data-aos-delay="1200"
                data-aos-duration="300"
                data-aos-easing="ease-in-sine"
                data-aos-mirror="false"
                data-aos-once="true"
                data-aos-anchor-placement="top"
              ></div>

              <div
                className="showLink cursor-pointer transition  ease-in-out duration-300  h-[50vh]  relative left md:hover:scale-125 "
                onClick={() => {
                  window.open(`${Project_Link}`, "_blank");
                }}
              >
                <div
                  style={{ background: `${Project_Color}` }}
                  className={`name absolute mx-auto border text-center  w-[60vw] md:w-[20vw] top-[85%] md:top-[20%]  left-[18vw] md:left-[15%]  rounded-lg bg-[${Project_Color}] text-white transition  ease-in-out duration-300 font-family-['Nunito', sans-serif ] font-bold  px-4 py-2 `}
                  data-aos="fade-left"
                  data-aos-offset="0"
                  data-aos-delay="100"
                  data-aos-duration="1200"
                  data-aos-easing="ease-in-sine"
                  data-aos-mirror="false"
                  data-aos-once="true"
                  data-aos-anchor-placement="top"
                >
                  {Project_name}{" "}
                  <i className="fa-solid fa-arrow-up-right-from-square text-[0.8rem]"></i>
                  <i
                    style={{ color: `${Project_Color}` }}
                    className={`fa-solid fa-caret-down hidden md:block absolute bottom-[-0.9em] left-[50%] text-lg `}
                    aria-hidden="true"
                  ></i>
                </div>
                <div
                  className="frame relative transition  ease-in-out duration-300 mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[8px] rounded-t-xl max-w-[90vw] h-[30vh] md:max-w-[25vw] z-[9998] top-[15%]"
                  data-aos="fade-left"
                  data-aos-offset="0"
                  data-aos-delay="50"
                  data-aos-duration="1200"
                  data-aos-easing="ease-in-sine"
                  data-aos-mirror="false"
                  data-aos-once="true"
                  data-aos-anchor-placement="top"
                >
                  <div className="rounded-lg overflow-hidden h-[30vh] bg-white dark:bg-gray-800 z-[9999]">
                    <img
                      src={Project_img}
                      placeholder={Project_img}
                      className="dark:hidden h-[30vh] w-full rounded-lg z-[9999] brightness-50"
                      alt=""
                      loading="lazy"
                    />
                  </div>
                </div>
                <div
                  className=" frame relative  transition  ease-in-out duration-300 mx-auto bg-gray-900 dark:bg-gray-700 rounded-b-xl rounded-t-sm h-[20px] min-w-[96vw] max-w-[98vw] sm:h-[17px] sm:min-w-[30vw] sm:max-w-[30vw] z-[9998] top-[15%]"
                  data-aos="fade-left"
                  data-aos-offset="0"
                  data-aos-delay="0"
                  data-aos-duration="800"
                  data-aos-easing="ease-in-sine"
                  data-aos-mirror="false"
                  data-aos-once="true"
                  data-aos-anchor-placement="top"
                >
                  <div className="absolute left-1/2 top-0 -translate-x-1/2 rounded-b-xl w-[56px] h-[5px] md:w-[96px] md:h-[8px] bg-gray-800"></div>
                </div>
              </div>
            </div>
            <div className="basis-full md:basis-1/2  flex flex-col justify-center  px-4 md:px-24  h-[50vh]  py-8 md:py-0 ">
              <h2
                style={{ color: `${Project_Color}` }}
                className={`text-3xl font-family-['Nunito', sans-serif ] font-bold ${textColor} mb-0 md:mb-1`}
                data-aos="fade-left"
                data-aos-offset="0"
                data-aos-delay="50"
                data-aos-duration="1200"
                data-aos-easing="ease-in-sine"
                data-aos-mirror="false"
                data-aos-once="true"
                data-aos-anchor-placement="top"
              >
                {Project_name}
                
              </h2>
              <h6
                style={{ color: `${Project_Color}` }}
                className={`text-xl font-family-['Nunito', sans-serif ] font-medium ${textColor} mb-3 md:mb-2`}
                data-aos="fade-left"
                data-aos-offset="0"
                data-aos-delay="50"
                data-aos-duration="1200"
                data-aos-easing="ease-in-sine"
                data-aos-mirror="false"
                data-aos-once="true"
                data-aos-anchor-placement="top"
              >
                ({Project_cat})
              </h6>
              <p
                className="text-base font-family-['Nunito', sans-serif ] text-justify  mb-3 md:mb-6 text-[#585858] font-normal"
                data-aos="fade-left"
                data-aos-offset="0"
                data-aos-delay="50"
                data-aos-duration="1200"
                data-aos-easing="ease-in-sine"
                data-aos-mirror="false"
                data-aos-once="true"
                data-aos-anchor-placement="top"
              >
                {Project_Content}
              </p>
              <div
                className="  flex flex-wrap gap-2  text-[0.8rem] font-family-['Nunito', sans-serif ]"
                data-aos="fade-left"
                data-aos-offset="0"
                data-aos-delay="50"
                data-aos-duration="1200"
                data-aos-easing="ease-in-sine"
                data-aos-mirror="false"
                data-aos-once="true"
                data-aos-anchor-placement="top"
              >
                {/*tags array*/}
                {Project_tag.split(",").map((tag, index) => {
                  return (
                    <span
                      style={{
                        color: `${Project_Color}`,
                        borderColor: `${Project_Color}`,
                      }}
                      className={`rounded-full border py-1 px-3 border-[${Project_Color}] ${textColor}  font-extrabold`}
                      key={index}
                    >
                      {tag}
                    </span>
                  );
                })}
              </div>
            </div>
          </div>
        ) : (
          <div
            className="flex flex-col md:flex-row md:justify-center md:items-start   "
            key={Project_sno}
          >
            <div className="basis-full md:basis-1/2 md:border-r-2 md:border-[#1788ae]  flex flex-col justify-center  px-4 md:px-24  h-[50vh] py-5 md:py-0 order-last md:order-first">
              <h2
                style={{ color: `${Project_Color}` }}
                className={`text-3xl font-family-['Nunito', sans-serif ] font-bold ${textColor} mb-0 md:mb-1`}
                data-aos="fade-right"
                data-aos-offset="0"
                data-aos-delay="50"
                data-aos-duration="1200"
                data-aos-easing="ease-in-sine"
                data-aos-mirror="false"
                data-aos-once="true"
                data-aos-anchor-placement="top"
              >
                {Project_name}
                
              </h2>
              <h6
                style={{ color: `${Project_Color}` }}
                className={`text-xl font-family-['Nunito', sans-serif ] font-medium ${textColor} mb-3 md:mb-2`}
                data-aos="fade-right"
                data-aos-offset="0"
                data-aos-delay="50"
                data-aos-duration="1200"
                data-aos-easing="ease-in-sine"
                data-aos-mirror="false"
                data-aos-once="true"
                data-aos-anchor-placement="top"
              >
                ({Project_cat})
              </h6>
              <p
                className="text-base font-family-['Nunito', sans-serif ] text-justify mb-3 md:mb-6 text-[#585858] font-normal"
                data-aos="fade-right"
                data-aos-offset="0"
                data-aos-delay="50"
                data-aos-duration="1200"
                data-aos-easing="ease-in-sine"
                data-aos-mirror="false"
                data-aos-once="true"
                data-aos-anchor-placement="top"
              >
                {Project_Content}
              </p>
              <div
                className=" text-white flex flex-wrap gap-2  text-[0.8rem] font-family-['Nunito', sans-serif ]"
                data-aos="fade-right"
                data-aos-offset="0"
                data-aos-delay="50"
                data-aos-duration="1200"
                data-aos-easing="ease-in-sine"
                data-aos-mirror="false"
                data-aos-once="true"
                data-aos-anchor-placement="top"
              >
                {/*tags array*/}
                {Project_tag.split(",").map((tag, index) => {
                  return (
                    <span
                      style={{
                        color: `${Project_Color}`,
                        borderColor: `${Project_Color}`,
                      }}
                      className={`rounded-full border py-1 px-3 border-[${Project_Color}] ${textColor} font-black`}
                      key={index}
                    >
                      {tag}
                    </span>
                  );
                })}
              </div>
            </div>

            <div className="basis-full md:basis-1/2  h-[50vh] flex justify-center md:justify-end items-center  relative  md:px-24">
              <div
                style={{ borderColor: `${Project_Color}` }}
                className={`hidden md:block absolute   top-50 left-[-1.25%] h-[1rem]  w-[1rem]  rounded-full border-4 border-[${Project_Color}]  bg-white cursor-pointer transition duration-500 ease-out  md:hover:scale-150  `}
              ></div>
              <div
                style={{ borderColor: `${Project_Color}` }}
                className={` hidden md:block absolute   top-[50%]  left-[1%] w-[20vw]  border border-[${Project_Color}] `}
                data-aos="zoom-in"
                data-aos-offset="0"
                data-aos-delay="1200"
                data-aos-duration="300"
                data-aos-easing="ease-in-sine"
                data-aos-mirror="false"
                data-aos-once="true"
                data-aos-anchor-placement="top"
              ></div>

              <div
                className="showLink cursor-pointer transition  ease-in-out duration-300  h-[50vh]  relative z-[9998] md:hover:scale-125 "
                onClick={() => {
                  window.open(`${Project_Link}`, "_blank");
                }}
              >
                <div
                  style={{ background: `${Project_Color}` }}
                  className={`name absolute mx-auto border text-center  w-[60vw] md:w-[20vw] top-[85%] md:top-[20%]  left-[18vw] md:left-[15%]  rounded-lg bg-[${Project_Color}] text-white transition  ease-in-out duration-300 font-family-['Nunito', sans-serif ] font-bold  px-4 py-2  `}
                  data-aos="zoom-in"
                  data-aos-offset="0"
                  data-aos-delay="100"
                  data-aos-duration="1200"
                  data-aos-easing="ease-in-sine"
                  data-aos-mirror="false"
                  data-aos-once="true"
                  data-aos-anchor-placement="top"
                >
                  {Project_name}{" "}
                  <i className="fa-solid fa-arrow-up-right-from-square text-[0.8rem]"></i>
                  <i
                    style={{ color: `${Project_Color}` }}
                    className={`fa-solid fa-caret-down hidden md:block absolute bottom-[-0.9em] left-[50%] text-lg ${textColor}`}
                    aria-hidden="true"
                  ></i>
                </div>
                <div
                  className="frame relative transition  ease-in-out duration-300 mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[8px] rounded-t-xl max-w-[90vw] h-[30vh] md:max-w-[25vw] z-[9999] top-[15%]"
                  data-aos="fade-right"
                  data-aos-offset="0"
                  data-aos-delay="50"
                  data-aos-duration="1200"
                  data-aos-easing="ease-in-sine"
                  data-aos-mirror="false"
                  data-aos-once="true"
                  data-aos-anchor-placement="top"
                >
                  <div className="rounded-lg overflow-hidden h-[30vh] bg-white dark:bg-gray-800 z-[9999]">
                    <img
                      src={`${Project_img}`}
                      placeholder={`${Project_img}`}
                      className="dark:hidden h-[30vh] w-full rounded-lg z-[9999] brightness-50"
                      alt=""
                      loading="lazy"
                    />
                  </div>
                </div>
                <div
                  className=" frame relative  transition  ease-in-out duration-300 mx-auto bg-gray-900 dark:bg-gray-700 rounded-b-xl rounded-t-sm h-[20px] min-w-[96vw] max-w-[98vw] sm:h-[17px] sm:min-w-[30vw] sm:max-w-[30vw] z-[9999] top-[15%]"
                  data-aos="fade-right"
                  data-aos-offset="0"
                  data-aos-delay="0"
                  data-aos-duration="800"
                  data-aos-easing="ease-in-sine"
                  data-aos-mirror="false"
                  data-aos-once="true"
                  data-aos-anchor-placement="top"
                >
                  <div className="absolute left-1/2 top-0 -translate-x-1/2 rounded-b-xl w-[56px] h-[5px] md:w-[96px] md:h-[8px] bg-gray-800"></div>
                </div>
              </div>
            </div>
          </div>
        );
      })}

      {/*Apps*/}
      {allapps.map((project, index) => {
        const {
          Project_name,
          Project_Color,
          Project_Content,
          Project_Link,
          Project_cat,
          Project_img,
          Project_sno,
          Project_tag,
          Project_type,
        } = project;

        return index % 2 === 0 ? (
          <div
            className="flex flex-col md:flex-row md:justify-center md:items-start   "
            key={Project_sno}
          >
            <div className="basis-full md:basis-1/2 md:border-r-2 md:border-[#1788ae]   h-[100vh] md:h-[100vh] flex justify-center md:justify-start items-center  relative  md:px-24 py-20 md:py-0  ">
              <div
                style={{ borderColor: `${Project_Color}` }}
                className={`hidden md:block absolute   top-50 left-[99%] h-[1rem]  w-[1rem]  rounded-full border-4 border-[${Project_Color}]  bg-white cursor-pointer transition duration-500 ease-out  md:hover:scale-150`}
              ></div>
              <div
                style={{ borderColor: `${Project_Color}` }}
                className={` hidden md:block absolute   top-50  right-[1%] w-[20vw]  border border-[${Project_Color}] `}
                data-aos="zoom-in"
                data-aos-offset="0"
                data-aos-delay="1200"
                data-aos-duration="500"
                data-aos-easing="ease-in"
                data-aos-mirror="false"
                data-aos-once="true"
                data-aos-anchor-placement="top"
              ></div>

              <div
                className="showLink cursor-pointer transition  ease-in-out duration-300 h-[70vh] md:h-[70vh]  relative z-[9998] md:hover:scale-110  w-full  md:w-fit "
                onClick={() => {
                  window.open(`${Project_Link}`, "_blank");
                }}
              >
                <div
                  style={{ backgroundColor: `${Project_Color}` }}
                  className={`nameapp absolute  border text-center  w-[60vw] md:w-[18vw] top-[105%] md:top-[0%]  left-[18vw] md:left-[1.5em]   rounded-lg bg-[${Project_Color}] text-white transition  ease-in-out duration-300 font-family-['Nunito', sans-serif ] font-bold  px-4 py-2 `}
                  data-aos="fade-left"
                  data-aos-offset="0"
                  data-aos-delay="100"
                  data-aos-duration="1200"
                  data-aos-easing="ease-in-sine"
                  data-aos-mirror="false"
                  data-aos-once="true"
                  data-aos-anchor-placement="top"
                >
                  {Project_name}{" "}
                  <i className="fa-solid fa-arrow-up-right-from-square text-[0.8rem]"></i>
                  <i
                    style={{ color: `${Project_Color}` }}
                    className={`fa-solid fa-caret-down hidden md:block absolute bottom-[-0.9em] left-[50%] text-lg `}
                    aria-hidden="true"
                  ></i>
                </div>

                <div
                  className="relative mx-auto  border-gray-800 dark:border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[70vh] md:h-[70vh] w-[300px] z-[9999] "
                  data-aos="fade-left"
                  data-aos-offset="0"
                  data-aos-delay="50"
                  data-aos-duration="1200"
                  data-aos-easing="ease-in-sine"
                  data-aos-mirror="false"
                  data-aos-once="true"
                  data-aos-anchor-placement="top"
                >
                  <div className="h-[1.2rem] w-[0.5rem]  bg-gray-800 absolute left-[-1.2rem]  top-[10%] [z-[9999] rounded-s-lg"></div>
                  <div className="h-[1.5rem] w-[0.5rem] bg-gray-800 absolute left-[-1.2rem]  top-[19%] [z-[9999] rounded-s-lg"></div>
                  <div className="h-[4.5rem] w-[0.5rem] bg-gray-800 absolute end-[-1.2rem]  top-[30%] [z-[9999] rounded-e-lg"></div>
                  <div className="h-1 w-[3px] bg-gray-800 dark:bg-gray-800 absolute-start-[17px] top-[124px] rounded-s-lg"></div>

                  <div className="rounded-[2rem] overflow-hidden  w-full h-[fit-content] bg-gray-500 dark:bg-gray-500 brightness-75">
                    <img
                      src={Project_img}
                      className="dark:hidden h-[65vh] md:h-[65vh] w-full rounded-[2.5rem] brightness-75"
                      alt=""
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="basis-full md:basis-1/2   h-[50vh] md:h-[100vh] flex flex-col justify-center  relative   px-4 md:px-24 py-5 md:py-0 ">
              <h2
                style={{ color: `${Project_Color}` }}
                className={`text-3xl font-family-['Nunito', sans-serif ] font-bold  mb-0 md:mb-1`}
                data-aos="fade-left"
                data-aos-offset="0"
                data-aos-delay="50"
                data-aos-duration="1200"
                data-aos-easing="ease-in-sine"
                data-aos-mirror="false"
                data-aos-once="true"
                data-aos-anchor-placement="top"
              >
                {Project_name}
                
              </h2>
              <h6
                style={{ color: `${Project_Color}` }}
                className={`text-xl font-family-['Nunito', sans-serif ] font-medium  mb-3 md:mb-2`}
                data-aos="fade-left"
                data-aos-offset="0"
                data-aos-delay="50"
                data-aos-duration="1200"
                data-aos-easing="ease-in-sine"
                data-aos-mirror="false"
                data-aos-once="true"
                data-aos-anchor-placement="top"
              >
                ({Project_cat})
              </h6>
              <p
                className="text-base  font-family-['Nunito', sans-serif ] text-justify  mb-3 md:mb-6 text-[#585858] font-normal"
                data-aos="fade-left"
                data-aos-offset="0"
                data-aos-delay="50"
                data-aos-duration="1200"
                data-aos-easing="ease-in-sine"
                data-aos-mirror="false"
                data-aos-once="true"
                data-aos-anchor-placement="top"
              >
                {Project_Content}
              </p>
              <div
                className=" text-white flex flex-wrap gap-2  text-[0.8rem] font-family-['Nunito', sans-serif ]"
                data-aos="fade-left"
                data-aos-offset="0"
                data-aos-delay="50"
                data-aos-duration="1200"
                data-aos-easing="ease-in-sine"
                data-aos-mirror="false"
                data-aos-once="true"
                data-aos-anchor-placement="top"
              >
                {Project_tag.split(",").map((tag, index) => {
                  return (
                    <span
                      style={{
                        borderColor: `${Project_Color}`,
                        color: `${Project_Color}`,
                      }}
                      className={`rounded-full border py-1 px-3 border-[${Project_Color}]   font-extrabold`}
                      key={index}
                    >
                      {tag}
                    </span>
                  );
                })}
              </div>
            </div>
          </div>
        ) : (
          <div
            className="flex flex-col md:flex-row md:justify-center md:items-start   "
            key={Project_sno}
          >
            <div className="basis-full md:basis-1/2 md:border-r-2 md:border-[#1788ae]   h-[50vh] md:h-[100vh] flex flex-col justify-center  relative   px-4 md:px-24 py-5 md:py-0 order-last md:order-first">
              <h2
                style={{ color: `${Project_Color}` }}
                className={`text-3xl font-family-['Nunito', sans-serif ] font-bold  mb-0 md:mb-1`}
                data-aos="fade-right"
                data-aos-offset="0"
                data-aos-delay="50"
                data-aos-duration="1200"
                data-aos-easing="ease-in-sine"
                data-aos-mirror="false"
                data-aos-once="true"
                data-aos-anchor-placement="top"
              >
                {Project_name}
                
              </h2>
              <h6
                style={{ color: `${Project_Color}` }}
                className={`text-xl font-family-['Nunito', sans-serif ] font-medium  mb-3 md:mb-2`}
                data-aos="fade-right"
                data-aos-offset="0"
                data-aos-delay="50"
                data-aos-duration="1200"
                data-aos-easing="ease-in-sine"
                data-aos-mirror="false"
                data-aos-once="true"
                data-aos-anchor-placement="top"
              >
                ({Project_cat})
              </h6>
              <p
                className="text-base  font-family-['Nunito', sans-serif ] text-justify  mb-3 md:mb-6 text-[#585858] font-normal"
                data-aos="fade-right"
                data-aos-offset="0"
                data-aos-delay="50"
                data-aos-duration="1200"
                data-aos-easing="ease-in-sine"
                data-aos-mirror="false"
                data-aos-once="true"
                data-aos-anchor-placement="top"
              >
                {Project_Content}
              </p>
              <div
                className=" text-white flex flex-wrap gap-2  text-[0.8rem] font-family-['Nunito', sans-serif ]"
                data-aos="fade-right"
                data-aos-offset="0"
                data-aos-delay="50"
                data-aos-duration="1200"
                data-aos-easing="ease-in-sine"
                data-aos-mirror="false"
                data-aos-once="true"
                data-aos-anchor-placement="top"
              >
                {Project_tag.split(",").map((tag, index) => {
                  return (
                    <span
                      style={{
                        borderColor: `${Project_Color}`,
                        color: `${Project_Color}`,
                      }}
                      className={`rounded-full border py-1 px-3 border-[${Project_Color}]   font-extrabold`}
                      key={index}
                    >
                      {tag}
                    </span>
                  );
                })}
              </div>
            </div>
            <div className="basis-full md:basis-1/2   h-[100vh] md:h-[100vh] flex justify-center md:justify-end items-center  relative  md:px-24 py-20 md:py-0">
              <div
                style={{ borderColor: `${Project_Color}` }}
                className={`hidden md:block absolute   top-50 left-[-1.25%] h-[1rem]  w-[1rem]  rounded-full border-4 border-[${Project_Color}]  bg-white cursor-pointer transition duration-500 ease-out md:hover:scale-150`}
              ></div>
              <div
                style={{ borderColor: `${Project_Color}` }}
                className={`hidden md:block absolute   top-[50%]  left-[1%] w-[25vw]  border border-[${Project_Color}] `}
                data-aos="zoom-in"
                data-aos-offset="0"
                data-aos-delay="1200"
                data-aos-duration="500"
                data-aos-easing="ease-in-sine"
                data-aos-mirror="false"
                data-aos-once="true"
                data-aos-anchor-placement="top"
              ></div>

              <div
                className="showLink cursor-pointer transition  ease-in-out duration-300  h-[70vh] md:h-[70vh]  relative z-[9998] md:hover:scale-110 w-full md:w-fit  "
                onClick={() => {
                  window.open(`${Project_Link}`, "_blank");
                }}
              >
                <div
                  style={{ background: `${Project_Color}` }}
                  className={`nameapp absolute mx-auto border text-center w-[60vw] md:w-[18vw] top-[105%] md:top-[0%]  left-[18vw] md:left-[1.5em]  rounded-lg bg-[${Project_Color}] text-white transition  ease-in-out duration-300 font-family-['Nunito', sans-serif ] font-bold  px-4 py-2  `}
                  data-aos="fade-right"
                  data-aos-offset="0"
                  data-aos-delay="100"
                  data-aos-duration="1200"
                  data-aos-easing="ease-in-sine"
                  data-aos-mirror="false"
                  data-aos-once="true"
                  data-aos-anchor-placement="top"
                >
                  {Project_name}{" "}
                  <i className="fa-solid fa-arrow-up-right-from-square text-[0.8rem]"></i>
                  <i
                    style={{ color: `${Project_Color}` }}
                    className={`fa-solid fa-caret-down hidden md:block absolute bottom-[-0.9em] left-[50%] text-lg text-[#1788ae]`}
                    aria-hidden="true"
                  ></i>
                </div>

                <div
                  className="relative mx-auto  border-gray-800 dark:border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[70vh] md:h-[70vh] w-[300px] z-[9999] "
                  data-aos="fade-right"
                  data-aos-offset="0"
                  data-aos-delay="50"
                  data-aos-duration="1200"
                  data-aos-easing="ease-in-sine"
                  data-aos-mirror="false"
                  data-aos-once="true"
                  data-aos-anchor-placement="top"
                >
                  <div className="h-[1.2rem] w-[0.5rem]  bg-gray-800 absolute left-[-1.2rem]  top-[10%] [z-[9999] rounded-s-lg"></div>
                  <div className="h-[1.5rem] w-[0.5rem] bg-gray-800 absolute left-[-1.2rem]  top-[19%] [z-[9999] rounded-s-lg"></div>
                  <div className="h-[4.5rem] w-[0.5rem] bg-gray-800 absolute end-[-1.2rem]  top-[30%] [z-[9999] rounded-e-lg"></div>
                  <div className="h-1 w-[3px] bg-gray-800 dark:bg-gray-800 absolute-start-[17px] top-[124px] rounded-s-lg"></div>

                  <div className="rounded-[2rem] overflow-hidden  w-full h-[fit-content] bg-gray-500 dark:bg-gray-800 brightness-50">
                    <img
                      src={`${Project_img}`}
                      className="dark:hidden  h-[65vh] md:h-[65vh] w-full rounded-[2.5rem] brightness-50"
                      alt=""
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default memo(LatestWorks);
