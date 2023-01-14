import React, { useState } from 'react'
import logo from '../assets/navbarlogo.png'
import hamburg from '../assets/tempHamburg.png'
import './Navbar.css';
import '../App.css';
import { AppBar, Button, IconButton, Toolbar, Grid} from "@mui/material"; //icons not used rn
//import { AccountCircle } from "@mui/icons-material"; //in case if wanna have icons
import { Link } from 'react-router-dom';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <React.Fragment >
      <AppBar sx={{background: "#000",  opacity: "0.9"}}>
        <Toolbar>
          {/* if menu open, home button will close menu */}
          <Link className="navbar-logo" to="/" onClick={(menuOpen) => setMenuOpen(!menuOpen)}>
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
            Meets
          </Button>
          <div className="navbar-hamburg-logo" onClick={() => setMenuOpen(!menuOpen)}>
            <img src={hamburg} width="37.5px"/>
          </div>
        </Toolbar>
        {/*  
        Dropdown Menu 
        */}
        { menuOpen && (
          <Grid container align="center" className="hamburg-grid">
            <Grid item xs={12} 
              className="hamburg-item" 
              component={Link} 
              to="/gallery"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              Gallery
            </Grid>
            <Grid item xs={12} 
              className="hamburg-item" 
              component={Link} 
              to="/shop"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              Shop
            </Grid>
            <Grid item xs={12} 
              className="hamburg-item" 
              component={Link} 
              to="/meets"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              Meets
            </Grid>
          </Grid>
        )}
      </AppBar>
    </React.Fragment> 
  );
}

export default Navbar;