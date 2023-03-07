import Header from '../../../components/Header';
import { Container } from '../../../styles/ProjectOwnStyles';
import BannerProject from '../../../components/BannerProject';
import { Button } from '../../../components/Button/Index';
import breezePage from '../../../assets/BreezePage.png';
import breeze from '../../../assets/breeze-mockup.png';
import SalaAdm from '../../../assets/Sala-Q&A.png';
import SalaReact from '../../../assets/Sala-React.png';
import { Slider } from '../../../components/Slider';

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
            <span>
              <h1>Habildades Utilizadas</h1>
            </span>
            <Slider
              primary={breezePage}
              secondary={SalaReact}
              terciary={SalaAdm}
            />
          </section>

          <Button type="button">
            <a href="#">Ver projeto online</a>
          </Button>
        </main>
      </Container>
    </>
  );
}
