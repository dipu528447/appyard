import React from 'react';
import { motion } from "framer-motion"
import contact from '../../assets/Group 86.png'
import './page6.css'
const Page6 = () => {
    return (
        <div className='page2Main' style={{height:"100vh", display:"flex", alignItems:"center",justifyContent:"start", flexDirection:"column"}}>
            <motion.div
                initial={{opacity:0}}
                whileInView={{opacity:1}}
                transition={{delay:.1, duration:0.3}}
                viewport={{ once: true }}
            >
                <h1 style={{fontFamily:'Inter',fontWeight:"700"}}><span style={{color:"#8AB6CB"}}>CONTACT US</span></h1>
                <h5 style={{fontFamily:'Inter',fontWeight:"700"}}>Fill up the form and our <span style={{color:"#8AB6CB"}}>Team</span> will get back to you within <span style={{color:"#8AB6CB"}}>24 hours.</span></h5>
            </motion.div>
            <motion.div
                initial={{opacity:0}}
                whileInView={{opacity:1}}
                transition={{delay:.1, duration:0.3}}
                viewport={{ once: true }}
            >
                <div>
                    <img src={contact} width="1200px"/>
                    <div style={{position:"absolute", top:200,left:886}}>
                        <motion.input
                            initial={{width:"0px"}}
                            whileInView={{
                                width:"360px"
                            }}
                            transition={{ delay:0,duration:.3}}
                            viewport={{once:true}}
                            type="text" 
                            style={{height: "50px",border:"none",padding:"0px 10px",color: "black",fontSize: "20px",backgroundColor: "white",width:"360px",display:"block" }} >
                            
                        </motion.input>
                        <motion.input
                            initial={{width:"0px"}}
                            whileInView={{
                                width:"360px"
                            }}
                            transition={{ delay:0,duration:.3}}
                            viewport={{once:true}}
                            type="text" 
                            style={{height: "50px",border:"none",padding:"0px 10px",margin:"26px 0px",color: "black",fontSize: "20px",backgroundColor: "white",width:"360px",display:"block" }} >
                            
                        </motion.input>
                        <motion.textarea
                            initial={{width:"0px"}}
                            whileInView={{
                                width:"360px"
                            }}
                            transition={{ delay:0,duration:.3}}
                            viewport={{once:true}}
                            type="text" 
                            style={{height: "185px",border:"none",margin:"35px 0px",padding:"0px 10px",color: "black",fontSize: "20px",backgroundColor: "white",width:"360px",display:"block" }} >
                        </motion.textarea>
                        <motion.div
                            initial={{width:"0px"}}
                            whileInView={{
                                width:"35px"
                            }}
                            transition={{ delay:0,duration:.3}}
                            viewport={{once:true}}
                            style={{border:"2px solid #88B4C9",width:"35px",borderRadius:"20px",position:"absolute",right:"520px",top:"90px"}}
                        />
                        <motion.div
                            initial={{width:"0px"}}
                            whileInView={{
                                width:"30px"
                            }}
                            transition={{ delay:0,duration:.3}}
                            viewport={{once:true}}
                            style={{border:"2px solid #88B4C9",width:"35px",borderRadius:"20px",position:"absolute",right:"525px",top:"104px"}}
                        />
                        <motion.div
                            initial={{width:"0px"}}
                            whileInView={{
                                width:"25px"
                            }}
                            transition={{ delay:0,duration:.3}}
                            viewport={{once:true}}
                            style={{border:"2px solid #88B4C9",width:"35px",borderRadius:"20px",position:"absolute",right:"530px",top:"117px"}}
                        />
                    </div>

                </div>
            </motion.div>
        </div>
    );
};

export default Page6;