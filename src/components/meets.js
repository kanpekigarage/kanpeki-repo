import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './meets.css';
import { Box, Typography, Grid, Button, Checkbox, FormControlLabel,TextField } from '@mui/material';

function Meets() {
  const [photosChecked, setPhotosChecked] = useState(false);
  const [videoChecked, setVideoChecked] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false); // Track form submission

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted');

    const templateId = 'template_jzzsqco';
    const userId = '0oTpFbxG_fKUdyLoh';

    // These are the input field values from the form
    const { instagramName, car, otherInfo } = e.target;

    // Prepare the template parameters
    const templateParams = {
      to_name: 'Recipient Name',
      from_name: instagramName.value,
      car: car.value,
      otherInfo: otherInfo.value,
      photos: photosChecked ? 'Photos checked' : 'Photos not checked',
      video: videoChecked ? 'Video checked' : 'Video not checked',
    };

    // Send the email using EmailJS
    emailjs
      .send('default_service', templateId, templateParams, userId)
      .then((response) => {
        console.log('Email sent successfully:', response);
        setFormSubmitted(true); // Set form submitted state
      })
      .catch((error) => {
        console.error('Email sending failed:', error);
      });
  };

  return (
    <Box component="div" display="flex" marginTop="5px" justifyContent="center" backgroundColor="#fff">
      <Box marginTop="10px" display="flex" justifyContent="center" width={'80%'} marginBottom={5}>
        {formSubmitted ? ( // Conditionally render message after form submission
          <Typography color="#71797E"style=
          {{
            fontSize: '28px',
            marginTop: '30px',
            textAlign: "center",
            fontWeight: "bold"
           
          }}>
            Thanks For Submiting The Form We'll Contact You Shortly!
          </Typography>
        ) : (
          <form onSubmit={handleSubmit}>
          <Grid container spacing={4}>
            <Grid item xs={12}>
              <Typography variant="h4" color="#384145">
                <b>Photoshoot Form</b>
              </Typography>
              <Typography marginTop="12px" variant="body1"
              style=
              {{
                fontSize: '20px',
                marginTop: '7.5px',
                marginBottom: '7.5px',
              }}>
                Please Enter Details & We'll Get Back To You On Instagram.
              </Typography>
              
              <Typography
              style=
              {{
                fontSize: '18px',
              }}>
                Instagram Name
              </Typography>
              <TextField name="instagramName" label="Instagram Name" variant="outlined" fullWidth margin="normal" required />
              <Typography
              style=
              {{
                fontSize: '18px',
                marginTop: '7.5px',
                marginBottom: '7.5px',
              }}>
                Car
              </Typography>
              <TextField name="car" label="Car" variant="outlined" fullWidth margin="normal" required />
              <div style={{ display: 'flex', justifyContent: 'center' }}>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={photosChecked}
                    onChange={(e) => setPhotosChecked(e.target.checked)}
                    name="photosChecked"
                    color="primary"
                  />
                }
                label={
                  <Typography
                    style={{
                      fontSize: '20px',
                      marginTop: '7.5px',
                      marginBottom: '7.5px',
                    }}
                  >
                    Photos
                  </Typography>
                }
              />
              
              <FormControlLabel
                control={
                  <Checkbox
                    checked={videoChecked}
                    onChange={(e) => setVideoChecked(e.target.checked)}
                    name="videoChecked"
                    color="primary"
                  />
                }
                label={
                  <Typography
                    style={{
                      fontSize: '20px',
                      marginTop: '7.5px',
                      marginBottom: '7.5px',
                    }}
                  >
                    Video
                  </Typography>
                }
              />
              <br></br>
              </div>

              <Typography
              style=
              {{
                fontSize: '18px',
              }}>
                Other Info
              </Typography>
              <TextField name="otherInfo" label="Other Info" variant="outlined" fullWidth margin="normal" required />

              <div style={{ display: 'flex', justifyContent: 'center' }}>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                style={{
                  backgroundColor: '#36454F',
                  color: 'white',
                  padding: '15px 40px',
                  border: 'none',
                  borderRadius: '4px',
                  cursor: 'pointer',
                  fontSize: '18px',
                  marginTop: '20px',
                }}
              >
                Submit
              </Button>
              </div>
            </Grid>
          </Grid>
        </form>
        )}
      </Box>
    </Box>
  );
}

export default Meets;
