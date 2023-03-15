import Link from 'next/link';
import { Container } from './styles';
import { ProjectItem } from './ProjectItem';
import { SectionTitle } from '../SectionTitle';

import { Button } from '../Button/Index';

export function ProjectsSection({ projects }) {
  return (
    <Container>
      <SectionTitle title="Ultimos Projetos" />
      <section>
        {projects &&
          projects.map(project => (
            <ProjectItem
              img={project.thumbnail.url}
              title={project.title}
              type={project.typeProject}
              slug={project.id}
            />
          ))}
      </section>
      <Button type="button">
        <Link href="/projetos">
          <a>Ver todos os Projetos</a>
        </Link>
      </Button>
    </Container>
  );
}
