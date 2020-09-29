import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import Avatar from '@material-ui/core/Avatar';
import person1 from '../../images/review1.jpg'
import person2 from '../../images/review2.jpg'
import person3 from '../../images/review3.jpg'
import person4 from '../../images/review4.jpg'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

function Reviews() {
  const classes = useStyles();

  return (
    <div className={classes.root} className='review-container'>
        <div className='review-container-item'>
            <Avatar alt="Remy Sharp" src={person1} />
            <p>We tried the Bojos for the first time last night and the food was great, freshly cooked very tasty and well presented. The waiters were attentive and service overall was good. Overall a good meal and great value we will certainly be going back.</p>
        </div>
        <Divider variant="middle" />
        <div className='review-container-item'>
            <Avatar alt="Travis Howard" src={person2} /> 
            <p>Great food and service, would highly recommend... Such friendly staff</p>   
        </div>
        <Divider variant="middle" />
        <div className='review-container-item'>
            <Avatar alt="Cindy Baker" src={person3} />  
            <p>This place is welcoming with charming service and the food better than I imagined</p>
        </div>
        <Divider variant="middle" />
        <div className='review-container-item'>
            <Avatar alt="Cindy Baker" src={person4} />
            <p>Excellent food, good value for money and great service. Have eaten in and had take out, both excellent. Been going there for years.</p>
        </div>
    </div>
  );
}

export default Reviews