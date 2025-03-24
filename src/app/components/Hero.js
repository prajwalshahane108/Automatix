import Image from "next/image";
import {
  Box,
  Typography,
  Button,
  Divider,
  Grid,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import { motion } from "framer-motion";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#000",
    backgroundImage:
      "radial-gradient(circle, rgba(75, 75, 75, 0.6) 1px, transparent 1.5px)",
    backgroundSize: "10px 10px",
    minHeight: "100vh",
    width: "100%",
    position: "relative",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    boxShadow:
      "inset 150px 0 155px -5px rgba(0, 0, 0, 0.8), inset -100px 0 205px -5px rgba(0, 0, 0, 0.8), inset 0 50px 105px -5px rgba(2, 0, 0, 0.8)",
    overflow: "hidden",
  },

  navbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: "50px",
    border: "1px solid rgba(255, 255, 255, 0.1)",
    backgroundColor: "#050505",
    backgroundSize: "20px 20px",
    margin: "15px 20px",
    padding: "0 20px 0px 20px",
    height: "65px",
    width: "calc(75% - 40px)",
    position: "fixed",
    top: 5,
    zIndex: 100,
    "@media (max-width: 1200px)": {
      width: "calc(95% - 40px)",
      padding: "0 15px",
    },
    "@media (max-width: 600px)": {
      width: "calc(90% - 20px)",
      padding: "0 10px",
      margin: "10px",
    },
  },
  logo: {
    color: "#E87811",
    fontWeight: 600,
    fontSize: "1.2rem",
    marginRight: "auto",
    "@media (max-width: 600px)": {
      fontSize: "1rem",
    },
  },
  navItems: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    flex: "1",
    marginLeft: "20px",
    "@media (max-width: 1024px)": {
      display: "none",
    },
  },
  mobileMenu: {
    display: "none",
    "@media (max-width: 1024px)": {
      display: "flex",
      alignItems: "center",
    },
  },
  mobileMenuIcon: {
    color: "white",
    fontSize: "24px",
    cursor: "pointer",
    marginRight: "15px",
  },
  mobileNavItems: {
    position: "fixed",
    top: "80px",
    left: 0,
    right: 0,
    backgroundColor: "#050505",
    borderRadius: "0 0 15px 15px",
    boxShadow: "0 10px 20px rgba(0,0,0,0.5)",
    padding: "20px",
    zIndex: 99,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    "@media (max-width: 1024px)": {
      display: "flex",
    },
  },
  mobileNavLink: {
    color: "white",
    fontSize: "18px",
    margin: "15px 0",
    textAlign: "center",
    cursor: "pointer",
    width: "100%",
    padding: "8px 0",
    borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
    "&:last-child": {
      borderBottom: "none",
    },
    "&:hover": {
      color: "#E87811",
    },
  },
  navLink: {
    color: "white",
    margin: "0 12px",
    fontSize: "17px",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    whiteSpace: "nowrap",
    "&:hover": {
      color: "#E87811",
    },
    "@media (max-width: 1200px)": {
      fontSize: "15px",
      margin: "0 8px",
    },
  },
  navButtonContainer: {
    display: "flex",
    alignItems: "center",
    marginLeft: "auto",
  },
  expandIcon: {
    color: "white",
    fontSize: "16px",
    marginLeft: "2px",
  },
  talkButton: {
    backgroundColor: "#161616",
    color: "white",
    border: "1px solid rgba(255, 255, 255, 0.1)",
    borderRadius: "8px",
    padding: "3px 22px",
    textTransform: "none",
    fontSize: "15px",
    marginLeft: "12px",
    whiteSpace: "nowrap",
    "&:hover": {
      backgroundColor: "rgba(255, 255, 255, 0.05)",
    },
    "@media (max-width: 600px)": {
      padding: "3px 12px",
      fontSize: "14px",
    },
  },
  arrowIcon: {
    fontSize: "14px",
    marginLeft: "4px",
    "@media (max-width: 600px)": {
      fontSize: "12px",
    },
  },
  content: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
    justifyContent: "flex-start",
    minHeight: "100vh",
    paddingTop: "50px",
    paddingBottom: "80px",
    width: "100%",
    maxWidth: "1200px",
    position: "relative",
    padding: "0 20px",
    "@media (max-width: 600px)": {
      paddingTop: "30px",
      padding: "0 15px",
    },
  },
  availabilityBadge: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#000",
    border: "1px solid rgba(255, 255, 255, 0.1)",
    borderRadius: "50px",
    padding: "6px 16px",
    marginBottom: "40px",
    marginTop: "140px",
    width: "fit-content",
    "@media (max-width: 768px)": {
      marginTop: "120px",
      marginBottom: "30px",
      padding: "4px 12px",
      maxWidth: "90%",
    },
    "@media (max-width: 480px)": {
      marginTop: "100px",
    },
  },
  greenDot: {
    color: "#4CAF50",
    fontSize: "12px",
    marginRight: "8px",
    flexShrink: 0,
    "@media (max-width: 480px)": {
      fontSize: "10px",
    },
  },
  availabilityText: {
    backgroundColor: "#000",
    color: "white",
    fontSize: "14px",
    fontWeight: "400",
    "@media (max-width: 768px)": {
      fontSize: "12px",
    },
    "@media (max-width: 480px)": {
      fontSize: "11px",
    },
  },
  heading1: {
    color: "#E87811",
    fontSize: "4rem",
    fontWeight: "400",
    lineHeight: 1,
    marginTop: 20,
    marginBottom: "10px",
    display: "flex",
    justifyContent: "center",
    width: "100%",
    "@media (max-width: 900px)": {
      fontSize: "3rem",
    },
    "@media (max-width: 600px)": {
      fontSize: "2rem",
    },
  },
  logoImage: {
    maxWidth: "100%",
    height: "auto",
    "@media (max-width: 768px)": {
      width: "90%",
      height: "auto",
    },
    "@media (max-width: 480px)": {
      width: "95%",
    },
  },
  heading2: {
    color: "white",
    fontSize: "2.5rem",
    fontWeight: "400",
    width: "100%",
    lineHeight: 1.1,
    margin: 0,
    marginBottom: 70,
    alignItems: "center",
    justifyContent: "center",
    "@media (max-width: 900px)": {
      fontSize: "2rem",
      marginBottom: "40px",
    },
    "@media (max-width: 600px)": {
      fontSize: "1.5rem",
      marginBottom: "30px",
    },
    "@media (max-width: 480px)": {
      fontSize: "1.3rem",
    },
  },
  diamond: {
    fontSize: "2.5rem",
    color: "#FF5B23",
    margin: "0 15px",
    "@media (max-width: 600px)": {
      fontSize: "2rem",
      margin: "0 10px",
    },
    "@media (max-width: 480px)": {
      fontSize: "1.5rem",
      margin: "0 5px",
    },
  },
  heading3: {
    color: "#E87811",
    fontSize: "5rem",
    fontWeight: "400",
    lineHeight: 1.1,
    margin: 0,
    marginBottom: "30px",
    "@media (max-width: 900px)": {
      fontSize: "4rem",
    },
    "@media (max-width: 600px)": {
      fontSize: "3rem",
    },
    "@media (max-width: 480px)": {
      fontSize: "2.5rem",
    },
  },
  description: {
    color: "rgb(255, 255, 255)",
    width: "100%",
    fontSize: "1.5rem",
    fontWeight: "400",
    maxWidth: "850px",
    marginBottom: "40px",
    lineHeight: "1.6",
    "@media (max-width: 900px)": {
      fontSize: "1.3rem",
      maxWidth: "90%",
    },
    "@media (max-width: 600px)": {
      fontSize: "1.1rem",
      marginBottom: "30px",
    },
    "@media (max-width: 480px)": {
      fontSize: "1rem",
      lineHeight: "1.5",
    },
  },
  highlightedText: {
    color: "#FF5B23",
  },
  learnMoreButton: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    color: "white",
    border: "1px solid rgba(255, 255, 255, 0.1)",
    borderRadius: "10px",
    boxShadow: "inset 0 10px 10px -10px rgba(255, 255, 255, 0.3)",
    padding: "6px 40px",
    textTransform: "none",
    fontSize: "1rem",
    fontWeight: "400",
    marginBottom: "1px",
    "&:hover": {
      backgroundColor: "rgba(255, 255, 255, 0.05)",
    },
    "@media (max-width: 600px)": {
      padding: "8px 16px",
      fontSize: "0.9rem",
    },
  },
  buttonIcon: {
    marginLeft: "5px",
    fontSize: "20px",
    "@media (max-width: 600px)": {
      fontSize: "16px",
    },
  },
  statsSection: {
    width: "100%",
    backgroundColor: "#000",
    backgroundImage:
      "radial-gradient(circle, rgba(75, 75, 75, 0.3) 1px, transparent 1.5px)",
    backgroundSize: "10px 10px",
    padding: "40px 0",
    marginTop: "60px",
    borderTop: "1px solid rgba(255, 255, 255, 0.05)",
    borderBottom: "1px solid rgba(255, 255, 255, 0.05)",
    "@media (max-width: 768px)": {
      padding: "30px 0",
      marginTop: "40px",
    },
    "@media (max-width: 480px)": {
      padding: "20px 0",
      marginTop: "30px",
    },
  },
  statsContainer: {
    display: "flex",
    justifyContent: "space-around",
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "0 20px",
    flexWrap: "wrap",
    "@media (max-width: 768px)": {
      padding: "0 15px",
    },
  },
  statItem: {
    textAlign: "center",
    padding: "15px",
    "@media (max-width: 768px)": {
      width: "45%",
      marginBottom: "20px",
    },
    "@media (max-width: 480px)": {
      width: "100%",
      padding: "10px",
    },
  },
  statNumber: {
    color: "white",
    fontSize: "3.5rem",
    fontWeight: "600",
    marginBottom: "8px",
    "@media (max-width: 900px)": {
      fontSize: "3rem",
    },
    "@media (max-width: 600px)": {
      fontSize: "2.5rem",
    },
    "@media (max-width: 480px)": {
      fontSize: "2.2rem",
    },
  },
  statLabel: {
    color: "rgba(255, 255, 255, 0.7)",
    fontSize: "1.2rem",
    fontWeight: "400",
    "@media (max-width: 600px)": {
      fontSize: "1rem",
    },
  },
  footerSection: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    position: "absolute",
    bottom: "40px",
    width: "100%",
    "@media (max-width: 768px)": {
      position: "relative",
      marginTop: "60px",
      bottom: "auto",
    },
    "@media (max-width: 480px)": {
      marginTop: "40px",
    },
  },
  footerText: {
    color: "rgba(255, 255, 255, 0.7)",
    fontSize: "1rem",
    fontWeight: "400",
    marginBottom: "20px",
    "@media (max-width: 600px)": {
      fontSize: "0.9rem",
    },
  },
  partnerLogos: {
    display: "flex",
    justifyContent: "center",
    width: "100%",
    gap: "40px",
    alignItems: "center",
    opacity: 0.5,
    flexWrap: "wrap",
    "@media (max-width: 768px)": {
      gap: "20px",
    },
    "@media (max-width: 480px)": {
      gap: "15px",
    },
  },
  logoItem: {
    color: "white",
    fontSize: "1.2rem",
    fontWeight: "500",
    display: "flex",
    alignItems: "center",
    "@media (max-width: 768px)": {
      fontSize: "1rem",
      gap: "20px",
    },
    "@media (max-width: 480px)": {
      fontSize: "0.9rem",
      gap: "15px",
    },
  },
  circleIcon: {
    fontSize: "1rem",
    marginRight: "8px",
    "@media (max-width: 480px)": {
      fontSize: "0.8rem",
    },
  },
}));

// Animation variants for Framer Motion
const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 1 } },
};

const slideUp = {
  hidden: { y: 50, opacity: 0 },
  visible: (custom) => ({
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      damping: 15,
      stiffness: 100,
      duration: 0.8,
      delay: custom * 0.4, // Custom delay based on sequence
    },
  }),
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.5, // Increased delay between elements
      delayChildren: 0.3,
    },
  },
};

const navbarAnimation = {
  hidden: { y: -100, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      damping: 20,
      stiffness: 100,
      delay: 0.2,
    },
  },
};

const mobileMenuAnimation = {
  hidden: { height: 0, opacity: 0 },
  visible: { height: "auto", opacity: 1, transition: { duration: 0.3 } },
  exit: { height: 0, opacity: 0, transition: { duration: 0.3 } },
};

const buttonHover = {
  rest: { scale: 1 },
  hover: { scale: 1.05, transition: { duration: 0.2 } },
};

export default function Home() {
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <div className={classes.root}>
        {/* Navbar */}
        <motion.div className={classes.navbar} variants={navbarAnimation}>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            style={{ display: "flex", alignItems: "center" }}
          >
            <Image
              src="/logo.png"
              alt="Logo"
              width={40}
              height={40}
              style={{ marginRight: "4px" }}
            />
            <Typography
              variant="h6"
              style={{
                background: "linear-gradient(90deg, #E87811 0%, white 200%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                color: "transparent",
                fontWeight: 600,
                fontSize: "1.2rem",
                marginRight: "auto",
              }}
            >
              MyFounders.Club
            </Typography>
          </motion.div>

          {/* Desktop Navigation */}
          <Box className={classes.navItems}>
            {/* Navigation links are commented out in original code */}
          </Box>

          {/* Mobile Menu Icon */}
          <Box className={classes.mobileMenu}>
            <motion.div
              whileHover={{ rotate: 180 }}
              transition={{ duration: 0.3 }}
            >
              <MenuIcon
                className={classes.mobileMenuIcon}
                onClick={toggleMenu}
              />
            </motion.div>
          </Box>

          {/* Button on right side */}
          <motion.div
            className={classes.navButtonContainer}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            whileHover="hover"
            variants={buttonHover}
          >
            <Button
              href="/pages/join"
              className={classes.talkButton}
              disableRipple
              endIcon={<ArrowOutwardIcon className={classes.arrowIcon} />}
            >
              Join
            </Button>
          </motion.div>
        </motion.div>

        {/* Mobile Navigation Dropdown */}
        {menuOpen && (
          <motion.div
            className={classes.mobileNavItems}
            variants={mobileMenuAnimation}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <motion.div variants={slideUp}>
              <Typography variant="body2" className={classes.mobileNavLink}>
                Founders
              </Typography>
            </motion.div>
            <motion.div variants={slideUp}>
              <Typography variant="body2" className={classes.mobileNavLink}>
                Investors
              </Typography>
            </motion.div>
            <motion.div variants={slideUp}>
              <Typography variant="body2" className={classes.mobileNavLink}>
                Partners
              </Typography>
            </motion.div>
            <motion.div variants={slideUp}>
              <Typography variant="body2" className={classes.mobileNavLink}>
                Our Ecosystem
              </Typography>
            </motion.div>
            <motion.div variants={slideUp}>
              <Typography variant="body2" className={classes.mobileNavLink}>
                About Us
              </Typography>
            </motion.div>
          </motion.div>
        )}

        {/* Main Content */}
        <Box className={classes.content}>
          <motion.div
            className={classes.availabilityBadge}
            initial="hidden"
            animate="visible"
            variants={slideUp}
            custom={1}
          >
            <FiberManualRecordIcon className={classes.greenDot} />
            <Typography className={classes.availabilityText}>
              1000+ startups joined, 1500+ investors database globally
            </Typography>
          </motion.div>

          <motion.div
            className={classes.heading1}
            initial="hidden"
            animate="visible"
            variants={slideUp}
            custom={2}
          >
            <motion.img
              src="https://framerusercontent.com/images/UDSUes4B94lfLzzemyBwC6LQeEA.png?scale-down-to=1024"
              alt="MyFounders.Club"
              className={classes.logoImage}
              width={isSmallScreen ? 300 : isMobile ? 450 : 600}
              height="auto"
              priority="true"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{
                type: "spring",
                stiffness: 100,
                delay: 1,
                duration: 0.8,
              }}
            />
          </motion.div>

          <br />
          <br />
          <br />

          <motion.div
            initial="hidden"
            animate="visible"
            variants={slideUp}
            custom={3}
          >
            <Typography variant="h2" className={classes.heading2}>
              Join ambitious Community of <br />
              <motion.span
                className={classes.highlightedText}
                initial={{ color: "white" }}
                animate={{ color: "#FF5B23" }}
                transition={{ delay: 2.0, duration: 0.5 }}
              >
                Founders
              </motion.span>
              , Venture{" "}
              <motion.span
                className={classes.highlightedText}
                initial={{ color: "white" }}
                animate={{ color: "#FF5B23" }}
                transition={{ delay: 2.3, duration: 0.5 }}
              >
                Partners
              </motion.span>
              , and{" "}
              <motion.span
                className={classes.highlightedText}
                initial={{ color: "white" }}
                animate={{ color: "#FF5B23" }}
                transition={{ delay: 2.6, duration: 0.5 }}
              >
                Investors
              </motion.span>{" "}
              to break new ground, expand into emerging markets, and build
              game-changing ventures across borders in{" "}
              <motion.span
                className={classes.highlightedText}
                initial={{ color: "white" }}
                animate={{ color: "#FF5B23" }}
                transition={{ delay: 2.9, duration: 0.5 }}
              >
                Saudi Arabia
              </motion.span>
              .
            </Typography>
          </motion.div>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={slideUp}
            custom={4}
          >
            <Typography variant="body1" className={classes.description}>
              Our AI & Web3-powered ecosystem connects visionaries with the
              resources they need, positioning Riyadh as the world's
              entrepreneurial capital and accelerating Vision 2030.
            </Typography>
          </motion.div>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={slideUp}
            custom={5}
            whileHover={{ scale: 1.05 }}
          >
            <Button
              className={classes.learnMoreButton}
              variant="contained"
              disableElevation
              endIcon={<KeyboardArrowDownIcon className={classes.buttonIcon} />}
            >
              Join
            </Button>
          </motion.div>

          {/* Stats Section - Commented out in original code */}
          {/* Footer Section - Commented out in original code */}
        </Box>
      </div>
    </>
  );
}
