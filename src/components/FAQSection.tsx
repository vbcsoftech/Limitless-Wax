import React, { useState } from 'react';
import { Box, Typography, Accordion, AccordionSummary, AccordionDetails, IconButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

const faqItems = [
  {
    id: 1,
    question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."
  },
  {
    id: 2,
    question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."
  },
  {
    id: 3,
    question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."
  },
  {
    id: 4,
    question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."
  },
  {
    id: 5,
    question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."
  }
] as const;

const FAQSection = () => {
  const [expanded, setExpanded] = useState<string | false>(false);

  const handleChange = (panel: string) => (_: React.SyntheticEvent, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Box textAlign="center" mb={4}>
      <Box p={4}>
        <Typography variant="h4" gutterBottom>
          Frequently Asked Questions
        </Typography>
      </Box>
      {faqItems.map((item) => (
        <Accordion 
          key={item.id} 
          expanded={expanded === `panel${item.id}`} 
          onChange={handleChange(`panel${item.id}`)}
          sx={(theme) => ({
            bgcolor: "#331E22CC",
            borderRadius: '20px',
            '& .MuiAccordionSummary-root': {
              borderRadius: expanded === `panel${item.id}` ? '20px 20px 0 0' : '20px',
            },
            '& .MuiTypography-root': {
              color: theme.palette.text.primary,
            },
            marginBottom: 2,
            '&::before': {
              display: 'none', // Removes the default divider
            },
          })}
        >
          <AccordionSummary
            expandIcon={
              <IconButton>
                {expanded === `panel${item.id}` ? <RemoveIcon /> : <AddIcon />}
              </IconButton>
            }
            aria-controls={`panel${item.id}a-content`}
            id={`panel${item.id}a-header`}
          >
            <Typography variant='h6'>{item.question}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography textAlign="left">{item.answer}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </Box>
  );
};

export default FAQSection;
