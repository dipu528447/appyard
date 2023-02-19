import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import imageIcon from '../../assets/Group 63.png'
import './Navbar.css'
import { Link } from 'react-router-dom';
import { Button, Menu, MenuItem } from '@mui/material';
export default function NavBar() {
  
  const [anchorEl, setAnchorEl] = React.useState('');
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    
    <Box sx={{ flexGrow: 1}}>
      <AppBar position="fixed" style={{ "backgroundImage": "linear-gradient(180deg,#000000,#252621)" }}>
        <Toolbar sx={{width:"90%", mx:"auto"}}>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 1}}
          >

          <img src={imageIcon} style={{width:"60px"}}/>
          </IconButton>
          <Link to={'/'} style={{textDecoration:"none"}}><Typography variant="p"
            noWrap
            component="a"
             id='menu1' sx={{flexGrow:1}}>
            Home
          </Typography></Link>
          <div>
            <Typography
              id="TopClient"
              aria-controls={open ? 'basic-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
              onClick={handleClick}
              component="a"
              variant="p"
              sx={{marginLeft:"30px"}}
            >
              Dashboard
            </Typography>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                'aria-labelledby': 'basic-button',
              }}
              
            >
              <Link to="/mobileApplication"><MenuItem style={{color:"white", textDecoration:"none"}} onClick={handleClose}>Mobile Application</MenuItem></Link>
              <MenuItem onClick={handleClose}>Website</MenuItem>
              <MenuItem onClick={handleClose}>Digital Marketing</MenuItem>
            </Menu>
          </div>
          <Typography variant="p" component="a"  sx={{flexGrow:1,textDecoration:"none",color:"white"}} href="#whyChooseUs">
            Why Choose us?
          </Typography>
          <Typography variant="p" component="a" sx={{flexGrow:1,textDecoration:"none",color:"white"}} href="#howItWorks">
            How it Works?
          </Typography>
          <Link to={"/contact"}><button  className='btnContactUs' >Contact us</button></Link>
          <Link to={"/trackProject"}><button  className='btnContactUs' >Track Your Project</button></Link>
          
        </Toolbar>
      </AppBar>
    </Box>
  );
}