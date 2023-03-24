import { ApolloProvider } from '@apollo/client';
import { useEffect } from 'react';
import Aos from 'aos';
import Head from 'next/head';
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
import 'aos/dist/aos.css';

export default function Home({ projects }) {
  const client = fetchDatoAPI();

  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);

  return (
    <ApolloProvider client={client}>
      <HomeContainer>
        <Header />
        <Head>
          <title>Home | Well Dev</title>
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
