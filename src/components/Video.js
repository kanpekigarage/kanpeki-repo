import video from '../assets/rotate.mp4'
import { Box } from '@mui/material'
import React from 'react'

function Video() {
  return (
    <Box>
      <video src={video} width="100%" autoPlay muted loop/>
    </Box>   
  )
}

export default Video