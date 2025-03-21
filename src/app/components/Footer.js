// components/FooterSection.js
import React from "react";
import { Box, Typography, Button, Container, Link } from "@mui/material";
import { makeStyles } from "@mui/styles";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";

const useStyles = makeStyles(() => ({
  boot: {
    backgroundColor: "#000",
    // backgroundSize: "20px 20px",
    // minHeight: "100vh",
    width: "auto",
    display: "flex",
    // flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "60px 20px",
    position: "relative",
    border: "1px solid rgba(255, 255, 255, 0.1)",
    boxSizing: "border-box",
    overflow: "hidden",
  },
  root: {
    backgroundColor: "black",
    backgroundImage:
      "radial-gradient(circle, rgba(75, 75, 75, 0.6) 1px, transparent 1.5px)",
    backgroundSize: "10px 10px",
    minHeight: "100vh",
    width: "1240px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "60px 20px",
    position: "relative",
    borderRadius: "20px",
    border: "1px solid rgba(255, 255, 255, 0.1)",
    margin: "20px",
    boxSizing: "border-box",
    overflow: "hidden",
  },
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    maxWidth: "800px",
  },
  brandName: {
    color: "#E87811",
    fontSize: "1.2rem",
    fontWeight: "500",
    marginBottom: "20px",
  },
  title: {
    color: "white",
    fontSize: "4rem",
    fontWeight: "400",
    lineHeight: 1.2,
    marginBottom: "20px",
    "@media (max-width: 768px)": {
      fontSize: "3rem",
    },
    "@media (max-width: 480px)": {
      fontSize: "2.5rem",
    },
  },
  subtitle: {
    color: "rgba(255, 255, 255, 0.7)",
    fontSize: "1.1rem",
    marginBottom: "40px",
    maxWidth: "500px",
    lineHeight: 1.6,
  },
  callButton: {
    color: "#E87811",
    border: "1px solid #E87811",
    borderRadius: "50px",
    padding: "10px 24px",
    fontSize: "1rem",
    textTransform: "none",
    marginBottom: "80px",
    "&:hover": {
      backgroundColor: "rgba(255, 158, 44, 0.1)",
    },
  },
  buttonIcon: {
    marginLeft: "8px",
    fontSize: "18px",
  },
  navigation: {
    display: "flex",
    justifyContent: "center",
    gap: "30px",
    marginBottom: "25px",
    flexWrap: "wrap",
  },
  navLink: {
    color: "rgba(255, 255, 255, 0.7)",
    fontSize: "1rem",
    textDecoration: "none",
    "&:hover": {
      color: "white",
    },
  },
  copyright: {
    color: "rgba(255, 255, 255, 0.5)",
    fontSize: "1.1rem",
  },
}));

function FooterSection() {
  const classes = useStyles();

  const navLinks = [
    { name: "Why Us", href: "/why-us" },
    { name: "Mission", href: "/mission" },
    { name: "Works", href: "/works" },
    { name: "Services", href: "/services" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <Box className={classes.boot}>
      <Box className={classes.root}>
        <Container className={classes.container}>
          {/* <Typography variant="h6" className={classes.brandName}>
            Automatix
          </Typography> */}
          <Box  sx={{mb: 7, mt: 1}} className={classes.heading1}>
            <img
              objectFit="contain"
              src="https://framerusercontent.com/images/UDSUes4B94lfLzzemyBwC6LQeEA.png?scale-down-to=1024"
              alt="MyFounders.Club"
              width={400}
              height={50}
              priority
            />
          </Box>
          <Typography variant="h1" className={classes.title}>
            Building the Future
            <br />
            in Saudi Arabia
          </Typography>

          <Typography variant="body1" className={classes.subtitle}>
          Join ambitious founders, partners, and investors to break new ground, expand into emerging markets, and build game-changing ventures across borders in Saudi Arabia.
          </Typography>

          <Button
            variant="outlined"
            className={classes.callButton}
            endIcon={<ArrowOutwardIcon className={classes.buttonIcon} />}
            disableRipple
          >
            Explore
          </Button>

          <Box className={classes.navigation}>
            {navLinks.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className={classes.navLink}
                underline="none"
              >
                {link.name}
              </Link>
            ))}
          </Box>

          <Typography variant="body2" className={classes.copyright}>
          Copyright MyFoundersClub .Kingdom of Saudi Arabia, 2025.  All right reserved.
          </Typography>
        </Container>
      </Box>
    </Box>
  );
}

export default FooterSection;
