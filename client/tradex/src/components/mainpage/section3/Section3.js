import axios from 'axios';
import React, { useEffect, useState } from 'react';
import {  Image } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import CustomCard from './CustomCard';
import Slider from 'react-slick'
import DynamicSlides from './DynamicSlides';



function Section3() {


  const [data, setData] = useState([]);

    useEffect(()=>{
        nftData();
    },[])

    

    async function nftData(){
        try {
             let result = await axios.get('http://localhost:3200/data');
          //  let result = await axios.get('https://livenewsglobe.com/wp-json/wp/v2/posts');
             setData(result.data);
            
        } catch (error) {
            console.log(error);
            
        }
    }
 
    // const artdata = data.filter((item) => { if (item.category==='art') return item})
    // console.log(artdata)

  return (
    <>
{/* <div className=''>
  <div id="carouselExampleRide" class="carousel slide" data-bs-ride="true">
    <div class="carousel-inner ">
      <div class="carousel-item active">
                  <Card image={"https://i.seadn.io/gcs/files/727247a72f9500ce6791eefc1b6870f6.png?auto=format&dpr=1&w=3840"}/>
                  <Card image={"https://i.seadn.io/gcs/files/727247a72f9500ce6791eefc1b6870f6.png?auto=format&dpr=1&w=3840"}/>
                  <Card image={"https://i.seadn.io/gcs/files/727247a72f9500ce6791eefc1b6870f6.png?auto=format&dpr=1&w=3840"}/>
                  <Card image={"https://i.seadn.io/gcs/files/727247a72f9500ce6791eefc1b6870f6.png?auto=format&dpr=1&w=3840"}/>
                  <Card image={"https://i.seadn.io/gcs/files/727247a72f9500ce6791eefc1b6870f6.png?auto=format&dpr=1&w=3840"}/>

      </div>
      <div class="carousel-item">
                  <Card image={"https://i.seadn.io/gcs/files/727247a72f9500ce6791eefc1b6870f6.png?auto=format&dpr=1&w=3840"}/>
                  <Card image={"https://i.seadn.io/gcs/files/727247a72f9500ce6791eefc1b6870f6.png?auto=format&dpr=1&w=3840"}/>
                  <Card image={"https://i.seadn.io/gcs/files/727247a72f9500ce6791eefc1b6870f6.png?auto=format&dpr=1&w=3840"}/>
                  <Card image={"https://i.seadn.io/gcs/files/727247a72f9500ce6791eefc1b6870f6.png?auto=format&dpr=1&w=3840"}/>
                  <Card image={"https://i.seadn.io/gcs/files/727247a72f9500ce6791eefc1b6870f6.png?auto=format&dpr=1&w=3840"}/>

      </div>
      <div class="carousel-item">
                  <Card image={"https://i.seadn.io/gcs/files/727247a72f9500ce6791eefc1b6870f6.png?auto=format&dpr=1&w=3840"}/>
                  <Card image={"https://i.seadn.io/gcs/files/727247a72f9500ce6791eefc1b6870f6.png?auto=format&dpr=1&w=3840"}/>
                  <Card image={"https://i.seadn.io/gcs/files/727247a72f9500ce6791eefc1b6870f6.png?auto=format&dpr=1&w=3840"}/>
                  <Card image={"https://i.seadn.io/gcs/files/727247a72f9500ce6791eefc1b6870f6.png?auto=format&dpr=1&w=3840"}/>
                  <Card image={"https://i.seadn.io/gcs/files/727247a72f9500ce6791eefc1b6870f6.png?auto=format&dpr=1&w=3840"}/>

      </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleRide" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleRide" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>

</div> */}
    {/* <div className='container m-5'>
      <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner ">
          <div class="carousel-item active row d-flex" data-bs-interval="10000">
              <Card image={"https://i.seadn.io/gcs/files/727247a72f9500ce6791eefc1b6870f6.png?auto=format&dpr=1&w=3840"}/>
              <Card image={"https://i.seadn.io/gcs/files/727247a72f9500ce6791eefc1b6870f6.png?auto=format&dpr=1&w=3840"}/>
              <Card image={"https://i.seadn.io/gcs/files/727247a72f9500ce6791eefc1b6870f6.png?auto=format&dpr=1&w=3840"}/>
              <Card image={"https://i.seadn.io/gcs/files/727247a72f9500ce6791eefc1b6870f6.png?auto=format&dpr=1&w=3840"}/>
              <Card image={"https://i.seadn.io/gcs/files/727247a72f9500ce6791eefc1b6870f6.png?auto=format&dpr=1&w=3840"}/>
              <Card image={"https://i.seadn.io/gcs/files/727247a72f9500ce6791eefc1b6870f6.png?auto=format&dpr=1&w=3840"}/>

          </div>
          <div class="carousel-item row d-flex" data-bs-interval="2000">
              <Card image={"https://i.seadn.io/gcs/files/727247a72f9500ce6791eefc1b6870f6.png?auto=format&dpr=1&w=3840"}/>
              <Card image={"https://i.seadn.io/gcs/files/727247a72f9500ce6791eefc1b6870f6.png?auto=format&dpr=1&w=3840"}/>
              <Card image={"https://i.seadn.io/gcs/files/727247a72f9500ce6791eefc1b6870f6.png?auto=format&dpr=1&w=3840"}/>
              <Card image={"https://i.seadn.io/gcs/files/727247a72f9500ce6791eefc1b6870f6.png?auto=format&dpr=1&w=3840"}/>
              <Card image={"https://i.seadn.io/gcs/files/727247a72f9500ce6791eefc1b6870f6.png?auto=format&dpr=1&w=3840"}/>
              <Card image={"https://i.seadn.io/gcs/files/727247a72f9500ce6791eefc1b6870f6.png?auto=format&dpr=1&w=3840"}/>

          </div>
          <div class="carousel-item row d-flex">
              <Card image={"https://i.seadn.io/gcs/files/727247a72f9500ce6791eefc1b6870f6.png?auto=format&dpr=1&w=3840"}/>
              <Card image={"https://i.seadn.io/gcs/files/727247a72f9500ce6791eefc1b6870f6.png?auto=format&dpr=1&w=3840"}/>
              <Card image={"https://i.seadn.io/gcs/files/727247a72f9500ce6791eefc1b6870f6.png?auto=format&dpr=1&w=3840"}/>
              <Card image={"https://i.seadn.io/gcs/files/727247a72f9500ce6791eefc1b6870f6.png?auto=format&dpr=1&w=3840"}/>
              <Card image={"https://i.seadn.io/gcs/files/727247a72f9500ce6791eefc1b6870f6.png?auto=format&dpr=1&w=3840"}/>
              <Card image={"https://i.seadn.io/gcs/files/727247a72f9500ce6791eefc1b6870f6.png?auto=format&dpr=1&w=3840"}/>

          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
        
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
         
        </button>
      </div>
      
    </div> */}

    {/* <div className="card-scroll-container">
      <div className="card-scroll row  flex-nowrap">
        {data.map((item, index) => (
          <Card key={index} item={item} />
        ))}
      </div>
    </div> */}



{/* <div className='container row '>
      <h2>Card Slider</h2>
      <Slider {...settings} className={''} >

        {data.map((item, index) => (
         <CustomCard key={index} item={item} />
        ))}
      </Slider>
    </div> */}


<div id="carouselExampleControls" class="carousel slide align-items-center" data-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active row d-flex">
      {
        // data.map((item, index)=>(
        //   <CustomCard key={index} item={item} />
        // ))
      }
      {/* <CustomCard item={data[0]} />
      <CustomCard item={data[1]} />
      <CustomCard item={data[2]} />
      <CustomCard item={data[3]} />
      <CustomCard item={data[4]} /> */}
    </div>
    <div class="carousel-item">
      {/* <CustomCard item={data[5]} />
      <CustomCard item={data[6]} />
      <CustomCard item={data[7]} />
      <CustomCard item={data[8]} />
      <CustomCard item={data[9]} /> */}

    </div>
    <div class="carousel-item">
      {/* <CustomCard item={data[10]} />
      <CustomCard item={data[11]} />
      <CustomCard item={data[12]} />
      <CustomCard item={data[13]} />
      <CustomCard item={data[14]} /> */}

    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>

      {/* <div className='container align-items-center mt-5 '>
        <h1>Trending in Photography</h1>
      <Carousel activeIndex={index} onSelect={handleSelect}  >
        <Carousel.Item  >
          <div className=' mt-2 row d-flex justify-content-center'>
          <Card image={"https://i.seadn.io/gcs/files/727247a72f9500ce6791eefc1b6870f6.png?auto=format&dpr=1&w=3840"}/>
          <Card image={"https://i.seadn.io/gcs/files/727247a72f9500ce6791eefc1b6870f6.png?auto=format&dpr=1&w=3840"}/>
          <Card image={"https://i.seadn.io/gcs/files/727247a72f9500ce6791eefc1b6870f6.png?auto=format&dpr=1&w=3840"}/>
          <Card image={"https://i.seadn.io/gcs/files/727247a72f9500ce6791eefc1b6870f6.png?auto=format&dpr=1&w=3840"}/>
          <Card image={"https://i.seadn.io/gcs/files/727247a72f9500ce6791eefc1b6870f6.png?auto=format&dpr=1&w=3840"}/>
          <Card image={"https://i.seadn.io/gcs/files/727247a72f9500ce6791eefc1b6870f6.png?auto=format&dpr=1&w=3840"}/>
          
          </div>
      
        </Carousel.Item>

        <Carousel.Item  >
        <div className=' mt-2 row d-flex justify-content-center'>
          <Card image={"https://i.seadn.io/gcs/files/727247a72f9500ce6791eefc1b6870f6.png?auto=format&dpr=1&w=3840"}/>
          <Card image={"https://i.seadn.io/gcs/files/727247a72f9500ce6791eefc1b6870f6.png?auto=format&dpr=1&w=3840"}/>
          <Card image={"https://i.seadn.io/gcs/files/727247a72f9500ce6791eefc1b6870f6.png?auto=format&dpr=1&w=3840"}/>
          <Card image={"https://i.seadn.io/gcs/files/727247a72f9500ce6791eefc1b6870f6.png?auto=format&dpr=1&w=3840"}/>
          <Card image={"https://i.seadn.io/gcs/files/727247a72f9500ce6791eefc1b6870f6.png?auto=format&dpr=1&w=3840"}/>
          <Card image={"https://i.seadn.io/gcs/files/727247a72f9500ce6791eefc1b6870f6.png?auto=format&dpr=1&w=3840"}/>
          
          </div>
      
        </Carousel.Item>

        <Carousel.Item>
        <div className=' mt-2 row d-flex justify-content-center'>
          <Card image={"https://i.seadn.io/gcs/files/727247a72f9500ce6791eefc1b6870f6.png?auto=format&dpr=1&w=3840"}/>
          <Card image={"https://i.seadn.io/gcs/files/727247a72f9500ce6791eefc1b6870f6.png?auto=format&dpr=1&w=3840"}/>
          <Card image={"https://i.seadn.io/gcs/files/727247a72f9500ce6791eefc1b6870f6.png?auto=format&dpr=1&w=3840"}/>
          <Card image={"https://i.seadn.io/gcs/files/727247a72f9500ce6791eefc1b6870f6.png?auto=format&dpr=1&w=3840"}/>
          <Card image={"https://i.seadn.io/gcs/files/727247a72f9500ce6791eefc1b6870f6.png?auto=format&dpr=1&w=3840"}/>
          <Card image={"https://i.seadn.io/gcs/files/727247a72f9500ce6791eefc1b6870f6.png?auto=format&dpr=1&w=3840"}/>
          
          </div>
          
        </Carousel.Item>
      </Carousel>

      </div>


      <div className='container align-items-center mt-5 '>
        <h1>Trending in Art</h1>
      <Carousel activeIndex={index} onSelect={handleSelect}  >
        <Carousel.Item  >
          <div className=' mt-2 row d-flex justify-content-center'>
          <Card image={"https://i.seadn.io/gcs/files/727247a72f9500ce6791eefc1b6870f6.png?auto=format&dpr=1&w=3840"}/>
          <Card image={"https://i.seadn.io/gcs/files/727247a72f9500ce6791eefc1b6870f6.png?auto=format&dpr=1&w=3840"}/>
          <Card image={"https://i.seadn.io/gcs/files/727247a72f9500ce6791eefc1b6870f6.png?auto=format&dpr=1&w=3840"}/>
          <Card image={"https://i.seadn.io/gcs/files/727247a72f9500ce6791eefc1b6870f6.png?auto=format&dpr=1&w=3840"}/>
          <Card image={"https://i.seadn.io/gcs/files/727247a72f9500ce6791eefc1b6870f6.png?auto=format&dpr=1&w=3840"}/>
          <Card image={"https://i.seadn.io/gcs/files/727247a72f9500ce6791eefc1b6870f6.png?auto=format&dpr=1&w=3840"}/>
          
          </div>
      
        </Carousel.Item>

        <Carousel.Item  >
        <div className=' mt-2 row d-flex justify-content-center'>
          <Card image={"https://i.seadn.io/gcs/files/727247a72f9500ce6791eefc1b6870f6.png?auto=format&dpr=1&w=3840"}/>
          <Card image={"https://i.seadn.io/gcs/files/727247a72f9500ce6791eefc1b6870f6.png?auto=format&dpr=1&w=3840"}/>
          <Card image={"https://i.seadn.io/gcs/files/727247a72f9500ce6791eefc1b6870f6.png?auto=format&dpr=1&w=3840"}/>
          <Card image={"https://i.seadn.io/gcs/files/727247a72f9500ce6791eefc1b6870f6.png?auto=format&dpr=1&w=3840"}/>
          <Card image={"https://i.seadn.io/gcs/files/727247a72f9500ce6791eefc1b6870f6.png?auto=format&dpr=1&w=3840"}/>
          <Card image={"https://i.seadn.io/gcs/files/727247a72f9500ce6791eefc1b6870f6.png?auto=format&dpr=1&w=3840"}/>
          
          </div>
      
        </Carousel.Item>

        <Carousel.Item>
        <div className=' mt-2 row d-flex justify-content-center'>
          <Card image={"https://i.seadn.io/gcs/files/727247a72f9500ce6791eefc1b6870f6.png?auto=format&dpr=1&w=3840"}/>
          <Card image={"https://i.seadn.io/gcs/files/727247a72f9500ce6791eefc1b6870f6.png?auto=format&dpr=1&w=3840"}/>
          <Card image={"https://i.seadn.io/gcs/files/727247a72f9500ce6791eefc1b6870f6.png?auto=format&dpr=1&w=3840"}/>
          <Card image={"https://i.seadn.io/gcs/files/727247a72f9500ce6791eefc1b6870f6.png?auto=format&dpr=1&w=3840"}/>
          <Card image={"https://i.seadn.io/gcs/files/727247a72f9500ce6791eefc1b6870f6.png?auto=format&dpr=1&w=3840"}/>
          <Card image={"https://i.seadn.io/gcs/files/727247a72f9500ce6791eefc1b6870f6.png?auto=format&dpr=1&w=3840"}/>
          
          </div>
          
        </Carousel.Item>
      </Carousel>

      </div> */}
    </>

  );
}

export default Section3;