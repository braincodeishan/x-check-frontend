// Generates the Alert

import React, {useState} from 'react'
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

const AlertBar = (props) => {
    let classes;
    if(props.alert.status===200){
        classes="alert alert-success alert-dismissible position-fixed fade show alert-main ";
    }else{
        classes="alert alert-danger alert-dismissible position-fixed fade show alert-main ";
    }
    
    return (
        <>
        <div className='Alert-bg'>
         <div className={classes} role="alert">
                {props.alert.message}
            </div>   
            </div>
        </>
    )
}

export default AlertBar



const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export const SnackbarAlert = (props) => {
           
    const handleClose = (event, reason) => {
      if (reason === 'clickaway') {
        return;
      }
  
      props.setopenSnack(false)
    };
  return (
    <Snackbar open={props.show} autoHideDuration={6000} onClose={handleClose} anchorOrigin={{vertical:'top',horizontal :'center'}}>
        <Alert onClose={handleClose} severity={props.severity} sx={{ width: '100%' }}>
          {props.message}
        </Alert>
      </Snackbar>
  )
}

