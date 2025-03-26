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
import EmojiTransportationIcon from "@mui/icons-material/EmojiTransportation";
import CallIcon from "@mui/icons-material/Call";
import EmailIcon from "@mui/icons-material/Email";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import { motion } from "framer-motion";
// import Joinfaq from "../../components/joinFAQ";
// import JoinFooter from "../../components/JoinFooter";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { styled } from "@mui/material/styles";

// Create individual styled components
const StyledRoot = styled("div")({
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
});

const StyledNavbar = styled(motion.div)(({ theme }) => ({
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
  [theme.breakpoints.down("lg")]: {
    width: "calc(95% - 40px)",
    padding: "0 15px",
  },
  [theme.breakpoints.down("sm")]: {
    width: "calc(90% - 20px)",
    padding: "0 10px",
    margin: "10px",
  },
}));

const StyledTextField = styled(TextField)({
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
});

const StyledTextArea = styled(TextareaAutosize)({
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
});

const StyledNavItems = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flex: "1",
  marginLeft: "20px",
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));

const StyledMobileMenu = styled(Box)(({ theme }) => ({
  display: "none",
  [theme.breakpoints.down("md")]: {
    display: "flex",
    alignItems: "center",
    marginLeft: "10px",
  },
}));

const StyledNavButtonContainer = styled(motion.div)({
  display: "flex",
  alignItems: "center",
  marginLeft: "auto",
});

const StyledTalkButton = styled(Button)(({ theme }) => ({
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
  [theme.breakpoints.down("sm")]: {
    padding: "3px 12px",
    fontSize: "14px",
    marginRight: "5px",
  },
}));

const StyledContent = styled(Box)(({ theme }) => ({
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
  padding: "110 20px",
  [theme.breakpoints.down("sm")]: {
    paddingTop: "80px",
    padding: "0 15px",
  },
}));

const StyledSlideUpContainer = styled(motion.div)({
  borderRadius: "8px",
  padding: "15px 25px",
  marginBottom: "20px",
  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
});

const StyledHeading3 = styled(Typography)(({ theme }) => ({
  color: "white",
  fontSize: "3rem",
  fontWeight: "400",
  lineHeight: 1.1,
  margin: 0,
  marginBottom: "20px",
  [theme.breakpoints.down("md")]: {
    fontSize: "2.5rem",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "2rem",
  },
  [theme.breakpoints.down("xs")]: {
    fontSize: "1.8rem",
  },
}));

const StyledDescription = styled(Typography)(({ theme }) => ({
  color: "#AFAFAF",
  width: "100%",
  fontSize: "1.2rem",
  fontWeight: "400",
  maxWidth: "850px",
  marginBottom: "50px",
  lineHeight: "1.6",
  [theme.breakpoints.down("md")]: {
    fontSize: "1.1rem",
    maxWidth: "90%",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "1rem",
    marginBottom: "40px",
  },
  [theme.breakpoints.down("xs")]: {
    fontSize: "0.9rem",
    lineHeight: "1.5",
  },
}));

const StyledNavLink = styled(Typography)({
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
});

const StyledFormContainer = styled(motion.div)(({ theme }) => ({
  backgroundColor: "#1A1A1A",
  borderRadius: "30px",
  padding: "40px",
  maxWidth: "850px",
  width: "100%",
  marginBottom: "60px",
  [theme.breakpoints.down("md")]: {
    padding: "30px 20px",
  },
}));

const StyledFormRow = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  gap: "20px",
  marginBottom: "20px",
  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
    gap: "15px",
  },
}));

const StyledFormField = styled(Box)({
  flex: "1",
  width: "100%",
});

const StyledInputLabel = styled("label")({
  color: "white",
  fontSize: "0.9rem",
  marginBottom: "8px",
  display: "block",
  textAlign: "left",
});

const StyledSubmitButton = styled("button")({
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
});

const StyledSubmitContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginTop: "30px",
  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
    alignItems: "flex-start",
    gap: "15px",
  },
}));

const StyledContactNote = styled(Box)({
  color: "#AFAFAF",
  fontSize: "1.1rem",
  textAlign: "right",
});

const StyledContactInfoSection = styled(motion.div)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-around",
  width: "100%",
  maxWidth: "800px",
  marginTop: "40px",
  marginBottom: "60px",
  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
    gap: "30px",
    alignItems: "center",
  },
}));

const StyledContactInfoItem = styled(Box)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  color: "white",
});

const StyledContactIcon = styled(Box)({
  backgroundColor: "#222",
  width: "50px",
  height: "50px",
  borderRadius: "50%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  marginBottom: "15px",
});

const StyledContactTitle = styled("h3")({
  color: "white",
  fontSize: "1.1rem",
  marginBottom: "10px",
});

const StyledContactDetail = styled("p")({
  color: "#AFAFAF",
  fontSize: "0.9rem",
  textAlign: "center",
});

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
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [menuOpen, setMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: "",
    budget: "",
    details: "",
  });

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <>
      <StyledRoot>
        {/* Navbar */}
        <StyledNavbar
          initial="hidden"
          animate="visible"
          variants={navbarAnimation}
        >
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
          <StyledNavItems sx={{ justifyContent: "center", flex: "1" }}>
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.4 }}
            >
              <StyledNavLink variant="body1">Founders</StyledNavLink>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.4 }}
            >
              <StyledNavLink variant="body1">Investors</StyledNavLink>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.4 }}
              style={{ display: "flex", alignItems: "center" }}
            >
              <StyledNavLink variant="body1">
                Partners
                <ExpandMoreIcon style={{ fontSize: 16, marginLeft: 4 }} />
              </StyledNavLink>
            </motion.div>
          </StyledNavItems>

          {/* Mobile Menu Icon */}
          <StyledMobileMenu>
            <motion.div
              whileHover={{ rotate: 180 }}
              transition={{ duration: 0.3 }}
            >
              <MenuIcon
                style={{ color: "white", fontSize: "24px", cursor: "pointer" }}
                onClick={toggleMenu}
              />
            </motion.div>
          </StyledMobileMenu>

          {/* Button on right side */}
          <StyledNavButtonContainer
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            whileHover="hover"
            variants={buttonHover}
          >
            <StyledTalkButton
              href="/pages/join"
              disableRipple
              endIcon={
                <ArrowOutwardIcon style={{ fontSize: 14, marginLeft: 4 }} />
              }
            >
              Join
            </StyledTalkButton>
          </StyledNavButtonContainer>
        </StyledNavbar>

        {/* Main Content */}
        <StyledContent>
          <StyledSlideUpContainer
            initial="hidden"
            animate="visible"
            variants={slideUp}
            custom={0.5}
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

            <StyledHeading3 variant="h2" style={{ marginBottom: 0 }}>
              We're Here To Help
            </StyledHeading3>

            <StyledDescription
              variant="body1"
              style={{ marginTop: "20px", marginBottom: "10px" }}
            >
              Our team is ready to support you with expert advice & solutions.
            </StyledDescription>
          </StyledSlideUpContainer>

          {/* Contact Form */}
          <StyledFormContainer
            initial="hidden"
            animate="visible"
            variants={slideUp}
            custom={3}
          >
            <form>
              <StyledFormRow>
                <StyledFormField>
                  <StyledInputLabel>Name *</StyledInputLabel>
                  <StyledTextField
                    variant="standard"
                    name="name"
                    placeholder="David Johnson"
                    fullWidth
                    onChange={handleChange}
                    value={formData.name}
                  />
                </StyledFormField>
                <StyledFormField>
                  <StyledInputLabel>Email *</StyledInputLabel>
                  <StyledTextField
                    variant="standard"
                    name="email"
                    placeholder="example@mail.com"
                    fullWidth
                    onChange={handleChange}
                    value={formData.email}
                  />
                </StyledFormField>
              </StyledFormRow>

              <StyledFormRow>
                <StyledFormField>
                  <StyledInputLabel>Company Name *</StyledInputLabel>
                  <StyledTextField
                    variant="standard"
                    name="company"
                    placeholder="Ex. StaticMania"
                    fullWidth
                    onChange={handleChange}
                    value={formData.company}
                  />
                </StyledFormField>
              </StyledFormRow>

              <StyledFormRow>
                <StyledFormField>
                  <StyledInputLabel>Select Service *</StyledInputLabel>
                  <StyledTextField
                    select
                    variant="standard"
                    name="service"
                    fullWidth
                    onChange={handleChange}
                    value={formData.service}
                  >
                    <MenuItem value="">Select Your Service</MenuItem>
                    <MenuItem value="web">Web Development</MenuItem>
                    <MenuItem value="app">App Development</MenuItem>
                    <MenuItem value="design">UI/UX Design</MenuItem>
                  </StyledTextField>
                </StyledFormField>
                <StyledFormField>
                  <StyledInputLabel>Project Budget *</StyledInputLabel>
                  <StyledTextField
                    select
                    variant="standard"
                    name="budget"
                    fullWidth
                    onChange={handleChange}
                    value={formData.budget}
                  >
                    <MenuItem value="">Select Your Range</MenuItem>
                    <MenuItem value="small">$5,000 - $10,000</MenuItem>
                    <MenuItem value="medium">$10,000 - $50,000</MenuItem>
                    <MenuItem value="large">$50,000+</MenuItem>
                  </StyledTextField>
                </StyledFormField>
              </StyledFormRow>

              <StyledFormRow>
                <StyledFormField>
                  <StyledInputLabel>Project Details</StyledInputLabel>
                  <StyledTextArea
                    name="details"
                    placeholder="Tell us more about your project"
                    minRows={1}
                    onChange={handleChange}
                    value={formData.details}
                  />
                </StyledFormField>
              </StyledFormRow>

              <StyledSubmitContainer>
                <StyledSubmitButton>
                  Submit{" "}
                  <ArrowOutwardIcon style={{ fontSize: 16, marginLeft: 4 }} />
                </StyledSubmitButton>
                <StyledContactNote>
                  We will contact you within 24 business hours.
                </StyledContactNote>
              </StyledSubmitContainer>
            </form>
          </StyledFormContainer>

          {/* Contact Information */}
          <StyledContactInfoSection
            initial="hidden"
            animate="visible"
            variants={slideUp}
            custom={4}
          >
            <StyledContactInfoItem>
              <StyledContactIcon>
                <span style={{ fontSize: "20px" }}>
                  <EmojiTransportationIcon />
                </span>
              </StyledContactIcon>
              <StyledContactTitle>Head Office</StyledContactTitle>
              <StyledContactDetail>
                5899 Alexys Highway Suite
                <br />
                678, NR, Nevada, USA
              </StyledContactDetail>
            </StyledContactInfoItem>

            <StyledContactInfoItem>
              <StyledContactIcon>
                <span style={{ fontSize: "20px" }}>
                  <CallIcon />
                </span>
              </StyledContactIcon>
              <StyledContactTitle>Phone</StyledContactTitle>
              <StyledContactDetail>
                +1 234 567 890
                <br />
                +1 234 567 890
              </StyledContactDetail>
            </StyledContactInfoItem>

            <StyledContactInfoItem>
              <StyledContactIcon>
                <span style={{ fontSize: "20px" }}>
                  <EmailIcon />
                </span>
              </StyledContactIcon>
              <StyledContactTitle>Email</StyledContactTitle>
              <StyledContactDetail>
                customer@automx.com
                <br />
                client@automx.com
              </StyledContactDetail>
            </StyledContactInfoItem>
          </StyledContactInfoSection>
      {/* <Joinfaq />
      <JoinFooter /> */}
        </StyledContent>
      </StyledRoot>
    </>
  );
}
