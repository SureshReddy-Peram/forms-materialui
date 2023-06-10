import React, {useState} from 'react';
//import {makeStyles} from '@material-ui/core';
//import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
//import './FormTabs.css';
import QuestionForm from './QuestionForm';
import ResponsePage from './ResponsePage';
import SettingsPage from './SettingsPage';
import GoogleForm from './GoogleForm';
import GoogleFormQuestions from './GoogleFormQuestions';
import MyAccordion from './MyAccordion';

/* In order to override the styles, we use 'makeStyles' function  */
/* const useStyles = makeStyles( {
    root: {
        flexGrow: 1,
    }, 
    tab:{
        fontSize: 14,
        fontWeight: '600',
        fontFamily: 'Google Sans, Roboto, Arial, sans-serif',
        textTransform: 'capitalize',
        height: 10,
        color: '#5f6368',
        minWidth: '100px',
    },
    tabs:{
        height:10,
    }
}) */



function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 0 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const FormTabs = () => {

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

   /*  const classes = useStyles(); */

  return (
    <>
       <Box sx={{ width: '100%'}}>
        <Box sx={{ borderBottom: 1, borderColor:'divider', display:'flex', alignItems:'center', justifyContent:'center', margin:'auto' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" style={{textTransform:'capitalize'}}>
          <Tab label="Questions" {...a11yProps(0)} />
          <Tab label="Responses" {...a11yProps(1)} />
          <Tab label="Settings" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        {/* <QuestionForm />  */}  <MyAccordion />
      </TabPanel>
      <TabPanel value={value} index={1}>
         <ResponsePage />   <GoogleForm />
      </TabPanel>
      <TabPanel value={value} index={2}>
         <SettingsPage /> <GoogleFormQuestions />
      </TabPanel>
    </Box>
      
      {/* <Paper className={classes.root}>
        <Tabs className={classes.tabs} textColor='primary' indicatorColor='primary' centered>
            <Tab label='Questions' className={classes.tab}>
              <QuestionForm />
            </Tab>
            <Tab label='Responses' className={classes.tab}>
              <ResponsePage />
            </Tab>
            <Tab label='Settings' className={classes.tab}>
              <SettingsPage />
            </Tab>
        </Tabs>
      </Paper>
       */}
    </>
  )
}

export default FormTabs;
