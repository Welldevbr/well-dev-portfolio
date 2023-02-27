import Header from '../../../components/Header';
import { Container } from '../../../styles/ProjectOwnStyles';
import breeze from '../../../assets/breeze-mockup.png';
import BannerProject from '../../../components/BannerProject';
import { Button } from '../../../components/Button';

export default function ProjectOwn() {
  return (
    <Container>
      <Header />
      <div>
        <BannerProject title="Breeze ask" type="Website" imgUrl={breeze} />
      </div>

      <main>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam,
          doloribus voluptates fugiat eum ipsam quibusdam? Ipsum quas soluta
          voluptatem tempora quisquam repudiandae ipsam omnis deleniti aperiam
          voluptas nostrum similique magnam, voluptatum sint laboriosam beatae?
          Impedit dolor eius perspiciatis delectus facilis illum, est voluptatem
          unde velit nostrum, eveniet commodi exercitationem eligendi illo rem
          nulla. Ipsa tempora officiis sed optio sunt enim aut, minus, ullam
          impedit tempore laudantium vel reprehenderit nobis autem quasi illo
          quibusdam natus cumque ipsam reiciendis. Iure, similique corporis.
        </p>
        <Button type="button">
          <a href="#">Ver projeto online</a>
        </Button>
      </main>
    </Container>
  );
}
