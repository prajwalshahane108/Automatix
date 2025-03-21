'use client';
import React from 'react';
import { 
  Box, 
  Typography, 
  TextField, 
  Button, 
  Checkbox, 
  FormControlLabel, 
  Link,
  ThemeProvider,
  createTheme
} from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

// Create a custom theme
const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#6C50F7',
    },
    background: {
      default: '#000000',
      paper: '#131313',
    },
    text: {
      primary: '#ffffff',
      secondary: 'rgba(255, 255, 255, 0.7)',
    },
  },
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
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
      },
    },
    MuiCheckbox: {
      styleOverrides: {
        root: {
          color: 'rgba(255, 255, 255, 0.7)',
          '&.Mui-checked': {
            color: '#6C50F7',
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
        },
      },
    },
  },
});

export default function NewsletterSignup() {
  return (
    <ThemeProvider theme={theme}>
      <Box 
        sx={{
          backgroundColor: 'black',
          minHeight: '100vh',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'flex-start',
          position: 'relative',
        }}
      >
        {/* Full Width Image Section */}
        <Box 
          sx={{
            width: '100%',
            height: '220px',
            overflow: 'hidden',
            position: 'relative',
          }}
        >
          <Box
            component="img"
            src="https://storage.tally.so/391feb34-80fa-43b7-8f05-b2e0e8639a56/MyFoundersClub-not-for-sharing-4-.pdf.png" 
            alt="Header Image"
            sx={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              display: 'block',
            }}
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = '/fallback-image.jpg'; // Provide a fallback image
            }}
          />
        </Box>

        {/* Form Section */}
        <Box 
          sx={{
            width: '100%',
            display: 'flex',
            justifyContent: 'flex-start',
            paddingLeft: '5%',
          }}
        >
          <Box 
            sx={{
              marginTop: '80px',
              marginBottom: '80px',
              width: '100%',
              maxWidth: '600px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              paddingLeft: {
                xs: '5%',  // smaller padding on mobile
                sm: '10%', // medium padding on tablet
                md: '20%'  // larger padding on desktop
              },
              boxSizing: 'border-box',
            }}
          >
            <Typography 
              variant="h3" 
              sx={{
                color: 'white',
                fontSize: '2.5rem',
                fontWeight: 'bold',
                marginBottom: '40px',
                textAlign: 'left',
                width: '100%',
              }}
            >
              Newsletter sign-up
            </Typography>

            <Box sx={{ width: '100%', position: 'relative' }}>
              <TextField 
                variant="outlined"
                label="Name"
                fullWidth
                InputProps={{
                  style: { color: 'white' }
                }}
              />
              <Typography 
                sx={{
                  color: 'white',
                  position: 'absolute',
                  right: '10px',
                  top: '15px',
                }}
              >
                *
              </Typography>
            </Box>

            <Box sx={{ width: '100%', position: 'relative' }}>
              <TextField 
                variant="outlined"
                label="Email"
                fullWidth
                InputProps={{
                  style: { color: 'white' }
                }}
              />
              <Typography 
                sx={{
                  color: 'white',
                  position: 'absolute',
                  right: '10px',
                  top: '15px',
                }}
              >
                *
              </Typography>
            </Box>

            <Box sx={{ width: '100%', display: 'flex', alignItems: 'flex-start', marginBottom: '10px' }}>
              <FormControlLabel
                control={
                  <Checkbox 
                    sx={{ 
                      color: 'rgba(255, 255, 255, 0.7)',
                      '&.Mui-checked': {
                        color: '#6C50F7',
                      },
                    }}
                  />
                }
                label={
                  <Typography 
                    sx={{
                      color: 'white',
                      fontSize: '0.9rem',
                    }}
                  >
                    Yes I would like to sign up for the weekly newsletter <span style={{ color: 'white' }}>*</span>
                  </Typography>
                }
              />
            </Box>

            <Typography 
              sx={{
                color: 'rgba(255, 255, 255, 0.7)',
                fontSize: '0.9rem',
                marginTop: '20px',
                textAlign: 'left',
                width: '100%',
              }}
            >
              For information about our privacy practices and commitment to protecting your privacy,
              check out our{' '}
              <Link 
                sx={{
                  color: '#6C50F7',
                  textDecoration: 'underline',
                  cursor: 'pointer',
                }}
              >
                Privacy Policy
              </Link>.
            </Typography>

            <Button 
              variant="contained" 
              sx={{
                backgroundColor: '#6C50F7',
                color: 'white',
                padding: '8px 20px',
                borderRadius: '4px',
                fontSize: '1rem',
                marginTop: '20px',
                alignSelf: 'flex-start',
                '&:hover': {
                  backgroundColor: '#5b43d6',
                },
              }}
              endIcon={<ArrowForwardIcon />}
            >
              Sign up
            </Button>
          </Box>
        </Box>

        {/* Footer */}
        <Box 
          sx={{
            position: 'fixed', // Changed from absolute to fixed
            bottom: '20px',
            right: '20px',
            display: 'flex',
            alignItems: 'center',
            color: 'white',
            backgroundColor: 'rgba(0,0,0,0.7)', // Added background for better visibility
            padding: '5px 10px',
            borderRadius: '4px',
            zIndex: 10,
          }}
        >
          {/* <Typography 
            sx={{
              marginRight: '5px',
              fontSize: '0.9rem',
            }}
          >
            Made with
          </Typography>
          <Typography 
            sx={{
              color: '#6C50F7',
              fontWeight: 'bold',
            }}
          >
            Tally
          </Typography> */}
        </Box>
      </Box>
    </ThemeProvider>
  );
}