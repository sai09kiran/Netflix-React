import React from 'react'

import "../Banner2/Banner2.css"
const BAnner2 = () => {
  return (
    <div>
    <div className="content">
       <div className="contentinfo">
       <h2>Enjoy on your TV</h2>
        <p>Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.</p>
       </div>
        <div className="contentimage">
            <video src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-in-0819.m4v" autoPlay loop muted></video>
            <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png" alt="" />
        </div>
    </div>
    </div>
  )
}

export default BAnner2