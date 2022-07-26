import React from 'react'
import logo from '../assets/navbarlogo.png'
import './Navbar.css';
import '../App.css';
import { AppBar, Button, IconButton, Toolbar} from "@mui/material"; //icons not used rn
//import { AccountCircle } from "@mui/icons-material"; //in case if wanna have icons
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <React.Fragment >
      <AppBar sx={{background: "#000",  opacity: "0.9", height: "75px"}}>
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
        </Toolbar>
      </AppBar>
    </React.Fragment> 
  );
}

export default Navbar;