import React from 'react';
import { Card, Image } from 'react-bootstrap';

function CustomCard({item}) {
    return (
        <Card className="card mx-1 p-0 item " style={{ width: '16rem', height:'18rem' }}  >

          <img src={item.thumbnail} className="card-img-top"
                style={{width:'100%', height:'55%', objectFit:'cover'}} 
          alt="https://geeks-nextjs.vercel.app/images/course/course-javascript.jpg"/>
        <div className="card-body ">
          <h5 className="card-title fs-4 fw-bold">{item.title}</h5>
          {/* <p className="card-text text-truncate fs-5 ">{item.description}</p> */}
          <p className="card-text text-truncate fs-5 ">{item.price} ETH</p>
          {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
        </div>
  </Card>
    );
}

export default CustomCard;