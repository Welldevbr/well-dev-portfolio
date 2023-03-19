import { ApolloProvider } from '@apollo/client';
import { HomeContainer } from '../styles/HomeStyles';
import Header from '../components/Header';
import { HomeHero } from '../components/HomeHero';
import { About } from '../components/About';
import { ProjectsSection } from '../components/ProjectsSection/index';
import { Works } from '../components/Works';
import { Skills } from '../components/Skills';
import { FormContact } from '../components/FormContact';
import { Footer } from '../components/Footer';
import { fetchDatoAPI, getAllProjects } from '../lib/dato-cms';

export default function Home({ projects }) {
  const client = fetchDatoAPI();

  return (
    <ApolloProvider client={client}>
      <HomeContainer>
        <Header />

        <main className="container">
          <HomeHero />
          <About />
          <ProjectsSection projects={projects} />
          <Works />
          <Skills />
          <FormContact />
        </main>

        <Footer />
      </HomeContainer>
    </ApolloProvider>
  );
}

export async function getStaticProps() {
  const projects = await getAllProjects();
  return {
    props: { projects },
    revalidate: 120
  };
}
