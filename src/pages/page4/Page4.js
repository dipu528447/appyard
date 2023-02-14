import React from 'react';
import { motion } from "framer-motion"
import image1 from '../../assets/image.gif'
import image3 from '../../assets/image10.png'
const Page4 = () => {
    return (
        <div className="page2Main" style={{height:"100vh", display:"flex", alignItems:"center",justifyContent:"center", flexDirection:"column"}}>
            <motion.div
                initial={{opacity:0}}
                whileInView={{opacity:1}}
                transition={{delay:1, duration:2}}
                viewport={{ once: true }}
            >
                <h1 style={{fontFamily:'Inter',fontWeight:"700"}}>HOW <span style={{color:"#8AB6CB"}}>APPYARD</span> WORKS</h1>
            </motion.div>
            <motion.div
                initial={{opacity:0}}
                whileInView={{opacity:1}}
                transition={{delay:1, duration:1}}
                viewport={{ once: true }}
            >
                <p style={{fontFamily:'Inter',fontWeight:"700"}}>We have powerful and flexible tools in our arsenal to serve all kinds of business requirement</p>
                <img src={image1}/>
                <br/>
                <br/>
                <img src={image3} width="50px"/>
            </motion.div>
        </div>
    );
};

export default Page4;