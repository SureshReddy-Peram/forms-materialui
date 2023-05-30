import React from 'react';
import {makeStyles} from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import './FormTabs.css';
import QuestionFormHeader from './QuestionForm';

/* In order to override the styles, we use 'makeStyles' function  */
const useStyles = makeStyles( {
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
})
const FormTabs = () => {

    const classes = useStyles();

  return (
    <>
      <Paper className={classes.root}>
        <Tabs className={classes.tabs} textColor='primary' indicatorColor='primary' centered>
            <Tab label='Questions' className={classes.tab}>

            </Tab>
            <Tab label='Responses' className={classes.tab}>

            </Tab>
            <Tab label='Settings' className={classes.tab}>

            </Tab>
        </Tabs>
      </Paper>
      <QuestionFormHeader />
    </>
  )
}

export default FormTabs;
