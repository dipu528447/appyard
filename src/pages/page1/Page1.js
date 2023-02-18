import React, { useEffect, useState } from 'react';
import imageIcon from '../../assets/Group 63.png'
import LinearDeterminate from '../../Components/ProgressBar/ProgressBar';
import { easeOut, motion } from "framer-motion"
import NavBar from '../../Components/NavBar/NavBar';
import { Button, Typography } from '@mui/material';
import { Box, display } from '@mui/system';
import rocketBackPart from '../../assets/Vector-5.png'
import rocket from '../../assets/Group 104.png'
import cloud1 from '../../assets/Vector-1.png'
import cloud2 from '../../assets/Vector.png'
import cloud3 from '../../assets/Vector-2.png'
import sunShadow from '../../assets/Vector-4.png'
import sun from '../../assets/Vector-3.png'
import bg from '../../assets/bg.png'
import './Page1.css'
import Page2 from '../page2/Page2';
import Page3 from '../page3/Page3';
const Page1 = () => {
 useEffect(() => {
    window.scrollTo({top: 0, left: 0})
  }, [])

    return (
        <div className='main' style={{height:"100vh" }} id="page1" >
            <motion.div
            initial={{opacity:0}}
            animate={{opacity:1}}
            transition={{delay:2, duration:.3}}
            
                >
                <NavBar ></NavBar>
            </motion.div>
            <motion.div
                initial={{opacity:1}}
                animate={{
                    width:"200px",
                    y:10,
                    x:28,
                    position:"fixed",
                  
                }}
                transition={{ delay:1.5,duration:.3 }}
                >
                <img src={imageIcon} style={{width:"30%"}} />
                
            </motion.div>
            <motion.div
                initial={{opacity:1}}
                animate={{
                    opacity:0,
                    
                }}
                transition={{ delay:1,duration:.5 }}
               
                >
                    <br/>
                <LinearDeterminate />
            </motion.div>
            
            <motion.div
                initial={{opacity:0,y:140}}
                animate={{opacity:1}}
                transition={{delay:3, duration:.3}}
            >
                <Box sx={{ display: 'flex', width:"85%", mx:"auto",justifyContent: 'space-between' }}>
                    <div>
                        <Typography variant="h1" component="div" style={{textAlign:"left",fontFamily:'arial',fontWeight:"700",fontSize:"48px"}}>WE LAUNCH YOUR <span style={{color:"#8AB6CB"}}>APPS</span> </Typography>
                        <Typography variant="h1" component="div" style={{textAlign:"left",fontFamily:'arial',fontWeight:"700",fontSize:"48px"}}>FOR YOUR FASTLY AND </Typography>
                        <Typography variant="h1" component="div" style={{textAlign:"left",fontFamily:'arial',fontWeight:"700",fontSize:"48px"}}>CHEAPLY </Typography>
                        <br/>
                        <Typography variant="h1" component="div" style={{textAlign:"left",fontFamily:'arial',fontWeight:"700",fontSize:"22px"}}><span style={{color:"#8AB6CB"}}>100+</span> company's entrusted us to deliver </Typography>
                        <Typography variant="h1" component="div" style={{textAlign:"left",fontFamily:'arial',fontWeight:"700",fontSize:"22px"}}>their dream product </Typography>
                        <button className='btn1' style={{ backgroundColor:"#406B80"}}>Get Started</button>
                    </div>
                    <div style={{width:"50%"}}>
                        
                        <div className='parent'>
                            <img src={bg} width={'500px'}/>
                            <div className='sunSection'>
                                <img src={sunShadow} className="sunShadow"/>
                                <img src={sun} className="sun"/>
                            </div>
                            <div className='rocketCloud'>
                                <img src={rocketBackPart} className="rocketBackPart" />                                  
                                <img src={cloud1} className="cloud"/>
                                <img src={rocket} className="rocket" />
                                <img src={cloud2} className="cloud2"/>
                                <img src={cloud3} className="cloud3"/>
                            </div>                      
                        </div>
                    </div>
                    
                </Box>
                <br/>
                <br/>
               
            </motion.div>
        </div>
    );
};

export default Page1;