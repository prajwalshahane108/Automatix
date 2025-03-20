// components/BenefitsSection.js
import React from 'react';
import { Box, Typography, Button, Grid, Container } from '@mui/material';
import { makeStyles } from '@mui/styles';
import PsychologyIcon from '@mui/icons-material/Psychology';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import GroupsIcon from '@mui/icons-material/Groups';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

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
  },
  sectionTag: {
    color: 'white',
    backgroundColor: 'rgb(0, 0, 0)',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    borderRadius: '50px',
    padding: '5px 20px',
    fontSize: '14px',
    marginBottom: '40px',
    display: 'inline-block',
  },
  sectionTitle: {
    color: 'white',
    fontSize: '3.5rem',
    fontWeight: '400',
    textAlign: 'center',
    marginBottom: '10px',
    lineHeight: 1.2,
    maxWidth: '800px',
    '@media (max-width: 768px)': {
      fontSize: '2.5rem',
    },
  },
  sectionSubtitle: {
    color: 'rgba(255, 255, 255, 0.7)',
    fontSize: '1.2rem',
    textAlign: 'center',
    marginBottom: '60px',
    maxWidth: '600px',
  },
  cardContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '20px',
    marginBottom: '60px',
    width: '100%',
    maxWidth: '1200px',
  },
  card: {
    backgroundColor: '#111111',
    borderRadius: '20px',
    padding: '24px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '350px',
    minHeight: '380px',
    position: 'relative',
    overflow: 'hidden',
  },
  cardInner: {
    backgroundColor: '#0A0A0A',
    borderRadius: '16px',
    padding: '10px',  
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    height: '20px', // Decreased height
    flex: 1,
    marginBottom: '20px',
    overflow: 'hidden',
    backgroundImage: 'linear-gradient(to bottom right, rgba(255, 255, 255, 0.05) 1px, transparent 1px)',
    backgroundSize: '20px 20px',
},  

  iconContainer: {
    backgroundColor: '#FF9E2C',
    borderRadius: '50%',
    width: '80px',
    height: '80px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '30px',
    marginBottom: '30px',
  },
  icon: {
    color: 'white',
    fontSize: '2rem',
  },
  cardTitle: {
    color: 'white',
    fontSize: '1.5rem',
    fontWeight: '600',
    marginBottom: '16px',
    textAlign: 'center',
  },
  cardDescription: {
    color: 'rgba(255, 255, 255, 0.6)',
    fontSize: '1rem',
    lineHeight: 1.6,
    textAlign: 'center',
    padding: '0 10px',
  },
  pricingButton: {
    backgroundColor: '#FF9E2C',
    color: 'white',
    borderRadius: '10px',
    padding: '12px 28px',
    fontSize: '1rem',
    fontWeight: '500',
    textTransform: 'none',
    '&:hover': {
      backgroundColor: '#E08E25',
    },
  },
  buttonIcon: {
    marginLeft: '5px',
    fontSize: '20px',
  },
}));

function BenefitsSection() {
  const classes = useStyles();

  const benefits = [
    {
      title: 'Innovative Approach',
      description: 'Look for works that reflect a unique character and differentiate in a crowded marketplace.',
      icon: <PsychologyIcon className={classes.icon} />,
    },
    {
      title: 'Seamless Experience',
      description: 'A seamless user experience across all devices, ensuring every interaction connects with the user.',
      icon: <ThumbUpAltIcon className={classes.icon} />,
    },
    {
      title: 'Ongoing Partnership',
      description: 'Find a new partner easily, not just providers, who offer ongoing support even after the project ends.',
      icon: <GroupsIcon className={classes.icon} />,
    },
  ];

  return (
    <Box className={classes.root}>
      <Typography variant="body1" className={classes.sectionTag}>
        Why Us
      </Typography>
      
      <Typography variant="h2" className={classes.sectionTitle}>
        Experience The Benefits
        <br />
        Of Our Expertise
      </Typography>
      
      <Typography variant="body1" className={classes.sectionSubtitle}>
        That drives impactful gain powerful results
      </Typography>
      
      <Box className={classes.cardContainer}>
        {benefits.map((benefit, index) => (
          <Box key={index} className={classes.card}>
            <Box className={classes.cardInner}>
              <Box className={classes.iconContainer}>
                {benefit.icon}
              </Box>
            </Box>
            <Typography variant="h5" className={classes.cardTitle}>
              {benefit.title}
            </Typography>
            <Typography variant="body2" className={classes.cardDescription}>
              {benefit.description}
            </Typography>
          </Box>
        ))}
      </Box>
      
      <Button 
        variant="contained" 
        className={classes.pricingButton}
        endIcon={<KeyboardArrowRightIcon className={classes.buttonIcon} />}
        disableElevation
      >
        See Pricing
      </Button>
    </Box>
  );
}

export default BenefitsSection;