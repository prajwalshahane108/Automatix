"use client";

import React, { useState } from 'react';
import { 
  Box,
  Button,
  Checkbox,
  Container,
  CssBaseline,
  FormControlLabel,
  Grid,
  Link,
  TextField,
  Typography,
  InputAdornment,
  IconButton,
  Select,
  MenuItem,
  FormControl,
  InputLabel
} from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#ff5722',
    },
    background: {
      default: '#ffffff',
    },
  },
  typography: {
    fontFamily: 'Arial, sans-serif',
  },
  components: {
    MuiCheckbox: {
      styleOverrides: {
        root: {
          color: '#1976d2',
          '&.Mui-checked': {
            color: '#1976d2',
          },
        },
      },
    },
  },
});

const SignUpPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('steve.smith@gmail.com');
  const [password, setPassword] = useState('');
  const [country, setCountry] = useState('United States');
  const [agreeEmail, setAgreeEmail] = useState(true);
  const [agreeTerms, setAgreeTerms] = useState(false);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container component="main" maxWidth="xl" disableGutters>
        <Grid container>
          <Grid item xs={12} md={6} sx={{ p: { xs: 2, md: 8 } }}>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                mb: 6
              }}
            >
              <Box 
                component="img"
                src="/logo.png"
                alt="xBordr"
                sx={{ width: 40, height: 40, mr: 1, borderRadius: '50%', backgroundColor: '#ff5722' }}
              />
              <Typography variant="h6" color="primary" sx={{ fontWeight: 'bold' }}>
                xBordr
              </Typography>
            </Box>
            
            <Typography component="h1" variant="h3" sx={{ fontWeight: 'bold', mb: 1 }}>
              Sign up
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
              Before we start, please enter your current location
            </Typography>
            
            <Box component="form" sx={{ mt: 1 }}>
              <Typography variant="body2" sx={{ mb: 1 }}>
                Country/Area of Residence
              </Typography>
              <FormControl fullWidth sx={{ mb: 3 }}>
                <Select
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                  displayEmpty
                  inputProps={{ 'aria-label': 'Country' }}
                  renderValue={(selected) => (
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      {selected}
                    </Box>
                  )}
                  IconComponent={(props) => (
                    <Box {...props} component="span" sx={{ display: 'flex', alignItems: 'center' }}>
                      ▼
                    </Box>
                  )}
                  sx={{
                    '.MuiOutlinedInput-notchedOutline': {
                      borderColor: '#e0e0e0',
                    },
                    '&:hover .MuiOutlinedInput-notchedOutline': {
                      borderColor: '#e0e0e0',
                    },
                    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                      borderColor: '#1976d2',
                    },
                    borderRadius: '4px',
                    height: '56px'
                  }}
                >
                  <MenuItem value="United States">United States</MenuItem>
                  <MenuItem value="Canada">Canada</MenuItem>
                  <MenuItem value="United Kingdom">United Kingdom</MenuItem>
                  <MenuItem value="Australia">Australia</MenuItem>
                  <MenuItem value="Germany">Germany</MenuItem>
                  <MenuItem value="France">France</MenuItem>
                </Select>
              </FormControl>
              
              <Typography variant="body2" sx={{ mb: 1 }}>
                Email
              </Typography>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                name="email"
                autoComplete="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton edge="end">
                        <Box component="span" sx={{ 
                          width: 24, 
                          height: 24, 
                          display: 'flex', 
                          alignItems: 'center', 
                          justifyContent: 'center' 
                        }}>
                          ✉
                        </Box>
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
                sx={{ 
                  mb: 3,
                  '& .MuiOutlinedInput-root': {
                    borderRadius: '4px',
                  }
                }}
              />
              
              <Typography variant="body2" sx={{ mb: 1 }}>
                Password
              </Typography>
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                type={showPassword ? 'text' : 'password'}
                id="password"
                autoComplete="current-password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
                sx={{ 
                  mb: 3,
                  '& .MuiOutlinedInput-root': {
                    borderRadius: '4px',
                  } 
                }}
              />
              
              <FormControlLabel
                control={
                  <Checkbox 
                    checked={agreeEmail} 
                    onChange={(e) => setAgreeEmail(e.target.checked)} 
                    icon={<Box component="span" sx={{ 
                      width: 18, 
                      height: 18, 
                      border: '1px solid #c4c4c4', 
                      borderRadius: '3px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      backgroundColor: '#fff'
                    }} />}
                    checkedIcon={<Box component="span" sx={{ 
                      width: 18, 
                      height: 18, 
                      border: '1px solid #1976d2', 
                      borderRadius: '3px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      backgroundColor: '#1976d2',
                      color: '#fff'
                    }}>✓</Box>}
                    sx={{ 
                      padding: '9px',
                      '&.Mui-checked': {
                        color: '#1976d2',
                      }
                    }}
                  />
                }
                label={<Typography variant="body2">I agree to receive email updates</Typography>}
                sx={{ mb: 1 }}
              />
              
              <FormControlLabel
                control={
                  <Checkbox 
                    checked={agreeTerms} 
                    onChange={(e) => setAgreeTerms(e.target.checked)} 
                    icon={<Box component="span" sx={{ 
                      width: 18, 
                      height: 18, 
                      border: '1px solid #c4c4c4', 
                      borderRadius: '3px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      backgroundColor: '#fff'
                    }} />}
                    checkedIcon={<Box component="span" sx={{ 
                      width: 18, 
                      height: 18, 
                      border: '1px solid #c4c4c4', 
                      borderRadius: '3px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      backgroundColor: '#fff',
                      color: '#9e9e9e'
                    }}>✓</Box>}
                    sx={{ 
                      padding: '9px',
                      '&.Mui-checked': {
                        color: '#9e9e9e',
                      }
                    }}
                  />
                }
                label={
                  <Typography variant="body2">
                    I have read and agree to <Link href="#" sx={{ color: 'inherit', textDecoration: 'none' }}>Terms of Service</Link>
                  </Typography>
                }
                sx={{ mb: 3 }}
              />
              
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ 
                  mt: 2, 
                  mb: 2, 
                  py: 1.5,
                  backgroundColor: '#ff5722',
                  '&:hover': {
                    backgroundColor: '#e64a19',
                  }
                }}
              >
                Create Account
              </Button>
            </Box>
          </Grid>
          
          <Grid item xs={12} md={6} sx={{ 
            background: 'linear-gradient(135deg, #ffcc00 0%, #ff5722 100%)',
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            py: 4
          }}>
            <Box
              sx={{
                width: '80%',
                maxWidth: 550,
                // p: 4,
                // backgroundColor: 'white',
                borderRadius: 4,
                boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)',
              }}
            >
              <Box
                component="img"
                src="https://t4.ftcdn.net/jpg/03/23/36/33/240_F_323363323_UEzAYM10g7kDKgBWO1qSUSmiBjjjvBsF.jpg"
                alt="Person working on laptop"
                sx={{ width: '100%', 
                borderRadius: 4,

                 }}
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </ThemeProvider>
  );
};

export default SignUpPage;