// components/MissionSection.js
import React from 'react';
import { Box, Typography, Button, Container } from '@mui/material';
import { makeStyles } from '@mui/styles';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const useStyles = makeStyles(() => ({
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
  },
  headingContainer: {
    textAlign: 'center',
    maxWidth: '1100px',
    marginBottom: '40px',
  },
  headingLine: {
    fontSize: '2.6rem',
    fontWeight: '600',
    lineHeight: 1.2,
    '@media (max-width: 900px)': {
      fontSize: '3rem',
    },
    '@media (max-width: 600px)': {
      fontSize: '2.2rem',
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
  description: {
    color: 'rgba(255, 255, 255, 0.7)',
    fontSize: '1.2rem',
    textAlign: 'center',
    maxWidth: '800px',
    margin: '0 auto',
    marginBottom: '50px',
    lineHeight: 1.6,
  },
  callButton: {
    color: '#E87811',
    // border: '1px solid #E87811',
    borderRadius: '50px',
    fontWeight: '400',
    padding: '10px 24px',
    fontSize: '1.4rem',
    textTransform: 'none',
    '&:hover': {
      backgroundColor: 'rgba(255, 158, 44, 0.1)',
    },
  },
  buttonIcon: {
    marginLeft: '8px',
    fontSize: '18px',
  },
  arrowDown: {
    position: 'absolute',
    bottom: '40px',
    color: '#E87811',
    fontSize: '40px',
  },
}));

function MissionSection() {
  const classes = useStyles();

  return (
    <Box sx={{ height: '120vh',}} className={classes.root}>
      {/* <Typography variant="body1" className={classes.missionTag}>
        Our Mission
      </Typography> */}
      
      <Box className={classes.headingContainer}>
        <Typography variant="h1" className={`${classes.headingLine} ${classes.whiteText}`}>
           <span className={classes.orangeText}>Why Join?</span>
        </Typography>
        
        <Typography variant="h1" className={`${classes.headingLine} ${classes.whiteText}`}>
        Are you Starting a business or Looking for a 
        <br />
         Co-founder 
        </Typography>
        <br />
        <br />
        <br />
        <Typography variant="h1" className={`${classes.headingLine} ${classes.whiteText}`}>
        Are you Building an MVP/Prototype or Looking for Venture 
        <br />
        Builder?
        </Typography>
        <br />
        <br />
        <br />
        <Typography variant="h1" className={`${classes.headingLine} ${classes.whiteText}`}>
        Are you Raising Investment or Learning how to bootstrap 
        <br />
        effectively?
        </Typography>

        {/* <Typography variant="h1" className={`${classes.headingLine} ${classes.whiteText}`}>
          AI <span className={classes.orangeText}>Automation</span><span className={classes.periodText}>.</span>
        </Typography> */}
      </Box>
      
      <Typography variant="body1" className={classes.description}>
        First impressions matter. That's why our mission is to create clean, enduring 
        designs that elevate. First impressions matter. That's why our mission.
      </Typography>
      
      <Button 
        // variant="outlined" 
        className={classes.callButton}
        endIcon={<ArrowOutwardIcon className={classes.buttonIcon} />}
        disableRipple
      >
        Book A Call
      </Button>
      
      <KeyboardArrowDownIcon className={classes.arrowDown} />
    </Box>
  );
}

export default MissionSection;