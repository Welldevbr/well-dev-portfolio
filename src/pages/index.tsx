import { HomeContainer } from '../styles/HomeStyles';
import Header from '../components/Header';
import { HomeHero } from '../components/HomeHero';
import { About } from '../components/About';
import { ProjectsSection } from '../components/ProjectsSection/index';
import { Works } from '../components/Works';
import { Skills } from '../components/Skills';
import { FormContact } from '../components/FormContact';
import { Footer } from '../components/Footer';

export default function Home() {
  return (
    <>
      <HomeContainer>
        <Header />

        <main className="container">
          <HomeHero />
          <About />
          <ProjectsSection />
          <Works />
          <Skills />
          <FormContact />
        </main>

        <Footer />
      </HomeContainer>
    </>
  );
}
