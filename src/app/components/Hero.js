import Image from "next/image";
import { Box, Typography, Button, Divider, Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const useStyles = makeStyles(() => ({
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
    // Added box-shadow for inner shadow effect on right, left and bottom only
    boxShadow:
      "inset 150px 0 155px -5px rgba(0, 0, 0, 0.8), inset -100px 0 205px -5px rgba(0, 0, 0, 0.8), inset 0 50px 105px -5px rgba(2, 0, 0, 0.8)",
    // You can also use this alternative with a more pronounced effect
    // boxShadow: "inset 30px 0 30px -15px black, inset -30px 0 30px -15px black, inset 0 30px 30px -15px black",
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
    padding: "0 50px 0px 50px",
    height: "65px",
    width: "calc(82% - 40px)",
    position: "fixed",
    top: 5,
    zIndex: 100,
  },
  logo: {
    color: "#E87811",
    fontWeight: 600,
    fontSize: "1.2rem",
    marginRight: "auto", // This pushes other content to the right
  },
  navItems: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start", // Changed from center to flex-start for left alignment
    flex: "1",
    marginLeft: "20px", // Added some space on the left
  },
  navLink: {
    color: "white",
    margin: "0 12px",
    fontSize: "17px",
    cursor: "pointer",
    "&:hover": {
      color: "#E87811",
    },
  },
  navButtonContainer: {
    display: "flex",
    alignItems: "center",
    marginLeft: "auto", // This pushes the button to the right
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
    "&:hover": {
      backgroundColor: "rgba(255, 255, 255, 0.05)",
    },
  },
  arrowIcon: {
    fontSize: "14px",
    marginLeft: "4px",
  },
  content: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
    justifyContent: "flex-start", // Changed from center to flex-start
    minHeight: "100vh",
    paddingTop: "50px",
    width: "100%",
    maxWidth: "1200px",
    position: "relative", // Add position relative
    // paddingBottom: "160px", // Add padding at the bottom to make room for footer
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
  },
  greenDot: {
    color: "#4CAF50",
    fontSize: "12px",
    marginRight: "8px",
  },
  availabilityText: {
    backgroundColor: "#000",
    color: "white",
    fontSize: "14px",
    fontWeight: "400",
  },
  heading1: {
    color: "#E87811",
    fontSize: "4rem",
    fontWeight: "400",
    lineHeight: 1,
    marginTop: 20,
    marginBottom: "10px",
    "@media (max-width: 900px)": {
      fontSize: "4rem",
    },
    "@media (max-width: 600px)": {
      fontSize: "3rem",
    },
  },
  heading2: {
    color: "white",
    fontSize: "2.5rem",
    fontWeight: "400",
    width: "80%",
    lineHeight: 1.1,
    margin: 0,
    marginBottom: 70,
    // display: "flex",
    alignItems: "center",
    justifyContent: "center",
    "@media (max-width: 900px)": {
      fontSize: "3rem",
    },
    "@media (max-width: 600px)": {
      fontSize: "2rem",
    },
  },
  diamond: {
    fontSize: "2.5rem",
    color: "#FF5B23",
    margin: "0 15px",
    "@media (max-width: 600px)": {
      fontSize: "2.5rem",
      margin: "0 10px",
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
  },
  description: {
    color: "rgb(255, 255, 255)",
    width: "100%",
    fontSize: "1.5rem",
    fontWeight: "400",
    maxWidth: "850px",
    marginBottom: "40px",
    lineHeight: "1.6",
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
    padding: "10px 20px",
    textTransform: "none",
    fontSize: "1rem",
    fontWeight: "400",
    marginBottom: "1px", // Add margin at the bottom to create space
    "&:hover": {
      backgroundColor: "rgba(255, 255, 255, 0.05)",
    },
  },
  buttonIcon: {
    marginLeft: "5px",
    fontSize: "20px",
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
  },
  statsContainer: {
    display: "flex",
    justifyContent: "space-around",
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "0 20px",
  },
  statItem: {
    textAlign: "center",
    padding: "0 15px",
  },
  statNumber: {
    color: "white",
    fontSize: "3.5rem",
    fontWeight: "600",
    marginBottom: "8px",
  },
  statLabel: {
    color: "rgba(255, 255, 255, 0.7)",
    fontSize: "1.2rem",
    fontWeight: "400",
  },
  footerSection: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    position: "absolute",
    bottom: "40px",
    width: "100%",
  },
  footerText: {
    color: "rgba(255, 255, 255, 0.7)",
    fontSize: "1rem",
    fontWeight: "400",
    marginBottom: "20px",
  },
  partnerLogos: {
    display: "flex",
    justifyContent: "center",
    width: "100%",
    gap: "40px",
    alignItems: "center",
    opacity: 0.5,
    flexWrap: "wrap", // Allow logos to wrap on smaller screens
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
  },
  circleIcon: {
    fontSize: "1rem",
    marginRight: "8px",
  },
}));

export default function Home() {
  const classes = useStyles();

  return (
    <>
      <Box
        sx={{ minHeight: "120vh", overflow: "hidden", position: "relative" }}
        className={classes.root}
      >
        {/* Navbar */}
        <Box className={classes.navbar}>
          {/* Navigation items now start from the left */}
          <Typography variant="h6" className={classes.logo}>
            Automatix
          </Typography>
          <Box className={classes.navItems}>
            <Typography variant="body2" className={classes.navLink}>
              Founders <ExpandMoreIcon className={classes.expandIcon} />
            </Typography>
            <Typography variant="body2" className={classes.navLink}>
              Investors <ExpandMoreIcon className={classes.expandIcon} />
            </Typography>
            <Typography variant="body2" className={classes.navLink}>
              Partners <ExpandMoreIcon className={classes.expandIcon} />
            </Typography>
            <Typography variant="body2" className={classes.navLink}>
              Our Ecosystem <ExpandMoreIcon className={classes.expandIcon} />
            </Typography>
            <Typography
              variant="body2"
              className={classes.navLink}
              sx={{ display: "flex", alignItems: "center" }}
            >
              About Us <ExpandMoreIcon className={classes.expandIcon} />
            </Typography>
          </Box>

          {/* Button pushed to the right */}
          <Box className={classes.navButtonContainer}>
            <Button
              href="/pages/join"
              className={classes.talkButton}
              disableRipple
              endIcon={<ArrowOutwardIcon className={classes.arrowIcon} />}
            >
              Join
            </Button>
          </Box>
        </Box>

        {/* Main Content */}
        <Box className={classes.content}>
          <Box className={classes.availabilityBadge}>
            <FiberManualRecordIcon className={classes.greenDot} />
            <Typography className={classes.availabilityText}>
              1000+ startups joined, 1500+ investors database globally
            </Typography>
          </Box>

          <Box className={classes.heading1}>
            <img
              src="https://framerusercontent.com/images/UDSUes4B94lfLzzemyBwC6LQeEA.png?scale-down-to=1024"
              alt="MyFounders.Club"
              width={600}
              height={70}
              priority
            />
          </Box>

          <br />
          <br />
          <br />
          <Typography variant="h2" className={classes.heading2}>
            Join ambitious Community of <br />
            <span className={classes.highlightedText}>Founders</span>, Venture{" "}
            <span className={classes.highlightedText}>Partners</span>, and{" "}
            <span className={classes.highlightedText}>Investors</span> to break
            new ground, expand into emerging markets, and build game-changing
            ventures across borders in{" "}
            <span className={classes.highlightedText}>Saudi Arabia</span>.
          </Typography>

          <Typography variant="body1" className={classes.description}>
            Our AI & Web3-powered ecosystem connects visionaries with the
            resources they need, positioning Riyadh as the world's
            entrepreneurial capital and accelerating Vision 2030.
          </Typography>

          {/* Stats Section */}
          {/* <Box className={classes.statsSection}>
            <Box className={classes.statsContainer}>
              <Box className={classes.statItem}>
                <Typography variant="h3" className={classes.statNumber}>
                  1000+
                </Typography>
                <Typography variant="body1" className={classes.statLabel}>
                  Active Founders
                </Typography>
              </Box>
              <Box className={classes.statItem}>
                <Typography variant="h3" className={classes.statNumber}>
                  1500+
                </Typography>
                <Typography variant="body1" className={classes.statLabel}>
                  Investors
                </Typography>
              </Box>
              <Box className={classes.statItem}>
                <Typography variant="h3" className={classes.statNumber}>
                  100+
                </Typography>
                <Typography variant="body1" className={classes.statLabel}>
                  Partners
                </Typography>
              </Box>
              <Box className={classes.statItem}>
                <Typography variant="h3" className={classes.statNumber}>
                  $1.5B
                </Typography>
                <Typography variant="body1" className={classes.statLabel}>
                  Saudi Arabia funding
                </Typography>
              </Box>
            </Box>
          </Box> */}
        </Box>
      </Box>
    </>
  );
}
