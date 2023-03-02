import Link from 'next/link';
import { Container } from './styles';
import { ProjectItem } from './ProjectItem';
import { SectionTitle } from '../SectionTitle';

import breeze from '../../assets/breeze.png';
import moveit from '../../assets/move.png';
import comics from '../../assets/comics.png';
import { Button } from '../Button/Index';

export function ProjectsSection() {
  return (
    <Container>
      <SectionTitle title="Ultimos Projetos" />
      <section>
        <ProjectItem
          img={breeze}
          title="Breeze ask"
          type="Website"
          slug="breeze"
        />
        <ProjectItem
          img={moveit}
          title="Move it"
          type="Website"
          slug="moveit"
        />
        <ProjectItem
          img={comics}
          title="Comics Marvel"
          type="Website"
          slug="comics"
        />
      </section>
      <Button type="button">
        <Link href="/projetos">
          <a>Ver todos os Projetos</a>
        </Link>
      </Button>
    </Container>
  );
}
