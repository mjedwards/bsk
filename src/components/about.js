import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import Avatar from '@material-ui/core/Avatar';
import Divider from '@material-ui/core/Divider';
import image1 from '../images/ourStory.png'


// const useStyles = makeStyles((theme) => ({
//     root: {
//       display: 'flex',
//       '& > *': {
//         margin: theme.spacing(1),
//       },
//     },
//     small: {
//       width: theme.spacing(3),
//       height: theme.spacing(3),
//     },
//     large: {
//       width: theme.spacing(7),
//       height: theme.spacing(7),
//     },
//   }));

const hrStyle = {
    border: "solid",
    width: "75%",
}

const AboutUs = () => {
    // const classes = useStyles();
    return (
        <div className='about-container'>
            <div class="top-display">
            <div class="top-text bye" id="content-1">
                <h1 class="primary-head">Our Story...</h1>
		        </div>
            <h1><img src={image1} alt="" class="ABimage" /></h1>
            </div>
            {/* <Avatar alt="Remy Sharp" src={image1} className={classes.large}/> */}
            
            {/* <h1 className='about-container-item'>Our Story</h1> */}
            <Divider variant="middle" />
            <p className='about-container-item'>
            <h1 className='about-container-sub-item'>The Legacy of Lombos</h1>
            <hr style={hrStyle}></hr>
                BoJo’s Seafood Kitchen was established in 2014. However, Lombo’s Seafood was founded in 1975 by Alonzo and Betty Jo Smith in Pompano Beach, Florida. For over 30 years, Lombo’s served Pompano Beach and the surrounding area. Lombo’s established and maintained an outstanding reputation for serving delicious, fresh seafood with friendly customer service to everyone who visited.
            </p>
        </div>
    )
}



export default AboutUs;