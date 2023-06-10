import React, {useState} from 'react';
import './QuestionForm.css';
import CropOriginalIcon from "@material-ui/icons/CropOriginal";
import Select from "@material-ui/core/Select";
import Switch from "@material-ui/core/Switch";
import CheckBoxOutlinedIcon from "@material-ui/icons/CheckBoxOutlined";
import ShortTextIcon from "@material-ui/icons/ShortText";
import SubjectIcon from "@material-ui/icons/Subject";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  FormControlLabel,
  IconButton,
  MenuItem,
  Radio,
  Tooltip,
  Divider,
  Typography,
} from "@material-ui/core";
import { BsTrash } from "react-icons/bs";
import {MdContentCopy} from "react-icons/md";
import FilterNoneIcon from "@material-ui/icons/FilterNone";
import OndemandVideoIcon from "@material-ui/icons/OndemandVideo";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import RadioButtonUncheckedIcon from "@material-ui/icons/RadioButtonUnchecked";
import RadioButtonCheckedIcon from "@material-ui/icons/RadioButtonChecked";
import CloseOutlinedIcon from '@material-ui/icons/CloseOutlined';

const QuestionForm = () => {

  const [questions, setQuestions] = useState([
    {  
      questionText: "Question 1",
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

  return (
    <>
      <div className="question_form">
        <div className="section1">
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
        </div>

        {/* We are adding Icons-group to add New Question(Accordion) */}
         <div className="section2">
            <Tooltip title="Add question" placement="right" size="medium">
              <IconButton  /* onClick={handleAddQuestion}  */ >                
                <AddCircleOutlineIcon />              
              </IconButton>-
            </Tooltip>
            <Tooltip title="Add image" placement="right" size="medium">
              <IconButton>
                <CropOriginalIcon />
              </IconButton>
            </Tooltip>
            <Tooltip title="Add video" placement="right" size="medium">
              <IconButton>
                <OndemandVideoIcon  style={{marginBottom:"0px"}}/>
              </IconButton>
            </Tooltip>     
          </div> 
          

      </div>
    </>
  )
}

export default QuestionForm;
