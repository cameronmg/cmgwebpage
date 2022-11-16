import React from 'react'
//import logo

//import the react icons
import {FaGithubSquare, FaLinkedin, FaGoogle} from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    //define the max width of the compononent (max-w-[1240px]) automatically center the div(mx-auto)
    //make the y-padding 16(py-16) and the x-padding 4 (px-4)
    //create grid box and if the screen bigger than large create a grid with 3 columns (lg:grid-cols-3)
    //create gaps in the grid of size 8(gap-8)
    <div className='z-30 max-w-full mx-auto px-4 grid text-gray-300 box-decoration-slice bg-gradient-to-r from-[#1039a8] to-[#18b4b9]'>
        <div>
            <div className='text-center pt-2 mt-2 font-bold text-[#16e4f3]'>camgonza2002@gmail.com</div>
           
            {/*wrap all the icons in a div*/}
            {/*create a flex box// if the screen above medium downsize the icon component to 75% (md:w-[75%]) of its size*/}
            {/*(justify-between) gives space between compononents */}
            {/*set margin-y to 6(my-6)*/}
            <div className='flex my-6'>
                {/*set the size of the icons to 30*/}
                <div className = "mx-auto flex space-x-10">
                    <div className = "">
                        <a href="https://www.linkedin.com/in/cameronmg/" target="_blank" rel="noreferrer">
                            <FaLinkedin className= 'cursor-pointer' size={30} />
                        </a>
                    </div>
                    <div className = "">
                        <a href="https://mail.google.com/mail/?view=cm&source=mailto&to=camgonza2002@gmail.com" target="_blank" rel="noreferrer">
                            <FaGoogle className= 'cursor-pointer' size={30}/>
                        </a>
                    </div>
                    <div className = "">
                        <a href="https://github.com/cameronmg" target="_blank" rel="noreferrer">
                            <FaGithubSquare className= 'cursor-pointer' size={30}/>
                        </a>
                    </div>
                </div>
            </div>
        </div>

        
    </div>
  )
}

export default Footer