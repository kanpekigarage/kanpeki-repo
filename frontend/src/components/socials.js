import { Box } from '@mui/material'
import React from 'react'
import './socials.css';
import youtube from '../assets/youtube.png'
import instagram from '../assets/insta.png'

function Socials() {
  return (
    
    <div className='links'>
    <a href="https://www.youtube.com/channel/UCGOv8BfQpDdsb0aCOblfxag" target="_blank" className='fa-instagram nodrag'><img style={{ width: "5%", height: "5%" }}src={youtube}  alt='youtube' /> </a> 
    <a href="https://www.instagram.com/kanpekigarage/" target="_blank" className='fa-youtube nodrag'><img style={{ width: "5%", height: "5%" }} src={instagram}  alt='insta' /> </a>  
    <a href="https://www.youtube.com/channel/UCGOv8BfQpDdsb0aCOblfxag" target="_blank" className='fa-instagramm nodrag'><img style={{ width: "10%", height: "10%" }}src={youtube}  alt='youtube' /> </a> 
    <a href="https://www.instagram.com/kanpekigarage/" target="_blank" className='fa-youtubem nodrag'><img style={{ width: "10%", height: "10%" }} src={instagram}  alt='insta' /> </a> 
    </div>   
  )
}

export default Socials