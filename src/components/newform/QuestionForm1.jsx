import React, { useState, useEffect } from "react";
import CropOriginalIcon from "@material-ui/icons/CropOriginal";
import Select from "@material-ui/core/Select";
import Button from "@material-ui/core/Button";
import Switch from "@material-ui/core/Switch";
import CheckBoxOutlinedIcon from "@material-ui/icons/CheckBoxOutlined";
import ShortTextIcon from "@material-ui/icons/ShortText";
import SubjectIcon from "@material-ui/icons/Subject";
import AppsOutlinedIcon from '@material-ui/icons/AppsOutlined';
import LinearScaleOutlinedIcon from '@material-ui/icons/LinearScaleOutlined';
import ScheduleOutlinedIcon from '@material-ui/icons/ScheduleOutlined';
import InsertInvitationOutlinedIcon from '@material-ui/icons/InsertInvitationOutlined';
import MoreVertIcon from "@material-ui/icons/MoreVert";
import ViewAgendaOutlinedIcon from '@material-ui/icons/ViewAgendaOutlined';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  FormControlLabel,
  IconButton,
  MenuItem,
  Grid,
  Radio,
  Checkbox,
  TextField,
  Tooltip,
  Typography,
  Divider,
} from "@material-ui/core";
import { BsTrash, BsCloudArrowUp, BsGrid3X3GapFill } from "react-icons/bs";
//import { LuFileInput } from 'react-icons/lu';
import FilterNoneIcon from "@material-ui/icons/FilterNone";
import CloudUploadOutlinedIcon from '@material-ui/icons/CloudUploadOutlined';
import OndemandVideoIcon from "@material-ui/icons/OndemandVideo";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import RadioButtonUncheckedIcon from "@material-ui/icons/RadioButtonUnchecked";
import RadioButtonCheckedIcon from "@material-ui/icons/RadioButtonChecked";
//import ExpandCircleDownOutlinedIcon from '@material-ui/icons/ExpandCircleDownOutlined';
import CloseOutlinedIcon from '@material-ui/icons/CloseOutlined';
import "./QuestionForm.css";
import QuestionsUI from "./QuestionsUI";
import GoogleForm from "./GoogleForm";
import { Language } from "@material-ui/icons";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ActionsInAccordionSummary from "./ActionsInAccordionSummary";
import GoogleFormsQuestions from "./GoogleFormQuestions";
import GoogleFormQuestions from "./GoogleFormQuestions";



const QuestionForm1 = () => {
 

    const [formResponses, setFormResponses] = useState([
      {
        id: 'question1',
        question: 'Question 1',
        type: 'radio',
        options: ['Option 1', 'Option 2', 'Option 3'],
        selectedOption: ''
      }
    ]);
  
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

/*   const [questions, setQuestions] = useState([
    {
      questionText: "Which is the capital of karnataka ?",
      questionType: "radio",
      options: [
        { optionText: "Bangalore" },
        { optionText: "Hyderabad" },
        { optionText: "Chennai" },
        { optionText: "Delhi" },
      ],
      open: true,
      required: false,
    },
  ]);

  const changeQuestion = (text, i) => {
    var newQuestion = [...questions];
    newQuestion[i].questionText = text;
    setQuestions(newQuestion);
    console.log(newQuestion);
  }  */

    // Multiple choice questions using radio buttons
    const handleOptionChange = (questionId, option) => {
        const updatedResponses = formResponses.map( (response) => {
          if(response.id === questionId){
              return { ...response, selectionOption: option}            
          }
           return response;
        })
        setFormResponses(updatedResponses);
    };

    //Short answer for questions using text 
    const handleTextChange = (questionId, answer) => {
      const updatedResponses = formResponses.map( (response) => {
        if(response.id === questionId){
          return {...response, answer}
        }
          return response;
      })
        setFormResponses(updatedResponses);
    }

   //Selection of the question type
   const handleQuestionTypeChange = (questionId, newType) => {
      const updatedResponses = formResponses.map((response) => {
        if( response.id === questionId){
          let updatedResponse;
        
        switch( newType){
          case 'radio': updatedResponse = { ...response, type: newType, selectedOption: ''};
                       break;
          case 'checkbox': updatedResponse = { ...response, type: newType, selectedOption: ''}; 
                        break;
          case 'select': updatedResponse = { ...response, type: newType, selectedOption: ''}; 
                        break;
          case 'text':
            updatedResponse = { ...response, type: newType, answer: '' };
            break;
          case 'text2':
            updatedResponse = { ...response, type: newType, answer: '' };
            break;
          case 'file':
              updatedResponse = { ...response, type: newType, answer: '' };
              break; 
          case 'list':
              updatedResponse = { ...response, type: newType, answer: '' };
              break;
          case 'list2':
              updatedResponse = { ...response, type: newType, answer: '' };
              break;   
          case 'list3':
            updatedResponse = { ...response, type: newType, answers: Array(response.options.length).fill('') };
            break;
          case 'date':
            updatedResponse = { ...response, type: newType, answer: '' };
            break;
          case 'time':
            updatedResponse = { ...response, type: newType, answer: '' };
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
   }
  
  return (
    <>
      <div className="question_form">
        <div className="section">
          <div className="question_form_top">
            <input
              type="text"
              className="question_form_top_name"
              name="name"
              style={{ color: "black" }}
              placeholder="Untitled form"
            />
            <input
              type="text"
              className="question_form_top_desc"
              name="desc"
              placeholder="Form description"
            />
            <br />
            <div className="mail">
              <label htmlFor="email" className="question_form_top_label">
                Email
              </label>
              <br />
              <input
                type="email"
                name="email"
                className="question_form_top_email"
                placeholder="Valid email"
              />

              <p className="question_form_top_para">
                This form is collecting emails.{" "}
                <a href="blank">Change settings</a>
              </p>
            </div>
          </div> 

                

          <div className="select">
           {/* <GoogleFormQuestions /> */}
            {/* <Accordion expanded={questions === 'panel1'}>
              <AccordionSummary aria-controls="panel1bh-content" id="panel1bh-header" elevation={1}  >
                <Typography sx={{width:'15%', flexShrink: 0}}> <RadioButtonCheckedIcon /></Typography>
                  <div style={{ display: "flex" }}>
                      <FormControlLabel
                        style={{ marginLeft: "5px", marginBottom: "5px" }}
                        disabled
                        control={
                            <input
                            type={questions.questionType}
                            color="primary"
                            style={{ marginRight: "3px" }}
                            required={questions.type}
                          />
                        }
                        label={
                          <Typography
                            sx={{
                              fontFamily: "Roboto,Arial, sans-serif",
                              fontSize: "13px",
                              fontWeight: 400,
                              letterSpacing: ".2px",
                              lineHeight: "20px",
                              color: "#202124",
                            }}
                          >
                            {questions.optionText}
                          </Typography>
                        }
                      ></FormControlLabel>
                  </div>         
              </AccordionSummary>
            </Accordion> */}
            {/* <GoogleFormQuestions /> */}
          </div> 

          <div className="question_edit">
            <Tooltip title="Add question" placement="right" size="medium">
              <IconButton onClick={handleAddQuestion} >                
                <AddCircleOutlineIcon className="edit" />              
              </IconButton>-
            </Tooltip>
            <Tooltip title="Add image" placement="right" size="medium">
              <IconButton>
                <CropOriginalIcon className="edit"/>
              </IconButton>
            </Tooltip>
            <Tooltip title="Add video" placement="right" size="medium">
              <IconButton>
                <OndemandVideoIcon className="edit" style={{marginBottom:"0px"}}/>
              </IconButton>
            </Tooltip>     
          </div>       
        </div>

        <div className="section">
            {
              formResponses.map( (question, i) => (
                <Accordion key={question.id}>
                  <AccordionSummary aria-controls={`${question.id}-content`} id={`${question.id}-header`} className="MuiAccordionSummary_content">
                    <Typography variant="h6">{question.question}</Typography>
                    <div className="radio_icon">
                      <RadioButtonUncheckedIcon fontSize="small" /> Option 1
                    </div>                   
                  </AccordionSummary>
                  <AccordionDetails id ={`${question.id}-content`}>
                    <Grid container spacing={2}>
                      <Grid item xs={7} >
                        <input type="text" className="question" placeholder="Question" />
                      </Grid>
                      <Grid item xs={1} >
                        <IconButton> <CropOriginalIcon /></IconButton>
                      </Grid>
                      <Grid item xs={4} >
                        <Select value={question.type} className="select" style={{color: "#5f6368", fontSize: "13px"}} onChange={(e) => handleQuestionTypeChange(question.id, e.target.value) } >
                          <MenuItem id="text" value="text"> {" "} <ShortTextIcon style={{ marginRight: "10px" }}/> Short answer </MenuItem>
                          <MenuItem id="text2" value="text2"> {" "} <SubjectIcon style={{ marginRight: "10px" }}/> Paragraph </MenuItem>
                          <Divider />
                          <MenuItem id="radio" value="radio" default> {" "} <RadioButtonCheckedIcon style={{ marginRight: "10px" }}/> Multiple choice </MenuItem>
                          <MenuItem id="checkbox" value="Checkbox"> {" "} <CheckBoxOutlinedIcon style={{ marginRight: "10px" }}/> Checkboxes </MenuItem>
                          <MenuItem id="select" value="select" > {" "} <ExpandMoreIcon style={{ marginRight: "10px" }}/> Dropdown </MenuItem>
                          <Divider />
                          <MenuItem id="file" value="file" > {" "}<CloudUploadOutlinedIcon style={{ marginRight: "10px" }}/> File upload </MenuItem>
                          <Divider />
                          <MenuItem id="list" value="list" > {" "}<LinearScaleOutlinedIcon style={{ marginRight: "10px" }}/> Linear scale </MenuItem>
                          <MenuItem id="list2" value="list2" > {" "}<BsGrid3X3GapFill style={{ marginRight: "15px", marginLeft:"3px" }}/> Multiple choice grid </MenuItem>
                          <MenuItem id="list3" value="list3" > {" "}<AppsOutlinedIcon style={{ marginRight: "10px" }}/> Checkbox grid </MenuItem>
                          <Divider />
                          <MenuItem id="date" value="date" > {" "}<InsertInvitationOutlinedIcon style={{ marginRight: "10px" }}/> Date </MenuItem>
                          <MenuItem id="time" value="time" > {" "}<ScheduleOutlinedIcon style={{ marginRight: "10px" }}/> Time </MenuItem>
                        </Select>
                      </Grid> 
                     {/*  <Grid item xs={12}>
                        <div>
                          <RadioButtonUncheckedIcon fontSize="small" />
                          <input type="text" className="form-control" placeholder="Option 1" />
                          <IconButton><CropOriginalIcon /></IconButton>
                          <IconButton><CloseOutlinedIcon /></IconButton>
                        </div>
                       
                      </Grid> */}
                    </Grid>
                      
                    {/* Providing options to the Question */}
                {question.type === 'radio' && (
              <>
                {question.options.map((option) => (
                  <FormControlLabel
                    key={option}
                    control={<Radio name={question.id} />}
                    label={option}
                    onChange={() => handleOptionChange(question.id, option)}
                  />
                ))}
              </>
            )}

            {question.type === 'checkbox' && (
              <>
                {question.options.map((option) => (
                  <FormControlLabel
                    key={option}
                    control={<Checkbox name={`${question.id}-${option}`} />}
                    label={option}
                    /* onChange={() => handleCheckboxChange(question.id, option)} */
                  />
                ))}
              </>
            )}
            {question.type === 'text' && (
              <TextField label="Text answer" onChange={(e) => handleTextChange(question.id, e.target.value)} />
            )}
            {question.type === 'date' && (
              <TextField type="date" /* onChange={(e) => handleDateChange(question.id, e.target.value)}  *//>
            )}
            {question.type === 'multigrid' && (
              <Grid container spacing={2}>
                {question.options.map((option, index) => (
                  <Grid item xs={6} key={option}>
                    <TextField
                      label={option}
                      /* onChange={(e) => handleMultiGridChange(question.id, index, e.target.value)} */
                    />
                  </Grid>
                ))}
              </Grid>
            )}
                  </AccordionDetails>
                </Accordion>
              ))
            }
          </div>  
        
        <div>
          <ExpandMoreIcon />
          <CropOriginalIcon />
          <RadioButtonUncheckedIcon />
          <RadioButtonCheckedIcon />
          <CloseOutlinedIcon />
          <Select />
          <Switch />
          <CheckBoxOutlinedIcon />        
          <ShortTextIcon />
          <SubjectIcon />
          <OndemandVideoIcon />
          <AddCircleOutlineIcon />
          {/* <ExpandCircleDownOutlinedIcon /> */}
          <BsTrash />
          <BsCloudArrowUp />
        </div>
      </div>
    </>
  );
};

export default QuestionForm1;
