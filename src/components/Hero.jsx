import React from "react";
//import react typed animation
import Gif from "../assests/Earth-Rotating-Sun-Space.gif"

const Hero = () => {
  return (
    <div className = "">
      <div className="bg-cover bg-blend-normal text-white">
        <div className=" max-w-[800px] w-full h-screen mx-auto text-center font-montsert font-weight-600 font-semibold flex flex-col justify-center">
          {/*put the items on same line with (flex) and center them*/}
          <div className="flex justify-center items-center">    
            <img className ='absolute mt-[19%] lg:mt-[-2%] h-[840px] w-[620px] sm:h-[800px] sm:w-[800px] md:h-[710px] md:w-[1000px] lg:w-[1900px]'src={Gif} alt=""/>
          </div>
          <h1 className = "font-bold text-[#16e4f3] animate-bounce text-center text-4xl ">Welcome to my webpage!</h1>
          {/*<a href="/Education">
            <button className=" font-bold bg-[#16e4f3] text-[#192841] w-[200px] rounded-md mt-[10%] my-6 mx-auto py-3 animate-bounce hover:bg-[#d099e2] hover:text-[#16e4f3] ">Go to Education</button>
          </a>*/}
        </div>
      </div>
    </div>
  );
};

export default Hero;
