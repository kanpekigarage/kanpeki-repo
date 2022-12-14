import React from 'react'
import logo from '../assets/navbarlogo.png'
import hamburg from '../assets/tempHamburg.png'
import './Navbar.css';
import '../App.css';
import { AppBar, Button, IconButton, Toolbar} from "@mui/material"; //icons not used rn
//import { AccountCircle } from "@mui/icons-material"; //in case if wanna have icons
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <React.Fragment >
      <AppBar sx={{background: "#000",  opacity: "0.9"}}>
        <Toolbar>
          { <Link className="navbar-logo" to="/">
              <img src={logo} width="250px"/>
          </Link> }

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
          Meets
          </Button>

          { <Link className="navbar-hamburg" to="/gallery">
              <img src={hamburg} width="37.5px"/>
          </Link> }
         
{/*
          <div class="left">
          <div class="container" onclick="myFunction(this)">
          <div class="bar1"></div>
          <div class="bar2"></div>
          <div class="bar3"></div>
            </div>
          </div> 

           <ul class="phone-menu">
          <li><a href="/gallery" className="navbar-logo" to="/"><img src={logo} width="250px"/></a></li> 
          <li><a href="/gallery">Gallery</a></li>
          <li><a href="/shop">Shop</a></li>
        </ul> fix later*/}

        </Toolbar>
      </AppBar>
    </React.Fragment> 
  );
}

export default Navbar;