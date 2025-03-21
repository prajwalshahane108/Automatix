import { Box, Typography, Button } from "@mui/material"
import { makeStyles } from "@mui/styles"
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward"
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline"
import StarIcon from "@mui/icons-material/Star"

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
    marginBottom: "60px",
    "@media (max-width: 768px)": {
      fontSize: "2.5rem",
    },
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
    maxWidth: "490px", // Smaller width for standard plan
    minHeight: "670px", // Smaller height for standard plan
    display: "flex",
    flexDirection: "column",
    transition: "transform 0.3s ease",
    "&:hover": {
      transform: "translateY(-10px)",
    },
    "@media (max-width: 768px)": {
      maxWidth: "100%",
      marginBottom: "20px",
    },
  },
  pricingCardPro: {
    backgroundColor: "#111111",
    borderRadius: "20px",
    paddingTop: "40px",
    marginTop: "40px",
    paddingLeft: "40px",
    paddingRight: "40px",
    paddingBottom: "16px",
    width: "100%",
    maxWidth: "460px", // Larger width for pro plan
    minHeight: "480px", // Larger height for pro plan
    display: "flex",
    flexDirection: "column",
    position: "relative", // For the popular badge positioning
    transition: "transform 0.3s ease",
    "&:hover": {
      transform: "translateY(-10px)",
    },
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
      backgroundColor: "rgba(255, 255, 255, 0.2)",
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
}))

function PricingSection() {
  const classes = useStyles()

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
  ]

  return (
    <Box className={classes.root}>
      <Typography variant="body1" className={classes.sectionTag}>
        Simple Pricing
      </Typography>

      <Typography variant="h2" className={classes.sectionTitle}>
      Founders
      </Typography>

      <Box className={classes.pricingContainer}>
        {/* Standard Plan */}
        <Box className={classes.pricingCardStandard}>
          <Typography variant="h4" className={classes.planTitle}>
            {pricingPlans[0].title}
          </Typography>

          <Typography variant="body1" className={classes.planDescription}>
            {pricingPlans[0].description}
          </Typography>

          <Typography variant="h3" className={classes.priceAmount}>
            {pricingPlans[0].price}
            <span className={classes.priceUnit}>{" "}/every 3 month</span>
          </Typography>

          <Button
            variant="contained"
            className={classes.getStartedButtonStandard}
            endIcon={<ArrowOutwardIcon className={classes.buttonIcon} />}
            disableElevation
          >
            Get Started
          </Button>

          <Typography variant="body2" className={classes.featuresTitle}>
            What's included:
          </Typography>

          <Box className={classes.featuresContainer}>
            {pricingPlans[0].features.map((feature, i) => (
              <Box key={i} className={classes.featureItem}>
                <CheckCircleOutlineIcon className={classes.featureIconStandard} />
                <Typography variant="body2" className={classes.featureText}>
                  {feature}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>

        {/* Pro Plan */}
        <Box className={classes.pricingCardPro}>
          {/* {pricingPlans[1].popular && (
            <Box className={classes.popularBadge}>
              <StarIcon className={classes.starIcon} />
              Most Popular
            </Box>
          )} */}

          <Typography variant="h4" className={classes.planTitle}>
            {pricingPlans[1].title}
            <Typography component="span" className={classes.proTag}>
            Popular
            </Typography>
          </Typography>

          <Typography variant="body1" className={classes.planDescription}>
            {pricingPlans[1].description}
          </Typography>

          <Typography variant="h3" className={classes.priceAmount}>
            {pricingPlans[1].price}
            <span className={classes.priceUnit}>/yearly</span>
          </Typography>

          <Button
            variant="contained"
            className={classes.getStartedButtonPro}
            endIcon={<ArrowOutwardIcon className={classes.buttonIcon} />}
            disableElevation
          >
            Get Started
          </Button>

          <Typography variant="body2" className={classes.featuresTitle}>
            What's included:
          </Typography>

          <Box className={classes.featuresDoubleColumn}>
            {pricingPlans[1].features.map((feature, i) => (
              <Box key={i} className={classes.featureItem}>
                <CheckCircleOutlineIcon className={classes.featureIconPro} />
                <Typography variant="body2" className={classes.featureText}>
                  {feature}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default PricingSection

