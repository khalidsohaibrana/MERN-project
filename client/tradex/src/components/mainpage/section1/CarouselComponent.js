import React from 'react';
import CardMain from './CardMain';






const CarouselComponent = ({ items }) => {
    const [activeIndex, setActiveIndex] = React.useState(0);
  
    const handleSelect = (selectedIndex) => {
      setActiveIndex(selectedIndex);
    };
  
    return (
      <div id="carouselExampleIndicators" className="carousel slide " data-bs-ride="carousel">
        <ol className="carousel-indicators">
          {items.map((_, index) => (
            <li
              key={index}
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to={index}
              className={index === activeIndex ? "active" : ""}
            ></li>
          ))}
        </ol>
        <div className="carousel-inner">
          {items.map((item, index) => (
            <div key={index} className={`carousel-item ${index === activeIndex ? "active" : ""}`}>
              <CardMain props={item}/>
            </div>
          ))}
        </div>
        <a
          className="carousel-control-prev"
          href="#carouselExampleIndicators"
          role="button"
          data-bs-slide="prev"
          onClick={() => handleSelect(activeIndex === 0 ? items.length - 1 : activeIndex - 1)}
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#carouselExampleIndicators"
          role="button"
          data-bs-slide="next"
          onClick={() => handleSelect(activeIndex === items.length - 1 ? 0 : activeIndex + 1)}
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </a>
      </div>
    );
  };
  
  export default CarouselComponent;