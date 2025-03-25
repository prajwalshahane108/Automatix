"use client";
import Image from "next/image";
import {
  Box,
  Typography,
  Button,
  useMediaQuery,
  TextField,
  useTheme,
  MenuItem,  
  TextareaAutosize,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import EmojiTransportationIcon from "@mui/icons-material/EmojiTransportation";
import CallIcon from "@mui/icons-material/Call";
import EmailIcon from "@mui/icons-material/Email";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import { motion } from "framer-motion";
import Joinfaq from "../../components/joinFAQ";
import JoinFooter from "../../components/JoinFooter";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#000",
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
    width: "calc(65% - 40px)",
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
  textField: {
    width: "100%",
    "& .MuiInputBase-root": {
      color: "white",
    },
    "& .MuiInput-underline:before": {
      borderBottomColor: "rgba(255, 255, 255, 0.3)",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "#E87811",
    },
    "& .MuiInput-underline:hover:not(.Mui-disabled):before": {
      borderBottomColor: "rgba(255, 255, 255, 0.5)",
    },
    "& .MuiFormLabel-root": {
      color: "#AFAFAF",
    },
    "& .MuiFormLabel-root.Mui-focused": {
      color: "#E87811",
    },
    "& .MuiSelect-icon": {
      color: "#AFAFAF",
    },
  },
  selectField: {
    width: "100%",
    "& .MuiSelect-select": {
      padding: "10px 0",
    },
  },
  textArea: {
    width: "100%",
    backgroundColor: "transparent",
    border: "none",
    borderBottom: "1px solid rgba(255, 255, 255, 0.3)",
    color: "white",
    fontSize: "1rem",
    padding: "10px 0",
    resize: "vertical",
    minHeight: "100px",
    fontFamily: "inherit",
    "&:focus": {
      outline: "none",
      borderBottomColor: "#E87811",
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
    justifyContent: "center",
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
      marginLeft: "10px",
    },
  },
  mobileMenuIcon: {
    color: "white",
    fontSize: "24px",
    cursor: "pointer",
  },
  navButtonContainer: {
    display: "flex",
    alignItems: "center",
    marginLeft: "auto",
  },
  talkButton: {
    backgroundColor: "#161616",
    color: "white",
    border: "1px solid rgba(253, 245, 245, 0.87)",
    borderRadius: "8px",
    padding: "3px 22px",
    textTransform: "none",
    fontSize: "15px",
    whiteSpace: "nowrap",
    marginRight: "10px",
    "&:hover": {
      backgroundColor: "rgba(255, 255, 255, 0.05)",
    },
    "@media (max-width: 600px)": {
      padding: "3px 12px",
      fontSize: "14px",
      marginRight: "5px",
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
    paddingTop: "230px",
    width: "100%",
    maxWidth: "1200px",
    position: "relative",
    padding: "0 20px",
    "@media (max-width: 600px)": {
      paddingTop: "80px",
      padding: "0 15px",
    },
  },
  slideUpContainer: {
    borderRadius: "8px",
    padding: "15px 25px",
    marginBottom: "20px",
    // backgroundColor: "rgba(22, 22, 22, 0.5)",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
    "@media (max-width: 600px)": {
      padding: "10px 15px",
    },
  },
  heading3: {
    color: "white",
    fontSize: "3rem",
    fontWeight: "400",
    lineHeight: 1.1,
    margin: 0,
    marginBottom: "20px",
    "@media (max-width: 900px)": {
      fontSize: "2.5rem",
    },
    "@media (max-width: 600px)": {
      fontSize: "2rem",
    },
    "@media (max-width: 480px)": {
      fontSize: "1.8rem",
    },
  },
  description: {
    color: "#AFAFAF",
    width: "100%",
    fontSize: "1.2rem",
    fontWeight: "400",
    maxWidth: "850px",
    marginBottom: "50px",
    lineHeight: "1.6",
    "@media (max-width: 900px)": {
      fontSize: "1.1rem",
      maxWidth: "90%",
    },
    "@media (max-width: 600px)": {
      fontSize: "1rem",
      marginBottom: "40px",
    },
    "@media (max-width: 480px)": {
      fontSize: "0.9rem",
      lineHeight: "1.5",
    },
  },
  navLink: {
    color: "#AFAFAF",
    margin: "0 12px",
    fontSize: "16.5px",
    fontWeight: "400",
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
  formContainer: {
    backgroundColor: "#1A1A1A",
    borderRadius: "30px",
    padding: "40px",
    maxWidth: "850px",
    width: "100%",
    marginBottom: "60px",
    "@media (max-width: 768px)": {
      padding: "30px 20px",
    },
  },
  formRow: {
    display: "flex",
    justifyContent: "space-between",
    gap: "20px",
    marginBottom: "20px",
    "@media (max-width: 768px)": {
      flexDirection: "column",
      gap: "15px",
    },
  },
  formField: {
    flex: "1",
    width: "100%",
  },
  inputLabel: {
    color: "white",
    fontSize: "0.9rem",
    marginBottom: "8px",
    display: "block",
    textAlign: "left",
  },
  inputField: {
    width: "100%",
    padding: "12px 15px",
    backgroundColor: "#222222",
    border: "none",
    borderRadius: "5px",
    color: "white",
    fontSize: "0.9rem",
  },
  selectField: {
    width: "100%",
    padding: "12px 15px",
    backgroundColor: "#222222",
    border: "none",
    borderRadius: "5px",
    color: "#999",
    fontSize: "0.9rem",
    appearance: "none",
    backgroundImage:
      'url(\'data:image/svg+xml;utf8,<svg fill="%23999" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 10l5 5 5-5z"/></svg>\')',
    backgroundRepeat: "no-repeat",
    backgroundPosition: "right 10px center",
  },
  textArea: {
    width: "100%",
    padding: "12px 15px",
    backgroundColor: "#222222",
    border: "none",
    borderRadius: "5px",
    color: "white",
    fontSize: "0.9rem",
    resize: "vertical",
    minHeight: "100px",
  },
  submitButton: {
    padding: "14px 25px",
    backgroundColor: "#E87811",
    color: "white",
    border: "none",
    borderRadius: "10px",
    fontSize: "1rem",
    fontWeight: "500",
    cursor: "pointer",
    transition: "background-color 0.3s",
    "&:hover": {
      backgroundColor: "#D16700",
    },
  },
  submitContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: "30px",
  },
  contactNote: {
    color: "#AFAFAF",
    fontSize: "1.1rem",
    textAlign: "right",
    "@media (max-width: 768px)": {
      textAlign: "left",
      marginTop: "15px",
    },
  },
  contactInfoSection: {
    display: "flex",
    justifyContent: "space-around",
    width: "100%",
    maxWidth: "800px",
    marginTop: "40px",
    marginBottom: "60px",
    "@media (max-width: 768px)": {
      flexDirection: "column",
      gap: "30px",
      alignItems: "center",
    },
  },
  contactInfoItem: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    color: "white",
  },
  contactIcon: {
    backgroundColor: "#222",
    width: "50px",
    height: "50px",
    borderRadius: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: "15px",
  },
  contactTitle: {
    color: "white",
    fontSize: "1.1rem",
    marginBottom: "10px",
  },
  contactDetail: {
    color: "#AFAFAF",
    fontSize: "0.9rem",
    textAlign: "center",
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
      delay: custom * 0.2,
    },
  }),
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

const buttonHover = {
  rest: { scale: 1 },
  hover: { scale: 1.05, transition: { duration: 0.2 } },
};

export default function Home() {
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [menuOpen, setMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    budget: '',
    details: ''
  });

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
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
          <Box
            className={classes.navItems}
            sx={{ justifyContent: "center", flex: "1" }}
          >
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.4 }}
            >
              <Typography variant="body1" className={classes.navLink}>
                Founders
              </Typography>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.4 }}
            >
              <Typography variant="body1" className={classes.navLink}>
                Investors
              </Typography>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.4 }}
              style={{ display: "flex", alignItems: "center" }}
            >
              <Typography variant="body1" className={classes.navLink}>
                Partners
                <ExpandMoreIcon className={classes.expandIcon} />
              </Typography>
            </motion.div>
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

        {/* Main Content */}
        <Box className={classes.content}>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={slideUp}
            custom={0.5}
            className={classes.slideUpContainer}
          >
            <Typography
              variant="body1"
              style={{
                color: "#AFAFAF",
                fontSize: "1rem",
                marginBottom: "5px",
              }}
            >
              Let's Talk
            </Typography>

            <Typography
              variant="h2"
              className={classes.heading3}
              style={{ marginBottom: 0 }}
            >
              We're Here To Help
            </Typography>

            <Typography
              variant="body1"
              className={classes.description}
              style={{ marginTop: "20px", marginBottom: "10px" }}
            >
              Our team is ready to support you with expert advice & solutions.
            </Typography>
          </motion.div>

          {/* Contact Form */}
          {/* Contact Form */}
<motion.div 
  initial="hidden"
  animate="visible"
  variant="standard"
  custom={3}
  className={classes.formContainer}
>
  <form>
    <div className={classes.formRow}>
      <div className={classes.formField}>
        <label className={classes.inputLabel}>Name *</label>
        <TextField
          variant="standard"
          name="name"
          placeholder="David Johnson"
          fullWidth
          InputProps={{
            className: classes.textField
          }}
          onChange={handleChange}
          value={formData.name}
          className={classes.textField}
        />
      </div>
      <div className={classes.formField}>
        <label className={classes.inputLabel}>Email *</label>
        <TextField
          variant="standard"
          name="email"
          placeholder="example@mail.com"
          fullWidth
          InputProps={{
            className: classes.textField
          }}
          onChange={handleChange}
          value={formData.email}
          className={classes.textField}
        />
      </div>
    </div>

    <div className={classes.formRow}>
      <div className={classes.formField}>
        <label className={classes.inputLabel}>Company Name *</label>
        <TextField
          variant="standard"
          name="company"
          placeholder="Ex. StaticMania"
          fullWidth
          InputProps={{
            className: classes.textField
          }}
          onChange={handleChange}
          value={formData.company}
          className={classes.textField}
        />
      </div>
    </div>

    <div className={classes.formRow}>
      <div className={classes.formField}>
        <label className={classes.inputLabel}>Select Service *</label>
        <TextField
          select
          variant="standard"
          name="service"
          fullWidth
          onChange={handleChange}
          value={formData.service}
          className={`${classes.textField} ${classes.selectField}`}
        >
          <MenuItem value="">Select Your Service</MenuItem>
          <MenuItem value="web">Web Development</MenuItem>
          <MenuItem value="app">App Development</MenuItem>
          <MenuItem value="design">UI/UX Design</MenuItem>
        </TextField>
      </div>
      <div className={classes.formField}>
        <label className={classes.inputLabel}>Project Budget *</label>
        <TextField
          select
          variant="standard"
          name="budget"
          fullWidth
          onChange={handleChange}
          value={formData.budget}
          className={`${classes.textField} ${classes.selectField}`}
        >
          <MenuItem value="">Select Your Range</MenuItem>
          <MenuItem value="small">$5,000 - $10,000</MenuItem>
          <MenuItem value="medium">$10,000 - $50,000</MenuItem>
          <MenuItem value="large">$50,000+</MenuItem>
        </TextField>
      </div>
    </div>

    <div className={classes.formRow}>
      <div className={classes.formField}>
        <label className={classes.inputLabel}>Project Details</label>
        <TextareaAutosize
          name="details"
          placeholder="Tell us more about your project"
          minRows={1}
          className={classes.textArea}
          onChange={handleChange}
          value={formData.details}
        />
      </div>
    </div>

    <div className={classes.submitContainer}>
      <button className={classes.submitButton}>
        Submit <ArrowOutwardIcon style={{ fontSize: 16, marginLeft: 4 }} />
      </button>
      <div className={classes.contactNote}>
        We will contact you within 24 business hours.
      </div>
    </div>
  </form>
</motion.div>

          {/* Contact Information */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={slideUp}
            custom={4}
            className={classes.contactInfoSection}
          >
            <div className={classes.contactInfoItem}>
              <div className={classes.contactIcon}>
                <span style={{ fontSize: "20px" }}>
                  <EmojiTransportationIcon />
                </span>
              </div>
              <h3 className={classes.contactTitle}>Head Office</h3>
              <p className={classes.contactDetail}>
                5899 Alexys Highway Suite
                <br />
                678, NR, Nevada, USA
              </p>
            </div>

            <div className={classes.contactInfoItem}>
              <div className={classes.contactIcon}>
                <span style={{ fontSize: "20px" }}>
                  <CallIcon />
                </span>
              </div>
              <h3 className={classes.contactTitle}>Phone</h3>
              <p className={classes.contactDetail}>
                +1 234 567 890
                <br />
                +1 234 567 890
              </p>
            </div>

            <div className={classes.contactInfoItem}>
              <div className={classes.contactIcon}>
                <span style={{ fontSize: "20px" }}>
                  <EmailIcon />
                </span>
              </div>
              <h3 className={classes.contactTitle}>Email</h3>
              <p className={classes.contactDetail}>
                customer@automx.com
                <br />
                client@automx.com
              </p>
            </div>
          </motion.div>
        </Box>
        <Joinfaq />
        <JoinFooter />
      </div>
    </>
  );
}
