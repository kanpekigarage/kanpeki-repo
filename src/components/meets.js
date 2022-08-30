import meets21 from '../assets/meetsdesktop.png'
import meets22 from '../assets/meetsmobile.png'
import { Box } from '@mui/material'
import React from 'react'
import './meets.css';

function Meets() {
  return (
    <Box>
      <img src={meets21} className="desktop-view nodrag" alt='meets unable' />
      <img src={meets22} className="phone-view nodrag" alt='meets unable' />
    </Box>   
    
  )
}

export default Meets