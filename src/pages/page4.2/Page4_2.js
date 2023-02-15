import React from 'react';
import Grid from '@mui/material/Grid';
import image4 from '../../assets/undraw.gif'
import { motion } from "framer-motion"
const Page4_2 = () => {
    return (
        <div className='page2Main' style={{height:"100vh", display:"flex", alignItems:"center",justifyContent:"center", flexDirection:"column"}}>
            {/* second task start */}
            <motion.div
                initial={{opacity:0}}
                whileInView={{
                    opacity:1,
                }}
                // animate={{
                //     transitionEnd: {
                //       display: "none",
                //     },
                // }}
                transition={{ delay:0,duration:.6}}
                viewport={{once:true}}
                >
                    <div >
                        <h1 style={{fontFamily:'Inter',fontWeight:"700"}}>HOW <span style={{color:"#8AB6CB"}}>APPYARD</span> WORKS</h1>
                    </div> 
                    <Grid container columnSpacing={8} style={{width:"1200px"}}>
                        <Grid item xs={6}>
                            <div style={{display:"flex"}}>
                                <div style={{margin:"30px 20px"}}>
                                    <div className='circle'>1</div>
                                </div>
                                <div style={{textAlign:"left"}}>
                                    <h1 style={{fontFamily:'Inter',fontWeight:"700"}}>INITIATIVE</h1>
                                    <h5 style={{fontFamily:'Inter',fontWeight:"700"}}>Decide to take your  <span style={{color:"#8AB6CB"}}>business to next level</span></h5>
                                </div>
                                
                            </div>  
                            <div style={{display:"flex", }}>
                                <div style={{margin:"30px 20px"}}>
                                    <div className='circle'>2</div>
                                </div>
                                <div style={{textAlign:"left"}}>
                                    <h1 style={{fontFamily:'Inter',fontWeight:"700"}}>GET A QUOTE</h1>
                                    <h5 style={{fontFamily:'Inter',fontWeight:"700"}}>Contact us and get a quote for your app at the most <span style={{color:"#8AB6CB"}}>affordable rates in India</span></h5>
                                </div>
                                
                            </div>  
                            <div style={{display:"flex", }}>
                                <div style={{margin:"30px 20px"}}>
                                    <div className='circle'>3</div>
                                </div>
                                <div style={{textAlign:"left"}}>
                                    <h1 style={{fontFamily:'Inter',fontWeight:"700"}}>MASTER PLAN</h1>
                                    <h5 style={{fontFamily:'Inter',fontWeight:"700"}}>We share<span style={{color:"#8AB6CB"}}> what, when, how</span> before starting the project along with a <span style={{color:"#8AB6CB"}}>customer ID</span> which helps you <span style={{color:"#8AB6CB"}}>track everything 24/7</span> business to next level</h5>
                                </div>
                                
                            </div>  
                        </Grid>
                        
                        <Grid item xs={6}>
                            <div className='rightImage' style={{margin:"50px 0px"}}>
                                <img src={image4} width="400px" />
                            </div>
                        </Grid>
                    </Grid>                
            </motion.div>
            {/* second task end */}
        </div>
    );
};

export default Page4_2;