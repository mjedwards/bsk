import React from 'react';
import PropTypes from 'prop-types';
// import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Catering from './cateringEvents';
import Testimonials from './testimonials';
import Awards from './awards';





const barColor = {
  backgroundColor: '#262424',
}

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`wrapped-tabpanel-${index}`}
      aria-labelledby={`wrapped-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `wrapped-tab-${index}`,
    'aria-controls': `wrapped-tabpanel-${index}`,
  };
}

// const useStyles = makeStyles((theme) => ({
//   root: {
//     flexGrow: 1,
//     backgroundColor: theme.palette.background.paper,
//   },
// }));

function TabsWrappedLabel() {
  // const classes = useStyles();
  const [value, setValue] = React.useState('one');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="community-info">
      <AppBar position="static" style={barColor}>
        <Tabs value={value} onChange={handleChange} aria-label="wrapped label tabs example">
          <Tab
            value="one"
            label="Catered Parties"
            wrapped
            {...a11yProps('one')}
          />
          <Tab value="two" label="Testimonials" {...a11yProps('two')} />
          <Tab value="three" label="Awards" {...a11yProps('three')} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index="one">
       <Catering />
      </TabPanel>
      <TabPanel value={value} index="two">
       <Testimonials />
      </TabPanel>
      <TabPanel value={value} index="three">
       <Awards />
      </TabPanel>
    </div>
  );
}


const CommnunityInfo = () => {
  return (
    <TabsWrappedLabel />
  );
}

export default CommnunityInfo;