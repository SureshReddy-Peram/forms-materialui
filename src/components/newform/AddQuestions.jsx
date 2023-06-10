import React from 'react';
import { Tooltip, IconButton} from 'materail-ui/core';
import AddCircleOutlineIcon from 'material-ui/icons/AddCircleOutline';
import CropOriginalIcon from 'material-ui/icons/CropOriginal';
import OndemandVideoIcon from '@material-ui/icons/OndemandVideo';

const AddQuestions = () => {

    

  return (
    <>
      
      <div className="section1">
          {
            questions.map( (question, i) => (
             <Accordion aria-expanded={question.open} >
              <AccordionSummary>

              </AccordionSummary>

              {/* Layout items after clicking on Accordion */}
             <div className="question_boxes">
              <AccordionDetails className='add_question'>
                <div className="add_question_top">
                  <input type="text" name="question" className='question' placeholder='Untitled Question' value={question.questionText} />
                  <CropOriginalIcon style={{ color: "#5f6368" }} />
                  <Select
                  className="select"
                  style={{ color: "#5f6368", fontSize: "13px" }}
                  >
                  <MenuItem id="text" value="text">
                    {" "} 
                    <ShortTextIcon style={{ marginRight: "10px" }} /> Short
                    answer
                  </MenuItem>
                  <MenuItem id="text" value="text">
                    {" "}
                    <SubjectIcon style={{ marginRight: "10px" }} /> Paragraph
                  </MenuItem>
                  <MenuItem id="radio" value="radio" default>
                    {" "}
                    <RadioButtonCheckedIcon
                      style={{ marginRight: "10px" }}
                    />{" "}
                    Multiple choice
                  </MenuItem>
                  <MenuItem id="checkbox" value="checkbox">
                    <CheckBoxOutlinedIcon style={{ marginRight: "10px" }} />{" "}
                    Checkboxes{" "}
                  </MenuItem>
                  {/* <MenuItem id="dropdown" value="Dropdown"><ExpandCircleDownOutlinedIcon style={{marginRight:"10px"}}/> Dropdown</MenuItem> */}
                </Select>
              </div>

              <hr />
              {/* Adding answer options for question */}

             {
              question.options.map((option) => (
                <div className="add_question_body" key={option}>
                  
                  {  
                    question.questionType === "radio" ?
                    ( 
                      <input type={question.questionType} style={{marginRight:'10px'}} /> 
                    ) : (
                      <ShortTextIcon style={{marginRight:'10px'}}/>
                    )

                  }
                      <div>
                        <input type="text" name="text" className="text_input" placeholder='option' value={question.options.questionText} />
                      </div>                  
                </div>
              ))
             } 
              
              <hr />
              <div className="add_question_bottom">
                <Tooltip title='Duplicate'>
                  <IconButton>
                    <MdContentCopy style={{color:"5f6368"}} />
                  </IconButton>
                </Tooltip>
                  <Tooltip title='Delete'>
                    <IconButton aria-label="delete">
                      <BsTrash  fontSize="large" fontWeight={900} style={{color:"black"}}/>
                    </IconButton>
                  </Tooltip>
                  <span>|</span>
                  <span> Required {" "}
                    <IconButton >
                    <Switch />
                    </IconButton>
                  </span>
                  <Tooltip title='More options' >
                    <IconButton>
                      <MoreVertIcon />  
                    </IconButton>
                  </Tooltip>
              </div>

              </AccordionDetails>
              </div> 
              
             </Accordion> 
            ))
          }  
        </div> 
        {/*  <>
                {question.options.map((option) => (
                  <FormControlLabel
                    key={option}
                    control={<Radio name={question.id} />}
                    label={option}
                    onChange={() => handleOptionChange(question.id, option)}
                  />
                ))} 
              </>  */}

             {/*  <>
                {question.options.map((option) => (
                  <FormControlLabel
                    key={option}
                    control={<Checkbox name={`${question.id}-${option}`} />}
                    label={option}
                    onChange={() => handleCheckboxChange(question.id, option)}
                  />
                ))}
              </> */}
    </>
  )
}

export default AddQuestions
