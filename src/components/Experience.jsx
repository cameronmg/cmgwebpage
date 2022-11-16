import React from "react";
//import the images
import Image from "../assests/cam.jpg";

const Analytics = () => {
  return (
    //take up the whole width of the page with (w-full)
    //(py-16) gives 4 rem top and bottonm
    <div className="z-0 pt-40 w-full bg-[#192841] py-16 px-4 ">
      {/*keep conistent with max w of 1240// mx-auto sits in the middle */}
      {/*once the screen increases pass the medium(md) breakpoint expand the grid columns to 2*/}
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        <img className="w-[500px] mx-auto my-4 drop-shadow-xl" src={Image} alt="/" />
        <div className="flex flex-col justify-center md:mr-[-.5%] md:pl-5 md:mt-[-10%]">
          {/*if the screen is above medium(md) make the text 4xl// if the screen size is above small(sm) make the text 3xl// and on phones make the text 2xl*/}
          {/*define padding of 2rems (py-2)*/}
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-8 text-center text-[#16e4f3] ">Experience</h1>
          <h2 className=" py-2 text-[#16e4f3]"> Brainlox | Python Instructor | September 2022 - Present</h2>
          <p className="py-1 text-[#16e4f3]"> • Teach kids from ages 7-14 the fundamentals of Python</p>

          <h2 className=" py-2 text-[#16e4f3]"> NASA Lunabotics | LSC - Robotics Software Engineer | January 2022 - Present </h2>
          <p className="py-1 text-[#16e4f3]"> • Helped implement autonomy utilizing the ROS framework </p>
          <p className="py-1 text-[#16e4f3]"> • Contributed to the creation of a network to transfer data between components using NetworkTables </p>
          <p className="py-1 text-[#16e4f3]"> • Implemented a co-processor (Raspberry Pi) that received and forwarded Driver Station input to a Robo-Rio for motor functions</p>
          <p className="py-1 text-[#16e4f3]"> • Employed Java to construct a Network listener for the Robo-Rio to power motors when new values are published on a network</p>

          <h2 className=" py-2 text-[#16e4f3]"> Rice University MolSSI Workshop | Student | June 2022</h2>
          <p className="py-1 text-[#16e4f3]"> • Leveraged Python to develop an API for parsing through molecular data</p>
          <p className="py-1 text-[#16e4f3]"> •  Utilized the Python libraries Matplotlib, Psi4, and NGLview to organize parsed molecular data</p>
          <p className="py-1 text-[#16e4f3]"> •  Collaborated with a group of fellow students to create a program that calculates the molecular energy of an atom</p>

         {/*<a href ="/" className = "mx-auto">
          <button className="bg-[#16e4f3] text-[#192841] w-[200px] rounded-md font-bold my-6 py-3 animate-bounce hover:bg-[#d099e2] hover:text-white ">Home</button>   
         </a>*/}
        
        </div>
      </div>
    </div>
  );
};

export default Analytics;
