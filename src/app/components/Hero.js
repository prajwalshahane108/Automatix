import Head from "next/head";
import { Box, Typography, Button } from "@mui/material";
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
    padding: "0 50px",
    height: "65px",
    width: "calc(66% - 40px)",
    position: "fixed",
    top: 5,
    zIndex: 100,
  },
  logo: {
    color: "#E87811",
    fontWeight: 600,
    fontSize: "1.2rem",
    flex: "1",
  },
  navItems: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flex: "2",
    
  },
  navLink: {
    color: "white",
    margin: "0 12px",
    fontSize: "14px",
    cursor: "pointer",
    "&:hover": {
      color: "#FF9E2C",
    },
  },
  navButtonContainer: {
    display: "flex",
    alignItems: "center",
    flex: "1",
    justifyContent: "flex-end",
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
    padding: "5px 12px",
    textTransform: "none",
    fontSize: "14px",
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
    paddingBottom: "160px", // Add padding at the bottom to make room for footer
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
    color: "#FF9E2C",
    fontSize: "5rem",
    fontWeight: "400",
    lineHeight: 1.1,
    margin: 0,
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
    fontSize: "5rem",
    fontWeight: "400",
    lineHeight: 1.1,
    margin: 0,
    marginBottom: "10px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    "@media (max-width: 900px)": {
      fontSize: "4rem",
    },
    "@media (max-width: 600px)": {
      fontSize: "3rem",
    },
  },
  diamond: {
    fontSize: "3.5rem",
    margin: "0 15px",
    "@media (max-width: 600px)": {
      fontSize: "2.5rem",
      margin: "0 10px",
    },
  },
  heading3: {
    color: "#FF9E2C",
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
    color: "rgba(255, 255, 255, 0.7)",
    fontSize: "1.25rem",
    fontWeight: "400",
    maxWidth: "700px",
    marginBottom: "40px",
    lineHeight: "1.6",
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
      <Head>
        <title>Automatix - Automation Agency</title>
        <meta
          name="description"
          content="Design services at your fingertips. Pause or cancel anytime."
        />
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>

      <Box
        sx={{ minHeight: "120vh", overflow: "hidden", position: "relative" }}
        className={classes.root}
      >
        {/* Navbar */}
        <Box className={classes.navbar}>
          <Typography variant="h6" className={classes.logo}>
            Automatix
          </Typography>

          <Box className={classes.navItems}>
            <Typography variant="body2" className={classes.navLink}>
              Why Us
            </Typography>
            <Typography variant="body2" className={classes.navLink}>
              Mission
            </Typography>
            <Typography variant="body2" className={classes.navLink}>
              Works
            </Typography>
            <Typography variant="body2" className={classes.navLink}>
              Services
            </Typography>
            <Typography
              variant="body2"
              className={classes.navLink}
              sx={{ display: "flex", alignItems: "center" }}
            >
              Pages <ExpandMoreIcon className={classes.expandIcon} />
            </Typography>
          </Box>

          <Box className={classes.navButtonContainer}>
            <Button
              href="/pages/join"
              className={classes.talkButton}
              disableRipple
              endIcon={<ArrowOutwardIcon className={classes.arrowIcon} />}
            >
              Let's Talk
            </Button>
          </Box>
        </Box>

        {/* Main Content */}
        <Box className={classes.content}>
          <Box className={classes.availabilityBadge}>
            <FiberManualRecordIcon className={classes.greenDot} />
            <Typography className={classes.availabilityText}>
              Available now, only 3 spots left
            </Typography>
          </Box>

          <Typography variant="h1" className={classes.heading1}>
            Automation Agency
          </Typography>

          <Typography variant="h2" className={classes.heading2}>
            Beyond <span className={classes.diamond}>✦</span> Limits.
          </Typography>

          <Typography variant="h3" className={classes.heading3}>
            Amplified With AI.
          </Typography>

          <Typography variant="body1" className={classes.description}>
            Design services at your fingertips. Pause or cancel anytime.
          </Typography>

          <Button
            variant="contained"
            className={classes.learnMoreButton}
            endIcon={<KeyboardArrowDownIcon className={classes.buttonIcon} />}
            disableRipple
          >
            Learn More
          </Button>

          {/* Footer */}
          <Box className={classes.footerSection}>
            <Typography className={classes.footerText}>
              Our services are featured on
            </Typography>

            <Box className={classes.partnerLogos}>
              <Typography className={classes.logoItem}>
                <Box component="span" sx={{ marginRight: "5px" }}>
                  ●
                </Box>{" "}
                Optimal
              </Typography>
              <Typography className={classes.logoItem}>
                <Box component="span" sx={{ marginRight: "5px" }}>
                  ⚡
                </Box>{" "}
                Zapfast
              </Typography>
              <Typography className={classes.logoItem}>
                <Box component="span" sx={{ marginRight: "5px" }}>
                  ◑
                </Box>{" "}
                Grapho
              </Typography>
              <Typography className={classes.logoItem}>
                <Box component="span" sx={{ marginRight: "5px" }}>
                  ◯
                </Box>{" "}
                Signum.
              </Typography>
              <Typography className={classes.logoItem}>
                <Box component="span" sx={{ marginRight: "5px" }}>
                  ◍
                </Box>{" "}
                Vectr
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}
