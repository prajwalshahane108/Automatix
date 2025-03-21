// components/ServicesSection.js
import React from 'react';
import { Box, Typography, Grid, Container } from '@mui/material';
import { makeStyles } from '@mui/styles';
import BoltIcon from '@mui/icons-material/Bolt';
import DnsIcon from '@mui/icons-material/Dns';
import CloudIcon from '@mui/icons-material/Cloud';
import StorageIcon from '@mui/icons-material/Storage';
import BarChartIcon from '@mui/icons-material/BarChart';
import SecurityIcon from '@mui/icons-material/Security';
import UpdateIcon from '@mui/icons-material/Update';
import CampaignIcon from '@mui/icons-material/Campaign';
import CubeIcon from '@mui/icons-material/ViewInAr';
import CodeIcon from '@mui/icons-material/Code';
import TuneIcon from '@mui/icons-material/Tune';
import EmailIcon from '@mui/icons-material/Email';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: 'black',
    backgroundImage: 'radial-gradient(circle, rgba(75, 75, 75, 0.1) 1px, transparent 1px)',
    backgroundSize: '20px 20px',
    minHeight: '100vh',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '60px 20px',
  },
  sectionTag: {
    color: 'white',
    backgroundColor: 'rgba(7, 0, 0, 0.05)',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    borderRadius: '50px',
    padding: '3px 20px',
    fontSize: '14px',
    marginBottom: '30px',
    display: 'inline-block',
  },
  sectionTitle: {
    color: 'white',
    fontSize: '2.9rem',
    fontWeight: '400',
    textAlign: 'center',
    marginBottom: '20px',
    '@media (max-width: 768px)': {
      fontSize: '2.5rem',
    },
  },
  sectionDescription: {
    color: 'rgba(255, 255, 255, 0.7)',
    fontSize: '1.1rem',
    textAlign: 'center',
    maxWidth: '500px',
    marginBottom: '60px',
    lineHeight: 1.6,
  },
  mainServiceCard: {
    backgroundColor: '#111111',
    borderRadius: '20px',
    padding: '24px',
    height: '100%',
    overflow: 'hidden',
    backgroundImage: 'linear-gradient(to bottom right, rgba(255, 255, 255, 0.03) 1px, transparent 1px)',
    backgroundSize: '20px 20px',
  },
  serviceTitle: {
    color: 'white',
    fontSize: '1.8rem',
    fontWeight: '600',
    marginBottom: '25px',
    marginTop: '10px',
    textAlign: 'center',
  },
  serviceImageContainer: {
    width: '100%',
    height: '180px',
    backgroundColor: '#0A0A0A',
    borderRadius: '12px',
    marginBottom: '20px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
  serviceDescription: {
    color: 'rgba(255, 255, 255, 0.7)',
    fontSize: '1rem',
    textAlign: 'center',
    lineHeight: 1.6,
  },
  planImage: {
    position: 'relative',
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  planIconCenter: {
    backgroundColor: 'rgb(255, 158, 44, 0.1)',
    borderRadius: '50%',
    width: '70px',
    height: '70px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#E87811',
    fontSize: '2rem',
    zIndex: 2,
  },
  planIconOuter: {
    position: 'absolute',
    width: '40px',
    height: '40px',
    borderRadius: '10px',
    backgroundColor: '#1A1A1A',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
    color: 'white',
  },
  planIcon1: {
    top: '30%',
    left: '25%',
  },
  planIcon2: {
    top: '30%',
    right: '25%',
  },
  planIcon3: {
    bottom: '30%',
    left: '25%',
  },
  planIcon4: {
    bottom: '30%',
    right: '25%',
  },
  connector: {
    position: 'absolute',
    background: 'rgba(255, 255, 255, 0.1)',
    height: '1px',
    width: '80px',
    zIndex: 1,
  },
  connector1: {
    transform: 'rotate(45deg)',
    top: '40%',
    left: '30%',
  },
  connector2: {
    transform: 'rotate(-45deg)',
    top: '40%',
    right: '30%',
  },
  connector3: {
    transform: 'rotate(-45deg)',
    bottom: '40%',
    left: '30%',
  },
  connector4: {
    transform: 'rotate(45deg)',
    bottom: '40%',
    right: '30%',
  },
  codeBlock: {
    fontFamily: 'monospace',
    fontSize: '0.85rem',
    color: 'white',
    padding: '15px',
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    textAlign: 'left',
  },
  lineNumber: {
    color: 'rgba(255, 255, 255, 0.3)',
    width: '20px',
    marginRight: '10px',
    textAlign: 'right',
  },
  codeLine: {
    display: 'flex',
    width: '100%',
    marginBottom: '5px',
  },
  codeKeyword: {
    color: '#E87811',
  },
  codeComment: {
    color: '#6A9955',
  },
  codeProperty: {
    color: '#9CDCFE',
  },
  codeString: {
    color: '#CE9178',
  },
  automationInterface: {
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
    padding: '10px',
  },
  automationControl: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    padding: '10px 15px',
    borderRadius: '10px',
    color: 'white',
  },
  automationIcon: {
    marginRight: '10px',
    color: 'rgba(255, 255, 255, 0.7)',
  },
  emailButton: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 158, 44, 0.1)',
    padding: '10px 15px',
    borderRadius: '10px',
    color: '#E87811',
    width: 'fit-content',
    marginTop: '10px',
  },
  smallServiceCard: {
    backgroundColor: '#111111',
    borderRadius: '15px',
    padding: '15px',
    display: 'flex',
    alignItems: 'center',
    marginBottom: '20px',
  },
  smallServiceIcon: {
    backgroundColor: 'rgba(255, 158, 44, 0.1)',
    color: '#E87811',
    borderRadius: '10px',
    padding: '8px',
    marginRight: '12px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  smallServiceTitle: {
    color: 'white',
    fontSize: '1rem',
    fontWeight: '500',
  },
}));

function ServicesSection() {
  const classes = useStyles();

  // Main service cards
  const mainServices = [
    {
      title: 'Plan & Organize',
      description: 'We enhance efficiency by integrating apps and reducing downtime.',
      type: 'plan',
    },
    {
      title: 'Custom Projects',
      description: 'We created a versatile chatbot that understands diverse questions.',
      type: 'code',
    },
    {
      title: 'Smart Automation',
      description: 'We analyze operations and suggest AI solutions to boost efficiency.',
      type: 'automation',
    },
  ];

  // Small service cards - top row
  const topRowServices = [
    {
      title: 'AI-Driven Solutions',
      icon: <BoltIcon />,
    },
    {
      title: 'Serverless Computing',
      icon: <DnsIcon />,
    },
    {
      title: 'Cloud Integration',
      icon: <CloudIcon />,
    },
    {
      title: 'Data Insight',
      icon: <StorageIcon />,
    },
  ];

  // Small service cards - bottom row
  const bottomRowServices = [
    {
      title: 'Analytics',
      icon: <BarChartIcon />,
    },
    {
      title: 'API Security',
      icon: <SecurityIcon />,
    },
    {
      title: 'Real-Time',
      icon: <UpdateIcon />,
    },
    {
      title: 'Ad Targeting',
      icon: <CampaignIcon />,
    },
  ];

  // Component for the planning service card
  const PlanServiceContent = () => (
    <Box className={classes.planImage}>
      <Box className={classes.planIconCenter}>
        <CubeIcon fontSize="inherit" />
      </Box>
      <Box className={`${classes.planIconOuter} ${classes.planIcon1}`}>
        <CodeIcon fontSize="small" />
      </Box>
      <Box className={`${classes.planIconOuter} ${classes.planIcon2}`}>
        <StorageIcon fontSize="small" />
      </Box>
      <Box className={`${classes.planIconOuter} ${classes.planIcon3}`}>
        <TuneIcon fontSize="small" />
      </Box>
      <Box className={`${classes.planIconOuter} ${classes.planIcon4}`}>
        <CloudIcon fontSize="small" />
      </Box>
      <Box className={`${classes.connector} ${classes.connector1}`}></Box>
      <Box className={`${classes.connector} ${classes.connector2}`}></Box>
      <Box className={`${classes.connector} ${classes.connector3}`}></Box>
      <Box className={`${classes.connector} ${classes.connector4}`}></Box>
    </Box>
  );

  // Component for the code service card
  const CodeServiceContent = () => (
    <Box className={classes.codeBlock}>
      <Box className={classes.codeLine}>
        <span className={classes.lineNumber}>1</span>
        <span className={classes.codeKeyword}>class</span> ChatBot&#123;
      </Box>
      <Box className={classes.codeLine}>
        <span className={classes.lineNumber}>2</span>
        <span className={classes.codeProperty}>  address</span> <span className={classes.codeKeyword}>public</span> owner;
      </Box>
      <Box className={classes.codeLine}>
        <span className={classes.lineNumber}>3</span>
        <span className={classes.codeProperty}>  int</span> <span className={classes.codeKeyword}>private</span> response;
      </Box>
      <Box className={classes.codeLine}>
        <span className={classes.lineNumber}>4</span>
        <span className={classes.codeKeyword}>  constructor</span>()&#123;
      </Box>
      <Box className={classes.codeLine}>
        <span className={classes.lineNumber}>5</span>
        owner = msg.sender;
      </Box>
      <Box className={classes.codeLine}>
        <span className={classes.lineNumber}>6</span>
        &#125;
      </Box>
      <Box className={classes.codeLine}>
        <span className={classes.lineNumber}>7</span>
        <span className={classes.codeKeyword}>function</span> <span>response(msg)&#123;</span>
      </Box>
    </Box>
  );

  // Component for the automation service card
  const AutomationServiceContent = () => (
    <Box className={classes.automationInterface}>
      <Box className={classes.automationControl}>
        <TuneIcon className={classes.automationIcon} />
        Trigger
      </Box>
      <Box className={classes.automationControl}>
        <CodeIcon className={classes.automationIcon} />
        Prompts
      </Box>
      <Box className={classes.emailButton}>
        <EmailIcon style={{ marginRight: '8px' }} />
        Send Email
      </Box>
    </Box>
  );

  // Function to render the appropriate content for each service card
  const renderServiceContent = (type) => {
    switch (type) {
      case 'plan':
        return <PlanServiceContent />;
      case 'code':
        return <CodeServiceContent />;
      case 'automation':
        return <AutomationServiceContent />;
      default:
        return null;
    }
  };

  return (
    <Box className={classes.root}>
      <Typography variant="body1" className={classes.sectionTag}>
        Our Services
      </Typography>
      
      <Typography variant="h2" className={classes.sectionTitle}>
        Expertise That Drives Quality
      </Typography>
      
      <Typography variant="body1" className={classes.sectionDescription}>
        With deep expertise, we deliver quality solutions that drive
        success and exceed industry standards consistently.
      </Typography>
      
      {/* Main Service Cards */}
      <Container maxWidth="lg" sx={{ mb: 5 }}>
        <Grid container spacing={3}>
          {mainServices.map((service, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Box className={classes.mainServiceCard}>
                <Typography variant="h4" className={classes.serviceTitle}>
                  {service.title}
                </Typography>
                <Box className={classes.serviceImageContainer}>
                  {renderServiceContent(service.type)}
                </Box>
                <Typography variant="body2" className={classes.serviceDescription}>
                  {service.description}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
      
      {/* Small Service Cards - Top Row */}
      <Container maxWidth="md" sx={{ mb: 3 }}>
        <Grid container spacing={2}>
          {topRowServices.map((service, index) => (
            <Grid item xs={6} sm={3} key={index}>
              <Box className={classes.smallServiceCard}>
                <Box className={classes.smallServiceIcon}>
                  {service.icon}
                </Box>
                <Typography className={classes.smallServiceTitle}>
                  {service.title}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
      
      {/* Small Service Cards - Bottom Row */}
      <Container maxWidth="md">
        <Grid container spacing={2}>
          {bottomRowServices.map((service, index) => (
            <Grid item xs={6} sm={3} key={index}>
              <Box className={classes.smallServiceCard}>
                <Box className={classes.smallServiceIcon}>
                  {service.icon}
                </Box>
                <Typography className={classes.smallServiceTitle}>
                  {service.title}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

export default ServicesSection;