import video from '../assets/rotate.mp4'
import videoMobile from '../assets/mobileRotate.mp4'
import { Box } from '@mui/material'
import React from 'react'
import './Video.css';

function Video() {
  return (
    <Box>
      <video src={video} className="video-bar" autoPlay muted loop/>
      <video src={videoMobile} className="video-barMobile" autoPlay muted loop/>
    </Box>   
  )
}

export default Video