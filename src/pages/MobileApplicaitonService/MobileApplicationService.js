import { Grid } from '@mui/material';
import React from 'react';
import java from '../../assets/JAVA.png'
import react from '../../assets/REACT.png'
import flutter from '../../assets/FLUTTER.png'
import firebase from '../../assets/FIREBASE.png'
import aws from '../../assets/AWS.png'
import image4 from '../../assets/Group 112.png'
import point from '../../assets/Group 113.png'
const MobileApplicationService = () => {
    return (
       
        <div className='page2Main' style={{height:"100vh", display:"flex", alignItems:"center",justifyContent:"center", flexDirection:"column"}}>
            <div style={{marginBottom:"50px"}} >
                <h1 style={{fontFamily:'Inter',fontWeight:"700", width:"701px"}}>MOBILE DEVELOPMENT SERVICES <span style={{color:"#8AB6CB"}}>TO BOOST YOUR COMPANY'S EXPENSION</span></h1>
                <div style={{display:"flex", justifyContent:"space-around"}}>
                    <img src={java} width="60px" />
                    <img src={java} width="60px" />
                    <img src={java} width="60px" />
                    <img src={java} width="60px" />
                    <img src={java} width="60px" />
                </div>
            </div>
            <Grid container columnSpacing={8} style={{width:"1200px"}}>
                <Grid item xs={6}>
                    <div style={{display:"flex"}}>
                        <div style={{margin:"30px 20px"}}>
                            <img src={point} width="30px" />
                        </div>
                        <div style={{textAlign:"left"}}>
                            <h1 style={{fontFamily:'Inter',fontWeight:"700", fontSize:"20px"}}>OUR TECH STACK INCLUDES react native, flutter, aws, firebase, java and more.</h1>
                           
                        </div>
                        
                    </div>  
                    <div style={{display:"flex", }}>
                        <div style={{margin:"30px 20px"}}>
                            <img src={point} width="30px" />
                        </div>
                        <div style={{textAlign:"left"}}>
                            <h1 style={{fontFamily:'Inter',fontWeight:"700", fontSize:"20px"}}>We provide services ranging from design to development and maintenance</h1>
                           
                        </div>
                        
                    </div>  
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
                    <div className='rightImage'>
                        <img src={image4} width="600px" />
                    </div>
                </Grid>
            </Grid>  
        </div>
       
    );
};

export default MobileApplicationService;