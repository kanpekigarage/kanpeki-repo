import React, { useState } from 'react'
import logo from '../assets/navbarlogo.png'
import hamburg from '../assets/tempHamburg.png'
import './navbar.css';
import '../App.css';
import { AppBar, Button, IconButton, Toolbar, Grid} from "@mui/material"; //icons not used rn
//import { AccountCircle } from "@mui/icons-material"; //in case if wanna have icons
import { Link } from 'react-router-dom';

import Hamburger from './hamburger.jsx';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  //const [hamburgerOpen, setHamburgerOpen] = useState(false);

  const toggleHamburger = () => {
    //setHamburgerOpen(!hamburgerOpen);
    setMenuOpen(!menuOpen); // Toggle menuOpen along with the hamburger
  };

  return (
    <React.Fragment >
      <AppBar sx={{background: "#000",  opacity: "0.9"}}>
        <Toolbar>
          <Link className="navbar-logo" to="/">
            <img src={logo} width="250px"/>
          </Link>
          <Button 
            className="navbar-gallery"
            component={Link} 
            to="/gallery" 
          >
          Gallery
          </Button>
          <Button
            className="navbar-shop" 
            component={Link} 
            to="/shop" 
          >
          Shop
          </Button>
          <Button
            className="navbar-meets" 
            component={Link} 
            to="/meets" 
          >
            Photoshoot Request
          </Button>
          <div className="navbar-hamburg-logo">
            
          </div>

          <Hamburger opened={menuOpen} onClick={toggleHamburger}></Hamburger>

        </Toolbar>
        {/*  
        Dropdown Menu 
        */}
        { menuOpen && (
          <Grid container align="center" className="hamburg-grid">
            <div className='nav-link-open-container'>
              <Link to="/gallery" className='hamburg-item'>&gt; Gallery</Link>
            </div>
            <div className='nav-link-open-container'>
              <Link to="/shop" className='hamburg-item'>&gt; Shop</Link>
            </div>
            <div className='nav-link-open-container'>
              <Link to="/meets" className='hamburg-item'>&gt; Photoshoot Request</Link>
            </div>
            
          </Grid>
        )}
        
      </AppBar>
    </React.Fragment> 
  );
}

export default Navbar;