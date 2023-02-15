import React from 'react';
import { motion } from "framer-motion"
import { TextField } from '@mui/material';
import image6 from '../../assets/project.gif'
import './page5.css'
const Page5 = () => {
    return (
        <div className='page2Main' style={{height:"100vh", display:"flex", alignItems:"center",justifyContent:"center", flexDirection:"column"}}>
            <motion.div
                initial={{opacity:0}}
                whileInView={{
                    opacity:1,
                }}
                transition={{ delay:.5,duration:.6}}
                viewport={{once:true}}
                style={{width:"1200px"}}
                >
                <h1 style={{fontFamily:'Inter',fontWeight:"700", marginBottom:"100px"}}>MONITOR YOUR <span style={{color:"#8AB6CB"}}>PROJECT’S</span> PROGRESS</h1>
                <div style={{display:"flex", justifyContent:"space-between"}}>
                    <div style={{width:"500px"}}>
                        <h1>Enter Your Customer ID</h1>
                        <div class="slide-right">
                            <input type="text" className="textfield"></input>
                        </div>
                        
                    </div>
                    <div>
                        <img src={image6} width={"500px"}/>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default Page5;