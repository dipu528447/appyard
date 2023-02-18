import React, { useEffect } from 'react';
import './Page2.css'
import {  motion } from "framer-motion"
import { Grid } from '@mui/material';
import trustedByImage from '../../assets/trustedBy.png'
const Page2 = () => {
    
    return (
        <div id="TrustedBy" className='page2Main' style={{height:"100vh", display:"flex", alignItems:"center",justifyContent:"center", flexDirection:"column"}}>
            {/* <motion.div
                initial={{opacity:1}}
                whileInView={{
                    opacity:0,
                }}
                
                transition={{ delay:.75,duration:1 }}
                viewport={{once:true}}
                >
                <div className='TrustedBy' >
                    <h1>TRUSTED BY</h1>
                </div>                    
            </motion.div> */}
            <motion.div
                initial={{opacity:0}}
                whileInView={{opacity:1}}
                transition={{delay:.2, duration:.3}}
                viewport={{ once: true }}
                
            >
                <h1>TRUSTED BY</h1>
            </motion.div>
            <div>
                <motion.div
                    initial={{opacity:0}}
                    whileInView={{opacity:1}}
                    transition={{delay:.2, duration:.3}}
                    viewport={{ once: true }}
                >
                    <Grid container rowSpacing={4} columnSpacing={{ xs: 1, sm: 2, md: 4 }} style={{width:"1000px", margin:"0px auto"}}>
                        <Grid item xs={3}>
                            <div>
                                <img src={trustedByImage} width="150px"/>
                            </div>
                        </Grid>
                        <Grid item xs={3}>
                            <div>
                                <img src={trustedByImage} width="150px"/>
                            </div>
                        </Grid>
                        <Grid item xs={3}>
                            <div>
                                <img src={trustedByImage} width="150px"/>
                            </div>
                        </Grid>
                        <Grid item xs={3}>
                            <div>
                                <img src={trustedByImage} width="150px"/>
                            </div>
                        </Grid>
                        <Grid item xs={3}>
                            <div>
                                <img src={trustedByImage} width="150px"/>
                            </div>
                        </Grid>
                        <Grid item xs={3}>
                            <div>
                                <img src={trustedByImage} width="150px"/>
                            </div>
                        </Grid>
                        <Grid item xs={3}>
                            <div>
                                <img src={trustedByImage} width="150px"/>
                            </div>
                        </Grid>
                        <Grid item xs={3}>
                            <div>
                                <img src={trustedByImage} width="150px"/>
                            </div>
                        </Grid>
                       
                    </Grid>
                    
                </motion.div>
            </div>
        </div>
    );
};

export default Page2;