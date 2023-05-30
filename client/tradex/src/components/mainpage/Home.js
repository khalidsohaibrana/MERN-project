import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import { Card, Image } from 'react-bootstrap';
import Section1 from './section1/Section1';
import Section2 from './section2/Section2';
import Section3New from './section3/Section3New';

function Home(props) {
    return (
        <>
        <div className=' heavy-rain-gradient' style={{  height:'100%'
        // , background: 'linear-gradient(to right, rgba(102, 126, 234, 0.5), rgba(118, 75, 162, 0.5))'
         }}>
            <div className='row'>
               

                <Section1/>
                <Section2/>
                <Section3New/>
            
            

            </div>
        </div>

        </>
    );
}

export default Home;