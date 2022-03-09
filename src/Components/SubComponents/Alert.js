import React from 'react'

const Alert = (props) => {
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

export default Alert
