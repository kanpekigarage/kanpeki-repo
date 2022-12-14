import video from '../assets/rotate.mp4'
import videoMobile from '../assets/mobileRotate.mp4'
import mobileBannertemp from '../assets/mobileBanner.jpg'
import { Box } from '@mui/material'
import React from 'react'
import './Video.css';

function Video() {
  return (
    <Box>
      <video src={video} className="video-bar" autoPlay muted loop/>
      <img src={mobileBannertemp} className="video-barMobile" alt='banner' />
    </Box>   
  )
}

export default Video