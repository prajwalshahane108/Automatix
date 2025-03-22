// components/TestimonialsSection.js
import React from "react";
import {
  Box,
  Typography,
  Grid,
  Container,
  Avatar,
  Rating,
  useMediaQuery,
  useTheme
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
    '@media (max-width: 960px)': {
      padding: "50px 15px",
    },
    '@media (max-width: 600px)': {
      padding: "40px 15px",
    }
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
    '@media (max-width: 768px)': {
      fontSize: "13px",
      padding: "4px 16px",
      marginBottom: "25px",
    },
    '@media (max-width: 480px)': {
      fontSize: "12px",
      padding: "3px 15px",
      marginBottom: "20px",
    }
  },
  sectionTitle: {
    color: "#AFAFAF",
    fontSize: "2.9rem",
    fontWeight: "600",
    textAlign: "center",
    marginBottom: "60px",
    '@media (max-width: 960px)': {
      fontSize: "2.7rem",
      marginBottom: "50px",
    },
    '@media (max-width: 768px)': {
      fontSize: "2.3rem",
      marginBottom: "40px",
    },
    '@media (max-width: 480px)': {
      fontSize: "1.8rem",
      marginBottom: "35px",
      lineHeight: 1.3,
    }
  },
  featuredTestimonial: {
    display: "flex",
    width: "100%",
    maxWidth: "1010px",
    marginBottom: "80px",
    flexWrap: "wrap",
    '@media (max-width: 960px)': {
      flexDirection: "column",
      alignItems: "center",
      marginBottom: "60px",
    },
    '@media (max-width: 480px)': {
      marginBottom: "40px",
    }
  },
  testimonialImage: {
    width: "100%",
    maxWidth: "400px",
    height: "400px",
    borderRadius: "16px",
    overflow: "hidden",
    marginRight: "40px",
    '@media (max-width: 960px)': {
      marginRight: "0",
      marginBottom: "30px",
      height: "350px",
    },
    '@media (max-width: 600px)': {
      maxWidth: "100%",
      height: "300px",
    },
    '@media (max-width: 480px)': {
      height: "250px",
      borderRadius: "12px",
    }
  },
  testimonialContent: {
    flex: 1,
    minWidth: "300px",
    '@media (max-width: 960px)': {
      textAlign: "center",
      minWidth: "100%",
    },
    '@media (max-width: 480px)': {
      minWidth: "0",
    }
  },
  companyLogo: {
    display: "flex",
    alignItems: "center",
    marginBottom: "20px",
    '@media (max-width: 960px)': {
      justifyContent: "center",
    },
    '@media (max-width: 480px)': {
      marginBottom: "15px",
    }
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
    '@media (max-width: 480px)': {
      width: "35px",
      height: "35px",
      marginRight: "8px",
    }
  },
  companyName: {
    color: "white",
    fontSize: "1.5rem",
    fontWeight: "500",
    '@media (max-width: 480px)': {
      fontSize: "1.3rem",
    }
  },
  testimonyText: {
    color: "#AFAFAF",
    fontSize: "2rem",
    fontWeight: "500",
    marginBottom: "30px",
    lineHeight: 1.4,
    '@media (max-width: 960px)': {
      fontSize: "1.8rem",
      marginBottom: "25px",
    },
    '@media (max-width: 768px)': {
      fontSize: "1.5rem",
    },
    '@media (max-width: 480px)': {
      fontSize: "1.3rem",
      lineHeight: 1.3,
      marginBottom: "20px",
    }
  },
  personInfo: {
    marginBottom: "40px",
    borderTop: "20px",
    display: "flex",
    justifyContent: "flex-start",
    alignContent: "center",
    gap: "20px",
    '@media (max-width: 960px)': {
      justifyContent: "center",
      marginBottom: "30px",
    },
    '@media (max-width: 480px)': {
      flexDirection: "column",
      gap: "5px",
      marginBottom: "25px",
    }
  },
  personName: {
    color: "white",
    fontSize: "1.3rem",
    fontWeight: "500",
    '@media (max-width: 480px)': {
      fontSize: "1.1rem",
    }
  },
  personTitle: {
    color: "rgba(255, 255, 255, 0.7)",
    fontSize: "1rem",
    marginTop: "3px",
    '@media (max-width: 480px)': {
      fontSize: "0.9rem",
      marginTop: "0",
    }
  },
  statsContainer: {
    display: "flex",
    gap: "40px",
    borderTop: "1px solid rgba(255, 255, 255, 0.1)",
    paddingTop: "20px",
    '@media (max-width: 960px)': {
      justifyContent: "center",
    },
    '@media (max-width: 480px)': {
      gap: "30px",
    }
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
    '@media (max-width: 768px)': {
      fontSize: "1.8rem",
    },
    '@media (max-width: 480px)': {
      fontSize: "1.6rem",
    }
  },
  statLabel: {
    color: "rgba(255, 255, 255, 0.7)",
    fontSize: "0.9rem",
    '@media (max-width: 480px)': {
      fontSize: "0.8rem",
    }
  },
  testimonialCards: {
    display: "flex",
    width: "100%",
    maxWidth: "1200px",
    justifyContent: "space-between",
    gap: "20px",
    '@media (max-width: 960px)': {
      flexDirection: "column",
      alignItems: "center",
      gap: "30px",
    }
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
    '@media (max-width: 960px)': {
      borderRight: "none",
      borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
      paddingBottom: "30px",
      marginBottom: "10px",
      "&:last-child": {
        borderBottom: "none",
        paddingBottom: "0",
        marginBottom: "0",
      },
      maxWidth: "600px",
      width: "100%",
    },
    '@media (max-width: 480px)': {
      minWidth: "100%",
      padding: "0 10px",
      paddingBottom: "25px",
    }
  },
  companyLogoSmall: {
    color: "rgba(255, 255, 255, 0.7)",
    fontSize: "1.2rem",
    fontWeight: "500",
    marginBottom: "10px",
    display: "block",
    textAlign: "center",
    '@media (max-width: 480px)': {
      fontSize: "1.1rem",
    }
  },
  ratingContainer: {
    display: "flex",
    justifyContent: "center",
    marginBottom: "20px",
    '@media (max-width: 480px)': {
      marginBottom: "15px",
    }
  },
  starIcon: {
    color: "#FF5B23",
    fontSize: "24px",
    '@media (max-width: 480px)': {
      fontSize: "20px",
    }
  },
  cardTestimony: {
    color: "rgba(255, 255, 255, 0.8)",
    fontSize: "1rem",
    textAlign: "center",
    marginBottom: "20px",
    lineHeight: 1.6,
    '@media (max-width: 480px)': {
      fontSize: "0.95rem",
      lineHeight: 1.5,
      marginBottom: "15px",
    }
  },
  cardPersonInfo: {
    textAlign: "center",
  },
  cardPersonName: {
    color: "#ff5B23",
    fontSize: "1.1rem",
    fontWeight: "500",
    '@media (max-width: 480px)': {
      fontSize: "1rem",
    }
  },
  cardPersonTitle: {
    color: "rgba(255, 255, 255, 0.7)",
    fontSize: "0.9rem",
    '@media (max-width: 480px)': {
      fontSize: "0.85rem",
    }
  },
}));

function TestimonialsSection() {
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.down('md'));

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
      rating: 5,
      testimony:
        '"The creativity and AI expertise from Automatix set a new benchmark for our industry. Highly recommended!"',
      personName: "Agus Blimbing",
      personTitle: "Tech Manager",
    },
    {
      company: "BrightNest",
      rating: 5,
      testimony:
        '"Automatix\'s revolutionary AI approach and creative solutions elevated our project. Stellar performance!"',
      personName: "Steve Kebalen",
      personTitle: "AI Developer",
    },
    {
      company: "PrimeCore",
      rating: 5,
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
      <Container maxWidth="lg" sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Typography variant="body1" className={classes.sectionTag}>
          Insider
        </Typography>

        <Typography variant="h2" className={classes.sectionTitle}>
          Shape the future of investment.
          {!isMobile && <br />}
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
                <Box sx={{ display: 'flex' }}>
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <StarIcon key={i} className={classes.starIcon} />
                  ))}
                </Box>
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
      </Container>
    </Box>
  );
}

export default TestimonialsSection;