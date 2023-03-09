import { useEffect, useState } from 'react';
import Slider from 'react-slick';
import { Container } from './styles';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import CapaMove from '../../assets/CapaMoveit.png';
import BreezeCover from '../../assets/breeze-mokup.png';
import CapaOriginSix from '../../assets/CapaOriginSix.png';
import ComicsCover from '../../assets/ComicsCover.png';
import CoverHabits from '../../assets/CoverHabits.png';
import { CarouselItem } from '../CarouselItem';

export function CarouselProject() {
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
        <CarouselItem imgUrl={CapaMove} slug="breeze" />
        <CarouselItem imgUrl={BreezeCover} slug="breeze" />
        <CarouselItem imgUrl={CapaOriginSix} slug="breeze" />
        <CarouselItem imgUrl={ComicsCover} slug="breeze" />
        <CarouselItem imgUrl={CoverHabits} slug="breeze" />
      </Slider>
    </Container>
  );
}
