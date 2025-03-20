'use client';
import React from 'react';
import Head from 'next/head';
import { 
  Box, 
  Typography, 
  TextField, 
  Button, 
  Checkbox, 
  FormControlLabel, 
  Container,
  Link
} from '@mui/material';
import { makeStyles } from '@mui/styles';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: 'black',
    minHeight: '100vh',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
    position: 'relative',
  },
  fullWidthImageContainer: {
    width: '100%',
    height: '220px',
    overflow: 'hidden',
    position: 'relative',
  },
  fullWidthImage: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    display: 'block',
  },
  formContainer: {
    marginTop: '80px',
    marginBottom: '80px',
    width: '100%',
    maxWidth: '600px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start', // Align to the left
    paddingLeft: '20%', // Add padding on the left to move container leftward
    boxSizing: 'border-box',
  },
  title: {
    color: 'white',
    fontSize: '2.5rem',
    fontWeight: 'bold',
    marginBottom: '40px',
    textAlign: 'left', // Align text to the left
    width: '100%',
  },
  inputField: {
    width: '100%',
    marginBottom: '20px',
    '& .MuiOutlinedInput-root': {
      borderRadius: '4px',
      backgroundColor: 'rgba(25, 25, 25, 0.6)',
      '& fieldset': {
        borderColor: 'rgba(255, 255, 255, 0.2)',
      },
      '&:hover fieldset': {
        borderColor: 'rgba(255, 255, 255, 0.3)',
      },
      '&.Mui-focused fieldset': {
        borderColor: '#6C50F7',
      },
    },
    '& .MuiInputLabel-root': {
      color: 'rgba(255, 255, 255, 0.7)',
    },
    '& .MuiInputBase-input': {
      color: 'white',
    },
  },
  checkbox: {
    color: 'rgba(255, 255, 255, 0.7)',
    '&.Mui-checked': {
      color: '#6C50F7',
    },
  },
  checkboxLabel: {
    color: 'white',
    fontSize: '0.9rem',
  },
  privacyText: {
    color: 'rgba(255, 255, 255, 0.7)',
    fontSize: '0.9rem',
    marginTop: '20px',
    textAlign: 'left',
    width: '100%',
  },
  privacyLink: {
    color: '#6C50F7',
    textDecoration: 'underline',
    cursor: 'pointer',
  },
  signupButton: {
    backgroundColor: '#6C50F7',
    color: 'white',
    padding: '8px 20px',
    borderRadius: '4px',
    textTransform: 'none',
    fontSize: '1rem',
    marginTop: '20px',
    alignSelf: 'flex-start',
    '&:hover': {
      backgroundColor: '#5b43d6',
    },
  },
  footer: {
    position: 'absolute',
    bottom: '20px',
    right: '20px',
    display: 'flex',
    alignItems: 'center',
    color: 'white',
  },
  footerText: {
    marginRight: '5px',
    fontSize: '0.9rem',
  },
  tallyLogo: {
    color: '#6C50F7',
    fontWeight: 'bold',
  },
  requiredAsterisk: {
    color: 'white',
    position: 'absolute',
    right: '10px',
    top: '15px',
  },
  formWrapper: {
    width: '100%',
    display: 'flex',
    justifyContent: 'flex-start', // Left align the container
    paddingLeft: '5%', // Add some padding from the left edge
  }
}));

export default function NewsletterSignup() {
  const classes = useStyles();

  return (
    <>
      <Head>
        <title>Newsletter Sign-up</title>
        <meta name="description" content="Sign up for our newsletter" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Box className={classes.root}>
        {/* Full Width Image Section */}
        <Box className={classes.fullWidthImageContainer}>
          <img 
            src="https://storage.tally.so/391feb34-80fa-43b7-8f05-b2e0e8639a56/MyFoundersClub-not-for-sharing-4-.pdf.png" 
            alt="Header Image"
            className={classes.fullWidthImage}
          />
        </Box>

        {/* Form Section */}
        <Box className={classes.formWrapper}>
          <Box className={classes.formContainer}>
            <Typography variant="h3" className={classes.title}>
              Newsletter sign-up
            </Typography>

            <Box sx={{ width: '100%', position: 'relative' }}>
              <TextField 
                className={classes.inputField}
                variant="outlined"
                label="Name"
                fullWidth
                InputProps={{
                  style: { color: 'white' }
                }}
              />
              <Typography className={classes.requiredAsterisk}>*</Typography>
            </Box>

            <Box sx={{ width: '100%', position: 'relative' }}>
              <TextField 
                className={classes.inputField}
                variant="outlined"
                label="Email"
                fullWidth
                InputProps={{
                  style: { color: 'white' }
                }}
              />
              <Typography className={classes.requiredAsterisk}>*</Typography>
            </Box>

            <Box sx={{ width: '100%', display: 'flex', alignItems: 'flex-start', marginBottom: '10px' }}>
              <FormControlLabel
                control={
                  <Checkbox 
                    className={classes.checkbox}
                    sx={{ 
                      color: 'rgba(255, 255, 255, 0.7)',
                      '&.Mui-checked': {
                        color: '#6C50F7',
                      },
                    }}
                  />
                }
                label={
                  <Typography className={classes.checkboxLabel}>
                    Yes I would like to sign up for the weekly newsletter <span style={{ color: 'white' }}>*</span>
                  </Typography>
                }
              />
            </Box>

            <Typography className={classes.privacyText}>
              For information about our privacy practices and commitment to protecting your privacy,
              check out our <Link className={classes.privacyLink}>Privacy Policy</Link>.
            </Typography>

            <Button 
              variant="contained" 
              className={classes.signupButton}
              endIcon={<ArrowForwardIcon />}
            >
              Sign up
            </Button>
          </Box>
        </Box>

        {/* Footer */}
        <Box className={classes.footer}>
          <Typography className={classes.footerText}>Made with</Typography>
          <Typography className={classes.tallyLogo}>Tally</Typography>
        </Box>
      </Box>
    </>
  );
}