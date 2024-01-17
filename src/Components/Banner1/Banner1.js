import React from 'react'
import Navbar from '../Navbar/Navbar'
import { IoIosArrowForward } from "react-icons/io";

import "./Banner1.css"
const Banner1 = () => {
  return (
    <div className="homebanner1">
        <Navbar/> 
       <div className="homecontent">
       <h1>
        The biggest Indian hits. The best Indian stories. All streaming here.
        </h1>
        <p>Watch anywhere. Cancel anytime.</p>
        <p>Ready to watch? Enter your email to create or restart your membership.</p>
        <div className="email">
        <input type="email"placeholder='Email Address' />
        <button>Get Started <IoIosArrowForward  /></button>
       </div>
       </div>
      
    </div>
  )
}

export default Banner1