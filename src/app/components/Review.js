// components/TestimonialsSection.js
import React from "react";
import {
  Box,
  Typography,
  Grid,
  Container,
  Avatar,
  Rating,
} from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import { makeStyles } from "@mui/styles";
import BoltIcon from "@mui/icons-material/Bolt";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "black",
    backgroundImage:
      "radial-gradient(circle, rgba(75, 75, 75, 0.1) 1px, transparent 1px)",
    backgroundSize: "20px 20px",
    minHeight: "100vh",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "60px 20px",
  },
  sectionTag: {
    color: "#AFAFAF",
    backgroundColor: "rgb(0, 0, 0)",
    border: "1px solid rgba(202, 186, 186, 0.8)",
    borderRadius: "50px",
    padding: "4px 20px",
    fontSize: "14px",
    marginBottom: "30px",
    display: "inline-block",
  },
  sectionTitle: {
    color: "#AFAFAF",
    fontSize: "2.9rem",
    fontWeight: "600",
    textAlign: "center",
    marginBottom: "60px",
    "@media (max-width: 768px)": {
      fontSize: "2.5rem",
    },
  },
  featuredTestimonial: {
    display: "flex",
    width: "100%",
    maxWidth: "1010px",
    marginBottom: "80px",
    flexWrap: "wrap",
    "@media (max-width: 960px)": {
      flexDirection: "column",
      alignItems: "center",
    },
  },
  testimonialImage: {
    width: "100%",
    maxWidth: "400px",
    height: "400px",
    borderRadius: "16px",
    overflow: "hidden",
    marginRight: "40px",
    "@media (max-width: 960px)": {
      marginRight: "0",
      marginBottom: "30px",
    },
  },
  testimonialContent: {
    flex: 1,
    minWidth: "300px",
    "@media (max-width: 960px)": {
      textAlign: "center",
    },
  },
  companyLogo: {
    display: "flex",
    alignItems: "center",
    marginBottom: "20px",
  },
  logoIcon: {
    backgroundColor: "#E87811",
    borderRadius: "50%",
    width: "40px",
    height: "40px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginRight: "10px",
    color: "white",
  },
  companyName: {
    color: "white",
    fontSize: "1.5rem",
    fontWeight: "500",
  },
  testimonyText: {
    color: "#AFAFAF",
    fontSize: "2rem",
    fontWeight: "500",
    marginBottom: "30px",
    lineHeight: 1.4,
    "@media (max-width: 768px)": {
      fontSize: "1.5rem",
    },
  },
  personInfo: {
    marginBottom: "40px",
    borderTop: "20px",
    display: "flex",
    justifyContent: "flex-start",
    alignContent: "center ",
    gap: "20px",
  },
  personName: {
    color: "white",
    fontSize: "1.3rem",
    fontWeight: "500",
  },
  personTitle: {
    color: "rgba(255, 255, 255, 0.7)",
    fontSize: "1rem",
marginTop:"3px"
  },
  statsContainer: {
    display: "flex",
    gap: "40px",
    borderTop: "1px solid rgba(255, 255, 255, 0.1)",
    "@media (max-width: 768px)": {
      justifyContent: "center",
    },
  },
  statItem: {
    display: "flex",
    flexDirection: "column",
    marginTop: "10px",
  },
  statValue: {
    color: "white",
    fontSize: "2rem",
    fontWeight: "600",
  },
  statLabel: {
    color: "rgba(255, 255, 255, 0.7)",
    fontSize: "0.9rem",
  },
  testimonialCards: {
    display: "flex",
    width: "100%",
    maxWidth: "1200px",
    justifyContent: "space-between",
    gap: "20px",
    "@media (max-width: 960px)": {
      flexDirection: "column",
      alignItems: "center",
    },
  },
  testimonialCard: {
    flex: 1,
    minWidth: "300px",
    maxWidth: "380px",
    padding: "0 20px",
    borderRight: "1px solid rgba(255, 255, 255, 0.1)",
    "&:last-child": {
      borderRight: "none",
    },
    "@media (max-width: 960px)": {
      borderRight: "none",
      borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
      paddingBottom: "30px",
      marginBottom: "30px",
      "&:last-child": {
        borderBottom: "none",
      },
    },
  },
  companyLogoSmall: {
    color: "rgba(255, 255, 255, 0.7)",
    fontSize: "1.2rem",
    fontWeight: "500",
    marginBottom: "10px",
    display: "block",
    textAlign: "center",
  },
  ratingContainer: {
    display: "flex",
    justifyContent: "center",
    marginBottom: "20px",
  },
  cardTestimony: {
    color: "rgba(255, 255, 255, 0.8)",
    fontSize: "1rem",
    textAlign: "center",
    marginBottom: "20px",
    lineHeight: 1.6,
  },
  cardPersonInfo: {
    textAlign: "center",
  },
  cardPersonName: {
    color: "#ff5B23",
    fontSize: "1.1rem",
    fontWeight: "500",
  },
  cardPersonTitle: {
    color: "rgba(255, 255, 255, 0.7)",
    fontSize: "0.9rem",
  },
}));

function TestimonialsSection() {
  const classes = useStyles();

  // Featured testimonial data
  const featuredTestimonial = {
    image: "/zapfast.png", // Replace with an actual image path
    company: "Zapfast",
    testimony:
      '"Automatix\'s Fusion Of AI And Innovation Set Our Project Apart. Their Solutions Are Second To None."',
    personName: "Zidane Muharto",
    personTitle: "Chief Technology Officer",
    stats: [
      {
        value: "73%",
        label: "Sales increase in first month.",
      },
      {
        value: "5X",
        label: "Faster customer resolutions.",
      },
    ],
  };

  // Card testimonials data
  const cardTestimonials = [
    {
      company: "CreativEdge",
      rating: <StarIcon />,
      testimony:
        '"The creativity and AI expertise from Automatix set a new benchmark for our industry. Highly recommended!"',
      personName: "Agus Blimbing",
      personTitle: "Tech Manager",
    },
    {
      company: "BrightNest",
      rating: <StarIcon />,
      testimony:
        '"Automatix\'s revolutionary AI approach and creative solutions elevated our project. Stellar performance!"',
      personName: "Steve Kebalen",
      personTitle: "AI Developer",
    },
    {
      company: "PrimeCore",
      rating: <StarIcon />,
      testimony:
        '"The blend of AI and creativity at Automatix transformed our vision into reality. Exceptional support!"',
      personName: "John Kepanjen",
      personTitle: "E-Commerce Stacks",
    },
  ];

  // Logo component for featured testimonial
  const CompanyLogo = ({ company }) => {
    // Custom component for company logo
    switch (company) {
      case "Zapfast":
        return (
          <Box className={classes.companyLogo}>
            <Box className={classes.logoIcon}>
              <BoltIcon />
            </Box>
            <Typography className={classes.companyName}>Zapfast</Typography>
          </Box>
        );
      default:
        return (
          <Box className={classes.companyLogo}>
            <Box className={classes.logoIcon}>
              <BoltIcon />
            </Box>
            <Typography className={classes.companyName}>{company}</Typography>
          </Box>
        );
    }
  };

  return (
    <Box className={classes.root}>
      <Typography variant="body1" className={classes.sectionTag}>
        Insider
      </Typography>

      <Typography variant="h2" className={classes.sectionTitle}>
        Shape the future of investment.
        <br />
        Join MyFounders.Club today!
      </Typography>

      {/* Featured Testimonial */}
      <Box className={classes.featuredTestimonial}>
        <Box
          className={classes.testimonialImage}
          component="img"
          src={featuredTestimonial.image}
          alt={featuredTestimonial.personName}
          sx={{
            objectFit: "cover",
            // Fallback background if image fails to load
            backgroundColor: "#333",
          }}
        />

        <Box className={classes.testimonialContent}>
          <CompanyLogo company={featuredTestimonial.company} />

          <Typography variant="h3" className={classes.testimonyText}>
            {featuredTestimonial.testimony}
          </Typography>

          <Box className={classes.personInfo}>
            <Typography variant="h5" className={classes.personName}>
              {featuredTestimonial.personName}
            </Typography>
            <Typography variant="h5" className={classes.personTitle}>
              {featuredTestimonial.personTitle}
            </Typography>
          </Box>

          <Box className={classes.statsContainer}>
            {featuredTestimonial.stats.map((stat, index) => (
              <Box key={index} className={classes.statItem}>
                <Typography variant="h4" className={classes.statValue}>
                  {stat.value}
                </Typography>
                <Typography variant="body2" className={classes.statLabel}>
                  {stat.label}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>

      {/* Testimonial Cards */}
      <Box className={classes.testimonialCards}>
        {cardTestimonials.map((testimonial, index) => (
          <Box key={index} className={classes.testimonialCard}>
            <Typography variant="h6" className={classes.companyLogoSmall}>
              {testimonial.company}
            </Typography>

            <Box className={classes.ratingContainer}>
              <Typography sx={{ color: "#FF5B23" }} variant="h6">
                {testimonial.rating}
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <StarIcon />
              </Typography>
            </Box>

            <Typography variant="body1" className={classes.cardTestimony}>
              {testimonial.testimony}
            </Typography>

            <Box className={classes.cardPersonInfo}>
              <Typography variant="h6" className={classes.cardPersonName}>
                {testimonial.personName}
              </Typography>
              <Typography variant="body2" className={classes.cardPersonTitle}>
                {testimonial.personTitle}
              </Typography>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
}

export default TestimonialsSection;
