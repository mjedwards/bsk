import React, { useState } from 'react';
import hands from '../logos/sarmi14-40.jpg'
import CommnunityInfo from './communityInfo/communityInfo';
// import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Modal from '@material-ui/core/Modal';


// function rand() {
//     return Math.round(Math.random() * 20) - 10;
//   }
  
//   function getModalStyle() {
//     const top = 50 + rand();
//     const left = 50 + rand();
  
//     return {
//       top: `${top}%`,
//       left: `${left}%`,
//       transform: `translate(-${top}%, -${left}%)`,
//     };
//   }
  
  // const useStyles = makeStyles((theme) => ({
  //   paper: {
  //     position: 'absolute',
  //     width: 400,
  //     backgroundColor: theme.palette.background.paper,
  //     border: '2px solid #000',
  //     boxShadow: theme.shadows[5],
  //     padding: theme.spacing(2, 4, 3),
  //   },
  // }));
  
  const formStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    flexFlow: 'column',
    color: 'white',
    margin: '50% auto',
    width: '50%'
  }



const Community = (props) => {
    // const classes = useStyles();
    // getModalStyle is not a pure function, we roll the style only on the first render
    // const [modalStyle] = useState(getModalStyle);
    const [open, setOpen] = useState(false);
  
    const handleOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };

    const body = (
        <form style={formStyle}>
            <label>Name / Organization</label>
            <input placeholder="Name / Organization"></input>
            <label>Contact Number</label>
            <input placeholder="Contact Number"></input>
            <label>Brief Description</label>
            <textarea placeholder='Briefly Describe Your Company'></textarea>  
            <Button variant="contained" color="primary">Send</Button>         
        </form>
      );
   
    return (
        <div className='community-container'>
            <div className='community-container-item'>
                <div>
                    <h1>
                        Our Community. 
                        <br></br>
                        Our Work.
                    </h1>
                    <img src={hands} alt='community logo'></img>
                    <p>
                        Bojo's is an adovcate for sponorship and supporting local events and organizations. He has a long history of helping others get their brand and information to the public and the community. <b>If you want more information about being sponsored click the button below!</b>
                    </p>
                    <br></br>
                    <Button variant="contained" color="primary" onClick={handleOpen}>Sponorship</Button>
                </div>
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="simple-modal-title"
                    aria-describedby="simple-modal-description"
                    >
                    {body}
                </Modal>
            </div>
            <CommnunityInfo />
        </div>
    )
}

export default Community;