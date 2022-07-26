import React from 'react'
import './navbar.css';
import '../App.css';
import { AppBar, Button, IconButton, Toolbar} from "@mui/material"; //icons not used rn
import { AccountCircle } from "@mui/icons-material"; //in case if wanna have icons
import { Link } from 'react-router-dom';

function NavigationBar() {
  return (
    <React.Fragment >
      <AppBar sx={{background: "#000", 
                   boxShadow: "0 1px 10px rgba(161, 161, 161, 0.2)"}}>
        <Toolbar>
          <Link className="navbar-logo" to="/">
              Kanpeki Garage
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
            shop
          </Button>
        </Toolbar>
      </AppBar>
    </React.Fragment> 
  );
}

export default NavigationBar;