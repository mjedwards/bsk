import React from 'react';
import { Link } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
// import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu'
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import Button from '@material-ui/core/Button';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const textColor = {
    color: 'black',
    marginBottom: '20px',
    textDecoration: 'none'
}

const iconColor = {
    color: 'white',
}

const barColor = {
    backgroundColor: '#262424',
}

const listStyle = {
    display: 'flex',
    flexFlow: 'column',
    justifyContent: 'space-between',
    alignContent: 'center'
}

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  }));

function Navbar() {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };

    return (
        <div className={classes.root}>
      
      <AppBar position="fixed" style={barColor}>
        <Toolbar>
            <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                <IconButton edge="start" className={classes.menuButton} color="white" aria-label="menu" on>
                    <MenuIcon style={iconColor}/>
                </IconButton>
            </Button>
            <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
            >
            <MenuItem onClick={handleClose}><Link to="/" style={textColor}>HOME</Link></MenuItem>
            <MenuItem onClick={handleClose}><Link to="/about-us" style={textColor}>ABOUT US</Link></MenuItem>
            <MenuItem onClick={handleClose}><Link to="/community-work" style={textColor}>COMMUNITY</Link></MenuItem>
            <MenuItem>
                <Accordion>
                    <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    >
                    <Typography className={classes.heading}>MENU</Typography>
                    </AccordionSummary>
                    <AccordionDetails style={listStyle}>
                    <Link to="/full-menu" onClick={handleClose} style={textColor}>FULL MENU</Link>
                    <Link to="/breakfast-menu" onClick={handleClose} style={textColor}>BREAKFAST</Link>
                    <Link to="/lunch-menu" onClick={handleClose} style={textColor}>LUNCH</Link>
                    <Link to="/kids-menu" onClick={handleClose} style={textColor}>KIDS</Link>
                    </AccordionDetails>
                </Accordion>
            </MenuItem>
            <MenuItem onClick={handleClose}><Link to="/catering" style={textColor}>CATERING</Link></MenuItem>
            <MenuItem onClick={handleClose}><Link to="/contact-us" style={textColor}>CONTACT US</Link></MenuItem>
            </Menu>
        </Toolbar>
      </AppBar>
    </div>
    )
}

export default Navbar;
