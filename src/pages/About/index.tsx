import { SectionTitle } from '../SectionTitle';
import FigureImg from '../../assets/Figure.png';

import { Container } from './styles';

export function About() {
  return (
    <Container>
      <SectionTitle title="Sobre mim" />

      <section>
        <div>
          <header>
            <h1>Wellington Santana</h1>
            <h2>Desenvolvedor Front-end & Design</h2>
          </header>
          <p>
            Me chamo Wellington Santana, ou “well dev”, sou Desenvolvedor
            Front-end & Designer. Atualmente sou freelancer como Front-end
            developer e Designer Gráfico. Desenvolvo interfaces modernas e de
            alta qualidade, concentrado em performance, animações,
            responsividade e SEO, além de trabalhar com criação de logos e
            social medias.
          </p>
        </div>
        <img draggable="false" src={FigureImg} alt="figure" />
      </section>
    </Container>
  );
}
