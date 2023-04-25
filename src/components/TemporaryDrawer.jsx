import React, {useState} from 'react';
import MenuIcon  from '@material-ui/icons/Menu';
import {IconButton, Tooltip, Divider, ListItemText, makeStyles} from '@material-ui/core';
import {List, ListItem, Drawer} from '@material-ui/core';
import formImage from '../assets/file-image.jpg';
import docImage from '../assets/docs.png'
import driveImage from '../assets/drive.png';
import sheetImage from '../assets/sheets.png';
import slideImage from '../assets/slides.png';
import {BsQuestionCircle} from 'react-icons/bs';
import {FiSettings} from 'react-icons/fi';

import './TemporaryDrawer.css';

const TemporaryDrawer = () => {

  

    /*2.Now let's create the state object with a property 'left', which is having a boolean value i.e false or true 
        This helps to open or close the Sidebar  */
    const [bool, setBool] = useState({
        left: false
    });

    /* 3.We define a function toggleDrawer, which takes anchor and open as parameters.
        'anchor' takes a string value 'left' and 'open' takes a boolean value false or true.
        This helps in maintaining the state of the Drawer */
    const toggleDrawer = (anchor, open) =>(event) => {
        setBool({...bool, [anchor]:open})
    }

   /*  const useStyles = makeStyles( (theme) => ({
      listItem: {
        marginLeft: "20px", fontSize:"14px", fontWeight:"500", color:"grey" 
       },
      slideImages: { width: "20px", height:"20px"},
       })
    ) */

    //const classes = useStyles();

    //6.We define list function, which takes 'anchor' as prop for Sidebar Menu.
    const list = (anchor) => {
        return (
          <>
            <div style={{width: '250px'}} role="presentation">
             <List>
                <ListItem>
                  <ListItemText style={{fontSize:'50px', marginLeft:'5px'}}>
                    <h3>
                      <strong>
                      <span className='g-word'>
                        <span className='g-blue'>G</span>
                        <span className='o-red'>o</span>
                        <span className='o-yellow'>o</span>
                        <span className='g-blue'>g</span>
                        <span className='l-green'>l</span>
                        <span className='e-red o-red'>e</span>
                      </span>                      
                      </strong>
                      <span className='text'>Forms</span>
                    </h3> 
                  </ListItemText>
                </ListItem>
              </List>  
                <Divider/>
              <List className='list-items'>  
                <ListItem className='list_item'>                 
                  <img src={docImage} alt="No icon" className="image" />
                  <div className="listItem">Docs</div>
                </ListItem>
                <ListItem className="list_item">
                  <img src={sheetImage} alt="No icon" className="image" />
                  <div className="listItem">Sheets</div>
                </ListItem>
                <ListItem className="list_item" style={{paddingLeft:"13px"}}>
                  <img src={slideImage} alt="No icon" width={30} height={30}  />
                  <div className="listItem"style={{paddingLeft:"10px"}}>Slides</div>
                </ListItem>
                <ListItem className="list_item">
                  <img src={formImage} alt="No icon" className="image" />
                  <div className="listItem">Forms</div>
                </ListItem>
                <Divider />
                <ListItem className="list_item">
                  <FiSettings className="image" style={{color:"gray"}}/>
                  <div className="listItem">Settings</div>
                </ListItem>
                <ListItem className="list_item">
                  <BsQuestionCircle className="image" style={{color:"gray"}} />
                  <div className="listItem">Help & Feedback</div>
                </ListItem>
                <Divider />
                <ListItem className="list_item">
                  <img src={driveImage} alt="No icon" className="image" />  
                  <div className="listItem">Drive</div>
                </ListItem>
             </List>
            </div>
          </>  
        );
    }

  return (
    <>    
        {/* 5.Whenever the user clicks this MenuIcon this Drawer set to 'true' */}
        {/* 1. Creating MenuIcon with Tooltip and hover circle */}
        <Tooltip title="Main menu">
          <IconButton onClick={toggleDrawer("left",true)} >
            <MenuIcon /> 
          </IconButton>
        </Tooltip>
        {/*4.This Drawer has one more property i.e 'onClose', which takes Callback function as input.
             'anchor' property gives the position of Sidebar  */}
       { <Drawer open={bool['left']} onClose={toggleDrawer("left",false)} anchor={"left"}>
          {
            list('left')
          }
        </Drawer>}
    </>
  )
}
export default TemporaryDrawer;
