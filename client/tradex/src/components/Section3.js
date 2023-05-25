import React, { useState } from 'react';
import {  Image } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import Card from './Card';


function Section3() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <>
      <div className='container align-items-center mt-5 '>
        <h1>Recommended to you</h1>
      <Carousel activeIndex={index} onSelect={handleSelect}  >
        <Carousel.Item  >
          <div className=' mt-2 row d-flex justify-content-center'>
          <Card image={"https://i.seadn.io/gcs/files/727247a72f9500ce6791eefc1b6870f6.png?auto=format&dpr=1&w=3840"}/>
          <Card image={'https://geeks-nextjs.vercel.app/images/course/course-angular.jpg'}/>
          <Card image={'https://geeks-nextjs.vercel.app/images/course/course-gatsby.jpg'}/>
          <Card image={'https://geeks-nextjs.vercel.app/images/course/course-graphql.jpg'}/>
          </div>
      
        </Carousel.Item>

        <Carousel.Item  >
          <div className=' mt-2 row d-flex justify-content-center'>
          <Card image={'https://geeks-nextjs.vercel.app/images/course/course-laravel.jpg'}/>
          <Card image={"https://geeks-nextjs.vercel.app/images/course/course-javascript.jpg"}/>
          <Card image={'https://geeks-nextjs.vercel.app/images/course/course-node.jpg'}/>
          <Card image={'https://geeks-nextjs.vercel.app/images/course/course-css.jpg'}/>
          </div>
      
        </Carousel.Item>

        <Carousel.Item>
        <div className=' mt-2 row d-flex justify-content-center'>
          <Card image={'https://geeks-nextjs.vercel.app/images/course/course-wordpress.jpg'}/>
          <Card image={'https://geeks-nextjs.vercel.app/images/course/course-graphql.jpg'}/>
          <Card image={"https://geeks-nextjs.vercel.app/images/course/course-javascript.jpg"}/>
          <Card image={'https://geeks-nextjs.vercel.app/images/course/course-node.jpg'}/>
          </div>
          
        </Carousel.Item>
      </Carousel>

      </div>

      <div className='container align-items-center mt-5 '>
      <h1>Most Popular</h1>
      <Carousel activeIndex={index} onSelect={handleSelect}  >
      <Carousel.Item  >
        <div className=' mt-2 row d-flex justify-content-center'>
        <Card image={'https://geeks-nextjs.vercel.app/images/course/course-graphql.jpg'}/>
        <Card image={'https://geeks-nextjs.vercel.app/images/course/course-angular.jpg'}/>
        <Card image={'https://geeks-nextjs.vercel.app/images/course/course-gatsby.jpg'}/>
        <Card image={"https://geeks-nextjs.vercel.app/images/course/course-javascript.jpg"}/>
        </div>

      </Carousel.Item>

      <Carousel.Item  >
        <div className=' mt-2 row d-flex justify-content-center'>
        <Card image={"https://geeks-nextjs.vercel.app/images/course/course-javascript.jpg"}/>
        <Card image={'https://geeks-nextjs.vercel.app/images/course/course-node.jpg'}/>
        <Card image={'https://geeks-nextjs.vercel.app/images/course/course-laravel.jpg'}/>
        <Card image={'https://geeks-nextjs.vercel.app/images/course/course-css.jpg'}/>
        </div>

      </Carousel.Item>

      <Carousel.Item>
      <div className=' mt-2 row d-flex justify-content-center'>
        <Card image={"https://geeks-nextjs.vercel.app/images/course/course-javascript.jpg"}/>
        <Card image={'https://geeks-nextjs.vercel.app/images/course/course-wordpress.jpg'}/>
        <Card image={'https://geeks-nextjs.vercel.app/images/course/course-graphql.jpg'}/>
        <Card image={'https://geeks-nextjs.vercel.app/images/course/course-node.jpg'}/>
        </div>
        
      </Carousel.Item>
      </Carousel>

      </div>
      <div className='container align-items-center mt-5 '>
      <h1>Trending</h1>
      <Carousel activeIndex={index} onSelect={handleSelect}  >
      <Carousel.Item  >
        <div className=' mt-2 row d-flex justify-content-center'>
        <Card image={'https://geeks-nextjs.vercel.app/images/course/course-graphql.jpg'}/>
        <Card image={'https://geeks-nextjs.vercel.app/images/course/course-angular.jpg'}/>
        <Card image={'https://geeks-nextjs.vercel.app/images/course/course-gatsby.jpg'}/>
        <Card image={"https://geeks-nextjs.vercel.app/images/course/course-javascript.jpg"}/>
        </div>

      </Carousel.Item>

      <Carousel.Item  >
        <div className=' mt-2 row d-flex justify-content-center'>
        <Card image={"https://geeks-nextjs.vercel.app/images/course/course-javascript.jpg"}/>
        <Card image={'https://geeks-nextjs.vercel.app/images/course/course-laravel.jpg'}/>
        <Card image={'https://geeks-nextjs.vercel.app/images/course/course-css.jpg'}/>
        <Card image={'https://geeks-nextjs.vercel.app/images/course/course-node.jpg'}/>
        </div>

      </Carousel.Item>

      <Carousel.Item>
      <div className=' mt-2 row d-flex justify-content-center'>
        <Card image={'https://geeks-nextjs.vercel.app/images/course/course-node.jpg'}/>
        <Card image={'https://geeks-nextjs.vercel.app/images/course/course-graphql.jpg'}/>
        <Card image={'https://geeks-nextjs.vercel.app/images/course/course-wordpress.jpg'}/>
        <Card image={"https://geeks-nextjs.vercel.app/images/course/course-javascript.jpg"}/>
        </div>
        
      </Carousel.Item>
      </Carousel>

      </div>
    </>

  );
}

export default Section3;