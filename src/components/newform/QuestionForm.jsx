import React, { useState, useEffect } from "react";
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
  Typography,
} from "@material-ui/core";
import { BsTrash } from "react-icons/bs";
import FilterNoneIcon from "@material-ui/icons/FilterNone";
import OndemandVideoIcon from "@material-ui/icons/OndemandVideo";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import RadioButtonUncheckedIcon from "@material-ui/icons/RadioButtonUnchecked";
import RadioButtonCheckedIcon from "@material-ui/icons/RadioButtonChecked";
//import ExpandCircleDownOutlinedIcon from '@material-ui/icons/ExpandCircleDownOutlined';
import "./QuestionForm.css";

const QuestionForm = () => {
  const [questions, setQuestions] = useState([
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

  function questionsUI() {
    return questions.map((ques, i) => (
      <div>
        <Accordion
          expanded={questions.open}
          className={questions[i].open ? "add_border" : ""}
        >
          <AccordionSummary
            aria-controls="panel-content"
            id="panel-header"
            elevation={1}
            style={{ width: "100%" }}
          >
            {questions[i].open ? (
              <div className="saved_questions">
                <Typography
                  style={{
                    fontSize: "15px",
                    fontWeight: 400,
                    letterSpacing: ".1px",
                    lineHeight: "24px",
                    paddingBottom: "8px",
                  }}
                >
                  {i + 1}. {questions[i].questionText}
                </Typography>
                {ques.map((options, j) => (
                  <div key={j}>
                    <div style={{ display: "flex" }}>
                      <FormControlLabel
                        style={{ marginLeft: "5px", marginBottom: "5px" }}
                        disabled
                        control={
                          <input
                            type={ques.questionType}
                            color="primary"
                            style={{ marginRight: "3px" }}
                            required={ques.type}
                          />
                        }
                        label={
                          <Typography
                            style={{
                              fontFamily: "Roboto,Arial, sans-serif",
                              fontSize: "13px",
                              fontWeight: 400,
                              letterSpacing: ".2px",
                              lineHeight: "20px",
                              color: "#202124",
                            }}
                          >
                            {ques.options[j].optionText}
                          </Typography>
                        }
                      ></FormControlLabel>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              ""
            )}
          </AccordionSummary>

          <div className="question_boxes">
            <AccordionDetails className="add_question">
              <div className="add_question_top">
                <input
                  type="text"
                  name="question"
                  className="question"
                  placeholder="Untitled Question"
                  value={ques.questionText}
                />
                <CropOriginalIcon style={{ color: "#5f6368" }} />
                <Select
                  className="select"
                  style={{ color: "#5f6368", fontSize: "13px" }}
                >
                  <MenuItem id="text" value="Text">
                    {" "}
                    <ShortTextIcon style={{ marginRight: "10px" }} /> Short
                    answer
                  </MenuItem>
                  <MenuItem id="text" value="Text">
                    {" "}
                    <SubjectIcon style={{ marginRight: "10px" }} /> Paragraph
                  </MenuItem>
                  <hr />
                  <MenuItem id="radio" value="Radio">
                    {" "}
                    <RadioButtonCheckedIcon
                      style={{ marginRight: "10px" }}
                    />{" "}
                    Multiple choice
                  </MenuItem>
                  <MenuItem id="checkbox" value="Checkboxes">
                    <CheckBoxOutlinedIcon style={{ marginRight: "10px" }} />{" "}
                    Checkboxes{" "}
                  </MenuItem>
                  {/* <MenuItem id="dropdown" value="Dropdown"><ExpandCircleDownOutlinedIcon style={{marginRight:"10px"}}/> Dropdown</MenuItem> */}
                </Select>
              </div>
              {ques.options.map((op, j) => (
                <div className="add_question_body" key={j}>
                  {
                  ques.questionType !== "text" ? (
                    <input
                      type={ques.questionType}
                      style={{ marginRight: "10px" }}
                    />
                  ) : (
                    <ShortTextIcon style={{ marginRight: "10px" }} />
                  )}
                  <div>
                    <input type="text" name="text" className="text_input" placeholder="option" value={ques.options[j].questionText} />
                  </div>

                  <CropOriginalIcon style={{color:"5f6368"}} />
                  <IconButton aria-label="delete">
                    
                  </IconButton>
                </div>
              ))}
            </AccordionDetails>
          </div>
        </Accordion>
      </div>
    ));
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
        </div>

        <div>
          <CropOriginalIcon />

          <RadioButtonUncheckedIcon />
          <RadioButtonCheckedIcon />
          <Select />
          <Switch />
          <CheckBoxOutlinedIcon />
          <ShortTextIcon />
          <SubjectIcon />
          <OndemandVideoIcon />
          <AddCircleOutlineIcon />
          {/* <ExpandCircleDownOutlinedIcon /> */}
        </div>
      </div>
    </>
  );
};

export default QuestionForm;
