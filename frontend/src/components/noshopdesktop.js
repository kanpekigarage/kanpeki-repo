import noshopd from '../assets/noshopdesktop.png'
import noshopp from '../assets/noshopmobile.png'
import { Box } from '@mui/material'
import React from 'react'
import './noshopdesktop.css';

function Noshopd() {
  return (
    <Box>
      <img src={noshopd} className="desktop-view nodrag" alt='shop unable' />
      <img src={noshopp} className="phone-view nodrag" alt='shop unable' />
    </Box>   
    
  )
}

export default Noshopd