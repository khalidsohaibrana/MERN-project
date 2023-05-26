import React from 'react';
import { Card, Image } from 'react-bootstrap';

function CustomCard({image}) {
    return (
        <Card className="card m-2 p-0 item " style={{ width: '18rem' }}  >
        <Image src={image} className="card-img-top" alt="https://geeks-nextjs.vercel.app/images/course/course-javascript.jpg"/>
        <div className="card-body ">
      <h5 className="card-title">Card title</h5>
      <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      <a href="#" className="btn btn-primary">Go somewhere</a>
    </div>
  </Card>
    );
}

export default CustomCard;