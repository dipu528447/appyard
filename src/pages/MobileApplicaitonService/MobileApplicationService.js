import { Grid } from '@mui/material';
import React, { useEffect } from 'react';
import java from '../../assets/JAVA.png'
import react from '../../assets/REACT.png'
import flutter from '../../assets/FLUTTER.png'
import firebase from '../../assets/FIREBASE.png'
import aws from '../../assets/AWS.png'
import image4 from '../../assets/Group 112.png'
import point from '../../assets/Group 113.png'
import { motion } from "framer-motion"
import NavBar from '../../Components/NavBar/NavBar';
import './MobileApplicationService.css'
import './MobileApplicationService.scss'


const MobileApplicationService = () => {
    useEffect(() => {
        console.log('hello')
        window.scrollTo({top: 0, left: 0})
      }, [])
    
    return (
       
        <div className='page2Main' style={{height:"150vh", display:"flex", alignItems:"center",justifyContent:"end", flexDirection:"column"}}>
            <motion.div
                initial={{opacity:0}}
                animate={{opacity:1}}
                transition={{delay:.3, duration:.3}}
                >
                <NavBar></NavBar>
            </motion.div>
            <div >
                <h1 className='scr' style={{color:"#000000",fontWeight:"700", width:"701px"}}>MOBILE DEVELOPMENT SERVICES <span style={{color:"#ffffff"}}>TO BOOST YOUR COMPANY'S EXPENSION</span></h1>
                {/* <div style={{display:"flex", justifyContent:"space-around"}}>
                    <div className='rectangle'><img src={java} className="images"/></div>
                    <div className='rectangle'><img src={flutter} className="images" /></div>
                    <div className='rectangle'><img src={react} className="images" /></div>
                    <div className='rectangle'><img src={aws} className="images" /></div>
                    <div className='rectangle'><img src={firebase} className="images"/></div>
                </div> */}
                <div style={{marginTop:"50px"}}>
                    <h1>OUR TECHNOLOGY STACK</h1>
                </div>
                <div>
                    <div className='line'></div>
                </div>
                <div style={{display:"flex", justifyContent:"space-around", margin:"20px 0px"}}>
                    <div className='rectangle'><img src={java} className="images"/></div>
                    <div className='rectangle'><img src={flutter} className="images" /></div>
                    <div className='rectangle'><img src={react} className="images" /></div>
                    <div className='rectangle'><img src={aws} className="images" /></div>
                    <div className='rectangle'><img src={firebase} className="images"/></div>
                </div>
            </div>
            <Grid container columnSpacing={8} style={{width:"1200px"}}>
                {/* <Grid item xs={6}>
                    <div style={{display:"flex"}}>
                        <div style={{margin:"30px 20px"}}>
                            <img src={point} width="30px" />
                        </div>
                        <div style={{textAlign:"left"}}>
                            <h1 style={{fontFamily:'Inter',fontWeight:"700", fontSize:"20px"}}>OUR TECH STACK INCLUDES react native, flutter, aws, firebase, java and more.</h1>
                           
                        </div>
                        
                    </div> 
                </Grid> */}
                <Grid item xs={6}> 
                    <div style={{display:"flex", }}>
                        <div style={{margin:"30px 20px"}}>
                            <img src={point} width="30px" />
                        </div>
                        <div style={{textAlign:"left"}}>
                            <h1 style={{fontFamily:'Inter',fontWeight:"700", fontSize:"20px"}}>Our team of experts will help you build an MVP or full-fledged app that meets your requirements</h1>
                        </div> 
                    </div>  
                </Grid>
                <Grid item xs={6}>
                    <div style={{display:"flex" }}>
                        <div style={{margin:"30px 20px"}}>
                            <img src={point} width="30px" />
                        </div>
                        <div style={{textAlign:"left"}}>
                            <h1 style={{fontFamily:'Inter',fontWeight:"700", fontSize:"20px"}}>We provide services ranging from design to development and maintenance</h1>
                        </div>
                    </div>  
                </Grid>
                {/* <Grid item xs={6}>
                    <div className='rightImage'>
                        <img src={image4} width="600px" />
                    </div>
                </Grid> */}
            </Grid>  
            <h1 className="src sec" style={{color:"#000000",fontWeight:"700", width:"701px"}}>AWARD WINNING MOBILE APP <span style={{color:"#ffffff"}}>DEVELOPMENT AGENCY</span></h1>
            <div>
                <div style={{marginTop:"50px"}}>
                    <h1>OUR TECHNOLOGY STACK</h1>
                </div>
                <div>
                    <div className='line'></div>
                </div>
                <div style={{display:"flex", justifyContent:"space-around", margin:"20px 0px"}}>
                    <div className='rectangle'><img src={java} className="images"/></div>
                    <div className='rectangle'><img src={flutter} className="images" /></div>
                    <div className='rectangle'><img src={react} className="images" /></div>
                    <div className='rectangle'><img src={aws} className="images" /></div>
                    <div className='rectangle'><img src={firebase} className="images"/></div>
                </div>

            </div>
        </div>
       
    );
};

export default MobileApplicationService;