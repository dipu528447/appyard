import React from 'react';
import { motion } from "framer-motion"
import TimeEfficient from '../../assets/TimeEfficient.png'
import EaseofMaintaince from '../../assets/EaseofMaintaince.png'
import CostEffective from '../../assets/CostEffective.png'
import { Grid } from '@mui/material';
const Page3 = () => {
    return (
        <div id="whyChooseUs" className="page2Main" style={{height:"100vh", display:"flex", alignItems:"center",justifyContent:"center", flexDirection:"column"}}>
            <motion.div
                initial={{opacity:0}}
                whileInView={{opacity:1}}
                transition={{delay:.1, duration:.3}}
                viewport={{ once: true }}
                
            >
                <h1 style={{fontFamily:'Inter',fontWeight:"700"}}>WHY CHOOSE <span style={{color:"#8AB6CB"}}>APPYARD</span></h1>
            </motion.div>
            <motion.div
                initial={{opacity:0}}
                whileInView={{opacity:1}}
                transition={{delay:.2, duration:.3}}
                viewport={{ once: true }}
            >
                <Grid container rowSpacing={4} columnSpacing={{ xs: 1, sm: 2, md: 3 }} style={{width:"1200px", margin:"0px auto"}}>
                        <Grid item xs={4} >
                            <div>
                                <img src={TimeEfficient} width="150px"/>
                                <p style={{fontFamily:'Inter',fontWeight:"700", fontSize:"32px" }}>Time Efficient</p>
                                <p style={{textAlign:"left"}}>APPYARD knows the value of time. Just give us</p>
                            </div>
                        </Grid>
                        <Grid item xs={4}>
                            <div>
                                <img src={EaseofMaintaince} width="150px"/>
                                <p style={{fontFamily:'Inter',fontWeight:"700", fontSize:"32px"}}>Ease of Maintenance</p>
                                <p style={{textAlign:"left"}}>Makes your life easier. We provide Seamless Maintenance for your Apps</p>
                            </div>
                        </Grid>
                        <Grid item xs={4}>
                            <div>
                                <img src={CostEffective} width="150px"/>
                                <p style={{fontFamily:'Inter',fontWeight:"700",fontSize:"32px"}}>Cost Effective</p>
                                <p style={{textAlign:"left"}}>We deliver you the most optimal product both aesthetically and economically.</p>
                            </div>
                        </Grid>
                    </Grid>
            </motion.div>
        </div>
    );
};

export default Page3;