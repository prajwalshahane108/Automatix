'use client';

import React, { useEffect } from "react";
import { Box, Typography, Button, Container, Link } from "@mui/material";
import { styled } from "@mui/material/styles";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

// Create motion components
const MotionBox = motion(Box);
const MotionTypography = motion(Typography);
const MotionButton = motion(Button);
const MotionLink = motion(Link);
const MotionContainer = motion(Container);

// Replace makeStyles with styled components
const BootBox = styled(Box)({
  backgroundColor: "#000",
  width: "auto",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "60px 20px",
  position: "relative",
  overflow: "hidden",
});

const RootBox = styled(MotionBox)({
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
});

const StyledContainer = styled(MotionContainer)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  textAlign: "center",
  maxWidth: "800px",
});

const BrandName = styled(MotionTypography)({
  color: "#E87811",
  fontSize: "1.2rem",
  fontWeight: "500",
  marginBottom: "20px",
});

const Title = styled(MotionTypography)(({ theme }) => ({
  color: "white",
  fontSize: "4rem",
  fontWeight: "400",
  lineHeight: 1.2,
  marginBottom: "20px",
  [theme.breakpoints.down("md")]: {
    fontSize: "3rem",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "2.5rem",
  },
}));

const Subtitle = styled(MotionTypography)({
  color: "#919191",
  fontSize: "1.1rem",
  marginBottom: "40px",
  maxWidth: "400px",
  lineHeight: 1.6,
});

const CallButton = styled(MotionButton)({
  color: "#E87811",
  border: "1px solid #000",
  borderRadius: "50px",
  padding: "10px 24px",
  fontWeight: "300",
  fontSize: "1.5rem",
  textTransform: "none",
  marginBottom: "80px",
  "&:hover": {
    backgroundColor: "rgba(255, 158, 44, 0.1)",
  },
});

const ButtonIcon = styled(ArrowOutwardIcon)({
  marginLeft: "8px",
  fontSize: "18px",
});

const Navigation = styled(MotionBox)({
  display: "flex",
  justifyContent: "center",
  gap: "30px",
  marginBottom: "25px",
  flexWrap: "wrap",
});

const NavLink = styled(MotionLink)({
  color: "#919191",
  fontSize: "1.2rem",
  textDecoration: "none",
  "&:hover": {
    color: "white",
  },
});

const Copyright = styled(MotionTypography)({
  color: "rgba(255, 255, 255, 0.5)",
  fontSize: "1.1rem",
});

const Heading1 = styled(MotionBox)({
  position: "relative",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

function FooterSection() {
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
    <BootBox>
      <RootBox 
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={containerVariants}
      >
        <StyledContainer variants={containerVariants}>
          <Heading1
            sx={{ mb: 7, mt: 4 }}
            variants={logoVariants}
          >
            <motion.img
              src="https://framerusercontent.com/images/UDSUes4B94lfLzzemyBwC6LQeEA.png?scale-down-to=1024"
              alt="MyFounders.Club"
              width={180}
              height={30}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              style={{ objectFit: "contain" }}
            />
          </Heading1>
          
          <Title
            variant="h1"
            variants={titleVariants}
          >
           Let's Turn Your
            <br />
            Dream Into Reality
          </Title>

          <Subtitle
            variant="body1"
            variants={itemVariants}
          >
           We bring your vision to life with creativity<br/> and precision. Let's make it happen.
          </Subtitle>

          <CallButton
            variant="outlined"
            endIcon={<ButtonIcon />}
            disableRipple
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
          >
            Book A Call
          </CallButton>

          <Navigation variants={containerVariants}>
            {navLinks.map((link, index) => (
              <NavLink
                key={index}
                // href={link.href}
                underline="none"
                custom={index}
                variants={linkVariants}
                whileHover="hover"
              >
                {link.name}
              </NavLink>
            ))}
          </Navigation>

          <Copyright
            variant="body2"
            variants={copyrightVariants}
          >
            Copyright Automatix. All right reserved.
          </Copyright>
        </StyledContainer>
      </RootBox>
    </BootBox>
  );
}

export default FooterSection;