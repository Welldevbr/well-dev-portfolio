import {
  SiCss3,
  SiFirebase,
  SiHtml5,
  SiReact,
  SiSass,
  SiTypescript,
  SiGithub
} from 'react-icons/si';
import Header from '../../../components/Header';
import { Container, SkillsContainer } from '../../../styles/ProjectOwnStyles';
import BannerProject from '../../../components/BannerProject';
import { Button } from '../../../components/Button/Index';
import breezePage from '../../../assets/BreezePage.png';
import breeze from '../../../assets/breeze-mockup.png';
import SalaAdm from '../../../assets/Sala-Q&A.png';
import SalaReact from '../../../assets/Sala-React.png';
import { Slider } from '../../../components/Slider';
import { SkillItem } from '../../../components/SkillItem';
import { Footer } from '../../../components/Footer';

export default function ProjectOwn() {
  return (
    <>
      <Header />
      <Container>
        <div>
          <BannerProject title="Breeze ask" type="Website" imgUrl={breeze} />
        </div>

        <main>
          <p>
            Nesta projeto, embaso-me na aplicação desenvolvida durante a trilha
            de bootcamp: <strong>Next Level Week Together</strong>, apresentada
            entre os dias 20 a 27 de Junho de 2021, e fornecida pela Rocketseat.{' '}
            <br /> A princípio a aplicação tem como prcipal intuito de auxiliar
            e dinamisar, a forma de como os usuarios tiram suas dúvidas, durante
            reuniões ou apresentações onlines.
          </p>
          <section>
            <SkillsContainer>
              <h1>Habildades Utilizadas</h1>
              <span>
                <SkillItem title="HTML" icon={<SiHtml5 />} />
                <SkillItem title="CSS" icon={<SiCss3 />} />
                <SkillItem title="Typescript" icon={<SiTypescript />} />
                <SkillItem title="React" icon={<SiReact />} />
                <SkillItem title="Sass" icon={<SiSass />} />
                <SkillItem title="Firebase" icon={<SiFirebase />} />
              </span>
            </SkillsContainer>
            <Slider
              primary={breezePage}
              secondary={SalaReact}
              terciary={SalaAdm}
            />
          </section>

          <div>
            <Button type="button">
              <a href="#">Ver projeto online</a>
            </Button>
            <Button isOutlined type="button">
              <a href="#">
                Ver repositorio <SiGithub />
              </a>
            </Button>
          </div>
        </main>
        <Footer />
      </Container>
    </>
  );
}
