import { Banner } from '../../../components/Banner';
import Header from '../../../components/Header';
import { Container } from '../../../styles/ProjectOwnStyles';
import breeze from '../../../assets/breeze.png';

export function ProjectOwn() {
  return (
    <Container>
      <Header />
      <Banner title="Breeze ask" type="Website" imgUrl={breeze} />

      <main>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium
          optio quibusdam quam porro iusto quo voluptatibus corrupti placeat
          ullam, praesentium nostrum saepe pariatur inventore exercitationem. Id
          hic eveniet molestiae? Ea.
        </p>
        <button type="button">
          <a href="#">Ver projeto online</a>
        </button>
      </main>
    </Container>
  );
}
