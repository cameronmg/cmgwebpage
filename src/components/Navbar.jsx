//ADD A TRANISTION FOR CLOSING THE NAVBAR
import React, {useState} from 'react'
//importing react icons for mobile navbar
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'
import {Link} from 'react-router-dom'


const Navbar = () => {
    //create a use state to give the navbar animation (nav is the specified state of the navbar and setNav will set the navbar to a certain state)
    const [nav, setNav] = useState(false)
    //create  arrow function for the navbar use state so when we click on the menu navbar we will run the handle nav function
    const handleNav = () => {
        //set the navbar to the opposite state so if its open then close it 
        setNav(!nav)
    }

  return (
    
    <div className = ' z-30 flex justify-between items-center h-24 w-[100%] mx-auto px-4 text-white box-decoration-slice bg-gradient-to-r from-[#1039a8] to-[#18b4b9] fixed '>
             
        {/*create links to other componenets on webpage and put them in flex box so they are alligned horizontally*/}
        {/*anything above the median the show the flex box*/}
        <div className='mx-auto'>
            <ul className = 'hidden md:flex'>
                {/*defining links and create padding for the links so they have spacing*/}
                
                <Link to="/cmgwebpage" className = 'font-bold p-4 text-[#16e4f3] hover:border-b-4 hover:border-[#16e4f3] duration-100 hover:scale-105 duration-300 hover:text-[#ffffff] duration-600 cursor-pointer'> Home</Link>
                <Link to="/Education" className = 'font-bold p-4 text-[#16e4f3] hover:border-b-4 hover:border-[#16e4f3] duration-100 hover:scale-105 duration-300 hover:text-[#ffffff] duration-600 cursor-pointer'>Education</Link>
                <Link to="/Experience" className = 'font-bold p-4 text-[#16e4f3] hover:border-b-4 hover:border-[#16e4f3] duration-100 hover:scale-105 duration-300 hover:text-[#ffffff] duration-600 cursor-pointer'>Experience</Link>
                
            </ul>
        </div>
        {/*creating div for Ai outline menu(react icon for mobile navbar)*/}
        {/*onClick (when the use clicks the icon) run the handleNav function*/}
        {/*only show the menu when it is under a certain size (md)*/}
        <div onClick={handleNav} className ='block md:hidden z-50'>
            {/*if(?) the navbar is not(!) true then show the close icon for the navbar else(:) show the regular hamburger icon*/}
            {nav ? <AiOutlineClose className = 'hover:scale-110 duration-300 cursor-pointer' size ={30}/> : <AiOutlineMenu className = 'hover:scale-110 duration-300 cursor-pointer' size={30}/>}
        </div>
        {/*MOBILE MENU CODE BELOW*/}
        {/*using use state hook for mobile drop down menu*/}    
        {/*if(?) the navbar is not true(closed) then show the navbar else(:) hide the navbar(left-[-100%])*/}
        <div className = {nav ? ' z-40 md:hidden md:absolute fixed top-0 w-[100%] h-[40%] box-decoration-slice bg-gradient-to-r from-[#1039a8] to-[#18b4b9] ease-in-out duration-300 right-[0%] pt-[22%] ' : 'md:hidden fixed top-0 h-[50%] w-[100%] top-[-200%] ease-in-out duration-300 right-[0%]'}>
            <ul className ='grid grid-col uppercase p-4'>
                <Link to="/cmgwebpage" onClick ={handleNav} className = 'font-bold p-4 text-[#16e4f3] hover:scale-105 duration-300 hover:text-[#ffffff] duration-600 cursor-pointer' > Home</Link>
                <Link to="/Education" onClick ={handleNav} className = 'font-bold p-4 text-[#16e4f3] hover:scale-105 duration-300 hover:text-[#ffffff] duration-600 cursor-pointer'>Education</Link>
                <Link to="/Experience" onClick ={handleNav} className = 'font-bold p-4 text-[#16e4f3] hover:scale-105 duration-300 hover:text-[#ffffff] duration-600 cursor-pointer'>Experience</Link>
            </ul>
        </div>
    </div>
  )
}

export default Navbar