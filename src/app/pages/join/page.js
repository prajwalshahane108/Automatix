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
  Radio,
  RadioGroup,
  FormControlLabel,
  TextareaAutosize,
  Drawer,
  List,
  ListItem,
  IconButton,
  Divider,
} from "@mui/material";
import EmojiTransportationIcon from "@mui/icons-material/EmojiTransportation";
import CallIcon from "@mui/icons-material/Call";
import EmailIcon from "@mui/icons-material/Email";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
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
  minHeight: "80px",
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

const StyledNavButtonContainer = styled(motion.div)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  marginLeft: "auto",
  [theme.breakpoints.down("sm")]: {
    display: "none",
  },
}));

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

// Mobile Drawer styles
const StyledDrawer = styled(Drawer)({
  "& .MuiDrawer-paper": {
    width: "75%",
    maxWidth: "300px",
    backgroundColor: "#111111",
    color: "white",
    boxSizing: "border-box",
    padding: "20px",
  },
});

const StyledDrawerHeader = styled(Box)({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "10px 0",
  marginBottom: "20px",
});

const StyledDrawerList = styled(List)({
  padding: 0,
});

const StyledDrawerItem = styled(ListItem)({
  padding: "15px 0",
  borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
  "&:last-child": {
    borderBottom: "none",
  },
});

const StyledDrawerLink = styled(Typography)({
  color: "white",
  fontSize: "1.1rem",
  display: "flex",
  alignItems: "center",
  width: "100%",
  "&:hover": {
    color: "#E87811",
  },
});

const StyledDrawerButton = styled(Button)({
  backgroundColor: "#E87811",
  color: "white",
  borderRadius: "8px",
  padding: "10px 25px",
  textTransform: "none",
  fontSize: "1rem",
  marginTop: "20px",
  width: "100%",
  "&:hover": {
    backgroundColor: "#D16700",
  },
});

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

// const StyledFormContainer = styled(motion.div)(({ theme }) => ({
//   backgroundColor: "#1A1A1A",
//   borderRadius: "30px",
//   padding: "40px",
//   maxWidth: "850px",
//   width: "100%",
//   marginBottom: "60px",
//   [theme.breakpoints.down("md")]: {
//     padding: "30px 20px",
//   },
// }));
const StyledFormContainer = styled(motion.div)(({ theme }) => ({
  backgroundColor: "#1A1A1A",
  borderRadius: "30px",
  padding: "40px",
  maxWidth: "850px",
  width: "100%",
  marginBottom: "60px",
  position: "relative",
  overflow: "hidden",
  
  // Add this for the circular glow effect in the top-left corner
  "&::before": {
    content: '""',
    position: "absolute",
    top: "-100px",
    left: "-100px",
    width: "250px",
    height: "250px",
    borderRadius: "50%",
    background: "radial-gradient(circle, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0) 70%)",
    pointerEvents: "none",
  },
  "&::after": {
  content: '""',
  position: "absolute",
  top: "-50px",
  left: "-50px",
  width: "350px",
  height: "350px",
  borderRadius: "50%",
  background: "radial-gradient(circle, rgba(255, 255, 255, 0.13) -50%, rgba(255, 255, 255, 0) 60%)",
  pointerEvents: "none",
  zIndex: 0,
},
  [theme.breakpoints.down("md")]: {
    padding: "30px 20px",
  },
}));
const StyledFormRow = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
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
  // hidden: { y: 50, opacity

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

const StyledRadio = styled(Radio)({
  color: "rgba(255, 255, 255, 0.5)",
  "&.Mui-checked": {
    color: "#E87811",
  },
});

const StyledRadioLabel = styled(Typography)({
  color: "white",
  fontSize: "0.95rem",
});
export default function Home() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [menuOpen, setMenuOpen] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: "",
    budget: "",
    details: "",
    role: "founder",
  });

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setDrawerOpen(open);
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
          {/* <StyledNavItems sx={{ justifyContent: "center", flex: "1" }}>
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
          </StyledNavItems> */}

          {/* Mobile Menu Icon */}
          <StyledMobileMenu>
            <motion.div
              whileHover={{ rotate: 180 }}
              transition={{ duration: 0.3 }}
            >
              <MenuIcon
                style={{ color: "white", fontSize: "24px", cursor: "pointer", marginRight: "8px" }}
                onClick={toggleDrawer(true)}
              />
            </motion.div>
          </StyledMobileMenu>

          {/* Mobile Drawer */}
          <StyledDrawer
            anchor="right"
            open={drawerOpen}
            onClose={toggleDrawer(false)}
           >
            <StyledDrawerHeader>
              <Box display="flex" alignItems="center">
                <Image
                  src="/logo.png"
                  alt="Logo"
                  width={35}
                  height={35}
                  style={{ marginRight: "8px" }}
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
                    fontSize: "1.1rem",
                  }}
                >
                  MyFounders.Club
                </Typography>
              </Box>
              <IconButton
                onClick={toggleDrawer(false)}
                sx={{ color: "white", padding: "8px" }}
              >
                <CloseIcon />
              </IconButton>
            </StyledDrawerHeader>
            
            <Divider sx={{ backgroundColor: "rgba(255,255,255,0.1)", my: 1 }} />
            
            {/* <StyledDrawerList>
              <StyledDrawerItem>
                <StyledDrawerLink>
                  Founders
                </StyledDrawerLink>
              </StyledDrawerItem>
              <StyledDrawerItem>
                <StyledDrawerLink>
                  Investors
                </StyledDrawerLink>
              </StyledDrawerItem>
              <StyledDrawerItem>
                <StyledDrawerLink>
                  Partners <ExpandMoreIcon style={{ fontSize: 20, marginLeft: 4 }} />
                </StyledDrawerLink>
              </StyledDrawerItem>
            </StyledDrawerList> */}
            
            <Box sx={{ mt: 3, px: 1 }}>
              <StyledDrawerButton
                disableRipple
                endIcon={<ArrowOutwardIcon style={{ fontSize: 16 }} />}
              >
                Join
              </StyledDrawerButton>
            </Box>
          </StyledDrawer>

          {/* Button on right side */}
          <StyledNavButtonContainer
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            whileHover="hover"
            variants={buttonHover}
          >
            <StyledTalkButton
              // href="/pages/NewJoin"
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
              {/* New Radio Options Section */}
              <StyledFormRow sx={{ marginBottom: "30px" }}>
                <StyledFormField>
                  {/* <StyledInputLabel sx={{ fontSize: "1.1rem", marginBottom: "32px" }}>I am a </StyledInputLabel> */}
                  <RadioGroup
                    row
                    name="role"
                    value={formData.role}
                    onChange={handleChange}
                    sx={{ marginTop: "12px" }}
                  >
                    <FormControlLabel
                      value="founder"
                      control={
                        <Radio
                          sx={{
                            color: "rgba(255, 255, 255, 0.5)",
                            "&.Mui-checked": {
                              color: "#E87811",
                            },
                            '& .MuiSvgIcon-root': {
                              fontSize: 24,
                            },
                          }}
                        />
                      }
                      label={
                        <Typography
                          sx={{ color: "white", fontSize: "1.1rem" }}
                        >
                          Founder
                        </Typography>
                      }
                    />
                    <FormControlLabel
                      value="investor"
                      control={
                        <Radio
                          sx={{
                            color: "rgba(255, 255, 255, 0.5)",
                            "&.Mui-checked": {
                              color: "#E87811",
                            },
                            '& .MuiSvgIcon-root': {
                              fontSize: 24,
                            },
                          }}
                        />
                      }
                      label={
                        <Typography
                          sx={{ color: "white", fontSize: "1.1rem" }}
                        >
                          Investor
                        </Typography>
                      }
                    />
                    <FormControlLabel
                      value="partner"
                      control={
                        <Radio
                          sx={{
                            color: "rgba(255, 255, 255, 0.5)",
                            "&.Mui-checked": {
                              color: "#E87811",
                            },
                            '& .MuiSvgIcon-root': {
                              fontSize: 24,
                            },
                          }}
                        />
                      }
                      label={
                        <Typography
                          sx={{ color: "white", fontSize: "1.1rem" }}
                        >
                          Partner
                        </Typography>
                      }
                    />
                  </RadioGroup>
                </StyledFormField>
              </StyledFormRow>

              <StyledFormRow sx={{ marginBottom: "80px" }}>
                <StyledFormField>
                  <StyledInputLabel sx={{ fontSize: "1.1rem", marginBottom: "12px" }}>Name *</StyledInputLabel>
                  <StyledTextField
                    variant="standard"
                    name="name"
                    placeholder="David Johnson"
                    fullWidth
                    onChange={handleChange}
                    value={formData.name}
                    InputProps={{
                      style: { fontSize: '1.1rem', paddingBottom: '8px' },
                    }}
                    sx={{
                      '& .MuiInputBase-root': {
                        fontSize: '1.1rem',
                      },
                      '& .MuiInputBase-input::placeholder': {
                        fontSize: '1.1rem',
                      },
                    }}
                  />
                </StyledFormField>
                <StyledFormField>
                  <StyledInputLabel sx={{ fontSize: "1.1rem", marginBottom: "12px" }}>Email *</StyledInputLabel>
                  <StyledTextField
                    variant="standard"
                    name="email"
                    placeholder="example@mail.com"
                    fullWidth
                    onChange={handleChange}
                    value={formData.email}
                    InputProps={{
                      style: { fontSize: '1.1rem', paddingBottom: '8px' },
                    }}
                    sx={{
                      '& .MuiInputBase-root': {
                        fontSize: '1.1rem',
                      },
                      '& .MuiInputBase-input::placeholder': {
                        fontSize: '1.1rem',
                      },
                    }}
                  />
                </StyledFormField>
              </StyledFormRow>

              {/* Rest of the form remains unchanged */}
              <StyledFormRow sx={{ marginBottom: "80px" }}>
                <StyledFormField>
                  <StyledInputLabel sx={{ fontSize: "1.1rem", marginBottom: "12px" }}>Company Name *</StyledInputLabel>
                  <StyledTextField
                    variant="standard"
                    name="company"
                    placeholder="Ex. StaticMania"
                    fullWidth
                    onChange={handleChange}
                    value={formData.company}
                    InputProps={{
                      style: { fontSize: '1.1rem', paddingBottom: '8px' },
                    }}
                    sx={{
                      '& .MuiInputBase-root': {
                        fontSize: '1.1rem',
                      },
                      '& .MuiInputBase-input::placeholder': {
                        fontSize: '1.1rem',
                      },
                    }}
                  />
                </StyledFormField>
              </StyledFormRow>

              <StyledFormRow sx={{ marginBottom: "80px" }}>
                <StyledFormField>
                  <StyledInputLabel sx={{ fontSize: "1.1rem", marginBottom: "12px" }}>Select Service *</StyledInputLabel>
                  <StyledTextField
                    select
                    variant="standard"
                    name="service"
                    fullWidth
                    onChange={handleChange}
                    value={formData.service}
                    InputProps={{
                      style: { fontSize: '1.1rem', paddingBottom: '8px' },
                    }}
                    SelectProps={{
                      MenuProps: {
                        PaperProps: {
                          sx: {
                            '& .MuiMenuItem-root': {
                              fontSize: '1.1rem',
                            },
                          },
                        },
                      },
                    }}
                    sx={{
                      '& .MuiInputBase-root': {
                        fontSize: '1.1rem',
                      },
                      '& .MuiSelect-select': {
                        fontSize: '1.1rem',
                      },
                    }}
                  >
                    <MenuItem value="">Select Your Service</MenuItem>
                    <MenuItem value="web">Web Development</MenuItem>
                    <MenuItem value="app">App Development</MenuItem>
                    <MenuItem value="design">UI/UX Design</MenuItem>
                  </StyledTextField>
                </StyledFormField>
                <StyledFormField>
                  <StyledInputLabel sx={{ fontSize: "1.1rem", marginBottom: "12px" }}>Project Budget *</StyledInputLabel>
                  <StyledTextField
                    select
                    variant="standard"
                    name="budget"
                    fullWidth
                    onChange={handleChange}
                    value={formData.budget}
                    InputProps={{
                      style: { fontSize: '1.1rem', paddingBottom: '8px' },
                    }}
                    SelectProps={{
                      MenuProps: {
                        PaperProps: {
                          sx: {
                            '& .MuiMenuItem-root': {
                              fontSize: '1.1rem',
                            },
                          },
                        },
                      },
                    }}
                    sx={{
                      '& .MuiInputBase-root': {
                        fontSize: '1.1rem',
                      },
                      '& .MuiSelect-select': {
                        fontSize: '1.1rem',
                      },
                    }}
                  >
                    <MenuItem value="">Select Your Range</MenuItem>
                    <MenuItem value="small">$5,000 - $10,000</MenuItem>
                    <MenuItem value="medium">$10,000 - $50,000</MenuItem>
                    <MenuItem value="large">$50,000+</MenuItem>
                  </StyledTextField>
                </StyledFormField>
              </StyledFormRow>

              <StyledFormRow sx={{ marginBottom: "35px" }}>
                <StyledFormField>
                  <StyledInputLabel sx={{ fontSize: "1.1rem", marginBottom: "12px" }}>Project Details</StyledInputLabel>
                  <StyledTextArea
                    name="details"
                    placeholder="Tell us more about your project"
                    minRows={1}
                    onChange={handleChange}
                    value={formData.details}
                    style={{
                      fontSize: '1.1rem',
                      padding: '10px 0',
                      minHeight: '100px',
                    }}
                  />
                </StyledFormField>
              </StyledFormRow>

              <StyledSubmitContainer sx={{ marginTop: "40px" }}>
                <StyledSubmitButton style={{
                  padding: '16px 30px',
                  fontSize: '1.15rem',
                  fontWeight: '500',
                }}>
                  Submit{" "}
                  <ArrowOutwardIcon style={{ fontSize: 18, marginLeft: 6 }} />
                </StyledSubmitButton>
                <StyledContactNote sx={{ fontSize: '1.15rem' }}>
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