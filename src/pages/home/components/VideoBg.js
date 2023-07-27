import React from 'react'
import video from "../../../assets/video/clothes_-_36846 (720p).mp4";
import "./_videobg.scss"
const VideoBg = () => {
  return (
<>
<div className="bg">
    <video src={video} loop autoPlay muted></video>
    <div className="text">
        <h4>The Beatty</h4>
        <h1>LOOKBOOK</h1>
    </div>
</div>
</> 
 )
}

export default VideoBg