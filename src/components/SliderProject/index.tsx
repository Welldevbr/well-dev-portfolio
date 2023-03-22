import 'bootstrap/dist/css/bootstrap.css';
import { ReactNode } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { Container } from './styles';

interface SliderProps {
  children: ReactNode;
}

export function SliderProject({ children }: SliderProps) {
  return (
    <Container data-aos="fade-up">
      <Carousel variant="dark">{children}</Carousel>
    </Container>
  );
}
