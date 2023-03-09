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

import breezePage from '../../../assets/images/BreezeAsk.png';
import SalaQA from '../../../assets/images/SalaQ&A.png';
import SalaReact from '../../../assets/images/Sala-React.png';
import SalaEmpty from '../../../assets/images/SalaEmpty.png';
import SalaRespondida from '../../../assets/images/SalaRespondida.png';
import SalaEncerrar from '../../../assets/images/SalaEncerrar.png';
import SalaExcluída from '../../../assets/images/SalaExcluída.png';
import SalaExcluir from '../../../assets/images/SalaExcluir.png';
import breezeImg from '../../../assets/breezeCover.png';

import { SliderProject } from '../../../components/SliderProject';
import { SkillItem } from '../../../components/SkillItem';
import { Footer } from '../../../components/Footer';

export default function ProjectOwn() {
  function handleRedirect(url: string) {
    window.open(url, '_blank');
  }

  return (
    <>
      <Header />
      <Container>
        <div>
          <BannerProject title="Breeze ask" type="Website" imgUrl={breezeImg} />
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
            <SliderProject
              first={breezePage}
              second={SalaEmpty}
              third={SalaEncerrar}
              fourth={SalaReact}
              fifth={SalaQA}
              sixth={SalaExcluir}
              seventh={SalaExcluída}
              eighth={SalaRespondida}
            />
          </section>

          <div>
            <Button
              onClick={() => handleRedirect('https://breeze-ask.web.app/')}
              type="button"
            >
              <a href="#">Ver projeto online</a>
            </Button>
            <Button
              onClick={() =>
                handleRedirect('https://github.com/Welldevbr/breeze-ask')
              }
              isOutlined
              type="button"
            >
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
