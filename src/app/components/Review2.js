// components/TeamSection.js
import React from 'react';
import { Box, Typography, Grid, Container } from '@mui/material';
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
  },
  sectionTag: {
    color: 'rgba(255, 255, 255, 0.5)',

    backgroundColor: 'rgba(0, 0, 0, 0.05)',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    borderRadius: '50px',
    padding: '8px 20px',
    fontSize: '14px',
    marginBottom: '30px',
    display: 'inline-block',
  },
  sectionTitle: {
    color: 'white',
    fontSize: '2.8rem',
    fontWeight: '400',
    textAlign: 'center',
    marginBottom: '60px',
    '@media (max-width: 768px)': {
      fontSize: '2.5rem',
    },
  },
  teamContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '20px',
    maxWidth: '1200px',
    width: '100%',
  },
  teamMemberCard: {
    width: '100%',
    maxWidth: '270px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    '@media (max-width: 600px)': {
      maxWidth: '100%',
    },
  },
  teamMemberImage: {
    width: '100%',
    height: '340px',
    borderRadius: '16px',
    overflow: 'hidden',
    marginBottom: '20px',
    backgroundColor: '#222', // Placeholder background
    '& img': {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
    },
  },
  teamMemberName: {
    color: 'white',
    fontSize: '1.5rem',
    fontWeight: '600',
    marginBottom: '5px',
    textAlign: 'center',
  },
  teamMemberRole: {
    color: 'rgba(255, 255, 255, 0.6)',
    fontSize: '1rem',
    textAlign: 'center',
  },
}));

function TeamSection() {
  const classes = useStyles();

  const teamMembers = [
    {
      name: 'Alif Kepanjen',
      role: 'CEO',
      image: '/firstb.png',
    },
    {
      name: 'Jennifer Sukun',
      role: 'Business Development',
      image: '/secb.png',
    },
    {
      name: 'David Pakis',
      role: 'Tech Officer',
      image: '/threeb.png',
    },
    {
      name: 'Radu Klojen',
      role: 'Infrastructure',
      image: '/fourb.png',
    },
  ];

  return (
    <Box className={classes.root}>
      <Typography variant="body1" className={classes.sectionTag}>
        Our Creative Minds
      </Typography>
      
      <Typography variant="h2" className={classes.sectionTitle}>
        The People Behind The Magic
      </Typography>
      
      <Box className={classes.teamContainer}>
        {teamMembers.map((member, index) => (
          <Box key={index} className={classes.teamMemberCard}>
            <Box className={classes.teamMemberImage}>
              {/* Note: In production, replace with actual images */}
              <Box
                component="img"
                src={member.image}
                alt={member.name}
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = 'https://via.placeholder.com/270x340?text=Team+Member';
                }}
              />
            </Box>
            <Typography variant="h5" className={classes.teamMemberName}>
              {member.name}
            </Typography>
            <Typography variant="body1" className={classes.teamMemberRole}>
              {member.role}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
}

export default TeamSection;