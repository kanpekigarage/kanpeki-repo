import React from 'react';
import SimpleImageSlider from 'react-simple-image-slider';
import { Link } from 'react-router-dom';
import './homepage.css';
import {
  Box,
  Card,
  CardContent,
  CardActions,
  CardMedia,
  Grid,
  Typography
} from '@mui/material';

import feature1 from '../galleryImg/foz1.jpg';
import feature2 from '../galleryImg/volvo.jpg';
import feature3 from '../galleryImg/GC8.jpg';

const images = [
  //{ url: feature1, link: '/gallery/e36' },
  //{ url: feature2, link: '/gallery/wes13' },
  //{ url: feature3, link: '/gallery/jess180sx' }
  //test
  { url: feature1, link: '/#/gallery/foz' },
  { url: feature2, link: '/#/gallery/242GT' },
  { url: feature3, link: '/#/gallery/GC8' }
];

function homepage() {
  const handleImageClick = (index) => {
    const image = images[index];
    console.log(`Clicked image ${index + 1}: ${image.url}`);
    // Handle navigation to the specified URL
    window.location.href = image.link; // Use this for a simple page redirect
  };

  const windowHeight = window.innerWidth;

  // Conditionally set the height based on the device height
  const sliderHeight = windowHeight < 600 ? 155 : 750;

  return(
    <Box
      component="div"
      display="flex"
      marginTop="5px"
      justifyContent="center"
      backgroundColor="#fff"
      >
      <Box
        marginTop="10px"
        display="flex"
        justifyContent="center"
        width={'80%'}
        >
        <Grid container 
          spacing={4}
        >
          <Grid item xs={12} >
            <Typography variant="h4" color="#384145" textAlign="center" fontSize={50}>
              <b>About Kanpeki Garage</b>
            </Typography>
            <Typography marginTop="12px" variant="h4" fontSize={20} textAlign="center">
            Kanpeki Garage started as a Passion project with an aim to combine our key interests <br />in Cars, Streetwear and Media under one roof. 
            </Typography> 
          </Grid>
     
            <Grid item xs={12} >
              <Typography variant="h4" color="#384145" textAlign="left" fontSize={50}>
                <b>ARCHIVES.</b>
              </Typography>
              <Typography marginBottom="20px" variant="h1" fontSize={28} textAlign="left">
                From the daily driven to the purpose built.
              </Typography> 
              
              <Grid item xs={12} style={{ cursor: 'pointer' }}>
                <SimpleImageSlider
                  width={'80%'}
                  height={sliderHeight}
                  images={images}
                  showBullets={true}
                  showNavs={true}
                  onClick={(index) => handleImageClick(index)}
                />
              </Grid>

          

            </Grid>
   
          <Grid item xs={4} className="gallerydesk nodrag">
            <Card>
              <CardMedia
                component="img"
                height="350"
                image={require('../assets/gallery.jpg')}
                alt="Gallery"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Gallery
                </Typography>
                <Typography variant="body1">
                  Our gallery contains collections of images of cars that we have shot to display every aspect of people's vechicles.
                </Typography>
              </CardContent>
              <div className="link-box" >
                <CardActions>
                  <Typography color="#3584e2" variant="body1" component={Link} to="/gallery">
                    <b>Click Here To Visit The Gallery</b>
                  </Typography>
                </CardActions>
              </div>
            </Card>
          </Grid>
          <Grid item xs={4} className="shopdesk nodrag">
            <Card>
              <CardMedia
                component="img"
                height="350"
                image={require('../assets/hoodiedesk.jpg')}
                alt="Shop"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Shop
                </Typography>
                <Typography variant="body1">
                  Our shop contains high quality clothing, stickers and accessories. 
                </Typography>
              </CardContent>
              <div className="link-box" component={Link} to="/shop">
                <CardActions>
                  <Typography color="#3584e2" variant="body1" component={Link} to="/shop">
                    <b>Click Here To Visit The Shop</b>
                  </Typography>
                </CardActions>
              </div>
            </Card>
          </Grid>
          <Grid item xs={4} className="meetsdesk nodrag">
            <Card>
              <CardMedia
                component="img"
                height="350"
                image={require('../assets/banner.jpg')}
                alt="Meets"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Photoshoot Request
                </Typography>
                <Typography variant="body1">
                  The photoshoot request contains a form you can fill out to get photos taken of your car or other.
                </Typography>
              </CardContent>
              <div className="link-box">
                <CardActions>
                  <Typography color="#3584e2" variant="body1" component={Link} to="/meets">
                    <b>Click Here To Book A Shoot </b>
                  </Typography>
                </CardActions>
              </div>
            </Card>
          </Grid>
          <Grid item xs={12} className="gallerymobile nodrag">
            <Card>
              <CardMedia
                component="img"
                height="350"
                image={require('../assets/gallery.jpg')}
                alt="Gallery"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Gallery
                </Typography>
                <Typography variant="body1">
                  Our gallery contains collections of images of cars that we have shot to display every aspect of people's vechicles.
                </Typography>
              </CardContent>
              <div className="link-box" component={Link} to="/shop">
                <CardActions>
                  <Typography color="#3584e2" variant="body1" component={Link} to="/gallery">
                    <b>Click Here To Visit The Gallery</b>
                  </Typography>
                </CardActions>
              </div>
            </Card>
          </Grid>
          <Grid item xs={12} className="shopmobile nodrag">
            <Card>
              <CardMedia
                component="img"
                height="350"
                image={require('../assets/hoodie2.jpg')}
                alt="Shop"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Shop
                </Typography>
                <Typography variant="body1">
                  Our shop contains high quality clothing, stickers and accessories. 
                </Typography>
              </CardContent>
              <div className="link-box" component={Link} to="/shop">
                <CardActions>
                  <Typography color="#3584e2" variant="body1" component={Link} to="/shop">
                    <b>Click Here To Visit The Shop</b>
                  </Typography>
                </CardActions>
              </div>
            </Card>
          </Grid>
          <Grid item xs={12} className="meetsmobile nodrag">
            <Card>
              <CardMedia
                component="img"
                height="350"
                image={require('../assets/banner.jpg')}
                alt="Meets"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Photoshoot Request
                </Typography>
                <Typography variant="body1">
                  The photoshoot request contains a form you can fill out to get photos taken of your car or other.
                </Typography>
              </CardContent>
              <div className="link-box" component={Link} to="/shop">
                <CardActions>
                  <Typography color="#3584e2" variant="body1" component={Link} to="/meets" >
                    <b>Click Here To Book A Shoot </b>
                  </Typography>
                </CardActions>
              </div>
            </Card>
          </Grid>

        </Grid>
      </Box>
    </Box>
  ) 
    
  
}

export default homepage