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

          <Grid item xs={4} className="zacdesk nodrag" component={Link} to="/gallery/GC8">
            <Card >
              <CardMedia
                component="img"
                height="350"
                image={require('../galleryImg/gc81.jpg')}
                alt="mx5"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  @vrmbel's GC8 Impreza
                </Typography>
              </CardContent>
            </Card>
          </Grid>
		  
		  <Grid item xs={4} className="zacdesk nodrag" component={Link} to="/gallery/242GT">
            <Card >
              <CardMedia
                component="img"
                height="350"
                image={require('../galleryImg/vov.jpg')}
                alt="mx5"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  @scott_garrick's 242GT 
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          
          <Grid item xs={4} className="zacdesk nodrag" component={Link} to="/gallery/foz">
            <Card >
              <CardMedia
                component="img"
                height="350"
                image={require('../galleryImg/foz.jpg')}
                alt="mx5"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  @jed.brooker's Forester
                </Typography>
              </CardContent>
            </Card>
          </Grid>
		  
		  <Grid item xs={4} className="zacdesk nodrag" component={Link} to="/gallery/galant">
            <Card >
              <CardMedia
                component="img"
                height="350"
                image={require('../galleryImg/galant.jpg')}
                alt="mx5"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  @darcy_evans_vr4's Galant VR4 
                </Typography>
              </CardContent>
            </Card>
          </Grid>
		  
		  <Grid item xs={4} className="zacdesk nodrag" component={Link} to="/gallery/350z">
            <Card >
              <CardMedia
                component="img"
                height="350"
                image={require('../galleryImg/350.jpg')}
                alt="mx5"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  @currankeely_'s 350z
                </Typography>
              </CardContent>
            </Card>
          </Grid>
		  
		  <Grid item xs={4} className="zacdesk nodrag" component={Link} to="/gallery/AdamLZEvo">
            <Card >
              <CardMedia
                component="img"
                height="350"
                image={require('../galleryImg/evo.jpg')}
                alt="mx5"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  @adam_lz's Evo
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={4} className="zacdesk nodrag" component={Link} to="/gallery/e36">
            <Card >
              <CardMedia
                component="img"
                height="350"
                image={require('../galleryImg/e3e.jpg')}
                alt="mx5"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  @stiggy_built's E36
                </Typography>

              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={4} className="logandesk nodrag" component={Link} to="/gallery/wes13">
            <Card>
              <CardMedia
                component="img"
                height="350"
                image={require('../galleryImg/wes.jpg')}
                alt="mx5r"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  @wes_stewie's Silvia
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={4} className="danieldesk nodrag" component={Link} to="/gallery/jess180sx">
            <Card>
              <CardMedia
                component="img"
                height="350"
                image={require('../galleryImg/jess180.jpg')}
                alt="r33"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  @jess_matchett_'s 180SX
                </Typography>             
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={4} className="zacdesk nodrag" component={Link} to="/gallery/JZX100">
            <Card >
              <CardMedia
                component="img"
                height="350"
                image={require('../galleryImg/jzx.jpg')}
                alt="mx5"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  @notcalvymedia's JZX100
                </Typography>

              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={4} className="logandesk nodrag" component={Link} to="/gallery/XR6">
            <Card>
              <CardMedia
                component="img"
                height="350"
                image={require('../galleryImg/xr6.jpg')}
                alt="mx5r"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  @joshus_reidus's XR6
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={4} className="danieldesk nodrag" component={Link} to="/gallery/WRXSTI">
            <Card>
              <CardMedia
                component="img"
                height="350"
                image={require('../galleryImg/wrxsti.jpg')}
                alt="r33"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  @flynn_jonees's WRXSTI
                </Typography>             
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={4} className="danieldesk nodrag" component={Link} to="/gallery/s14">
            <Card>
              <CardMedia
                component="img"
                height="350"
                image={require('../galleryImg/s14.jpg')}
                alt="r33"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  @__rb14__'s S14
                </Typography>             
              </CardContent>
            </Card>
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
          <Grid item xs={4} className="danieldesk nodrag" component={Link} to="/gallery/CYIFLY">
            <Card>
              <CardMedia
                component="img"
                height="350"
                image={require('../galleryImg/cyi.jpg')}
                alt="r34"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  @i_fly_gtr's R34 GTR
                </Typography>             
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={4} className="danieldesk nodrag" component={Link} to="/gallery/IconRx7">
            <Card>
              <CardMedia
                component="img"
                height="350"
                image={require('../galleryImg/90icon.jpg')}
                alt="RX7"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  @90_icon's RX7 
                </Typography>             
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={4} className="danieldesk nodrag" component={Link} to="/gallery/Sail">
            <Card>
              <CardMedia
                component="img"
                height="350"
                image={require('../galleryImg/sail.jpg')}
                alt="R33"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  @33.sail's R33 
                </Typography>             
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={4} className="danieldesk nodrag" component={Link} to="/gallery/Max240SX">
            <Card>
              <CardMedia
                component="img"
                height="350"
                image={require('../galleryImg/240.jpg')}
                alt="240sx"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  @maxwilcoxx's 180sx
                </Typography>             
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={4} className="danieldesk nodrag" component={Link} to="/gallery/JonoCresta">
            <Card>
              <CardMedia
                component="img"
                height="350"
                image={require('../galleryImg/chaser.jpg')}
                alt="chaser"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  @jono.marinceski's Cresta
                </Typography>             
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={4} className="danieldesk nodrag" component={Link} to="/gallery/RollaWagon">
            <Card>
              <CardMedia
                component="img"
                height="350"
                image={require('../galleryImg/rolla.jpg')}
                alt="Rolla"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  @_rolla_wagon_'s Corolla Wagon
                </Typography>             
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} className="zacmobile nodrag" component={Link} to="/gallery/GC8">
            <Card >
              <CardMedia
                component="img"
                height="350"
                image={require('../galleryImg/gc81.jpg')}
                alt="mx5"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  @vrmbel's GC8 Impreza
                </Typography>
              </CardContent>
            </Card>
          </Grid>
		  
		  <Grid item xs={12} className="zacmobile nodrag" component={Link} to="/gallery/242GT">
            <Card >
              <CardMedia
                component="img"
                height="350"
                image={require('../galleryImg/vov.jpg')}
                alt="mx5"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  @scott_garrick's 242GT 
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} className="zacmobile nodrag" component={Link} to="/gallery/foz">
            <Card >
              <CardMedia
                component="img"
                height="350"
                image={require('../galleryImg/foz.jpg')}
                alt="mx5"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  @jed.brooker's Forester
                </Typography>
              </CardContent>
            </Card>
          </Grid>
		  
		  <Grid item xs={12} className="zacmobile nodrag" component={Link} to="/gallery/galant">
            <Card >
              <CardMedia
                component="img"
                height="350"
                image={require('../galleryImg/galant.jpg')}
                alt="mx5"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  @darcy_evans_vr4's Galant VR4 
                </Typography>
              </CardContent>
            </Card>
          </Grid>
		  
		  <Grid item xs={12} className="zacmobile nodrag" component={Link} to="/gallery/350z">
            <Card >
              <CardMedia
                component="img"
                height="350"
                image={require('../galleryImg/350.jpg')}
                alt="mx5"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  @currankeely_'s 350z
                </Typography>
              </CardContent>
            </Card>
          </Grid>
		  
		  <Grid item xs={12} className="zacmobile nodrag" component={Link} to="/gallery/AdamLZEvo">
            <Card >
              <CardMedia
                component="img"
                height="350"
                image={require('../galleryImg/evo.jpg')}
                alt="mx5"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  @adam_lz's Evo
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} className="zacmobile nodrag" component={Link} to="/gallery/e36">
            <Card >
              <CardMedia
                component="img"
                height="350"
                image={require('../galleryImg/e3e.jpg')}
                alt="mx5"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  @stiggy_built's E36
                </Typography>

              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} className="zacmobile nodrag" component={Link} to="/gallery/wes13">
            <Card>
              <CardMedia
                component="img"
                height="350"
                image={require('../galleryImg/wes.jpg')}
                alt="mx5r"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  @wes_stewie's Silvia
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} className="zacmobile nodrag" component={Link} to="/gallery/jess180sx">
            <Card>
              <CardMedia
                component="img"
                height="350"
                image={require('../galleryImg/jess180.jpg')}
                alt="r33"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  @jess_matchett_'s 180SX
                </Typography>             
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} className="zacmobile nodrag" component={Link} to="/gallery/JZX100">
            <Card >
              <CardMedia
                component="img"
                height="350"
                image={require('../galleryImg/jzx.jpg')}
                alt="mx5"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  @notcalvymedia's JZX100
                </Typography>

              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} className="zacmobile nodrag" component={Link} to="/gallery/XR6">
            <Card>
              <CardMedia
                component="img"
                height="350"
                image={require('../galleryImg/xr6.jpg')}
                alt="mx5r"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  @joshus_reidus's XR6
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} className="zacmobile nodrag" component={Link} to="/gallery/WRXSTI">
            <Card>
              <CardMedia
                component="img"
                height="350"
                image={require('../galleryImg/wrxsti.jpg')}
                alt="r33"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  @flynn_jonees's WRXSTI
                </Typography>             
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} className="zacmobile nodrag" component={Link} to="/gallery/s14">
            <Card>
              <CardMedia
                component="img"
                height="350"
                image={require('../galleryImg/s14.jpg')}
                alt="r33"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  @__rb14__'s S14
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
          <Grid item xs={12} className="danielmobile nodrag" component={Link} to="/gallery/CYIFLY">
            <Card>
              <CardMedia
                component="img"
                height="350"
                image={require('../galleryImg/cyi.jpg')}
                alt="r34"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  @i_fly_gtr's R34 GTR
                </Typography>             
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} className="danielmobile nodrag" component={Link} to="/gallery/IconRx7">
            <Card>
              <CardMedia
                component="img"
                height="350"
                image={require('../galleryImg/90icon.jpg')}
                alt="RX7"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  @90_icon's RX7 
                </Typography>             
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} className="danielmobile nodrag" component={Link} to="/gallery/Sail">
            <Card>
              <CardMedia
                component="img"
                height="350"
                image={require('../galleryImg/sail.jpg')}
                alt="R33"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  @33.sail's R33 
                </Typography>             
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} className="danielmobile nodrag" component={Link} to="/gallery/Max240SX">
            <Card>
              <CardMedia
                component="img"
                height="350"
                image={require('../galleryImg/240.jpg')}
                alt="240sx"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  @maxwilcoxx's 180sx
                </Typography>             
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} className="danielmobile nodrag" component={Link} to="/gallery/JonoCresta">
            <Card>
              <CardMedia
                component="img"
                height="350"
                image={require('../galleryImg/chaser.jpg')}
                alt="chaser"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  @jono.marinceski's Cresta
                </Typography>             
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} className="danielmobile nodrag" component={Link} to="/gallery/RollaWagon">
            <Card>
              <CardMedia
                component="img"
                height="350"
                image={require('../galleryImg/rolla.jpg')}
                alt="Rolla"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  @_rolla_wagon_'s Corolla Wagon
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