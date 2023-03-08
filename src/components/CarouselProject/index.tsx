import Slider from 'react-slick';
import { Container } from './styles';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import CapaMove from '../../assets/CapaMoveit.png';
import BreezeCover from '../../assets/breeze-mokup.png';
import CapaOriginSix from '../../assets/CapaOriginSix.png';
import ComicsCover from '../../assets/ComicsCover.png';
import CoverHabits from '../../assets/CoverHabits.png';

export function CarouselProject() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1
  };

  return (
    <Container>
      <Slider {...settings}>
        <div>
          <img src={CapaMove} alt="" />
        </div>
        <div>
          <img src={BreezeCover} alt="" />
        </div>
        <div>
          <img src={CapaOriginSix} alt="" />
        </div>
        <div>
          <img src={ComicsCover} alt="" />
        </div>
        <div>
          <img src={CoverHabits} alt="" />
        </div>
        <div>
          <img src={CapaOriginSix} alt="" />
        </div>
      </Slider>
    </Container>
  );
}
