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
  IconButton
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
});

const SignInPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('steve.smith@gmail.com');
  const [password, setPassword] = useState('');

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
              Sign in
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
              Enter your account details
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
                  mb: 1,
                  '& .MuiOutlinedInput-root': {
                    borderRadius: '4px',
                  }
                }}
              />

              <Typography variant="body2" sx={{ mt: 2, mb: 1 }}>
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

              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
                <FormControlLabel
                  control={<Checkbox value="remember" color="primary" />}
                  label={<Typography variant="body2">Remember me</Typography>}
                />
                <Link href="Forget-Password" variant="body2" sx={{ color: '#000', textDecoration: 'none' }}>
                  Recover password
                </Link>
              </Box>

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
                Sign in
              </Button>

              <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mt: 4 }}>
                <Box sx={{ height: '1px', width: '100%', backgroundColor: '#e0e0e0', flex: 1 }} />
                <Typography variant="body2" sx={{ mx: 2, color: '#888' }}>
                  or
                </Typography>
                <Box sx={{ height: '1px', width: '100%', backgroundColor: '#e0e0e0', flex: 1 }} />
              </Box>

              <Box sx={{ mt: 4, textAlign: 'center' }}>
                <Typography variant="body2" sx={{ display: 'inline' }}>
                  You don't have an account?{' '}
                </Typography>
                <Link
                  href='Signup'
                  variant="body2" sx={{ color: '#ff5722', fontWeight: 'bold', textDecoration: 'none' }}>
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
                maxWidth: 560,
                // p: 1,
                // backgroundColor: 'white',
                borderRadius: 4,
                boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)',
              }}
            >
              <Box
                component="img"
                src="https://t4.ftcdn.net/jpg/03/23/36/33/240_F_323363323_UEzAYM10g7kDKgBWO1qSUSmiBjjjvBsF.jpg"
                alt="Person working on laptop"
                sx={{ width: '100%', borderRadius: 4, objectFit: 'cover' }}
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </ThemeProvider>
  );
};

export default SignInPage;