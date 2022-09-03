import galleryDesk from '../assets/galleryDesktop.png'
import galleryMobile from '../assets/galleryMobile.png'
import { Box } from '@mui/material'
import React from 'react'
import './galleryimg.css';

function GalleryImg() {
  return (
    <Box>
      <img src={galleryDesk} className="img-bar" alt='galleryimgMobile' />
      <img src={galleryMobile} className="img-barMobile" alt='galleryimgDesktop' />
    </Box>   
  )
}

export default GalleryImg