import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import { Card, Image } from 'react-bootstrap';
import Section1 from './Section1';
import Section2 from './Section2';
import Section3 from './Section3';

function Home(props) {
    return (
        <>
        <div className='container-fluid' style={{  height:'100%', background: 'linear-gradient(to right, rgba(102, 126, 234, 0.5), rgba(118, 75, 162, 0.5))' }}>
            <div className='row'>
               

                <Section1/>
                <Section2/>
                <Section3/>
            
            

            </div>
        </div>

        </>
    );
}

export default Home;