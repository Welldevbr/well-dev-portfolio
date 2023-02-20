import { useState } from 'react';
import { HomeContainer } from '../styles/HomeStyles';
import Header from '../components/Header';
import { HomeHero } from '../components/HomeHero';
import { About } from '../components/About';
import { MenuMobile } from '../components/MenuMobile';

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
        </main>
      </HomeContainer>
    </>
  );
}
