import React from 'react';
import { motion } from "framer-motion"
import image1 from '../../assets/image.gif'
import image3 from '../../assets/image10.png'
import image4 from '../../assets/undraw.png'
import image5 from '../../assets/goals.png'
import Grid from '@mui/material/Grid';
import './page4.css'


const Page4 = () => {
    return (


        <div className="page2Main" style={{height:"200vh", display:"flex", alignItems:"center",justifyContent:"center", flexDirection:"column", top:"0px"}}>

            {/* first task start */}
            <motion.div
                initial={{opacity:1}}
                whileInView={{
                    opacity:0,
                }}  
                transition={{ delay:5, duration:3 }}
                viewport={{once:true}}
                >
                
                <motion.div
                    initial={{opacity:0}}
                    whileInView={{opacity:1}}
                    transition={{delay:1, duration:0}}
                    viewport={{ once: true }}
                >
                    <h1 style={{fontFamily:'Inter',fontWeight:"700"}}>HOW <span style={{color:"#8AB6CB"}}>APPYARD</span> WORKS</h1>
                </motion.div>
                <motion.div
                    initial={{opacity:0}}
                    whileInView={{opacity:1}}
                    animate={{
                        transitionEnd: {
                          display: "none",
                        },
                    }}
                    transition={{delay:1, duration:4}}
                    viewport={{ once: true }}
                >
                    <p style={{fontFamily:'Inter',fontWeight:"700"}}>We have powerful and flexible tools in our arsenal to serve all kinds of business requirement</p>
                    <img src={image1}/>
                    <br/>
                    <br/>
                    <img src={image3} width="50px"/>
                </motion.div>
                
                               
            </motion.div>
            {/* first task end */}


            {/* second task start */}
            <motion.div
                initial={{opacity:0}}
                whileInView={{
                    opacity:1,
                }}
                animate={{
                    transitionEnd: {
                      display: "none",
                    },
                }}
                transition={{ delay:11,duration:4}}
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
                                <img src={image4} width="400px"/>
                            </div>
                        </Grid>
                    </Grid>                
            </motion.div>
            {/* second task end */}

            {/* Third task start */}
                <motion.div
                initial={{opacity:0}}
                whileInView={{
                    opacity:1,
                }}
                transition={{ delay:20,duration:4}}
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

export default Page4;