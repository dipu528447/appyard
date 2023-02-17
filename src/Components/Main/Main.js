import React from 'react';
import Paper from '@mui/material/Paper';
import Page1 from '../../pages/page1/Page1';
import Page2 from '../../pages/page2/Page2';
import Page3 from '../../pages/page3/Page3';
import Page4 from '../../pages/page4/Page4';
import './Main.css'
import Page5 from '../../pages/page5/Page5';
import Page4v1 from '../../pages/page4/Page4v1';
const Main = () => {
    return (
        <div className='Main'>
            <Paper style={{height:"100%", display:"flex", flexDirection:"column"}} >
                <Page1/> 
                <Page2/>
                <Page3/>
                <Page4/>
                <Page5/>
            </Paper>
        </div>
    );
};

export default Main;