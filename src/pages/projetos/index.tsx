import Header from '../../components/Header';
import { Project } from '../../components/Project';
import { ProjectsContainer } from '../../styles/ProjectsStyles';
import { CarouselProject } from '../../components/CarouselProject';
import { Footer } from '../../components/Footer';
import { getAllProjects } from '../../lib/dato-cms';

export default function Projetos({ projects }) {
  return (
    <>
      <Header />
      <ProjectsContainer>
        <main className="container">
          <h1>
            <span>#</span> Destaques
          </h1>
          <section>
            {projects &&
              projects
                .slice(0, 3)
                .map(project => (
                  <Project
                    title={project.title}
                    type={project.typeProject}
                    slug={project.id}
                    imgUrl={project.thumbnail.url}
                  />
                ))}
          </section>
          <div>
            <h1> Projetos recentes </h1>
            <CarouselProject projects={projects} />
          </div>
        </main>
        <Footer />
      </ProjectsContainer>
    </>
  );
}

export async function getStaticProps() {
  const projects = await getAllProjects();
  return {
    props: { projects },
    revalidate: 120
  };
}
