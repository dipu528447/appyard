import React, { useEffect } from 'react';
import { motion } from "framer-motion"
import image1 from '../../assets/image.gif'
import image3 from '../../assets/image10.png'


import Grid from '@mui/material/Grid';
import './page4.css'
import './page4.scss'
import Page4_2 from '../page4.2/Page4_2';
import Page4_3 from '../page4.3/Page4_3';


const Page4 = () => {
    useEffect(() => {
        var i = document.getElementById('howAppyardWorks')
        window.scrollTo({top: 0, left: 0})
        window.addEventListener("scroll", (event) => {
            let scroll = window.scrollY;
            if(scroll>=1534){
                
                i.style.position='fixed'
                i.style.display="block"
                i.style.color="white"
                
            }
            else{
               
                i.style.position='relative'
                i.style.display="none"
            }
            console.log(scroll)
        });
      }, [])
    
    return (
        <div id="howItWorks" className="page2Main" style={{height:"100vh", display:"flex", alignItems:"center",justifyContent:"center", flexDirection:"column"}}>

            {/* first task start */}
            <motion.div
                initial={{opacity:0}}
                whileInView={{
                    opacity:1,
                }}  
                transition={{ delay:.5, duration:.3}}
                viewport={{once:true}}
                
                >
                
                <motion.div
                    initial={{opacity:0}}
                    whileInView={{opacity:1}}
                    transition={{delay:1, duration:0.3}}
                    viewport={{ once: true }}
                    style={{position:"relative",top:60, left:600, color:"white"}}
                    id="howAppyardWorks"
                >
                    <h1 style={{fontWeight:"700",marginTop:"40px"}}>HOW <span style={{color:"#000000"}}>APPYARD</span> WORKS</h1>
                </motion.div>

                <div className="example" style={{height:"60vh"}}>
                    <motion.div
                        initial={{opacity:0}}
                        whileInView={{opacity:1}}
                        // animate={{
                        //     transitionEnd: {
                        //       display: "none",
                        //     },
                        // }}
                        transition={{delay:1, duration:.3}}
                        viewport={{ once: true }}
                    >
                        <p style={{fontWeight:"700"}}>We have powerful and flexible tools in our arsenal to serve all kinds of business requirement</p>
                        <img src={image1}/>
                        <br/>
                        <br/>
                        <img src={image3} width="50px" className='arrow'/>
                    </motion.div>
                    <Page4_2/>
                    <Page4_3/>
                </div>
                               
            </motion.div>

                
                
            {/* first task end */}
            
        </div>
    );
};

export default Page4;