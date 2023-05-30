import React from 'react';
import UnfoldMoreIcon from '@material-ui/icons/UnfoldMore';
import { IconButton} from '@material-ui/core';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import blank from '../assets/forms-blank-googlecolors.png';
import contact from '../assets/contact-form.png';
import party from '../assets/party-invite-form.png';
import rsvp from '../assets/rsvp-form.png';
import signup from '../assets/T-shirt-from.png';
import uuid from 'react-uuid';
import {useNavigate} from 'react-router-dom';
import './Template.css';



const Template = () => {

   const navigate = useNavigate();

  const createForm = () => {
      //console.log('Blank form created');
      const id_ = uuid();
      
     /*  console.log(id_);      //If we click on 'blank' form, then generate unique Id.  */
     /* In the endpoint we tell the react, Which component to be rendered for which url ? */
 
      navigate("/form/"+id_);
  }
  return (
    <>
      <div className="template_section">
        <div className="template_top">
          <div className="header_left">
            <span style={{fontSize:'17px', color:'#202124'}}>Start a new form</span>
          </div>
          <div className="template_right">
            <div className="gallery_button">
              Template gallery {" "}
              <UnfoldMoreIcon fontSize='small'/>
            </div> |               
            <IconButton>
              <MoreVertIcon fontSize='small' style={{color:'black', fontWeight:'400'}}/>
            </IconButton>
          </div>
        </div>
        <div className="template_body">
          <div className="card" >
            <img src={blank} alt="no pic" className='card_image'onClick={createForm} />
            <p className='card_name'>Blank</p>
          </div>
          <div className="card">
            <img src={contact} alt="no pic" className='card_image'/>
            <p className='card_name'>Contact Information</p>
          </div>
          <div className="card">
            <img src={party} alt="no pic" className='card_image'/>
            <p className='card_name'>Party Invite</p>
          </div>
          <div className="card">
            <img src={rsvp} alt="no pic" className='card_image'/>
            <p className='card_name'>RSVP</p>
          </div>
          <div className="card">
            <img src={signup} alt="no pic" className='card_image'/>
            <p className='card_name'>T-Shirt Signup</p>
          </div>
          
        </div>
      </div>
    </>
  )
}
export default Template;
