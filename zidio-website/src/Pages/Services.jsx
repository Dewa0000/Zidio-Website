import React from 'react'
import ReactPlayer from 'react-player'
import  myVideo from '../assets/myVideo.mp4'

const Services = () => {

    

  return (
    <div>
      <ReactPlayer url={myVideo} controls width="100%"></ReactPlayer>
    </div>
  )
}

export default Services;
