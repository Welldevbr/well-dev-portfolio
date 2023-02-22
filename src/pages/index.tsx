import { useState } from 'react';
import { HomeContainer } from '../styles/HomeStyles';
import Header from '../components/Header';
import { HomeHero } from '../components/HomeHero';
import { About } from '../components/About';
import { MenuMobile } from '../components/MenuMobile';
import { ProjectsSection } from '../components/ProjectsSection/index';
import { Works } from '../components/Works';
import { Skills } from '../components/Skills';
import { FormContact } from '../components/FormContact';
import { Footer } from '../components/Footer';

export default function Home() {
  const [menuVisible, setMenuVisible] = useState(false);

  return (
    <>
      <MenuMobile menuVisible={menuVisible} setMenuVisible={setMenuVisible} />
      <HomeContainer>
        <Header setMenuVisible={setMenuVisible} />

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
