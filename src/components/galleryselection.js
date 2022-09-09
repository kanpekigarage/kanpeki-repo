import React from 'react'
import './galleryselection.css';
import { Link } from 'react-router-dom';
import { Box, 
         Card, 
         CardContent, 
         CardMedia,
         Grid,
         Button,
         Typography } from '@mui/material'
         

function GallerySelection() {
  return (
    <Box>
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
              <b>Kanpeki Garage Gallery</b>
            </Typography>
            <Typography marginTop="12px" variant="body1">
            Click the images to view more photos of the cars.
            </Typography>
          </Grid>
          
          <Grid item xs={4} className="zacdesk nodrag" component={Link} to="/gallery/ZachMX-5">
            <Card >
              <CardMedia
                component="img"
                height="350"
                image={require('../galleryImg/mxW.jpg')}
                alt="mx5"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Zach's MX-5
                </Typography>

              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={4} className="logandesk nodrag" component={Link} to="/gallery/LoganMX-5">
            <Card>
              <CardMedia
                component="img"
                height="350"
                image={require('../galleryImg/mxR.jpg')}
                alt="mx5r"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Logan's MX-5
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={4} className="danieldesk nodrag" component={Link} to="/gallery/DanielR33">
            <Card>
              <CardMedia
                component="img"
                height="350"
                image={require('../galleryImg/r33.jpg')}
                alt="r33"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Daniel's R33
                </Typography>             
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} className="zacmobile nodrag" component={Link} to="/gallery/ZachMX-5">
            <Card>
              <CardMedia
                component="img"
                height="350"
                image={require('../galleryImg/mxW.jpg')}
                alt="mx5WW"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Zach's MX-5
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} className="loganmobile nodrag" component={Link} to="/gallery/LoganMX-5">
            <Card>
              <CardMedia
                component="img"
                height="350"
                image={require('../galleryImg/mxR.jpg')}
                alt="mx5RR"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Logan's MX-5
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} className="danielmobile nodrag" component={Link} to="/gallery/DanielR33">
            <Card>
              <CardMedia
                component="img"
                height="350"
                image={require('../galleryImg/r33.jpg')}
                alt="r33m"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Daniel's R33
                </Typography>         
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </Box>   
  </Box> 
  )
}

export default GallerySelection