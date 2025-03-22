// components/MissionSection.js
import React from 'react';
import { Box, Typography, Button, Container, useMediaQuery, useTheme } from '@mui/material';
import { makeStyles } from '@mui/styles';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: 'black',
    backgroundImage: 'radial-gradient(circle, rgba(75, 75, 75, 0.1) 1px, transparent 1px)',
    backgroundSize: '20px 20px',
    minHeight: '100vh',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '60px 20px',
    position: 'relative',
    '@media (max-width: 900px)': {
      padding: '50px 15px',
      justifyContent: 'flex-start',
      paddingTop: '100px',
    },
    '@media (max-width: 600px)': {
      padding: '40px 12px',
      paddingTop: '80px',
    },
  },
  contentContainer: {
    maxWidth: '1200px',
    width: '100%',
    margin: '0 auto',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  missionTag: {
    color: 'white',
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    borderRadius: '50px',
    padding: '8px 20px',
    fontSize: '14px',
    marginBottom: '40px',
    display: 'inline-block',
    '@media (max-width: 900px)': {
      marginBottom: '30px',
      padding: '6px 16px',
      fontSize: '13px',
    },
    '@media (max-width: 600px)': {
      marginBottom: '25px',
      padding: '5px 14px',
      fontSize: '12px',
    },
  },
  headingContainer: {
    textAlign: 'center',
    maxWidth: '1100px',
    marginBottom: '40px',
    '@media (max-width: 900px)': {
      marginBottom: '30px',
      maxWidth: '100%',
    },
    '@media (max-width: 600px)': {
      marginBottom: '25px',
    },
  },
  headingLine: {
    fontSize: '2.6rem',
    fontWeight: '600',
    lineHeight: 1.2,
    marginBottom: '15px',
    '@media (max-width: 1100px)': {
      fontSize: '2.4rem',
    },
    '@media (max-width: 900px)': {
      fontSize: '2.2rem',
      marginBottom: '10px',
    },
    '@media (max-width: 600px)': {
      fontSize: '1.8rem',
      marginBottom: '8px',
    },
    '@media (max-width: 480px)': {
      fontSize: '1.5rem',
      lineHeight: 1.3,
    },
  },
  whiteText: {
    color: 'white',
  },
  orangeText: {
    color: '#E87811',
  },
  periodText: {
    color: '#E87811',
  },
  questionSpacing: {
    marginBottom: '30px',
    '@media (max-width: 900px)': {
      marginBottom: '25px',
    },
    '@media (max-width: 600px)': {
      marginBottom: '20px',
    },
  },
  description: {
    color: 'rgba(255, 255, 255, 0.7)',
    fontSize: '1.2rem',
    textAlign: 'center',
    maxWidth: '800px',
    margin: '0 auto',
    marginBottom: '50px',
    lineHeight: 1.6,
    '@media (max-width: 900px)': {
      fontSize: '1.1rem',
      marginBottom: '40px',
      maxWidth: '90%',
    },
    '@media (max-width: 600px)': {
      fontSize: '1rem',
      marginBottom: '30px',
      lineHeight: 1.5,
    },
    '@media (max-width: 480px)': {
      fontSize: '0.95rem',
    },
  },
  callButton: {
    color: '#E87811',
    borderRadius: '50px',
    fontWeight: '400',
    padding: '10px 24px',
    fontSize: '1.4rem',
    textTransform: 'none',
    '&:hover': {
      backgroundColor: 'rgba(255, 158, 44, 0.1)',
    },
    '@media (max-width: 900px)': {
      padding: '8px 20px',
      fontSize: '1.2rem',
    },
    '@media (max-width: 600px)': {
      padding: '6px 16px',
      fontSize: '1.1rem',
    },
    '@media (max-width: 480px)': {
      padding: '5px 14px',
      fontSize: '1rem',
    },
  },
  buttonIcon: {
    marginLeft: '8px',
    fontSize: '18px',
    '@media (max-width: 600px)': {
      fontSize: '16px',
    },
  },
  arrowDown: {
    position: 'absolute',
    bottom: '40px',
    color: '#E87811',
    fontSize: '40px',
    '@media (max-width: 900px)': {
      bottom: '30px',
      fontSize: '35px',
    },
    '@media (max-width: 600px)': {
      bottom: '20px',
      fontSize: '30px',
    },
  },
}));

function MissionSection() {
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.down('md'));
  const isLargeScreen = useMediaQuery(theme.breakpoints.up('lg'));

  return (
    <Box sx={{ height: { xs: 'auto', sm: 'auto', md: '120vh' }, minHeight: '100vh' }} className={classes.root}>
      <Container className={classes.contentContainer}>
        <Box className={classes.headingContainer}>
          <Typography variant="h1" className={`${classes.headingLine} ${classes.orangeText}`}>
            Why Join?
          </Typography>
          
          <Box className={classes.questionSpacing}>
            <Typography variant="h1" className={`${classes.headingLine} ${classes.whiteText}`}>
              Are you Starting a business or Looking for a 
              {!isMobile && <br />}
              Co-founder 
            </Typography>
          </Box>
          
          <Box className={classes.questionSpacing}>
            <Typography variant="h1" className={`${classes.headingLine} ${classes.whiteText}`}>
              Are you Building an MVP/Prototype or Looking for Venture 
              {!isMobile && <br />}
              Builder?
            </Typography>
          </Box>
          
          <Box className={classes.questionSpacing}>
            <Typography variant="h1" className={`${classes.headingLine} ${classes.whiteText}`}>
              Are you Raising Investment or Learning how to bootstrap 
              {!isMobile && <br />}
              effectively?
            </Typography>
          </Box>
        </Box>
        
        <Typography variant="body1" className={classes.description}>
          First impressions matter. That's why our mission is to create clean, enduring 
          designs that elevate. First impressions matter. That's why our mission.
        </Typography>
        
        <Button 
          className={classes.callButton}
          endIcon={<ArrowOutwardIcon className={classes.buttonIcon} />}
          disableRipple
        >
          Book A Call
        </Button>
        
        {/* <KeyboardArrowDownIcon className={classes.arrowDown} /> */}
      </Container>
    </Box>
  );
}

export default MissionSection;