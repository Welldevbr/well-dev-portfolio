import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';
import { Container } from './styles';

interface SliderProps {
  primary: string;
  secondary: string;
  terciary: string;
}

export function Slider({ primary, secondary, terciary }: SliderProps) {
  return (
    <Container>
      <Carousel variant="dark">
        <Carousel.Item>
          <img className="d-block w-100" src={primary} alt="ImageOne" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={secondary} alt="ImageTwo" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={terciary} alt="ImageThree" />
        </Carousel.Item>
      </Carousel>
    </Container>
  );
}
