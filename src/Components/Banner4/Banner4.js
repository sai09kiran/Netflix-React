import React from 'react'

import "../Banner4/Banner4.css"

const Banner4 = () => {
  return (
    <div className="box">
        <div className="about">
            <h2>Watch everywhere</h2>
            <p>Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.</p>
        </div>
        <div className="aboutvideo">
            <video src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices-in.m4v"autoPlay loop muted ></video>
            <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile-in.png" alt="" />
        </div>
    </div>
  )
}

export default Banner4