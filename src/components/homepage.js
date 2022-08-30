import React from 'react'
import homepageCivic from '../assets/homepage.png'
import './homepage.css';
import { Link } from 'react-router-dom';
import { Box, 
         Card, 
         CardContent, 
         CardMedia,
         Grid,
         Button,
         Typography } from '@mui/material'
         

         
function homepage() {
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
            <Typography variant="h4" color="#384145">
              <b>About Kanpeki Garage</b>
            </Typography>
            <Typography marginTop="12px" variant="body1">
            Kanpeki Garage was started as a passion project in 2022 to share our interest in cars and clothing. We aim to share quality media of cars, create a community that appreiate cars and produce quality clothing.
            </Typography>
            <img src={homepageCivic} className="homepagecivic nodrag" alt='homeimg' />
          </Grid>
          
          <Grid item xs={4} className="gallerydesk">
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
                <Typography color="#3584e2" variant="body1" component={Link} to="/gallery">
                  <b>Click Here To Visit The Gallery</b>
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={4} className="shopdesk">
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
                <Typography color="#3584e2" variant="body1" component={Link} to="/shop">
                  <b>Click Here To Visit The Shop</b>
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={4} className="meetsdesk">
            <Card>
              <CardMedia
                component="img"
                height="350"
                image={require('../assets/banner.jpg')}
                alt="Meets"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Meets
                </Typography>
                <Typography variant="body1">
                  The meets page contains dates and locations of meets being held.
                </Typography>
                <Typography color="#3584e2" variant="body1" component={Link} to="/meets" >
                  <b>Click Here To See Our Future Meets </b>
                </Typography>
                
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} className="gallerymobile">
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
                <Typography color="#3584e2" variant="body1" component={Link} to="/gallery">
                  <b>Click Here To Visit The Gallery</b>
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} className="shopmobile">
            <Card>
              <CardMedia
                component="img"
                height="350"
                image={require('../assets/hoodie.jpg')}
                alt="Shop"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Shop
                </Typography>
                <Typography variant="body1">
                  Our shop contains high quality clothing, stickers and accessories. 
                </Typography>
                <Typography color="#3584e2" variant="body1" component={Link} to="/shop">
                  <b>Click Here To Visit The Shop</b>
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} className="meetsmobile">
            <Card>
              <CardMedia
                component="img"
                height="350"
                image={require('../assets/banner.jpg')}
                alt="Meets"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Meets
                </Typography>
                <Typography variant="body1">
                  The meets page contains dates and locations of meets being held.
                </Typography>
                <Typography color="#3584e2" variant="body1" component={Link} to="/meets" >
                  <b>Click Here To See Our Future Meets </b>
                </Typography>
                
              </CardContent>
            </Card>
          </Grid>

        </Grid>
      </Box>
    </Box>
  ) 
    
  
}

export default homepage