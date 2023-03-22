import { SectionTitle } from '../SectionTitle';
import FigureImg from '../../assets/Figure.png';

import { Container } from './styles';

export function About() {
  return (
    <Container>
      <SectionTitle title="Sobre mim" />

      <section data-aos="fade-up">
        <div>
          <header>
            <h1>Wellington Santana</h1>
            <h2>Desenvolvedor Front-end & Design</h2>
          </header>
          <p>
            Me chamo Wellington Santana, ou “well dev”, sou Desenvolvedor
            Front-end & Designer. Atualmente trabalho como freelancer
            desenvolvendo interfaces modernas e de alta qualidade, concentradas
            em performance, animações, responsividade e SEO, além de trabalhar
            com criação de logos, identidades visuais, , banners e social media.
          </p>
        </div>
        <img
          draggable="false"
          src={FigureImg}
          alt="figure"
          data-aos="zoom-in"
        />
      </section>
    </Container>
  );
}
