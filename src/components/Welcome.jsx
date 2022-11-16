import React from 'react';
//import react typed animation
import Typed from 'react-typed';

const Hero = () => {
  return (
    <div className='z-30 fixed ml-8 mt-7'> 
            {/*on anything else (mobile devices) make the screen text-4xl*/}
            {/*<h1 className = 'mt-[15%] md:text-7xl sm:text-6xl text-4xl font bold md:py-6 text-white'>Cameron Gonzalez</h1>*/}
            <Typed
                //making the text bold and responsive as well as give the text pading on the left(pl-2) 2 = 2rems
                //if its aboce medium give the text 4 rems of padding on the left
                className=' text-4xl font-bold text-[#16e4f3] '
                //the words that are being typed
                strings = {['Cameron Gonzalez']}
                //typing speed of animation
                typeSpeed ={120}
                backSpeed={140}
                //loop forever
                loop 
            />
            {/*put the items on same line with (flex) and center them*/}              
            {/*<button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black'> Get Started</button>*/}
    </div>
    
  )
}

export default Hero