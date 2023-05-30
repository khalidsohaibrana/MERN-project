import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Card, Carousel } from 'react-bootstrap';
import CardSlider from './CardSlider';
import CustomCard from './CustomCard';

function Section3New(props) {

    const [data, setData] = useState([]);

    useEffect(()=>{
        nftData();
    },[])

    

    async function nftData()
    {
        try {
             let result = await axios.get('http://localhost:3200/data');
          //  let result = await axios.get('https://livenewsglobe.com/wp-json/wp/v2/posts');
             setData(result.data);
            
        } catch (error) {
            console.log(error);   
        }
    }

    const artData= data.filter((item)=>{
        if(item.category==="art")
        return(item);
    })
    const gamingData= data.filter((item)=>{
        if(item.category==="gaming")
        return(item);
    })
    const photographyData= data.filter((item)=>{
        if(item.category==="photography")
        return(item);
    })


 

    return (
        <div className='container'>
            <div className='d-flex mt-3'>
                <h1>Trending in Art</h1>
            </div>
            <CardSlider data={artData}/>

            <div className='d-flex mt-3'>
                <h1>Trending in Gaming</h1>
            </div>
            <CardSlider data={data}/>

            <div className='d-flex mt-3'>
                <h1>Trending in Photography</h1>
            </div>
            <CardSlider data={data}/>
    
        </div>
    );
}

export default Section3New;