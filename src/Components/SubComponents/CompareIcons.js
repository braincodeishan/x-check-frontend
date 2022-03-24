import React, { useContext } from "react";
import Fab from "@mui/material/Fab";
import CompareIcon from "@mui/icons-material/Compare";
import { LoginContext } from "../../Contexts/Context";
import { useNavigate } from "react-router";
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';

const CompareIcons = () => {







  const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });

  
    const [open, setOpen] = React.useState(false);

    

    const handleClose = () => {
      setOpen(false);
    };

    const Navigate = useNavigate()
    const Login = useContext(LoginContext);
    const handleChange = () => {
      Navigate("/Compare")
    }
    return (
      <>
        {Login.comparePhones[0] !== '' &&
          <div className="CompareIcons" onMouseEnter={()=>{setOpen(true)}} onMouseLeave={()=>{setOpen(false)}}>
            <Dialog
              open={open}
              TransitionComponent={Transition}
              keepMounted
              onClose={handleClose}
              aria-describedby="alert-dialog-slide-description"
            >
              <DialogTitle>{"Use Google's location service?"}</DialogTitle>
              <DialogContent>
                <DialogContentText id="alert-dialog-slide-description">
                  Let Google help apps determine location. This means sending anonymous
                  location data to Google, even when no apps are running.
                </DialogContentText>
              </DialogContent>
              <DialogActions>
                <Button onClick={handleClose}>Disagree</Button>
                <Button onClick={handleClose}>Agree</Button>
              </DialogActions>
            </Dialog>
            <Fab variant="extended" color="secondary" onClick={handleChange}>
              <CompareIcon sx={{ mr: 1 }} />
              Compare Phones
            </Fab>
          </div>}
      </>
    );
  };

  export default CompareIcons;
