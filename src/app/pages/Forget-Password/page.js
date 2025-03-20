"use client";

import React, { useState } from 'react';
import { 
  Box,
  Button,
  Container,
  CssBaseline,
  Grid,
  Link,
  TextField,
  Typography,
  InputAdornment,
  IconButton
} from '@mui/material';
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
});

const ForgotPasswordPage = () => {
  const [email, setEmail] = useState('steve.smith@gmail.com');

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
              Forgot password?
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ mb: 4, maxWidth: '450px' }}>
              Enter your email below, you will receive an email with instructions 
              on how to reset your password in a few minutes. You can also 
              set a new password if you've never set one before.
            </Typography>
            
            <Box component="form" sx={{ mt: 1 }}>
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
              
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ 
                  mt: 2, 
                  mb: 5, 
                  py: 1.5,
                  backgroundColor: '#ff5722',
                  '&:hover': {
                    backgroundColor: '#e64a19',
                  }
                }}
              >
                Start recovery
              </Button>
              
              <Box sx={{ mt: 8, display: 'flex', alignItems: 'center' }}>
                <Typography variant="body2" sx={{ display: 'inline' }}>
                  You don't have an account?{' '}
                </Typography>
                <Link href="#" variant="body2" sx={{ color: '#ff5722', fontWeight: 'bold', textDecoration: 'none', ml: 0.5 }}>
                  Create an account
                </Link>
              </Box>
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
                width: '90%',
                maxWidth: 500,
                height: 'auto',
                // backgroundColor: 'white',
                borderRadius: 4,
                overflow: 'hidden',
                boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)',
              }}
            >
              <Box
                component="img"
                src="https://images.unsplash.com/photo-1503220317375-aaad61436b1b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D"
                alt="Traveler at airport looking at plane"
                sx={{ width: '100%', height: 'auto', 
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

export default ForgotPasswordPage;