// components/WorksSection.js
import React, { useState } from 'react';
import { Box, Typography, Grid, Divider, Container, useMediaQuery, useTheme } from '@mui/material';
import { makeStyles } from '@mui/styles';

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
    padding: '60px 20px',
    '@media (max-width: 900px)': {
      padding: '50px 15px',
    },
    '@media (max-width: 600px)': {
      padding: '40px 12px',
    },
  },
  sectionTag: {
    color: 'white',
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    borderRadius: '50px',
    padding: '5px 20px',
    fontSize: '14px',
    marginBottom: '30px',
    display: 'inline-block',
    '@media (max-width: 768px)': {
      padding: '4px 16px',
      fontSize: '13px',
      marginBottom: '25px',
    },
    '@media (max-width: 480px)': {
      padding: '4px 14px',
      fontSize: '12px',
      marginBottom: '20px',
    },
  },
  sectionTitle: {
    color: 'white',
    fontSize: '3.5rem',
    fontWeight: '400',
    textAlign: 'center',
    marginBottom: '60px',
    '@media (max-width: 900px)': {
      fontSize: '3rem',
      marginBottom: '50px',
    },
    '@media (max-width: 768px)': {
      fontSize: '2.5rem',
      marginBottom: '40px',
    },
    '@media (max-width: 480px)': {
      fontSize: '2rem',
      marginBottom: '30px',
    },
  },
  contentContainer: {
    display: 'flex',
    width: '100%',
    maxWidth: '1200px',
    gap: '40px',
    marginBottom: '80px',
    '@media (max-width: 960px)': {
      flexDirection: 'column',
      gap: '30px',
      marginBottom: '60px',
    },
    '@media (max-width: 600px)': {
      gap: '25px',
      marginBottom: '40px',
    },
  },
  leftPanel: {
    width: '45%',
    '@media (max-width: 960px)': {
      width: '100%',
      order: 2, // Move work items below the image on mobile
    },
  },
  rightPanel: {
    width: '55%',
    '@media (max-width: 960px)': {
      width: '100%',
      order: 1, // Show image first on mobile
    },
  },
  workItem: {
    padding: '30px 0',
    borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
    '&:first-child': {
      paddingTop: 0,
    },
    '&:last-child': {
      borderBottom: 'none',
    },
    '@media (max-width: 768px)': {
      padding: '25px 0',
    },
    '@media (max-width: 480px)': {
      padding: '20px 0',
    },
  },
  companyName: {
    color: 'white',
    fontSize: '1.8rem',
    fontWeight: '600',
    marginBottom: '10px',
    '@media (max-width: 768px)': {
      fontSize: '1.6rem',
      marginBottom: '8px',
    },
    '@media (max-width: 480px)': {
      fontSize: '1.4rem',
      marginBottom: '6px',
    },
  },
  companyDescription: {
    color: 'rgba(255, 255, 255, 0.7)',
    fontSize: '1rem',
    lineHeight: 1.6,
    '@media (max-width: 480px)': {
      fontSize: '0.95rem',
      lineHeight: 1.5,
    },
  },
  caseResult: {
    color: 'rgba(255, 255, 255, 0.7)',
    fontSize: '1.1rem',
    fontWeight: '500',
    '@media (max-width: 480px)': {
      fontSize: '1rem',
    },
  },
  imageContainer: {
    width: '100%',
    height: '100%',
    borderRadius: '20px',
    overflow: 'hidden',
    backgroundColor: '#1A1A1A',
    padding: '20px',
    '@media (max-width: 600px)': {
      padding: '15px',
      borderRadius: '15px',
    },
  },
  innerImageContainer: {
    width: '100%',
    height: '100%',
    backgroundColor: '#111',
    borderRadius: '16px',
    overflow: 'hidden',
    position: 'relative',
    '@media (max-width: 600px)': {
      borderRadius: '12px',
    },
  },
  projectImage: {
    width: '100%',
    height: 'auto',
    objectFit: 'cover',
    display: 'block',
    '@media (max-width: 960px)': {
      height: '350px',
    },
    '@media (max-width: 600px)': {
      height: '300px',
    },
    '@media (max-width: 480px)': {
      height: '250px',
    },
  },
  logoOverlay: {
    position: 'absolute',
    bottom: '20px',
    left: '20px',
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    '@media (max-width: 600px)': {
      bottom: '15px',
      left: '15px',
    },
  },
  graphoLogo: {
    width: '32px',
    height: '32px',
    backgroundColor: 'transparent',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    '@media (max-width: 480px)': {
      width: '28px',
      height: '28px',
    },
  },
  graphoText: {
    color: 'white',
    fontSize: '1.2rem',
    fontWeight: '500',
    '@media (max-width: 480px)': {
      fontSize: '1rem',
    },
  },
  statsBar: {
    position: 'absolute',
    bottom: '20px',
    right: '20px',
    display: 'flex',
    alignItems: 'flex-end',
    gap: '15px',
    height: '80px',
    '@media (max-width: 768px)': {
      height: '70px',
      gap: '10px',
      right: '15px',
      bottom: '15px',
    },
    '@media (max-width: 480px)': {
      height: '60px',
      gap: '8px',
    },
  },
  barItem: {
    width: '30px',
    backgroundColor: '#666',
    borderTopLeftRadius: '4px',
    borderTopRightRadius: '4px',
    '@media (max-width: 768px)': {
      width: '25px',
    },
    '@media (max-width: 480px)': {
      width: '18px',
    },
  },
  barHighlight: {
    backgroundColor: '#E87811',
  },
  percentLabel: {
    position: 'absolute',
    top: '30px',
    right: '30px',
    backgroundColor: '#E87811',
    color: 'white',
    padding: '5px 10px',
    borderRadius: '20px',
    fontSize: '0.9rem',
    fontWeight: '600',
    '@media (max-width: 600px)': {
      top: '20px',
      right: '20px',
      padding: '4px 8px',
      fontSize: '0.8rem',
    },
  },
  statsContainer: {
    display: 'flex',
    width: '100%',
    maxWidth: '1200px',
    justifyContent: 'space-between',
    paddingTop: '40px',
    flexWrap: 'wrap',
    '@media (max-width: 768px)': {
      paddingTop: '30px',
    },
    '@media (max-width: 600px)': {
      paddingTop: '25px',
    },
  },
  statItem: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    flex: 1,
    padding: '0 20px',
    borderRight: '1px solid rgba(255, 255, 255, 0.1)',
    '&:last-child': {
      borderRight: 'none',
    },
    '@media (max-width: 768px)': {
      padding: '0 15px',
      minWidth: '150px',
      marginBottom: '25px',
    },
    '@media (max-width: 600px)': {
      minWidth: 'calc(50% - 30px)',
      borderRight: 'none',
      padding: '0 10px',
      '&:nth-child(odd)': {
        borderRight: '1px solid rgba(255, 255, 255, 0.1)',
      },
      '&:nth-child(3), &:nth-child(4)': {
        marginBottom: 0,
      },
    },
  },
  statValue: {
    color: 'white',
    fontSize: '3.5rem',
    fontWeight: '400',
    marginBottom: '10px',
    '@media (max-width: 900px)': {
      fontSize: '3rem',
    },
    '@media (max-width: 768px)': {
      fontSize: '2.5rem',
      marginBottom: '8px',
    },
    '@media (max-width: 480px)': {
      fontSize: '2.2rem',
      marginBottom: '5px',
    },
  },
  statLabel: {
    color: 'rgba(255, 255, 255, 0.7)',
    fontSize: '1rem',
    '@media (max-width: 480px)': {
      fontSize: '0.9rem',
    },
  },
}));

function WorksSection() {
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.down('md'));

  const workItems = [
    {
      name: 'Grapho AI',
      description: "That's Why We Leverage AI to Create Impactful, Lasting Experiences that Engage, and Transform Every Interaction.",
      image: '/grapho.png',
      percentage: 80
    },
    {
      name: 'VectraOps',
      result: '34% increase in online sales.',
    },
    {
      name: 'Signum',
      result: '47% increase in new customers.',
    },
  ];

  const stats = [
    { value: '150k+', label: 'Active Users' },
    { value: '4.9', label: 'Rating out of 5' },
    { value: '99k+', label: 'Positive Reviews' },
    { value: '85k+', label: 'Users Satisfied' },
  ];

  // Placeholder for Grapho logo - replace with actual SVG or image
  const GraphoLogoPlaceholder = () => (
    <Box className={classes.graphoLogo}>
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M14 28C21.732 28 28 21.732 28 14C28 6.26801 21.732 0 14 0C6.26801 0 0 6.26801 0 14C0 21.732 6.26801 28 14 28Z" fill="transparent" stroke="white" strokeWidth="3"/>
        <path d="M8 14C8 10.686 10.686 8 14 8C17.314 8 20 10.686 20 14C20 17.314 17.314 20 14 20" stroke="white" strokeWidth="3" strokeLinecap="round"/>
      </svg>
    </Box>
  );

  return (
    <Box className={classes.root}>
      <Container maxWidth="lg" sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Typography variant="body1" className={classes.sectionTag}>
          Work That Make Us Proud
        </Typography>
        
        <Typography variant="h2" className={classes.sectionTitle}>
          Recent Works, Notable Impact
        </Typography>
        
        <Box className={classes.contentContainer}>
          <Box className={classes.leftPanel}>
            {workItems.map((item, index) => (
              <Box key={index} className={classes.workItem}>
                <Typography variant="h4" className={classes.companyName}>
                  {item.name}
                </Typography>
                {item.description && (
                  <Typography variant="body1" className={classes.companyDescription}>
                    {item.description}
                  </Typography>
                )}
                {item.result && (
                  <Typography variant="body2" className={classes.caseResult}>
                    {item.result}
                  </Typography>
                )}
              </Box>
            ))}
          </Box>
          
          <Box className={classes.rightPanel}>
            <Box className={classes.imageContainer}>
              <Box className={classes.innerImageContainer}>
                {/* Use an actual image in production */}
                <Box 
                  component="img" 
                  src="/grapho.png" // Replace with actual image path
                  alt="Team working together"
                  className={classes.projectImage}
                  sx={{
                    filter: 'brightness(0.8)',
                    // If no actual image is available, use a background color
                    backgroundColor: '#222',
                    height: isMobile ? '250px' : isTablet ? '350px' : '400px'
                  }}
                />
                
                <Box className={classes.statsBar}>
                  <Box className={classes.barItem} sx={{ height: '30%' }}></Box>
                  <Box className={classes.barItem} sx={{ height: '60%' }}></Box>
                  <Box className={`${classes.barItem} ${classes.barHighlight}`} sx={{ height: '80%' }}></Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
        
        <Box className={classes.statsContainer}>
          {stats.map((stat, index) => (
            <Box key={index} className={classes.statItem}>
              <Typography variant="h3" className={classes.statValue}>
                {stat.value}
              </Typography>
              <Typography variant="body2" className={classes.statLabel}>
                {stat.label}
              </Typography>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
}

export default WorksSection;