// components/TeamSection.js
import React from "react";
import { Box, Typography, Grid, Container, useMediaQuery, useTheme } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "black",
    backgroundImage:
      "radial-gradient(circle, rgba(75, 75, 75, 0.1) 1px, transparent 1px)",
    backgroundSize: "20px 20px",
    minHeight: "100vh",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "60px 20px",
    '@media (max-width: 960px)': {
      padding: "50px 15px",
    },
    '@media (max-width: 600px)': {
      padding: "40px 15px",
    },
  },
  contentContainer: {
    width: "100%",
    maxWidth: "1200px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  sectionTag: {
    color: "rgba(255, 255, 255, 0.5)",
    backgroundColor: "rgba(0, 0, 0, 0.05)",
    border: "1.5px solid rgba(255, 255, 255, 0.77)",
    borderRadius: "50px",
    padding: "4px 20px",
    fontSize: "14px",
    marginBottom: "30px",
    display: "inline-block",
    '@media (max-width: 768px)': {
      fontSize: "13px",
      padding: "4px 16px",
      marginBottom: "25px",
    },
    '@media (max-width: 480px)': {
      fontSize: "12px",
      padding: "3px 14px",
      marginBottom: "20px",
    },
  },
  sectionTitle: {
    color: "#DEDEDE",
    fontSize: "2.8rem",
    fontWeight: "600",
    textAlign: "center",
    marginBottom: "90px",
    '@media (max-width: 960px)': {
      fontSize: "2.6rem",
      marginBottom: "70px",
    },
    '@media (max-width: 768px)': {
      fontSize: "2.2rem",
      marginBottom: "50px",
    },
    '@media (max-width: 480px)': {
      fontSize: "1.8rem",
      marginBottom: "40px",
      lineHeight: 1.3,
    },
  },
  sectionTitleB: {
    color: "#AFAFAF",
    fontSize: "1.1rem",
    fontWeight: "400",
    textAlign: "center",
    marginBottom: "30px",
    maxWidth: "800px",
    '@media (max-width: 768px)': {
      fontSize: "1rem",
      marginBottom: "25px",
    },
    '@media (max-width: 480px)': {
      fontSize: "0.95rem",
      marginBottom: "20px",
    },
  },
  teamContainer: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "30px",
    width: "100%",
    '@media (max-width: 960px)': {
      gap: "25px",
    },
    '@media (max-width: 480px)': {
      gap: "35px",
    },
  },
  teamMemberCard: {
    width: "calc(25% - 30px)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    transition: "transform 0.3s ease",
    '&:hover': {
      transform: "translateY(-5px)",
    },
    '@media (max-width: 1100px)': {
      width: "calc(33.33% - 25px)",
    },
    '@media (max-width: 860px)': {
      width: "calc(50% - 15px)",
    },
    '@media (max-width: 480px)': {
      width: "100%",
      maxWidth: "320px",
    },
  },
  teamMemberImage: {
    width: "100%",
    height: "340px",
    borderRadius: "16px",
    overflow: "hidden",
    marginBottom: "20px",
    backgroundColor: "#222", // Placeholder background
    boxShadow: "0 10px 30px rgba(0, 0, 0, 0.3)",
    "& img": {
      width: "100%",
      height: "100%",
      objectFit: "cover",
      transition: "transform 0.5s ease",
      "&:hover": {
        transform: "scale(1.05)",
      },
    },
    '@media (max-width: 960px)': {
      height: "320px",
      marginBottom: "15px",
    },
    '@media (max-width: 768px)': {
      height: "300px",
    },
    '@media (max-width: 480px)': {
      height: "350px",
      borderRadius: "12px",
    },
  },
  teamMemberName: {
    color: "#FF5B23",
    fontSize: "1.2rem",
    fontWeight: "600",
    marginBottom: "5px",
    textAlign: "center",
    '@media (max-width: 768px)': {
      fontSize: "1.1rem",
    },
    '@media (max-width: 480px)': {
      fontSize: "1.15rem",
    },
  },
  teamMemberRole: {
    color: "rgba(255, 255, 255, 0.6)",
    fontSize: "1rem",
    textAlign: "center",
    '@media (max-width: 768px)': {
      fontSize: "0.95rem",
    },
    '@media (max-width: 480px)': {
      fontSize: "0.9rem",
    },
  },
}));

function TeamSection() {
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.down('md'));
  const isLargeTablet = useMediaQuery('(max-width:1100px)');

  const teamMembers = [
    {
      name: "Haya",
      role: "Chairwoman & Co-Founder",
      image: "https://framerusercontent.com/images/ECp9gdFuk3dUagZzDSRN8LTpBdw.jpeg",
    },
    {
      name: "Katerina Hayes",
      role: "CEO & Co-Founder",
      image: "https://framerusercontent.com/images/sEqN2EnA26uT8C0qz2LeO6RQI.png",
    },
    {
      name: "Abdul Rasheed Mohammad",
      role: "Chief Growth Officer",
      image: "https://framerusercontent.com/images/2gN8IoNAOZFMzwH3PrivG3JS4A.jpg",
    },
    {
      name: "Radu Klojen",
      role: "CTO",
      image: "/fourb.png",
    },
  ];

  return (
    <Box className={classes.root}>
      <Container maxWidth="lg" className={classes.contentContainer}>
        <Typography variant="body1" className={classes.sectionTag}>
          Our Team
        </Typography>

        <Typography variant="h2" className={classes.sectionTitle}>
          The People Behind the Community
        </Typography>

        {/* This commented section is kept as it was in the original code */}
        {/* <Typography variant="h2" className={classes.sectionTitleB}>
          Meet our talented team turning ideas into exceptional results.
        </Typography> */}

        <Box className={classes.teamContainer}>
          {teamMembers.map((member, index) => (
            <Box key={index} className={classes.teamMemberCard}>
              <Box className={classes.teamMemberImage}>
                <Box
                  component="img"
                  src={member.image}
                  alt={member.name}
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src =
                      "https://via.placeholder.com/270x340?text=Team+Member";
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
      </Container>
    </Box>
  );
}

export default TeamSection;