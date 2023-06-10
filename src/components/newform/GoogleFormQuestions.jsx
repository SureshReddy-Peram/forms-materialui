
import React, { useState } from 'react';
import { Accordion, AccordionSummary, AccordionDetails, FormControlLabel, IconButton, Box, Divider, Tooltip, Typography, Radio, Checkbox, TextField, Grid, Button, Select, MenuItem } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import DeleteIcon from '@material-ui/icons/Delete';
import OndemandVideoIcon from "@material-ui/icons/OndemandVideo";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import CropOriginalIcon from "@material-ui/icons/CropOriginal";
import { BsTrash } from "react-icons/bs";
import {MdContentCopy} from "react-icons/md";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import Switch from "@material-ui/core/Switch";
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import CloseOutlinedIcon from '@material-ui/icons/CloseOutlined'; 
import CheckBoxOutlinedIcon from "@material-ui/icons/CheckBoxOutlined";
import CheckBoxOutlineBlankOutlinedIcon from '@material-ui/icons/CheckBoxOutlineBlankOutlined';
import ShortTextIcon from "@material-ui/icons/ShortText";
import SubjectIcon from "@material-ui/icons/Subject";
import AppsOutlinedIcon from '@material-ui/icons/AppsOutlined';
import RadioButtonCheckedIcon from "@material-ui/icons/RadioButtonChecked";
import InsertInvitationOutlinedIcon from '@material-ui/icons/InsertInvitationOutlined';

const GoogleFormQuestions = () => {

  const [expanded, setExpanded] = useState(false);

  const [formResponses, setFormResponses] = useState([
    {
      id: 'question1',
      question: 'Question 1',
      type: 'radio',
      options: ['Option 1', 'Option 2', 'Option 3', 'Option 4'],
      selectedOption: ''
    }
  ]);

  const handleAccordionChange = (isExpanded, panel) => {
    setExpanded(isExpanded? panel: false);
  }


  const handleOptionChange = (questionId, option) => {
    const updatedResponses = formResponses.map((response) => {
      if (response.id === questionId) {
        return { ...response, selectedOption: option };
      }
      return response;
    });

    setFormResponses(updatedResponses);
  };

  const handleCheckboxChange = (questionId, option) => {
    const updatedResponses = formResponses.map((response) => {
      if (response.id === questionId) {
        const selectedOptions = response.selectedOptions.includes(option)
          ? response.selectedOptions.filter((item) => item !== option)
          : [...response.selectedOptions, option];
        return { ...response, selectedOptions };
      }
      return response;
    });

    setFormResponses(updatedResponses);
  };

  const handleTextChange = (questionId, answer) => {
    const updatedResponses = formResponses.map((response) => {
      if (response.id === questionId) {
        return { ...response, answer };
      }
      return response;
    });

    setFormResponses(updatedResponses);
  };

  const handleDateChange = (questionId, answer) => {
    const updatedResponses = formResponses.map((response) => {
      if (response.id === questionId) {
        return { ...response, answer };
      }
      return response;
    });

    setFormResponses(updatedResponses);
  };

  const handleMultiGridChange = (questionId, index, answer) => {
    const updatedResponses = formResponses.map((response) => {
      if (response.id === questionId) {
        const answers = [...response.answers];
        answers[index] = answer;
        return { ...response, answers };
      }
      return response;
    });

    setFormResponses(updatedResponses);
  };

  const handleAddQuestion = () => {
    const newQuestion = {
      id: `question${formResponses.length + 1}`,
      question: `Question ${formResponses.length + 1}`,
      type: 'radio',
      options: ['Option 1', 'Option 2', 'Option 3'],
      selectedOption: ''
    };

    setFormResponses([...formResponses, newQuestion]);
  };

  const handleDeleteQuestion = (questionId) => {
    const updatedResponses = formResponses.filter((response) => response.id !== questionId);

    setFormResponses(updatedResponses);
  };

  const handleQuestionTypeChange = (questionId, newType) => {
    const updatedResponses = formResponses.map((response) => {
      if (response.id === questionId) {
        let updatedResponse;

        switch (newType) {
          case 'radio':
            updatedResponse = { ...response, type: newType, selectedOption: '' };
            break;
          case 'checkbox':
            updatedResponse = { ...response, type: newType, selectedOptions: [] };
            break;
          case 'text':
            updatedResponse = { ...response, type: newType, answer: '' };
            break;
          case 'date':
            updatedResponse = { ...response, type: newType, answer: '' };
            break;
          case 'multigrid':
            updatedResponse = { ...response, type: newType, answers: Array(response.options.length).fill('') };
            break;
          default:
            updatedResponse = response;
            break;
        }

        return updatedResponse;
      }

      return response;
    });

    setFormResponses(updatedResponses);
  };

  const handleDeleteOption = () => {

  }

  return (
    <>
    <div> 
    <div style={{width: '60%', margin:'auto', display: 'flex', flexDirection:'row', alignItems:'center', justifyContent:'center'}}>
      <div >
      {formResponses.map((question) => (
        <Accordion key={question.id} style={{marginBottom:'10px'}} expanded={expanded === `panel${question.id}`} onChange={ (event, isExpanded) => handleAccordionChange(isExpanded, `panel${question.id}`)}>
          <AccordionSummary aria-controls={`${question.id}-content`} id={`${question.id}-header`}  >
            {/* <Typography variant="h6">{question.question}</Typography>
            <Button
              variant="outlined"
              color="secondary"
              startIcon={<DeleteIcon />}
              onClick={() => handleDeleteQuestion(question.id)}
            >
              Delete
            </Button> */}
            {/* <p style={{fontSize:'18px', float:'left', paddingLeft:'5px'}}>Question <sup style={{color:'red'}}>*</sup></p>
            <br />
            <p style={{display:'flex', flexDirection:'row', alignItems:'center'}}> <RadioButtonUncheckedIcon fontSize="small" />  {" "}{" "}Option1</p> */}

            <Grid container spacing={0}>
              <Grid item xs={7} >
                <TextField placeholder="Question" disabled/>     
              </Grid>
            </Grid>  
          </AccordionSummary>
          <AccordionDetails id={`${question.id}-content`} style={{diaplay:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center'}}>
            <Grid container spacing={0}>
              <Grid item xs={7} >
                <TextField hiddenLabel id={question.id} defaultValue="Question" variant="filled" fullWidth autoFocus/>     
              </Grid>
              <Grid item xs={1}>
                <IconButton>
                  <CropOriginalIcon style={{ color: "#5f6368" }} />
                </IconButton>                
              </Grid>
              <Grid item xs={4}>
                <Select
                  value={question.type}
                  onChange={(e) => handleQuestionTypeChange(question.id, e.target.value)}
                  fullWidth
                >
                  <MenuItem value="radio"> <RadioButtonCheckedIcon style={{ marginRight: "10px" }}/> Multiple choice</MenuItem>
                  <MenuItem value="checkbox"> <CheckBoxOutlinedIcon style={{ marginRight: "10px" }}/> Checkboxes</MenuItem>
                  <MenuItem value="text" > <ShortTextIcon style={{ marginRight: "10px" }}/> Short answer</MenuItem>
                  <MenuItem value="date"> <InsertInvitationOutlinedIcon style={{ marginRight: "10px" }}/> Date</MenuItem>
                  <MenuItem value="multigrid"> <AppsOutlinedIcon style={{ marginRight: "10px" }}/> Multigrid</MenuItem>
                </Select>
              </Grid>
            </Grid>

            <Divider />
            <Grid item xs={12} >
            {question.type === 'radio' && (
               <Grid container spacing={1}>
               {question.options.map((option, index) => (
                 <Grid item xs={12} key={option} style={{display:'flex', flexDirection:'row', alignItems:'center', justifyContent:'flex-start' }}>
                   <Grid item xs={10}  style={{display:'flex', flexDirection:'row', alignItems:'center' }} alignItems='center'  >
                   <RadioButtonUncheckedIcon /> 
                   <TextField
                     placeholder={option}
                     name={question.id}
                     onChange={(e) => handleOptionChange(question.id, index, e.target.value)}
                     fullWidth
                   />
                   </Grid>
                   <Grid item xs={2} style={{display:'flex'}}>
                   <Tooltip title='Add image'>
                      <IconButton>
                       <CropOriginalIcon /> 
                      </IconButton>
                    </Tooltip>
                    <Tooltip title='Remove'>
                      <IconButton onClick={handleDeleteOption}>
                       <CloseOutlinedIcon /> 
                      </IconButton>
                    </Tooltip>
                    </Grid>                  
                 </Grid>
               ))}
             </Grid>
            )}
            {question.type === 'checkbox' && (
              <Grid container spacing={1}>
              {question.options.map((option, index) => (
                <Grid item xs={12} key={option} style={{display:'flex', flexDirection:'row', alignItems:'center', justifyContent:'flex-start' }}>
                  <Grid item xs={10}  style={{display:'flex', flexDirection:'row', alignItems:'center' }} alignItems='center'  >
                  <CheckBoxOutlineBlankOutlinedIcon />
                  <TextField
                    placeholder={option}
                    name={`$(question.id)-${option}`}
                    onChange={(e) => handleCheckboxChange(question.id, option)}
                    fullWidth
                  />
                  </Grid>
                  <Grid item xs={2} style={{display:'flex'}}>
                  <Tooltip title='Add image'>
                     <IconButton>
                      <CropOriginalIcon /> 
                     </IconButton>
                   </Tooltip>
                   <Tooltip title='Remove'>
                     <IconButton onClick={handleDeleteOption}>
                      <CloseOutlinedIcon /> 
                     </IconButton>
                   </Tooltip>
                   </Grid>                  
                </Grid>
              ))}
            </Grid>
            )}
            {question.type === 'text' && (
              <TextField label="Text answer" onChange={(e) => handleTextChange(question.id, e.target.value)} />
            )}
            {question.type === 'date' && (
              <TextField type="date" onChange={(e) => handleDateChange(question.id, e.target.value)} />
            )}
            {question.type === 'multigrid' && (
              <Grid container spacing={2}>
                {question.options.map((option, index) => (
                  <Grid item xs={6} key={option}>
                    <TextField
                      label={option}
                      onChange={(e) => handleMultiGridChange(question.id, index, e.target.value)}
                    />
                  </Grid>
                ))}
              </Grid>
            )}
            
            </Grid>

            <Divider />
            <Grid item xs={8}>
            <Tooltip title='Duplicate'>
                  <IconButton>
                    <MdContentCopy style={{color:"5f6368"}} />
                  </IconButton>
                </Tooltip>
                  <Tooltip title='Delete'>
                    <IconButton aria-label="delete" onClick={() => handleDeleteQuestion(question.id)}>
                      <BsTrash  style={{color:"5f6368"}}/>
                    </IconButton>
                  </Tooltip>
                  <span>| </span>{" "}
                  <span> {" "} {" "}Required 
                    <IconButton >
                    <Switch />
                    </IconButton>
                  </span>
                  <Tooltip title='More options' >
                    <IconButton>
                      <MoreVertIcon />  
                    </IconButton>
                  </Tooltip>
            </Grid>

          </AccordionDetails>
        </Accordion>
      ))}
        {/* <Button variant="contained" color="primary" onClick={handleAddQuestion}>
        Add Question
        </Button> */}
      </div>

      {/* We are adding Icons-group to add New Question(Accordion) */}
        <div className='sidebar_icons'>
          <Box sx={{display: 'flex', flexDirection:'column', alignItems:'center', border:'1px solid gray', borderRadius:'5px', marginLeft:'10px'}}>
            <Tooltip title="Add question" placement="right" size="medium">
              <IconButton  onClick={handleAddQuestion}  >                
                <AddCircleOutlineIcon  />              
              </IconButton>
            </Tooltip>
            <Tooltip title="Add image" placement="right" size="medium">
              <IconButton>
                <CropOriginalIcon/>
              </IconButton>
            </Tooltip>
            <Tooltip title="Add video" placement="right" size="medium">
              <IconButton>
                <OndemandVideoIcon style={{marginBottom:"0px"}}/>
              </IconButton>
            </Tooltip>
          </Box>       
        </div> 
    </div>
    </div>
    </>
  );
};

export default GoogleFormQuestions;
