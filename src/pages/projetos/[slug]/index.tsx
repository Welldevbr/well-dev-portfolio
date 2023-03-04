import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';
import Header from '../../../components/Header';
import { Container } from '../../../styles/ProjectOwnStyles';
import BannerProject from '../../../components/BannerProject';
import { Button } from '../../../components/Button/Index';
import breezePage from '../../assets/BreezePage.png';
import breeze from '../../../assets/breeze-mockup.png';
import SalaAdm from '../../assets/Sala-Q&A.png';
import SalaReact from '../../assets/Sala-React.png';

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
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque
            consequuntur, asperiores voluptates hic aut mollitia alias libero
            error explicabo quae quo accusantium laboriosam perferendis corporis
            vitae incidunt sint maiores, consequatur facilis inventore! Nihil
            perferendis vitae non alias ratione voluptate, cupiditate itaque
            ipsum quam tempore cumque ea totam tempora neque hic, laboriosam at
            sed natus magnam eos tenetur quia sint voluptates. Cupiditate
            numquam consectetur eveniet accusamus iusto molestiae deleniti iure,
            debitis veritatis laboriosam neque placeat amet tenetur ab
            necessitatibus, quaerat labore?
          </p>
          <Button type="button">
            <a href="#">Ver projeto online</a>
          </Button>
          <div style={{ display: 'block', width: '100%' }}>
            <Carousel>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={breezePage}
                  alt="ImageOne"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100 h-100"
                  src={SalaReact}
                  alt="ImageTwo"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img className="d-block w-100" src={SalaAdm} alt="ImageTwo" />
              </Carousel.Item>
            </Carousel>
          </div>
        </main>
      </Container>
    </>
  );
}
