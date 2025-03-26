// components/MissionSection.js
import React, { useEffect } from "react";
import {
  Box,
  Typography,
  Button,
  Container,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import SouthIcon from "@mui/icons-material/South";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

// Create motion components
const MotionBox = motion(Box);
const MotionTypography = motion(Typography);
const MotionButton = motion(Button);
const MotionIcon = motion(SouthIcon);

// Word-by-word animation component
const AnimatedWords = ({
  text,
  className,
  delay = 0,
  duration = 0.05,
  staggerChildren = 0.02,
  highlightWords = [],
}) => {
  // Split the text into words
  const words = text.split(" ");

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
      filter: "blur(4px)",
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 200,
        duration: duration,
      },
    },
  };

  return (
    <motion.div
      style={{ display: "inline-block", overflow: "hidden" }}
      sx={{ pt: 2 }}
      variants={container}
      initial="hidden"
      animate="visible"
      className={className}
    >
      {words.map((word, index) => {
        // Check if this word should be highlighted
        const shouldHighlight = highlightWords.includes(word);

        return (
          <motion.span
            key={index}
            variants={child}
            style={{
              display: "inline-block",
              marginRight: "8px",
              whiteSpace: "nowrap",
              color: shouldHighlight ? "#E87811" : "inherit",
            }}
          >
            {word}
          </motion.span>
        );
      })}
    </motion.div>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "black",
    backgroundImage:
      "radial-gradient(circle, rgba(75, 75, 75, 0.1) 1px, transparent 1px)",
    backgroundSize: "20px 20px",
    minHeight: "110vh",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "10px 20px",
    position: "relative",
    overflow: "hidden", // Prevent flash of white background
    "@media (max-width: 1200px)": {
      padding: "30px 20px",
    },
    "@media (max-width: 900px)": {
      padding: "50px 15px",
      justifyContent: "flex-start",
      paddingTop: "100px",
    },
    "@media (max-width: 600px)": {
      padding: "40px 12px",
      paddingTop: "80px",
    },
  },
  contentContainer: {
    maxWidth: "1200px",
    width: "100%",
    margin: "0 auto",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  headingContainer: {
    textAlign: "center",
    maxWidth: "1100px",
    marginBottom: "40px",
    "@media (max-width: 900px)": {
      marginBottom: "30px",
      maxWidth: "100%",
    },
    "@media (max-width: 600px)": {
      marginBottom: "25px",
    },
  },
  headingLine: {
    fontSize: "3.8rem",
    fontWeight: "400",
    lineHeight: 1.2,
    marginBottom: "0",
    "@media (max-width: 1200px)": {
      fontSize: "3.2rem",
    },
    "@media (max-width: 900px)": {
      fontSize: "2.2rem",
      marginBottom: "5px",
    },
    "@media (max-width: 600px)": {
      fontSize: "1.8rem",
      marginBottom: "0",
    },
    "@media (max-width: 480px)": {
      fontSize: "1.5rem",
      lineHeight: 1.3,
    },
  },
  whiteText: {
    color: "white",
  },
  orangeText: {
    color: "#E87811",
  },
  questionSpacing: {
    marginBottom: "0",
    "@media (max-width: 1200px)": {
      marginBottom: "5px",
    },
    "@media (max-width: 900px)": {
      marginBottom: "15px",
    },
    "@media (max-width: 600px)": {
      marginBottom: "10px",
    },
  },
  description: {
    color: "rgba(255, 255, 255, 0.7)",
    fontSize: "1.2rem",
    textAlign: "center",
    maxWidth: "800px",
    margin: "0 auto",
    marginBottom: "30px",
    lineHeight: 1.6,
    "@media (max-width: 900px)": {
      fontSize: "1.1rem",
      marginBottom: "30px",
      maxWidth: "90%",
    },
    "@media (max-width: 600px)": {
      fontSize: "1rem",
      marginBottom: "25px",
      lineHeight: 1.5,
    },
    "@media (max-width: 480px)": {
      fontSize: "0.95rem",
      marginBottom: "20px",
    },
  },
  callButton: {
    color: "transparent", // Make text transparent to show gradient
    background: "linear-gradient(to right, #E87811 90%, #FFFFFF 10%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    borderRadius: "50px",
    fontWeight: "400",
    padding: "10px 24px",
    fontSize: "1.4rem",
    textTransform: "none",
    "&:hover": {
      backgroundColor: "rgba(255, 158, 44, 0.1)",
    },
    "@media (max-width: 900px)": {
      padding: "8px 20px",
      fontSize: "1.2rem",
    },
    "@media (max-width: 600px)": {
      padding: "6px 16px",
      fontSize: "1.1rem",
    },
    "@media (max-width: 480px)": {
      padding: "5px 14px",
      fontSize: "1rem",
    },
  },
  buttonIcon: {
    color: "#E87811",
    marginLeft: "4px",
    fontSize: "18px",
    "@media (max-width: 600px)": {
      fontSize: "16px",
    },
  },
  arrowContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    marginTop: "40px",
    "@media (max-width: 900px)": {
      marginTop: "30px",
    },
    "@media (max-width: 600px)": {
      marginTop: "25px",
    },
    "@media (max-width: 480px)": {
      marginTop: "20px",
    },
  },
  downArrow: {
    color: "#E87811",
    fontSize: "120px",
    "@media (max-width: 1200px)": {
      fontSize: "50px",
    },
    "@media (max-width: 900px)": {
      fontSize: "40px",
    },
    "@media (max-width: 600px)": {
      fontSize: "32px",
    },
  },
}));

function MissionSection() {
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.down("md"));
  const isLargeScreen = useMediaQuery(theme.breakpoints.up("lg"));

  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  // We'll only apply animation to the content, not the container
  const contentVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.1,
      },
    },
  };

  const lineVariants = {
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

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        delay: 1.8, // Adjusted delay to come after all text animations
      },
    },
    hover: {
      scale: 1.05,
      transition: { duration: 0.2 },
    },
  };

  // Animation for the down arrow
  const arrowVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delay: 2.0, // Adjusted delay
        duration: 0.5,
      },
    },
    bounce: {
      y: [0, 10, 0],
      transition: {
        duration: 1.5,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut",
      },
    },
  };

  // Sequential line animation with appropriate delays
  const line1Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        delay: 0.1, // First line appears immediately
      },
    },
  };

  const line2Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        delay: 0.5, // Second line appears after first
      },
    },
  };

  const line3Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        delay: 0.9, // Third line appears after second
      },
    },
  };

  const line4Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        delay: 1.3, // Fourth line appears after third
      },
    },
  };

  const descriptionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        delay: 1.7, // Description appears after all heading lines
      },
    },
  };

  return (
    // Main container is NOT animated to prevent background flash
    <Box
      className={classes.root}
      sx={{
        height: {
          xs: "auto",
          sm: "auto",
          md: "auto",
          lg: "100vh",
        },
        minHeight: "100vh",
        py: { xs: 8, sm: 10, md: 12, lg: 0 },
        backgroundColor: "black", // Ensure background is black
      }}
    >
      <Container className={classes.contentContainer}>
        {/* Only content is animated and observed for inView */}
        <MotionBox
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={contentVariants}
          className={classes.headingContainer}
        >
          {/* Sequential Line Animation */}
          <MotionBox
            className={classes.questionSpacing}
            variants={line1Variants}
          >
            <AnimatedWords
              text={`We Empower Startups ${!isMobile ? "" : "\n"} With`}
              className={`${classes.headingLine} ${classes.whiteText}`}
              delay={0.1}
              staggerChildren={0.03}
              highlightWords={["Startups"]}
            />
          </MotionBox>

          <MotionBox
            className={classes.questionSpacing}
            variants={line2Variants}
          >
            <AnimatedWords
              text={`Co-founders, MVPs, Venture ${
                !isMobile ? "" : "\n"
              } Building,`}
              className={`${classes.headingLine} ${classes.whiteText}`}
              delay={0.1}
              staggerChildren={0.03}
              highlightWords={["MVPs,"]}
            />
          </MotionBox>

          <MotionBox
            className={classes.questionSpacing}
            variants={line3Variants}
          >
            <AnimatedWords
              text={`Smart Investments, And ${!isMobile ? "" : "\n"} Effective`}
              className={`${classes.headingLine} ${classes.whiteText}`}
              delay={0.1}
              staggerChildren={0.03}
              highlightWords={[]}
            />
          </MotionBox>

          <MotionBox
            className={classes.questionSpacing}
            variants={line4Variants}
          >
            <AnimatedWords
              text={`Bootstrapping ${!isMobile ? "" : "\n"} Strategies.`}
              className={`${classes.headingLine} ${classes.whiteText}`}
              delay={0.1}
              staggerChildren={0.03}
              highlightWords={["Bootstrapping"]}
            />
          </MotionBox>
        </MotionBox>
        {/* Description section with proper delay */}
        <MotionTypography
          variants={descriptionVariants}
          className={classes.description}
        >
          <AnimatedWords
            text="First impressions matter. That's why our mission is to create clean, enduring"
            delay={0.1}
            staggerChildren={0.01}
            highlightWords={[]}
          />
          <AnimatedWords
            text="designs that elevate. First impressions matter. That's why our mission."
            delay={0.2}
            staggerChildren={0.01}
            highlightWords={[]}
          />
        </MotionTypography>

        {/* Button appears after all text animations */}
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

        {/* Animated Down Arrow with SouthIcon */}
        <Box className={classes.arrowContainer}>
          <MotionIcon
            className={classes.downArrow}
            variants={arrowVariants}
            animate={controls}
            initial="hidden"
            whileInView={["visible", "bounce"]}
            viewport={{ once: true }}
          />
        </Box>
      </Container>
    </Box>
  );
}

export default MissionSection;