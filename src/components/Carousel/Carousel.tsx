import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import './Carousel.scss';

function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex: number) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img src="/homepage/clothing-hp.jpg" alt='image clothing' className='carousel-image'/>
        <Carousel.Caption className='left'>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            <Button variant="light">Shop now</Button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src="/homepage/tees-hp.jpg" alt='image tees' className='carousel-image'/>
        <Carousel.Caption className='right'>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            <Button variant="light">Shop now</Button>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default ControlledCarousel;