// components/FAQSection.js
'use client';
import React, { useState, useEffect } from "react";
import {
  Box,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

// Create motion components
const MotionBox = motion(Box);
const MotionTypography = motion(Typography);
const MotionAccordion = motion(Accordion);
const MotionExpandMoreIcon = motion(ExpandMoreIcon);

// Section wrapper to contain the black background within this component
const SectionWrapper = styled('div')({
  backgroundColor: "black",
  width: "100%",
  isolation: "isolate", // Creates a new stacking context
  position: "relative",
});

// Styled components
const RootBox = styled(MotionBox)(({ theme }) => ({
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
}));

// Rest of your styled components remain unchanged
const SectionTag = styled(MotionTypography)({
  color: "rgba(255, 255, 255, 0.5)",
  backgroundColor: "rgb(0, 0, 0)",
  border: "1px solid rgba(255, 255, 255, 0.1)",
  borderRadius: "50px",
  padding: "4px 20px",
  fontSize: "14px",
  marginBottom: "30px",
  display: "inline-block",
});

const SectionTitle = styled(MotionTypography)(({ theme }) => ({
  color: "white",
  fontSize: "2.9rem",
  fontWeight: "400",
  textAlign: "center",
  marginBottom: "60px",
  [theme.breakpoints.down("md")]: {
    fontSize: "2.5rem",
  },
}));

const FaqContainer = styled(MotionBox)({
  width: "100%",
  maxWidth: "780px",
  display: "flex",
  flexDirection: "column",
});

const StyledAccordion = styled(MotionAccordion)({
  backgroundColor: "transparent !important",
  boxShadow: "none !important",
  "&:before": {
    display: "none",
  },
});

const StyledAccordionSummary = styled(AccordionSummary)({
  padding: "0 !important",
});

const QuestionTypography = styled(MotionTypography)({
  color: "rgba(255, 255, 255, 0.7)",
  fontSize: "1.5rem",
  fontWeight: "400",
  padding: "15px 0",
});

const AnswerTypography = styled(Typography)({
  color: "rgba(255, 255, 255, 0.6)",
  fontSize: "1rem",
  lineHeight: 1.6,
  paddingBottom: "20px",
});

const StyledExpandIcon = styled(MotionExpandMoreIcon)({
  color: "rgba(255, 255, 255, 0.5)",
});

function FAQSection() {
  const [expanded, setExpanded] = useState(false);
  
  // Animation controls
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });
  
  // Animate when section comes into view
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  // Animation variants remain unchanged
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const accordionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.3 + (i * 0.1),
        duration: 0.5,
        ease: "easeOut",
      },
    }),
  };

  const expandIconVariants = {
    collapsed: { rotate: 0 },
    expanded: { rotate: 180 },
  };

  const answerVariants = {
    collapsed: { opacity: 0, height: 0 },
    expanded: { 
      opacity: 1, 
      height: "auto",
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    },
  };

  const faqItems = [
    {
      id: "panel1",
      question: "What makes Automatix different from other agencies?",
      answer: `Automatix stands out with its innovative approach to AI-driven automation. Unlike traditional agencies, we focus on blending cutting-edge technology with tailored strategies to optimize your business processes, ensuring maximum efficiency and growth.`,
    },
    {
      id: "panel2",
      question: "How does AI enhance the services provided by Automatix?",
      answer: `AI enhances our services by automating complex tasks, improving decision-making, and streamlining operations. With AI, we provide smarter, faster, and more personalized solutions, delivering measurable results that help businesses stay competitive in a fast-evolving market.`,
    },
    {
      id: "panel3",
      question: "How does Automatix ensure the quality of its AI solutions?",
      answer:
        "We ensure quality by using rigorous testing and continuous monitoring of our AI models. Our team of experts fine-tunes algorithms to meet the highest standards, ensuring that our solutions are accurate, reliable, and deliver optimal performance for our clients.",
    },
    {
      id: "panel4",
      question: "Does Automatix offer customized solutions?",
      answer:
        "Yes, Automatix specializes in offering customized AI solutions tailored to your specific business needs. We work closely with you to understand your goals and challenges, then develop solutions that seamlessly integrate into your operations for maximum impact.",
    },
  ];

  return (
    <SectionWrapper>
      <RootBox 
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={containerVariants}
      >
        <SectionTag 
          variant="body1" 
          variants={itemVariants}
        >
          Need to Know
        </SectionTag>

        <SectionTitle 
          variant="h2" 
          variants={itemVariants}
        >
          Frequently Asked Questions
        </SectionTitle>

        <FaqContainer 
          variants={containerVariants}
        >
          {faqItems.map((item, index) => (
            <StyledAccordion
              key={item.id}
              expanded={expanded === item.id}
              onChange={handleChange(item.id)}
              disableGutters
              elevation={0}
              custom={index}
              variants={accordionVariants}
              initial="hidden"
              animate="visible"
              whileHover={{ 
                backgroundColor: "rgba(255, 255, 255, 0.03)",
                transition: { duration: 0.2 } 
              }}
            >
              <StyledAccordionSummary
                expandIcon={
                  <StyledExpandIcon 
                    animate={expanded === item.id ? "expanded" : "collapsed"}
                    variants={expandIconVariants}
                    transition={{ duration: 0.3 }}
                  />
                }
                aria-controls={`${item.id}-content`}
                id={`${item.id}-header`}
              >
                <QuestionTypography 
                  animate={{ 
                    color: expanded === item.id ? "#FF5B23" : "rgba(255, 255, 255, 0.7)" 
                  }}
                  transition={{ duration: 0.3 }}
                >
                  {item.question}
                </QuestionTypography>
              </StyledAccordionSummary>
              <AccordionDetails>
                <motion.div
                  initial="collapsed"
                  animate={expanded === item.id ? "expanded" : "collapsed"}
                  variants={answerVariants}
                >
                  <AnswerTypography>{item.answer}</AnswerTypography>
                </motion.div>
              </AccordionDetails>
            </StyledAccordion>
          ))}
        </FaqContainer>
      </RootBox>
    </SectionWrapper>
  );
}

export default FAQSection;