import React from "react";
//import the images
import Image from "../assests/headshot.jpeg";

const Analytics = () => {
  return (
    //take up the whole width of the page with (w-full)
    //(py-16) gives 4 rem top and bottonm
    <div className="z-0 pt-40 w-full bg-[#192841] py-16 px-4 ">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        <img className="w-[500px] mx-auto my-4 drop-shadow-xl" src={Image} alt="/" />
        <div className="flex flex-col justify-center md:mr-[-.5%] md:pl-5 md:mt-[-10%]">
          {/*if the screen is above medium(md) make the text 4xl// if the screen size is above small(sm) make the text 3xl// and on phones make the text 2xl*/}
          {/*define padding of 2rems (py-2)*/}
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-8 text-center text-[#16e4f3] ">Education</h1>
          <h2 className=" py-3 text-1xl  font-bold text-[#16e4f3]"> Bachelor of Computer Science: Software Engineering & Cybersercuity - Transferring </h2>
          <p className="py-1 text-[#16e4f3]"> • Liberty University, Lynchburg, VA</p>
          <h2 className=" py-3 text-1xl  font-bold text-[rgb(22,228,243)]"> Associate of Computer Science, Lone Star College System - Present </h2>
          <p className="py-1 text-[#16e4f3]">• Lone Star College CyFair, Cypress, TX</p>
          <p className="py-1 text-[#16e4f3]">• GPA: 3.95</p>
          {/*<a href="/Experience" className = "mx-auto">
            <button className="bg-[#16e4f3] text-[#192841] w-[200px] rounded-md font-bold my-6 py-3 animate-bounce hover:bg-[#d099e2] hover:text-white ">Experience</button>
          </a>*/}
        </div>
      </div>
    </div>
  );
};

export default Analytics;
