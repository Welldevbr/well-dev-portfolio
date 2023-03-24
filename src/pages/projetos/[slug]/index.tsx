import { useRouter } from 'next/router';
import Head from 'next/head';
import Header from '../../../components/Header';
import { Footer } from '../../../components/Footer';
import { ProjectOwn } from '../../../components/ProjectOwn';
import { getAllProjects } from '../../../lib/dato-cms';
import { LoadingScreen } from '../../../components/LoadingScreen';

export default function SlugProjetc({ project }) {
  const router = useRouter();
  if (router.isFallback) {
    return <LoadingScreen />;
  }

  return (
    <>
      <Header />
      <Head>
        <title>{project.title} | Well Dev</title>
        <meta name="description" content={project.description} />
        <meta property="og:image" content={project.thumbnail} />
        <meta property="og:image:secure_url" content={project.thumbnail} />
        <meta name="twitter:image" content={project.thumbnail} />
        <meta name="twitter:image:src" content={project.thumbnail} />
        <meta property="og:description" content={project.description} />
      </Head>

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
    fallback: true
  };
}
