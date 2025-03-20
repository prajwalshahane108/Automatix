// components/FAQSection.js
import React, { useState } from 'react';
import { Box, Typography, Accordion, AccordionSummary, AccordionDetails, Container } from '@mui/material';
import { makeStyles } from '@mui/styles';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

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
    color: 'rgba(255, 255, 255, 0.5)',
    
    backgroundColor: 'rgb(0, 0, 0)',
    border: '1px solid rgba(255, 255, 255, 0.1)',

    borderRadius: '50px',
    padding: '4px 20px',
    fontSize: '14px',
    marginBottom: '30px',
    display: 'inline-block',
  },
  sectionTitle: {
    color: 'white',
    fontSize: '2.9rem',
    fontWeight: '400',
    textAlign: 'center',
    marginBottom: '60px',
    '@media (max-width: 768px)': {
      fontSize: '2.5rem',
    },
  },
  faqContainer: {
    width: '100%',
    maxWidth: '780px',
    display: 'flex',
    flexDirection: 'column',
  },
  accordionRoot: {
    backgroundColor: 'transparent !important',
    boxShadow: 'none !important',
    '&:before': {
      display: 'none',
    },
  },
  accordionBorder: {
    // borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
  },
  accordionSummary: {
    padding: '0 !important',
  },
  expandIcon: {
    color: 'rgba(255, 255, 255, 0.5)',
  },
  question: {
    color: 'rgba(255, 255, 255, 0.7)',
    fontSize: '1.5rem',
    fontWeight: '400',
    padding: '15px 0',
  },
  answer: {
    color: 'rgba(255, 255, 255, 0.6)',
    fontSize: '1rem',
    lineHeight: 1.6,
    paddingBottom: '20px',
  },
}));

function FAQSection() {
  const classes = useStyles();
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const faqItems = [
    {
      id: 'panel1',
      question: 'What Makes Automatix Different From Other Agencies?',
      answer: 'Automatix stands out through our unique combination of AI expertise and deep industry knowledge. We focus on long-term partnerships instead of one-off projects, ensuring consistent value delivery. Our technology-first approach means we build customized solutions that adapt to your evolving needs, providing automation that drives measurable business results.',
    },
    {
      id: 'panel2',
      question: 'How Does AI Enhance The Services Provided By Automatix?',
      answer: 'AI serves as the cornerstone of our service offerings, enabling us to deliver smarter, more efficient solutions. We leverage machine learning algorithms to analyze vast amounts of data, identifying patterns and insights that would be impossible to detect manually. This allows for predictive capabilities, process optimization, and personalized experiences that significantly enhance operational efficiency and customer satisfaction.',
    },
    {
      id: 'panel3',
      question: 'How Does Automatix Ensure The Quality Of Its AI Solutions?',
      answer: 'Quality assurance is integral to our development process. We implement rigorous testing protocols including A/B testing, performance benchmarking, and continuous monitoring. Our solutions undergo extensive validation against industry standards and customer-specific requirements. Additionally, we maintain transparency in our AI systems, providing clear documentation and explaining how decisions are made to ensure trust and accountability.',
    },
    {
      id: 'panel4',
      question: 'Does Automatix Offer Customized Solutions?',
      answer: 'Yes, customization is at the heart of our approach. We understand that every business has unique challenges and objectives. Our team works closely with clients to develop tailored solutions that address their specific needs. From custom AI models to bespoke automation workflows, we design and implement solutions that align perfectly with your business processes and goals.',
    },
  ];

  return (
    <Box className={classes.root}>
      <Typography variant="body1" className={classes.sectionTag}>
        Need to Know
      </Typography>
      
      <Typography variant="h2" className={classes.sectionTitle}>
        Frequently Asked Questions
      </Typography>
      
      <Box className={classes.faqContainer}>
        {faqItems.map((item, index) => (
          <Accordion 
            key={item.id}
            expanded={expanded === item.id}
            onChange={handleChange(item.id)}
            classes={{
              root: classes.accordionRoot,
            }}
            className={classes.accordionBorder}
            disableGutters
            elevation={0}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon className={classes.expandIcon} />}
              aria-controls={`${item.id}-content`}
              id={`${item.id}-header`}
              className={classes.accordionSummary}
            >
              <Typography className={classes.question}>
                {item.question}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography className={classes.answer}>
                {item.answer}
              </Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Box>
    </Box>
  );
}

export default FAQSection;