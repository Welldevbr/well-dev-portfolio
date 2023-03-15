import Header from '../../../components/Header';
import { Footer } from '../../../components/Footer';
import { ProjectOwn } from '../../../components/ProjectOwn';
import { getAllProjects } from '../../../lib/dato-cms';

export default function SlugProjetc({ project }) {
  return (
    <>
      <Header />
      <ProjectOwn
        title={project.title}
        type={project.typeProject}
        description={<p>{project.description}</p>}
        bannerImg={project.thumbnail.url}
        skillsItens={project.tags}
        imgsUrls={project.gallery}
        demoLink={project.link}
        repoLink={project.repo}
      />
      <Footer />
    </>
  );
}

export async function getStaticProps({ params }) {
  const slug = params?.slug;
  const projects = await getAllProjects();
  const project = projects.find(p => p.id === slug) || null;

  if (!project) {
    return {
      notFound: true
    };
  }

  return {
    props: {
      project
    }
  };
}

export async function getStaticPaths() {
  const projects = await getAllProjects();
  const slugs = projects.map(p => ({ params: { slug: p.id } }));

  return {
    paths: slugs,
    fallback: false
  };
}
