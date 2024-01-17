import React from 'react'

import "../Footer/Footer.css"

const Footer = () => {
  return (
    <div>
    <div className="boxes">
        <div className="box1">
          <p>Questions? Call 000-800-919-1694</p>
          <p>FAQ</p>
          <p>Investor Relations</p>
          <p>Privacy</p>
          <p>Speed Test</p>
          <div className="button">
   <select name="language" id="" className='select'>
     <option value="English">English</option>
     <option value="Hindi">Hindi</option>
   </select>
   </div>
   <p>Netflix India</p>
        </div>

        <div className="box2">
        <p>Help Centre</p>
        <p>Jobs</p>
        <p>Cookie Preferences</p>
        <p>Legal Notices</p>
    </div>

    <div className="box3">
        <p>Account</p>
        <p>Ways to Watch</p>
        <p>Corporate Information</p>
        <p>Only on Netflix</p>
    </div>

    <div className="box4">
        <p>Media Centre</p>
        <p>Terms of Use</p>
        <p>Contact Us</p>
    </div>
    </div>
   
    </div>
  )
}

export default Footer