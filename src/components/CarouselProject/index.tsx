import { useEffect, useState } from 'react';
import Slider from 'react-slick';
import { Container } from './styles';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { CarouselItem } from '../CarouselItem';

export function CarouselProject({ projects }) {
  const [width, setWidth] = useState(0);

  const handleWindowResize = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    // component is mounted and window is available
    handleWindowResize();
    window.addEventListener('resize', handleWindowResize);
    // unsubscribe from the event on component unmount
    return () => window.removeEventListener('resize', handleWindowResize);
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: width >= 1000 ? 2 : 1,
    slidesToScroll: 1
  };

  return (
    <Container>
      <Slider {...settings}>
        {projects &&
          projects.map(project => (
            <CarouselItem imgUrl={project.thumbnail.url} slug={project.id} />
          ))}
      </Slider>
    </Container>
  );
}
