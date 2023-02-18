import React, { useEffect } from 'react';
import Paper from '@mui/material/Paper';
import Page1 from '../../pages/page1/Page1';
import Page2 from '../../pages/page2/Page2';
import Page3 from '../../pages/page3/Page3';
import Page4 from '../../pages/page4/Page4';
import './Main.css'
import './Main.scss'
import Page5 from '../../pages/page5/Page5';

const Main = () => {
    
    return (
        <div className='Main'>
            <Paper style={{height:"100%", display:"flex", flexDirection:"column"}} >
                
                <section>
                    <Page1/>
                </section>
                <section>
                    <Page2/>
                </section>
                <section>
                    <Page3/>
                </section>
                <section>
                    <Page4/>
                </section>
             
            </Paper>
        </div>
    );
};

export default Main;