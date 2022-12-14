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
         

         
function JonoChaser() {
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
        
          <Grid item xs={12} className="desk1 nodrag">
            <Card>
              <CardMedia
                component="img"
                height="100%"
                image={require('../assets/chaser/1.jpg')}
                alt="1"
              />
            </Card>
          </Grid>
          <Grid item xs={12} className="desk1 nodrag">
            <Card>
              <CardMedia
                component="img"
                height="100%"
                image={require('../assets/chaser/5.jpg')}
                alt="2"
              />
            </Card>
          </Grid>
          <Grid item xs={6} className="desk1 nodrag">
            <Card>
              <CardMedia
                component="img"
                height="100%"
                image={require('../assets/chaser/2.jpg')}
                alt="3"
              />
            </Card>  
            </Grid>
          
            <Grid item xs={6} className="desk1 nodrag">
            <Card>
              <CardMedia
                component="img"
                height="100%"
                image={require('../assets/chaser/3.jpg')}
                alt="4"
              />
            </Card>
          </Grid>
          <Grid item xs={12} className="desk1 nodrag">
            <Card>
              <CardMedia
                component="img"
                height="100%"
                image={require('../assets/chaser/4.jpg')}
                alt="5"
              />
            </Card>
          </Grid>
          <Grid item xs={12} className="desk1 nodrag">
            <Card>
              <CardMedia
                component="img"
                height="100%"
                image={require('../assets/chaser/6.jpg')}
                alt="6"
              />
            </Card>
          </Grid>
          
         
          <Grid item xs={12} className="mobile1 nodrag">
            <Card>
              <CardMedia
                component="img"
                height="100%"
                image={require('../assets/chaser/1.jpg')}
                alt="1"
              />
            </Card>
          </Grid>
          <Grid item xs={12} className="mobile1 nodrag">
            <Card>
              <CardMedia
                component="img"
                height="100%"
                image={require('../assets/chaser/5.jpg')}
                alt="2"
              />
            </Card>
          </Grid>
          <Grid item xs={6} className="mobile1 nodrag">
            <Card>
              <CardMedia
                component="img"
                height="100%"
                image={require('../assets/chaser/2.jpg')}
                alt="3"
              />
            </Card>  
            </Grid>
          
            <Grid item xs={6} className="mobile1 nodrag">
            <Card>
              <CardMedia
                component="img"
                height="100%"
                image={require('../assets/chaser/3.jpg')}
                alt="4"
              />
            </Card>
          </Grid>
          <Grid item xs={12} className="mobile1 nodrag">
            <Card>
              <CardMedia
                component="img"
                height="100%"
                image={require('../assets/chaser/4.jpg')}
                alt="5"
              />
            </Card>
          </Grid>
          <Grid item xs={12} className="mobile1 nodrag">
            <Card>
              <CardMedia
                component="img"
                height="100%"
                image={require('../assets/chaser/6.jpg')}
                alt="6"
              />
            </Card>
          </Grid>                  
        </Grid>
      </Box>
    </Box>
  ) 
    
  
}

export default JonoChaser