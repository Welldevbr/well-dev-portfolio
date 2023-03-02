import Header from '../../../components/Header';
import { Container } from '../../../styles/ProjectOwnStyles';
import breeze from '../../../assets/breeze-mockup.png';
import BannerProject from '../../../components/BannerProject';
import { Button } from '../../../components/Button/Index';

export default function ProjectOwn() {
  return (
    <Container>
      <Header />
      <div>
        <BannerProject title="Breeze ask" type="Website" imgUrl={breeze} />
      </div>

      <main>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium
          optio quibusdam quam porro iusto quo voluptatibus corrupti placeat
          ullam, praesentium nostrum saepe pariatur inventore exercitationem. Id
          hic eveniet molestiae? Ea.
        </p>
        <Button type="button">
          <a href="#">Ver projeto online</a>
        </Button>
      </main>
    </Container>
  );
}
