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
import image1 from '../../images/review2.jpg';
import vid1 from '../../testimonials/production ID_3819352.mp4'



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

const Testimonials = () => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.root}>
      <CardHeader
        title="Words From Our Customers"
      />
      <CardMedia
        className={classes.media}
        src={image1}
        title="Testimonials"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          See what people have to say about Bojo's Seafood Restaraunt
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
            <video width="320" height="240" controls>
                <source src={vid1} type="video/mp4"></source>
            </video>
            <video width="320" height="240" controls>
                <source src={vid1} type="video/mp4"></source>
            </video>
            <video width="320" height="240" controls>
                <source src={vid1} type="video/mp4"></source>
            </video>
            <video width="320" height="240" controls>
                <source src={vid1} type="video/mp4"></source>
            </video>   
        </CardContent>
      </Collapse>
    </Card>
  );
}

export default Testimonials;