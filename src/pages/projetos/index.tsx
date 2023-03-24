import Head from 'next/head';
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
      <Head>
        <title>Projetos | Well Dev</title>
        <meta
          name="description"
          content="Sou um desenvolvedor Front-end e aqui apresento alguns projetos desenvolvidos por mim!"
        />
        <meta property="og:image" content="/ogimage.png" />
        <meta property="og:image:secure_url" content="/ogimage.png" />
        <meta name="twitter:image" content="/ogimage.png" />
        <meta name="twitter:image:src" content="/ogimage.png" />
        <meta
          property="og:description"
          content="Sou um desenvolvedor Front-end e aqui apresento alguns projetos desenvolvidos por mim!"
        />
      </Head>

      <ProjectsContainer>
        <main className="container">
          <h1 data-aos="fade-right">
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
            <h1 data-aos="fade-right"> Websites </h1>
            <CarouselProject
              projects={projects.filter(
                project => project.typeProject === 'Website'
              )}
            />
          </div>
          <div>
            <h1 data-aos="fade-right"> Projetos de Design </h1>
            <CarouselProject
              projects={projects.filter(
                project => project.typeProject === 'Design'
              )}
            />
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
