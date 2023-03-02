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
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque
          consequuntur, asperiores voluptates hic aut mollitia alias libero
          error explicabo quae quo accusantium laboriosam perferendis corporis
          vitae incidunt sint maiores, consequatur facilis inventore! Nihil
          perferendis vitae non alias ratione voluptate, cupiditate itaque ipsum
          quam tempore cumque ea totam tempora neque hic, laboriosam at sed
          natus magnam eos tenetur quia sint voluptates. Cupiditate numquam
          consectetur eveniet accusamus iusto molestiae deleniti iure, debitis
          veritatis laboriosam neque placeat amet tenetur ab necessitatibus,
          quaerat labore?
        </p>
        <Button type="button">
          <a href="#">Ver projeto online</a>
        </Button>
      </main>
    </Container>
  );
}
