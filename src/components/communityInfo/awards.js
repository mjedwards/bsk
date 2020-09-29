import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import image1 from '../../images/placeholder.svg';
import image2 from '../../images/placeholder.svg'
import image3 from '../../images/placeholder.svg'
import image4 from '../../images/placeholder.svg'
import image5 from '../../images/placeholder.svg'
import image6 from '../../images/placeholder.svg'
import image7 from '../../images/placeholder.svg'



const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

const Awards = () => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.root}>
      <CardHeader
        title="Awards"
      />
      <CardMedia
        className={classes.media}
        src={image1}
        title="Awards"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          Bojo's Recognition For Great Service
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
            <img src={image2} className="imageStyle" alt='awards for service'></img>
            <img src={image3} className="imageStyle" alt='awards for service'></img>
            <img src={image4} className="imageStyle" alt='awards for service'></img>
            <img src={image5} className="imageStyle" alt='awards for service'></img>
            <img src={image6} className="imageStyle" alt='awards for service'></img>
            <img src={image7} className="imageStyle" alt='awards for service'></img>
        </CardContent>
      </Collapse>
    </Card>
  );
}

export default Awards;