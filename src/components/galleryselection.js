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
          
          <Grid item xs={4} className="zacdesk nodrag" component={Link} to="/gallery/ZacMX-5">
            <Card >
              <CardMedia
                component="img"
                height="350"
                image={require('../galleryImg/mxW.jpg')}
                alt="mx5"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  @prior13b's MX-5
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
                  @logan_tomo's MX-5
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={4} className="danieldesk nodrag" component={Link} to="/gallery/DaymeinR33">
            <Card>
              <CardMedia
                component="img"
                height="350"
                image={require('../galleryImg/r33.jpg')}
                alt="r33"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  @daymein_lindsey's R33
                </Typography>             
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={4} className="danieldesk nodrag" component={Link} to="/gallery/moi57rR34">
            <Card>
              <CardMedia
                component="img"
                height="350"
                image={require('../galleryImg/MOI.jpg')}
                alt="r34"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  @moi57r's R34
                </Typography>             
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={4} className="danieldesk nodrag" component={Link} to="/gallery/00jdM2">
            <Card>
              <CardMedia
                component="img"
                height="350"
                image={require('../galleryImg/M2.jpg')}
                alt="M2"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  @00.jd_'s M2
                </Typography>             
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={4} className="danieldesk nodrag" component={Link} to="/gallery/EndGame">
            <Card>
              <CardMedia
                component="img"
                height="350"
                image={require('../galleryImg/ENDGAME.jpg')}
                alt="R34"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  @endgamecollection's R34 GTR
                </Typography>             
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} className="zacmobile nodrag" component={Link} to="/gallery/ZacMX-5">
            <Card>
              <CardMedia
                component="img"
                height="350"
                image={require('../galleryImg/mxW.jpg')}
                alt="mx5WW"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  @prior13b's MX-5
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
                  @logan_tomo's MX-5
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} className="danielmobile nodrag" component={Link} to="/gallery/DaymeinR33">
            <Card>
              <CardMedia
                component="img"
                height="350"
                image={require('../galleryImg/r33.jpg')}
                alt="r33m"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                 @daymein_lindsey's R33
                </Typography>         
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} className="danielmobile nodrag" component={Link} to="/gallery/moi57rR34">
            <Card>
              <CardMedia
                component="img"
                height="350"
                image={require('../galleryImg/MOI.jpg')}
                alt="r34"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  @moi57r's R34
                </Typography>             
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} className="danielmobile nodrag" component={Link} to="/gallery/00jdM2">
            <Card>
              <CardMedia
                component="img"
                height="350"
                image={require('../galleryImg/M2.jpg')}
                alt="M2"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  @00.jd_'s M2
                </Typography>             
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} className="danielmobile nodrag" component={Link} to="/gallery/EndGame">
            <Card>
              <CardMedia
                component="img"
                height="350"
                image={require('../galleryImg/ENDGAME.jpg')}
                alt="R34"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  @endgamecollection's R34 GTR
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