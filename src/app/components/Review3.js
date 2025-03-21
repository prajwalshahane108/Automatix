// components/FAQSection.js
import React, { useState } from "react";
import {
  Box,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Container,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

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
    color: "rgba(255, 255, 255, 0.5)",

    backgroundColor: "rgb(0, 0, 0)",
    border: "1px solid rgba(255, 255, 255, 0.1)",

    borderRadius: "50px",
    padding: "4px 20px",
    fontSize: "14px",
    marginBottom: "30px",
    display: "inline-block",
  },
  sectionTitle: {
    color: "white",
    fontSize: "2.9rem",
    fontWeight: "400",
    textAlign: "center",
    marginBottom: "60px",
    "@media (max-width: 768px)": {
      fontSize: "2.5rem",
    },
  },
  faqContainer: {
    width: "100%",
    maxWidth: "780px",
    display: "flex",
    flexDirection: "column",
  },
  accordionRoot: {
    backgroundColor: "transparent !important",
    boxShadow: "none !important",
    "&:before": {
      display: "none",
    },
  },
  accordionBorder: {
    // borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
  },
  accordionSummary: {
    padding: "0 !important",
  },
  expandIcon: {
    color: "rgba(255, 255, 255, 0.5)",
  },
  question: {
    color: "rgba(255, 255, 255, 0.7)",
    fontSize: "1.5rem",
    fontWeight: "400",
    padding: "15px 0",
  },
  answer: {
    color: "rgba(255, 255, 255, 0.6)",
    fontSize: "1rem",
    lineHeight: 1.6,
    paddingBottom: "20px",
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
      id: "panel1",
      question: "What makes MFC different from other communitites?",
      answer: `What makes MyFounders.Club different:

Infrastructure, Not Just Community: We've built the essential foundation where Middle Eastern innovation meets global markets – not just a network.
Dual Technology Edge: Our unique combination of blockchain verification with AI intelligence creates unmatched trust and precision in connections.
Complete Ecosystem: While others offer pieces, we provide the entire journey – from venture building to funding to global scaling – under one roof.
Cultural Bridge: We don't just operate in Saudi Arabia; we position it as the central nexus between East and West, providing expertise in both directions.
Vision 2030 Integration: Our direct alignment with national transformation gives members access to opportunities no other community can offer.
Inclusive Architecture: Our commitment to underrepresented founders isn't an add-on – it's built into our core systems and verification processes.
MyFounders.Club doesn't just connect you to people; it connects you to possibilities – transforming Saudi Arabia from a market into the nexus of global entrepreneurship.`,
    },
    {
      id: "panel2",
      question: "How AI & Web3 enhance MyFounders.Club:",
      answer: `How AI & Web3 enhance MyFounders.Club: AI Epona:

Matches founders with ideal investors based on specific needs
Identifies opportunities before they become obvious
Delivers personalized resources and insights
Continuously improves connections through learning

Trackgenesis Web3:

Verifies credentials on immutable blockchain, reducing due diligence
Creates portable digital identities for entrepreneurs
Ensures fair value attribution through smart contracts
Builds trust through verification rather than connections

Together, they create:

An ecosystem where opportunities are distributed based on merit, not networks
Transparent transactions with intelligent predictions
Trusted local verification with global reach
A system that gets smarter and more valuable with every interaction

This transforms MyFounders.Club from a community into an intelligent, trusted infrastructure for entrepreneurial success.`,
    },
    {
      id: "panel3",
      question: "How Does Automatix Ensure The Quality Of Its AI Solutions?",
      answer:
        "Quality assurance is integral to our development process. We implement rigorous testing protocols including A/B testing, performance benchmarking, and continuous monitoring. Our solutions undergo extensive validation against industry standards and customer-specific requirements. Additionally, we maintain transparency in our AI systems, providing clear documentation and explaining how decisions are made to ensure trust and accountability.",
    },
    {
      id: "panel4",
      question: "Does Automatix Offer Customized Solutions?",
      answer:
        "Yes, customization is at the heart of our approach. We understand that every business has unique challenges and objectives. Our team works closely with clients to develop tailored solutions that address their specific needs. From custom AI models to bespoke automation workflows, we design and implement solutions that align perfectly with your business processes and goals.",
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
              <Typography className={classes.answer}>{item.answer}</Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Box>
    </Box>
  );
}

export default FAQSection;
