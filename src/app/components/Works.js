// components/MissionSection.js
import React, { useEffect } from 'react';
import { Box, Typography, Button, Container, useMediaQuery, useTheme } from '@mui/material';
import { makeStyles } from '@mui/styles';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

// Create motion components
const MotionBox = motion(Box);
const MotionTypography = motion(Typography);
const MotionButton = motion(Button);

// Word-by-word animation component
const AnimatedWords = ({ text, className, delay = 0, duration = 0.05, staggerChildren = 0.02 }) => {
  // Split the text into words
  const words = text.split(' ');
  
  // Animation configuration
  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { 
        staggerChildren: staggerChildren,
        delayChildren: delay,
      },
    }),
  };
  
  const child = {
    hidden: { 
      opacity: 0,
      y: 20,
      filter: "blur(4px)"
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 200,
        duration: duration
      },
    },
  };
  
  return (
    <motion.div
      style={{ display: "inline-block", overflow: "hidden", }}
      sx={{pt: 2}}
      variants={container}
      initial="hidden"
      animate="visible"
      className={className}
    >
      {words.map((word, index) => (
        <motion.span
          key={index}
          variants={child}
          style={{ 
            display: "inline-block",
            marginRight: "8px",
            marginBottom: "5px",
            whiteSpace: "nowrap"
          }}
        >
          {word}
        </motion.span>
      ))}
    </motion.div>
  );
};

// Custom Arrow Component
const AnimatedArrow = () => {
  return (
    <motion.svg
      width="140"
      height="260"
      viewBox="0 0 40 20"
      initial={{ opacity: 0 }}
      animate={{ 
        opacity: 1,
        y: [0, 10, 0],
      }}
      transition={{ 
        y: {
          duration: 1.5,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut"
        },
        opacity: { duration: 0.5, delay: 2.7 }
      }}
    >
      {/* Vertical line */}
      <motion.line
        x1="20"
        y1="0"
        x2="20"
        y2="40"
        stroke="#E87811"
        strokeWidth="2"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 0.8, delay: 2.8 }}
      />
      {/* Left diagonal line */}
      <motion.line
        x1="20"
        y1="40"
        x2="5"
        y2="25"
        stroke="#E87811"
        strokeWidth="2"
        initial={{ pathLength: 10 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 0.4, delay: 3.6 }}
      />
      {/* Right diagonal line */}
      <motion.line
        x1="20"
        y1="40"
        x2="35"
        y2="25"
        stroke="#E87811"
        strokeWidth="2"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 0.4, delay: 3.6 }}
      />
    </motion.svg>
  );
};

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
  arrowContainer: {
    // marginTop: '40px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    '@media (max-width: 900px)': {
      marginTop: '30px',
    },
    '@media (max-width: 600px)': {
      marginTop: '25px',
    },
  },
}));

function MissionSection() {
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.down('md'));
  const isLargeScreen = useMediaQuery(theme.breakpoints.up('lg'));
  
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.3,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { 
        duration: 0.5,
        delay: 2.2  // Delay button animation until after text
      }
    },
    hover: {
      scale: 1.05,
      transition: { duration: 0.2 }
    }
  };

  return (
    <MotionBox 
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={containerVariants}
      sx={{ height: { xs: 'auto', sm: 'auto', md: '160vh' }, minHeight: '100vh' }} 
      className={classes.root}
    >
      <Container className={classes.contentContainer}>
        <MotionBox 
          className={classes.headingContainer}
          variants={containerVariants}
        >
          <MotionTypography 
            variants={itemVariants}
            className={`${classes.headingLine} ${classes.orangeText}`}
          >
            <AnimatedWords 
              text="Why Join?" 
              delay={0.2}
              staggerChildren={0.05}
            />
          </MotionTypography>
          
          <MotionBox 
            className={classes.questionSpacing}
            variants={itemVariants}
          >
            <AnimatedWords 
              text={`Are you Starting a business or Looking for a ${!isMobile ? '': '\n'} Co-founder`}
              className={`${classes.headingLine} ${classes.whiteText}`}
              delay={0.5}
              staggerChildren={0.03}
            />
          </MotionBox>
          
          <MotionBox 
            className={classes.questionSpacing}
            variants={itemVariants}
          >
            <AnimatedWords 
              text={`Are you Building an MVP/Prototype or Looking for Venture ${!isMobile ? '' : '\n'} Builder?`}
              className={`${classes.headingLine} ${classes.whiteText}`}
              delay={1.1}
              staggerChildren={0.03}
            />
          </MotionBox>
          
          <MotionBox 
            className={classes.questionSpacing}
            variants={itemVariants}
          >
            <AnimatedWords 
              text={`Are you Raising Investment or Learning how to bootstrap ${!isMobile ? '' : '\n'} effectively?`}
              className={`${classes.headingLine} ${classes.whiteText}`}
              delay={1.7}
              staggerChildren={0.03}
            />
          </MotionBox>
        </MotionBox>
        
        <MotionTypography 
          variants={itemVariants}
          className={classes.description}
        >
          <AnimatedWords 
            text="First impressions matter. That's why our mission is to create clean, enduring designs that elevate. First impressions matter. That's why our mission."
            delay={2.0}
            staggerChildren={0.01}
          />
        </MotionTypography>
        
        <MotionButton 
          className={classes.callButton}
          endIcon={<ArrowOutwardIcon className={classes.buttonIcon} />}
          disableRipple
          variants={buttonVariants}
          whileHover="hover"
          whileTap={{ scale: 0.95 }}
        >
          Book A Call
        </MotionButton>
        <Box className={classes.arrowContainer}>
          <AnimatedArrow />
        </Box>
        
        {/* Animated Arrow Container */}
      </Container>
    </MotionBox>
  );
}

export default MissionSection;