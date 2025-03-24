import React, { useEffect } from 'react';
import { Box, Typography, Button } from "@mui/material";
import { makeStyles } from "@mui/styles";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import StarIcon from "@mui/icons-material/Star";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

// Create motion components
const MotionBox = motion(Box);
const MotionTypography = motion(Typography);
const MotionButton = motion(Button);

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "black",
    backgroundImage: "radial-gradient(circle, rgba(75, 75, 75, 0.1) 1px, transparent 1px)",
    backgroundSize: "20px 20px",
    minHeight: "100vh",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "60px 20px",
  },
  sectionTag: {
    color: "white",
    backgroundColor: "rgba(255, 255, 255, 0)",
    border: "1px solid rgba(255, 255, 255, 0.77)",
    borderRadius: "50px",
    padding: "4px 20px",
    fontSize: "14px",
    marginBottom: "30px",
    display: "inline-block",
  },
  sectionTitle: {
    color: "white",
    fontSize: "3.5rem",
    fontWeight: "400",
    textAlign: "center",
    marginBottom: "20px", // Reduced from 60px to make room for the founder points
    "@media (max-width: 768px)": {
      fontSize: "2.5rem",
    },
  },
  founderPoints: {
    color: "#AFAFAF",
    fontSize: "1.1rem",
    textAlign: "flex-start",
    maxWidth: "800px",
    marginBottom: "20px",
    lineHeight: "1.6",
  },
  highlightText: {
    color: "#E87811",
    fontWeight: "600",
  },
  checkmark: {
    color: "#E87811",
    marginRight: "6px",
  },
  pricingContainer: {
    display: "flex",
    width: "100%",
    maxWidth: "1400px",
    justifyContent: "center",
    gap: "30px",
    flexWrap: "wrap",
    alignItems: "flex-start", // Align items to the top
  },
  pricingCardStandard: {
    backgroundColor: "#111111",
    borderRadius: "20px",
    padding: "40px",
    width: "100%",
    maxWidth: "460px", // Smaller width for standard plan
    minHeight: "570px", // Smaller height for standard plan
    display: "flex",
    flexDirection: "column",
    "@media (max-width: 768px)": {
      maxWidth: "100%",
      marginBottom: "20px",
    },
  },
  pricingCardPro: {
    backgroundColor: "#111111",
    borderRadius: "20px",
    paddingTop: "40px",
    paddingLeft: "40px",
    paddingRight: "40px",
    paddingBottom: "132px",
    width: "100%",
    maxWidth: "560px", // Larger width for pro plan
    minHeight: "625px", // Larger height for pro plan
    display: "flex",
    flexDirection: "column",
    position: "relative", // For the popular badge positioning
    "@media (max-width: 768px)": {
      maxWidth: "100%",
      marginBottom: "20px",
    },
  },
  proTag: {
    backgroundColor: "rgba(255, 158, 44, 0.2)",
    color: "#E87811",
    fontSize: "0.8rem",
    padding: "4px 10px",
    borderRadius: "50px",
    marginLeft: "10px",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
  },
  popularBadge: {
    position: "absolute",
    top: -15,
    right: 30,
    backgroundColor: "#E87811",
    color: "black",
    fontSize: "0.8rem",
    fontWeight: "bold",
    padding: "6px 15px",
    borderRadius: "50px",
    display: "flex",
    alignItems: "center",
  },
  planTitle: {
    color: "white",
    fontSize: "2rem",
    fontWeight: "600",
    marginBottom: "10px",
    display: "flex",
    alignItems: "center",
  },
  planDescription: {
    color: "rgba(255, 255, 255, 0.7)",
    fontSize: "1rem",
    marginBottom: "30px",
    // minHeight: "1px", // Ensure consistent spacing
  },
  priceAmount: {
    color: "white",
    fontSize: "3rem",
    fontWeight: "600",
    marginBottom: "20px",
  },
  priceUnit: {
    color: "rgba(255, 255, 255, 0.5)",
    fontSize: "1.2rem",
    fontWeight: "normal",
  },
  getStartedButtonStandard: {
    backgroundColor: "#E87811",
    color: "white",
    borderRadius: "10px",
    padding: "12px 20px",
    fontSize: "1rem",
    textTransform: "none",
    fontWeight: "500",
    marginBottom: "30px",
    border: "1px solid rgba(255, 255, 255, 0.2)",
    "&:hover": {
      backgroundColor: "#E08E25",
    },
  },
  getStartedButtonPro: {
    backgroundColor: "#E87811",
    color: "white",
    borderRadius: "10px",
    padding: "12px 20px",
    fontSize: "1rem",
    textTransform: "none",
    fontWeight: "500",
    marginBottom: "30px",
    "&:hover": {
      backgroundColor: "#E08E25",
    },
  },
  featuresTitle: {
    color: "rgba(255, 255, 255, 0.7)",
    fontSize: "1rem",
    marginBottom: "20px",
  },
  featureItem: {
    display: "flex",
    alignItems: "center",
    marginBottom: "15px",
  },
  featureIconStandard: {
    color: "rgba(255, 255, 255, 0.7)",
    marginRight: "10px",
    fontSize: "1.2rem",
  },
  featureIconPro: {
    color: "#E87811",
    marginRight: "10px",
    fontSize: "1.2rem",
  },
  featureText: {
    color: "rgba(255, 255, 255, 0.7)",
    fontSize: "1rem",
  },
  featuresContainer: {
    display: "flex",
    flexDirection: "column",
  },
  featuresDoubleColumn: {
    display: "flex",
    flexWrap: "wrap",
    
  },
  buttonIcon: {
    marginLeft: "5px",
    fontSize: "1rem",
  },
  starIcon: {
    fontSize: "16px",
    marginRight: "4px",
    color: "#E87811",
  },
}));

function PricingSection() {
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

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.8,
        ease: "easeOut",
      },
    }),
  };

  const featureVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: 0.6 + (i * 0.1),
        duration: 0.5,
        ease: "easeOut",
      },
    }),
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.2,
        ease: "easeInOut",
      },
    },
    tap: {
      scale: 0.95,
    },
  };

  const bounceVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delay: 0.5,
        duration: 0.5,
        type: "spring",
        stiffness: 300,
        damping: 10,
      },
    },
  };

  const pricingPlans = [
    {
      title: "Standard",
      description: "Quoterly Membership",
      price: "SAR 900",
      popular: false,
      features: ["Step-by-Step Investment Guide", "Exclusive Founder Benefits and Co-founder match making", "Access to Closed WhatsApp Community. Connect with a like-minded entrepreneur community", "Monthly Pitch Roaster & Investor Exposure. Opportunity to present at Quarterly Demo Days", "Weekly In-Person Events in Riyadh"],
    },
    {
      title: "Pro",
      description: "Annual Mmbership Everything in the Quarterly Membership, PLUS:",
      price: "SAR 3600",
      popular: true,
      features: [
        "Investors Selection and Matchmaking",
        "Priority Pitching Slots at Demo Days",
        "Exclusive Workshops & Masterclasses with Industry Leaders",
        "VIP Networking Sessions with Investors & Venture Builders",
        "Annual Founder Awards Recognition",
      ],
    },
  ];

  return (
    <MotionBox
      ref={ref}
      className={classes.root}
      initial="hidden"
      animate={controls}
      variants={containerVariants}
    >
      <MotionTypography 
        variant="body1" 
        className={classes.sectionTag}
        variants={itemVariants}
      >
        Simple Pricing
      </MotionTypography>

      <MotionTypography 
        variant="h2" 
        className={classes.sectionTitle}
        variants={itemVariants}
      >
        Founders
      </MotionTypography>
      
      {/* New founder points section */}
      <MotionTypography 
        variant="body1" 
        className={classes.founderPoints}
        variants={itemVariants}
      >
        <strong>Best for founders who are:</strong><br />
        <MotionBox
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          style={{ display: "inline-flex", alignItems: "center" }}
        >
          <span className={classes.checkmark}>✔️</span> <strong>Starting a business or looking for a co-founder</strong>
        </MotionBox><br />
        <MotionBox
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.7, duration: 0.5 }}
          style={{ display: "inline-flex", alignItems: "center" }}
        >
          <span className={classes.checkmark}>✔️</span> <strong>Building an MVP/Prototype or working with a Venture Builder</strong>
        </MotionBox><br />
        <MotionBox
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.9, duration: 0.5 }}
          style={{ display: "inline-flex", alignItems: "center" }}
        >
          <span className={classes.checkmark}>✔️</span> <strong>Raising Investment or learning how to bootstrap effectively</strong>
        </MotionBox><br />
        <MotionBox
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1, duration: 0.5 }}
        >
          Join MyFounders.Club and be part of Saudi Arabia's leading startup ecosystem! 🌍🚀
        </MotionBox>
      </MotionTypography>

      <MotionBox 
        className={classes.pricingContainer}
        variants={containerVariants}
      >
        {/* Standard Plan */}
        <MotionBox 
          className={classes.pricingCardStandard}
          custom={0}
          variants={cardVariants}
          // whileHover={{ 
          //   y: -10,
          //   boxShadow: "0 10px 25px rgba(0, 0, 0, 0.3)",
          //   transition: { duration: 0.3 } 
          // }}
        >
          <MotionTypography 
            variant="h4" 
            className={classes.planTitle}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            {pricingPlans[0].title}
          </MotionTypography>

          <MotionTypography 
            variant="body1" 
            className={classes.planDescription}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            {pricingPlans[0].description}
          </MotionTypography>

          <MotionTypography 
            variant="h3" 
            className={classes.priceAmount}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            {pricingPlans[0].price}
            <span className={classes.priceUnit}>{" "}/every 3 month</span>
          </MotionTypography>

          <MotionButton
            variant="contained"
            className={classes.getStartedButtonStandard}
            endIcon={<ArrowOutwardIcon className={classes.buttonIcon} />}
            disableElevation
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
          >
            Get Started
          </MotionButton>

          <MotionTypography 
            variant="body2" 
            className={classes.featuresTitle}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.4 }}
          >
            What's included:
          </MotionTypography>

          <Box className={classes.featuresContainer}>
            {pricingPlans[0].features.map((feature, i) => (
              <MotionBox 
                key={i} 
                className={classes.featureItem}
                custom={i}
                variants={featureVariants}
              >
                <CheckCircleOutlineIcon className={classes.featureIconStandard} />
                <Typography variant="body2" className={classes.featureText}>
                  {feature}
                </Typography>
              </MotionBox>
            ))}
          </Box>
        </MotionBox>

        {/* Pro Plan */}
        <MotionBox 
          className={classes.pricingCardPro}
          custom={1}
          variants={cardVariants}
          // whileHover={{ 
          //   y: -10,
          //   boxShadow: "0 10px 25px rgba(0, 0, 0, 0.3), 0 5px 10px rgba(232, 120, 17, 0.2)",
          //   transition: { duration: 0.3 } 
          // }}
        >
          <MotionTypography 
            variant="h4" 
            className={classes.planTitle}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            {pricingPlans[1].title}
            <MotionTypography 
              component="span" 
              className={classes.proTag}
              variants={bounceVariants}
            >
              Popular
            </MotionTypography>
          </MotionTypography>

          <MotionTypography 
            variant="body1" 
            className={classes.planDescription}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            {pricingPlans[1].description}
          </MotionTypography>

          <MotionTypography 
            variant="h3" 
            className={classes.priceAmount}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.7, duration: 0.5 }}
          >
            {pricingPlans[1].price}
            <span className={classes.priceUnit}>/yearly</span>
          </MotionTypography>

          <MotionButton
            variant="contained"
            className={classes.getStartedButtonPro}
            endIcon={<ArrowOutwardIcon className={classes.buttonIcon} />}
            disableElevation
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
          >
            Get Started
          </MotionButton>

          <MotionTypography 
            variant="body2" 
            className={classes.featuresTitle}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.4 }}
          >
            What's included:
          </MotionTypography>

          <Box className={classes.featuresDoubleColumn}>
            {pricingPlans[1].features.map((feature, i) => (
              <MotionBox 
                key={i} 
                className={classes.featureItem}
                custom={i}
                variants={featureVariants}
              >
                <MotionBox
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ 
                    delay: 0.9 + (i * 0.1), 
                    duration: 0.3,
                    type: "spring",
                    stiffness: 300
                  }}
                >
                  <CheckCircleOutlineIcon className={classes.featureIconPro} />
                </MotionBox>
                <Typography variant="body2" className={classes.featureText}>
                  {feature}
                </Typography>
              </MotionBox>
            ))}
          </Box>
        </MotionBox>
      </MotionBox>
    </MotionBox>
  );
}

export default PricingSection;