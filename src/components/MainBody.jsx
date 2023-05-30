import React, {useState} from 'react';
import {IconButton, Tooltip, Select, MenuItem, FormControl, InputLabel} from '@material-ui/core';
import  ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import StorageIcon from '@material-ui/icons/Storage';
import SortByAlphaIcon from '@material-ui/icons/SortByAlpha';
import FolderOpenIcon from '@material-ui/icons/FolderOpen';
import MoreVertIcon from '@material-ui/icons/MoreVert'; 
import contact from '../assets/contact-form.png';
import './MainBody.css';

const MainBody = () => {

   const date = () => { new Date() };

  return (
    <>
      <div className="mainbody">
      <div className="mainbody_top">
        <div className="mainbody_top_left">
          <span className="title">Recent forms</span>
        </div>
        <div className="mainbody_top_right">
          <div className="mainbody_top_center" style={{fontSize:'16px', marginRight:'125px'}}>
          Owned by anyone  <ArrowDropDownIcon />
          </div>  
        
            <Tooltip title="List view" arrow>
              <IconButton>
                <StorageIcon style={{fontSize:'20px', color:'black'}}/>
              </IconButton>
            </Tooltip>
            <Tooltip title="Sort options" arrow>
              <IconButton>
                <SortByAlphaIcon style={{color:'black'}}/>
              </IconButton>
            </Tooltip>
            <Tooltip title='Open file picker' arrow>            
              <IconButton>
                <FolderOpenIcon style={{color:'black'}}/>
              </IconButton>              
            </Tooltip>         
        </div>     
      </div>

      <div className="mainbody_docs">
        <div className="doc_card">
            <img src={contact} alt="no pic" className='doc_image' />
            <div className="doc_card_content">
              <p className='card_title'>Contact Information</p>
              <div className="card_content">
                <div className="content_left">
                  <StorageIcon style={{backgroundColor:'#6E2594', color:'white', padding:'2px', fontSize:'18px'}}/>
                </div>  
                <p>Opened  </p> 
                <IconButton>
                  <MoreVertIcon style={{color:'black', fontSize:'20px', fontWeight:'400'}}/>
                </IconButton>
              </div>
            </div>
          </div> 

          <div className="doc_card">
            <img src={contact} alt="no pic" className='doc_image' />
            <div className="doc_card_content">
              <p className='card_title'>Contact Information</p>
              <div className="card_content">
                <div className="content_left">
                  <StorageIcon style={{backgroundColor:'#6E2594', color:'white', padding:'2px', fontSize:'18px'}}/>
                </div>  
                <p>Opened  </p> 
                <IconButton>
                  <MoreVertIcon style={{color:'black', fontSize:'20px', fontWeight:'400'}}/>
                </IconButton>
              </div>
            </div>
          </div>

          <div className="doc_card">
            <img src={contact} alt="no pic" className='doc_image' />
            <div className="doc_card_content">
              <p className='card_title'>Contact Information</p>
              <div className="card_content">
                <div className="content_left">
                  <StorageIcon style={{backgroundColor:'#6E2594', color:'white', padding:'2px', fontSize:'18px'}}/>
                </div>  
                <p>Opened  </p> 
                <IconButton>
                  <MoreVertIcon style={{color:'black', fontSize:'20px', fontWeight:'400'}}/>
                </IconButton>
              </div>
            </div>
          </div>

          <div className="doc_card">
            <img src={contact} alt="no pic" className='doc_image' />
            <div className="doc_card_content">
              <p className='card_title'>Contact Information</p>
              <div className="card_content">
                <div className="content_left">
                  <StorageIcon style={{backgroundColor:'#6E2594', color:'white', padding:'2px', fontSize:'18px'}}/>
                </div>  
                <p>Opened  </p> 
                <IconButton>
                  <MoreVertIcon style={{color:'black', fontSize:'20px', fontWeight:'400'}}/>
                </IconButton>
              </div>
            </div>
          </div>

        </div>      
      </div>
    </>
  )
}
export default MainBody;
