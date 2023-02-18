import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import imageIcon from '../../assets/Group 63.png'
import './Navbar.css'
import { Link } from 'react-router-dom';
export default function NavBar() {
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
          <Typography variant="p" component="a"  sx={{flexGrow:1,textDecoration:"none",color:"white",marginLeft:"25px"}} href="#TrustedBy" >
            Top Client
          </Typography>
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