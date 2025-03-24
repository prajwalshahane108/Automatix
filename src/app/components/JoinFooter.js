// components/FooterSection.js
import React, { useEffect } from "react";
import { Box, Typography, Button, Container, Link } from "@mui/material";
import { makeStyles } from "@mui/styles";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

// Create motion components
const MotionBox = motion(Box);
const MotionTypography = motion(Typography);
const MotionButton = motion(Button);
const MotionLink = motion(Link);
const MotionContainer = motion(Container);

const useStyles = makeStyles(() => ({
  boot: {
    backgroundColor: "#000",
    width: "auto",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "60px 20px",
    position: "relative",
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
  heading1: {
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
}));

function FooterSection() {
  const classes = useStyles();
  
  // Animation controls
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });
  
  // Animate when section comes into view
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const logoVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const titleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        delay: 0.2,
      },
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
        delay: 0.6,
      },
    },
    hover: {
      scale: 1.05,
      backgroundColor: "rgba(255, 158, 44, 0.1)",
      transition: { duration: 0.3 }
    },
    tap: {
      scale: 0.95,
    },
  };

  const linkVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
        delay: 0.7 + (i * 0.05),
      },
    }),
    hover: {
      color: "white",
      y: -2,
      transition: { duration: 0.2 }
    },
  };

  const copyrightVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        delay: 1,
      },
    },
  };

  const navLinks = [
    { name: "Why Us" },
    { name: "Mission" },
    { name: "Works" },
    { name: "Services" },
    { name: "Contact" },
  ];

  return (
    <Box className={classes.boot}>
      <MotionBox 
        className={classes.root}
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={containerVariants}
      >
        <MotionContainer 
          className={classes.container}
          variants={containerVariants}
        >
          <MotionBox 
            sx={{ mb: 7, mt: 1 }} 
            className={classes.heading1}
            variants={logoVariants}
          >
            <motion.img
              objectFit="contain"
              src="https://framerusercontent.com/images/UDSUes4B94lfLzzemyBwC6LQeEA.png?scale-down-to=1024"
              alt="MyFounders.Club"
              width={400}
              height={50}
              priority
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            />
          </MotionBox>
          
          <MotionTypography 
            variant="h1" 
            className={classes.title}
            variants={titleVariants}
          >
            Building the Future
            <br />
            in Saudi Arabia
          </MotionTypography>

          <MotionTypography 
            variant="body1" 
            className={classes.subtitle}
            variants={itemVariants}
          >
            Join ambitious founders, partners, and investors to break new
            ground, expand into emerging markets, and build game-changing
            ventures across borders in Saudi Arabia.
          </MotionTypography>

          <MotionButton
            variant="outlined"
            className={classes.callButton}
            endIcon={<ArrowOutwardIcon className={classes.buttonIcon} />}
            disableRipple
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
          >
            Explore
          </MotionButton>

          <MotionBox 
            className={classes.navigation}
            variants={containerVariants}
          >
            {navLinks.map((link, index) => (
              <MotionLink
                key={index}
                href={link.href}
                className={classes.navLink}
                underline="none"
                custom={index}
                variants={linkVariants}
                whileHover="hover"
              >
                {link.name}
              </MotionLink>
            ))}
          </MotionBox>

          <MotionTypography 
            variant="body2" 
            className={classes.copyright}
            variants={copyrightVariants}
          >
            Copyright MyFoundersClub .Kingdom of Saudi Arabia, 2025. All right
            reserved.
          </MotionTypography>
        </MotionContainer>
      </MotionBox>
    </Box>
  );
}

export default FooterSection;