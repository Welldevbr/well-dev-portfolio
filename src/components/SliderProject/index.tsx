import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';
import { Container } from './styles';

interface SliderProps {
  first: string;
  second: string;
  third: string;
  fourth: string;
  fifth: string;
  sixth: string;
  seventh: string;
  eighth: string;
}

export function SliderProject({
  first,
  second,
  third,
  fourth,
  fifth,
  sixth,
  seventh,
  eighth
}: SliderProps) {
  return (
    <Container>
      <Carousel variant="dark">
        <Carousel.Item>
          <img className="d-block w-100" src={first} alt="ImageOne" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={second} alt="ImageTwo" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={third} alt="ImageThree" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={fourth} alt="ImageThree" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={fifth} alt="ImageThree" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={sixth} alt="ImageThree" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={seventh} alt="ImageThree" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={eighth} alt="ImageThree" />
        </Carousel.Item>
      </Carousel>
    </Container>
  );
}
