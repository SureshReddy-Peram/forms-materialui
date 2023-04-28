import React from 'react'
import './Header.scss';
import {Avatar, IconButton, Tooltip} from '@material-ui/core';
import formImage from '../assets/file-image.jpg';
import SearchIcon from '@material-ui/icons/Search';
import AppsIcon from '@material-ui/icons/Apps';
import avatarImage from '../assets/suresh.jpg';
import CloseIcon from '@material-ui/icons/Close';
import TemporaryDrawer from './TemporaryDrawer';

const Header = () => {
  return (
    <>
      <div className="header">
        <div className="header_info">
          <TemporaryDrawer />
          <img src={formImage} alt="File Icon" width={40} height={40} title="Forms" />
          <div className='header_info_title' title="Forms">Forms</div>
        </div>

        <div className="header_search">       
          <Tooltip title="Search">
          <IconButton >
            <SearchIcon />
          </IconButton>
          </Tooltip>
          <input name="search" type="text" placeholder='Search here' />
          <IconButton>
            <CloseIcon />
          </IconButton>
        </div>
        
        <div className="header_right">
          <Tooltip title="Google apps">
          <IconButton >
            <AppsIcon />
          </IconButton>
          </Tooltip>
          <IconButton >
            <Avatar src={avatarImage} alt="no image" width={30} height={30} />
          </IconButton>
        </div>
      </div>
    </>
  )
}
export default Header;
