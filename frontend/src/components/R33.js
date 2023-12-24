import React from 'react'
import './zachGallery.css';
import { Link } from 'react-router-dom';
import { Box, 
         Card, 
         CardContent, 
         CardMedia,
         Grid,
         Button,
         Typography } from '@mui/material'   

         
function DanielR33() {
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
        
          <Grid item xs={4} className="desk1 nodrag">
            <Card>
              <CardMedia
                component="img"
                height="100%"
                image={require('../assets/r33/1.jpg')}
                alt="1"
              />
            </Card>
          </Grid>
          <Grid item xs={4} className="desk1 nodrag">
            <Card>
              <CardMedia
                component="img"
                height="100%"
                image={require('../assets/r33/2.jpg')}
                alt="2"
              />
            </Card>
          </Grid>
          <Grid item xs={4} className="desk1 nodrag">
            <Card>
              <CardMedia
                component="img"
                height="100%"
                image={require('../assets/r33/3.jpg')}
                alt="3"
              />
            </Card>  
            </Grid>
          
            <Grid item xs={12} className="desk1 nodrag">
            <Card>
              <CardMedia
                component="img"
                height="100%"
                image={require('../assets/r33/4.jpg')}
                alt="4"
              />
            </Card>
          </Grid>
          <Grid item xs={4} className="desk1 nodrag">
            <Card>
              <CardMedia
                component="img"
                height="100%"
                image={require('../assets/r33/DSC02720.jpg')}
                alt="5"
              />
            </Card>
          </Grid>
          <Grid item xs={4} className="desk1 nodrag">
            <Card>
              <CardMedia
                component="img"
                height="100%"
                image={require('../assets/r33/DSC02667.jpg')}
                alt="6"
              />
            </Card>
          </Grid>
          
          <Grid item xs={4} className="desk1 nodrag">
            <Card>
              <CardMedia
                component="img"
                height="100%"
                image={require('../assets/r33/DSC02808.jpg')}
                alt="8"
              />
            </Card>
          </Grid>
          
          <Grid item xs={6} className="mobile1 nodrag">
            <Card>
              <CardMedia
                component="img"
                height="100%"
                image={require('../assets/r33/1.jpg')}
                alt="1"
              />
            </Card>
          </Grid>
          <Grid item xs={6} className="mobile1 nodrag">
            <Card>
              <CardMedia
                component="img"
                height="100%"
                image={require('../assets/r33/DSC02720.jpg')}
                alt="2"
              />
            </Card>
          </Grid>
          <Grid item xs={12} className="mobile1 nodrag">
            <Card>
              <CardMedia
                component="img"
                height="100%"
                image={require('../assets/r33/4.jpg')}
                alt="3"
              />
            </Card>  
            </Grid>
          
            <Grid item xs={6} className="mobile1 nodrag">
            <Card>
              <CardMedia
                component="img"
                height="100%"
                image={require('../assets/r33/2.jpg')}
                alt="4"
              />
            </Card>
          </Grid>
          <Grid item xs={6} className="mobile1 nodrag">
            <Card>
              <CardMedia
                component="img"
                height="100%"
                image={require('../assets/r33/3.jpg')}
                alt="5"
              />
            </Card>
          </Grid>
          <Grid item xs={6} className="mobile1 nodrag">
            <Card>
              <CardMedia
                component="img"
                height="100%"
                image={require('../assets/r33/DSC02667.jpg')}
                alt="6"
              />
            </Card>
          </Grid>
          
          <Grid item xs={6} className="mobile1 nodrag">
            <Card>
              <CardMedia
                component="img"
                height="100%"
                image={require('../assets/r33/DSC02808.jpg')}
                alt="8"
              />
            </Card>
          </Grid>
          
        </Grid>
      </Box>
    </Box>
  ) 
    
  
}

export default DanielR33