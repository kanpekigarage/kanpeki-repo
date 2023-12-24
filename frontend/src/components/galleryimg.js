import galleryDesk from '../assets/galleryDesktop.jpg'
import galleryMobile from '../assets/galleryMobile.jpg'
import Box from '@mui/material/Box';
import React from 'react'
import './galleryimg.css';

function GalleryImg() {
  return (
    <Box>
      <img src={galleryDesk} className="img-bar nodrag" alt='galleryimgMobile' />
      <img src={galleryMobile} className="img-barMobile nodrag" alt='galleryimgDesktop' />
    </Box>   
  )
}

export default GalleryImg