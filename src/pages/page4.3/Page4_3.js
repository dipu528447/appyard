import React from 'react';
import Grid from '@mui/material/Grid';
import image5 from '../../assets/goals.gif'
import { motion } from "framer-motion" 
const Page4_3 = () => {
    return (
        <div className='page2Main' style={{height:"100vh", display:"flex", alignItems:"center",justifyContent:"center", flexDirection:"column"}}>
            {/* Third task start */}
            <motion.div
                initial={{opacity:0}}
                whileInView={{
                    opacity:1,
                }}
                transition={{ delay:.5,duration:.6}}
                viewport={{once:true}}
                >
                    <div >
                        <h1 style={{fontFamily:'Inter',fontWeight:"700"}}>HOW <span style={{color:"#8AB6CB"}}>APPYARD</span> WORKS</h1>
                    </div> 
                    <Grid container columnSpacing={8} style={{width:"1200px"}}>
                        <Grid item xs={6}>
                            <div style={{display:"flex"}}>
                                <div style={{margin:"30px 20px"}}>
                                    <div className='circle'>4</div>
                                </div>
                                <div style={{textAlign:"left"}}>
                                    <h1 style={{fontFamily:'Inter',fontWeight:"700"}}>MAGIC</h1>
                                    <h5 style={{fontFamily:'Inter',fontWeight:"700"}}>We pledge to <span style={{color:"#8AB6CB"}}> deliver your dream app</span> as soon as possible while keeping you posted about the <span style={{color:"#8AB6CB"}}>development process</span></h5>
                                </div>
                                
                            </div>  
                            <div style={{display:"flex", }}>
                                <div style={{margin:"30px 20px"}}>
                                    <div className='circle'>5</div>
                                </div>
                                <div style={{textAlign:"left"}}>
                                    <h1 style={{fontFamily:'Inter',fontWeight:"700"}}>LET’S GROW</h1>
                                    <h5 style={{fontFamily:'Inter',fontWeight:"700"}}>We want to watch <span style={{color:"#8AB6CB"}}>you expand your business </span> and that’s why we are providing you <span style={{color:"#8AB6CB"}}>6 months of free maintenance</span> </h5>
                                </div>
                                
                            </div>  
                            <div style={{display:"flex", }}>
                                <div style={{margin:"30px 20px"}}>
                                    <div className='circle'>6</div>
                                </div>
                                <div style={{textAlign:"left"}}>
                                    <h1 style={{fontFamily:'Inter',fontWeight:"700"}}>THAT’S ALL</h1>
                                    <h5 style={{fontFamily:'Inter',fontWeight:"700"}}>Your Project with <span style={{color:"#8AB6CB"}}>APPYARD</span> is successfully completed. <span style={{color:"#8AB6CB"}}>Congratulations!</span> </h5>
                                </div>
                                
                            </div>  
                        </Grid>
                        
                        <Grid item xs={6}>
                            <div className='rightImage' style={{margin:"50px 0px"}}>
                                <img src={image5} width="400px"/>
                            </div>
                        </Grid>
                    </Grid>                
                </motion.div>
            {/* third task end */}
        </div>
    );
};

export default Page4_3;