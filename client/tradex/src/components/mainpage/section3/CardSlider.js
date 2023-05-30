import React from 'react';

import { Card, Carousel } from 'react-bootstrap';
import CustomCard from './CustomCard';

function CardSlider({data}) {

    const slidesToShow = 5;
    
    const renderCards = () => {
    const numSlides = Math.ceil(data.length / slidesToShow);
    const cardGroups = [];

    for (let i = 0; i < numSlides; i++) {
      const startIndex = i * slidesToShow;
      const endIndex = startIndex + slidesToShow;
      const cards = data.slice(startIndex, endIndex);

      const cardItems = cards.map((card,index) => (
        <CustomCard item={card} key={index} />
      ));

      cardGroups.push(
        <Carousel.Item key={i}>
          <div className="d-flex ">{cardItems} </div>
        </Carousel.Item>
      );
    }

    return cardGroups;
  };

    return (
        <div>
           <Carousel
      interval={null}
      indicators={false}
      controls={true}
      touch={true}
      slide={true}
      pauseOnHover={false}
    >
      {renderCards()}
    </Carousel>
    
        </div>
    );
}

export default CardSlider;