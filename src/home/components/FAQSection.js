import React from 'react';
import { Box, Typography, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const FAQSection = () => {
  const faqs = [
    { question: 'How do I sign up?', answer: 'You can sign up by clicking the "Get Started" button at the top of the page.' },
    { question: 'Is my data secure?', answer: 'We use the latest security measures to ensure your data is safe.' },
    { question: 'Can I track multiple goals?', answer: 'Yes, you can set and track multiple goals simultaneously.' }
  ];

  return (
    <Box sx={{ padding: '50px 0' }}>
      <Typography variant="h4" align="center" sx={{ marginBottom: '40px' }}>Frequently Asked Questions</Typography>
      {faqs.map((faq, index) => (
        <Accordion key={index}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography variant="h6">{faq.question}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="body2">{faq.answer}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </Box>
  );
};

export default FAQSection;
