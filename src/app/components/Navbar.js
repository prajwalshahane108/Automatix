// components/Navbar.js
import React, { useState, useEffect } from 'react';
import { 
  AppBar, 
  Toolbar, 
  Typography, 
  Button, 
  Box, 
  Container, 
  IconButton, 
  Menu, 
  MenuItem, 
  useMediaQuery, 
  useTheme 
} from '@mui/material';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: 'black',
    boxShadow: 'none',
    backgroundImage: 'radial-gradient(circle, rgba(75, 75, 75, 0.3) 1px, transparent 1px)',
    backgroundSize: '10px 10px',
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '10px 0',
  },
  logo: {
    color: '#F9A825', // Orange/amber color for Automatix
    fontWeight: 'bold',
    fontSize: '1.5rem',
    cursor: 'pointer',
  },
  navItems: {
    display: 'flex',
    alignItems: 'center',
  },
  navLink: {
    color: 'white',
    margin: '0 15px',
    textTransform: 'none',
    '&:hover': {
      backgroundColor: 'transparent',
      color: '#F9A825',
    },
  },
  active: {
    color: '#F9A825',
  },
  talkButton: {
    backgroundColor: 'black',
    color: 'white',
    border: '1px solid rgba(255, 255, 255, 0.3)',
    borderRadius: '5px',
    padding: '8px 16px',
    textTransform: 'none',
    '&:hover': {
      backgroundColor: 'rgba(255, 255, 255, 0.1)',
    },
    display: 'flex',
    alignItems: 'center',
    gap: '5px',
  },
  arrowIcon: {
    fontSize: '18px',
  },
  expandIcon: {
    color: 'white',
    fontSize: '20px',
  },
}));

function Navbar() {
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [anchorEl, setAnchorEl] = useState(null);
  const [pagesAnchorEl, setPagesAnchorEl] = useState(null);
  
  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };
  
  const handlePagesMenuOpen = (event) => {
    setPagesAnchorEl(event.currentTarget);
  };

  const handlePagesMenuClose = () => {
    setPagesAnchorEl(null);
  };

  const navItems = [
    { name: 'Why Us', link: '/why-us' },
    { name: 'Mission', link: '/mission' },
    { name: 'Works', link: '/works' },
    { name: 'Services', link: '/services' },
  ];

  const pagesItems = [
    { name: 'About', link: '/about' },
    { name: 'Team', link: '/team' },
    { name: 'Blog', link: '/blog' },
    { name: 'Contact', link: '/contact' },
  ];

  return (
    <AppBar position="absolute" className={classes.appBar} elevation={0}>
      <Toolbar className={classes.toolbar}>
        <Typography variant="h6" className={classes.logo}>
          Automatix
        </Typography>

        {isMobile ? (
          <>
            <IconButton
              edge="end"
              color="inherit"
              aria-label="menu"
              onClick={handleMenuOpen}
            >
              <ExpandMoreIcon />
            </IconButton>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleMenuClose}
              PaperProps={{
                sx: {
                  backgroundColor: '#1a1a1a',
                  color: 'white',
                  borderRadius: '8px',
                }
              }}
            >
              {navItems.map((item) => (
                <MenuItem key={item.name} onClick={handleMenuClose}>
                  {item.name}
                </MenuItem>
              ))}
              <MenuItem onClick={handleMenuClose}>Pages</MenuItem>
              <MenuItem onClick={handleMenuClose}>Let's Talk</MenuItem>
            </Menu>
          </>
        ) : (
          <Box className={classes.navItems}>
            {navItems.map((item) => (
              <Button
                key={item.name}
                className={classes.navLink}
                href={item.link}
                disableRipple
              >
                {item.name}
              </Button>
            ))}
            
            <Box sx={{ position: 'relative' }}>
              <Button
                className={classes.navLink}
                endIcon={<ExpandMoreIcon className={classes.expandIcon} />}
                onClick={handlePagesMenuOpen}
                disableRipple
              >
                Pages
              </Button>
              <Menu
                anchorEl={pagesAnchorEl}
                open={Boolean(pagesAnchorEl)}
                onClose={handlePagesMenuClose}
                PaperProps={{
                  sx: {
                    backgroundColor: '#1a1a1a',
                    color: 'white',
                    borderRadius: '8px',
                    mt: 1,
                  }
                }}
              >
                {pagesItems.map((item) => (
                  <MenuItem key={item.name} onClick={handlePagesMenuClose}>
                    {item.name}
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            
            <Button 
              className={classes.talkButton}
              endIcon={<ArrowOutwardIcon className={classes.arrowIcon} />}
              disableRipple
            >
              Let's Talk
            </Button>
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;