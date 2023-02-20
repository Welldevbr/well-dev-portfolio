import { useEffect, useState } from 'react';
import { NavLink } from './NavLink';
import { Container } from './styles';
import logoImage from '../../assets/Logo.png';

export default function Header() {
  const [navbar, setNavbar] = useState(false);

  useEffect(() => {
    const changeNavbarColor = () => {
      if (window.scrollY >= 100) {
        setNavbar(true);
      } else {
        setNavbar(false);
      }
    };

    window.addEventListener('scroll', changeNavbarColor);
  }, []);

  return (
    <Container isActive={navbar}>
      <img draggable="false" src={logoImage} alt="logotipo" />
      <ul>
        <NavLink title="Home" path="/" />
        <NavLink title="Sobre mim" path="/about" />
        <NavLink title="Habilidades" path="/skills" />
        <NavLink title="Projetos" path="/projects" />
      </ul>
    </Container>
  );
}
