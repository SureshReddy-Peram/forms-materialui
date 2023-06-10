import React, { useState } from 'react';
import { Accordion, AccordionSummary, AccordionDetails } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const MyAccordion = () => {
  const [expanded, setExpanded] = useState(true);

  const handleAccordionChange = () => {
    setExpanded(!expanded);
  };

  return (
    <Accordion expanded={expanded} onChange={handleAccordionChange}>
      <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="accordion-content" id="accordion-header">
        Accordion Summary
      </AccordionSummary>
      <AccordionDetails>
        <p>Accordion Details</p>
      </AccordionDetails>
    </Accordion>
  );
};

export default MyAccordion;