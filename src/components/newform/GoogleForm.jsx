import React, { useState } from 'react';
import { Accordion, AccordionSummary,AccordionDetails, Typography, Radio, FormControlLabel, Button } from '@material-ui/core';
import { AddCircle } from '@material-ui/icons';

const GoogleForm = () => {
  const [showForm, setShowForm] = useState(false);

  const handleClick = () => {
    setShowForm(true);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
    // You can send the form data to an API or perform any other desired action
  };

  return (
    <div>
      <Typography variant="h4" component="h1">Google Form</Typography>
      {!showForm ? (
        <Button variant="contained" startIcon={<AddCircle />} onClick={handleClick}>
          Add Form
        </Button>
      ) : (
        <form onSubmit={handleSubmit}>
          <Accordion>
            <AccordionSummary expandIcon={<AddCircle />} aria-controls="question-1" id="question-1-summary">
              <Typography variant="h6">Question 1</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <FormControlLabel value="option1" control={<Radio />} label="Option 1" />
              <FormControlLabel value="option2" control={<Radio />} label="Option 2" />
              <FormControlLabel value="option3" control={<Radio />} label="Option 3" />
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionSummary expandIcon={<AddCircle />} aria-controls="question-2" id="question-2-summary">
              <Typography variant="h6">Question 2</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <FormControlLabel value="option1" control={<Radio />} label="Option 1" />
              <FormControlLabel value="option2" control={<Radio />} label="Option 2" />
              <FormControlLabel value="option3" control={<Radio />} label="Option 3" />
            </AccordionDetails>
          </Accordion>

          <Button variant="contained" type="submit">Submit</Button>
        </form>
      )}
    </div>
  );
};

export default GoogleForm;
