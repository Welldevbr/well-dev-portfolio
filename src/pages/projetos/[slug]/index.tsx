import {
  SiCss3,
  SiFirebase,
  SiHtml5,
  SiReact,
  SiSass,
  SiTypescript
} from 'react-icons/si';

import Header from '../../../components/Header';

import breezePage from '../../../assets/breeze-imgs/BreezeAsk.png';
import SalaQA from '../../../assets/breeze-imgs/SalaQ&A.png';
import SalaReact from '../../../assets/breeze-imgs/Sala-React.png';
import SalaEmpty from '../../../assets/breeze-imgs/SalaEmpty.png';
import SalaRespondida from '../../../assets/breeze-imgs/SalaRespondida.png';
import SalaEncerrar from '../../../assets/breeze-imgs/SalaEncerrar.png';
import SalaExcluída from '../../../assets/breeze-imgs/SalaExcluída.png';
import SalaExcluir from '../../../assets/breeze-imgs/SalaExcluir.png';
import breezeImg from '../../../assets/breezeCover.png';
import { SkillItem } from '../../../components/SkillItem';
import { Footer } from '../../../components/Footer';
import { ProjectOwn } from '../../../components/ProjectOwn';

export default function SlugProjetc() {
  const images = [
    breezePage,
    SalaEmpty,
    SalaEncerrar,
    SalaReact,
    SalaQA,
    SalaExcluir,
    SalaExcluída,
    SalaRespondida
  ];

  return (
    <>
      <Header />
      <ProjectOwn
        title="Breeze Ask"
        type="Website"
        description={
          <p>
            Nesta projeto, embaso-me na aplicação desenvolvida durante a trilha
            de bootcamp: <strong>Next Level Week Together</strong>, apresentada
            entre os dias 20 a 27 de Junho de 2021, e fornecida pela Rocketseat.{' '}
            <br /> A princípio a aplicação tem como prcipal intuito de auxiliar
            e dinamisar, a forma de como os usuarios tiram suas dúvidas, durante
            reuniões ou apresentações onlines.
          </p>
        }
        bannerImg={breezeImg}
        skillsItens={
          <>
            <SkillItem title="HTML" icon={<SiHtml5 />} />
            <SkillItem title="CSS" icon={<SiCss3 />} />
            <SkillItem title="Typescript" icon={<SiTypescript />} />
            <SkillItem title="React" icon={<SiReact />} />
            <SkillItem title="Sass" icon={<SiSass />} />
            <SkillItem title="Firebase" icon={<SiFirebase />} />
          </>
        }
        imgsUrls={images}
        demoLink="https://breeze-ask.web.app/"
        repoLink="https://github.com/Welldevbr/breeze-ask"
      />
      <Footer />
    </>
  );
}
