import React from 'react';
import MoreVertIcon from '@material-ui/icons/MoreVert'; 
import {Avatar, IconButton, Tooltip, Button, Box} from '@material-ui/core';
import formImage from '../../assets/forms_image.png';
import avatarImage from '../../assets/suresh.jpg';
import {FiStar, FiSettings} from 'react-icons/fi';
import {AiOutlineEye} from 'react-icons/ai';
import {GrUndo, GrRedo} from 'react-icons/gr';
import ColorLensIcon from '@material-ui/icons/ColorLensOutlined';
import { MdOutlineFolderOpen} from 'react-icons/md';
import ExtensionOutlinedIcon from '@material-ui/icons/ExtensionOutlined';
import './NewForm.css';
import FormTabs from './FormTabs';


const NewForm = () => {
  return (
    <>
      <div className="form_header">
        <div className="form_header_left">
          <Tooltip title='Forms Home'>
            <IconButton>
              <img src={formImage} alt="no pic" width={40} height={40} />
            </IconButton>
          </Tooltip>
          <input type='text' placeholder='Untitled form' className='form_name' />
          <Tooltip title='Move to folder'>            
            <Box>
            <MdOutlineFolderOpen className='form_header_icon' style={{ marginRight:'10px'}} />
            </Box>        
          </Tooltip>
          <Tooltip title='Important'>
            <Box>
            <FiStar className='form_header_icon' style={{ marginRight:'10px'}} />
            </Box>
          </Tooltip>
          <Tooltip title='Every change that you make is automatically saved in Drive. Last edit was {time} ago'>
            <Box>
            <span style={{fontSize:'12px', fontWeight:'400'}} >All changes saved in Drive</span>
            </Box>
          </Tooltip>
        </div>

        <div className="form_header_right">
        <Tooltip title='Ad-ons'>
            <IconButton>
              <ExtensionOutlinedIcon className='form_header_icon' />
            </IconButton>
          </Tooltip>
          <Tooltip title='Customize Theme'>
            <IconButton>
              <ColorLensIcon className='form_header_icon'  />
            </IconButton>
          </Tooltip>
          <Tooltip title='Preview'>
            <IconButton>
              <AiOutlineEye className='form_header_icon'  />
            </IconButton>
          </Tooltip>
          <Tooltip title='Settings'>
            <IconButton>
              <FiSettings className='form_header_icon' />
            </IconButton>
          </Tooltip>
          <Tooltip title='Undo'>
            <IconButton>
              <GrUndo className='form_header_icon' />
            </IconButton>
          </Tooltip>
          <Tooltip title='Redo'>
            <IconButton>
              <GrRedo className='form_header_icon' />
            </IconButton>
          </Tooltip>
          <Button variant='contained' color='primary' href='#contained-buttons' style={{textTransform:'capitalize'}}>Send</Button>
          <Tooltip title='More'>
            <IconButton>
              <MoreVertIcon className='form_header_icon' />
            </IconButton> 
          </Tooltip>
          <Tooltip title=''>
            <IconButton>
              <Avatar src={avatarImage} />
            </IconButton>
          </Tooltip>
        </div>
      </div>
      
    </>
  )
}

export default NewForm;
