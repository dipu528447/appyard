import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import './Navbar.css'
import imageIcon from '../../assets/Group 63.png'
export default function NavBar() {
  return (
    <Box sx={{ flexGrow: 1}}>
      <AppBar position="fixed" style={{boxShadow:"none"}}>
        <Toolbar sx={{width:"90%", mx:"auto"}}>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 1 }}
          >
          <img src={imageIcon} style={{width:"60px"}}/>
          </IconButton>
          <Typography variant="p" component="div" id='menu1' sx={{flexGrow:1}}>
            Home
          </Typography>
          <Typography variant="p" component="div"  sx={{flexGrow:1}}>
            Top Client
          </Typography>
          <Typography variant="p" component="div"  sx={{flexGrow:1}}>
            Why Choose us?
          </Typography>
          <Typography variant="p" component="div" sx={{flexGrow:1}}>
            How it Works?
          </Typography>
          <button  className='btnContactUs' >Contact us</button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}