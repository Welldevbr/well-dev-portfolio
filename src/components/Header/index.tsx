import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { RiMenu3Fill } from 'react-icons/ri';
import { NavLink } from './NavLink';
import { Container } from './styles';
import logoImage from '../../assets/Logo.png';

interface HeaderProps {
  setMenuVisible: Dispatch<SetStateAction<boolean>>;
}

export default function Header({ setMenuVisible }: HeaderProps) {
  const [navbar, setNavbar] = useState(false);

  useEffect(() => {
    const changeNavbarColor = () => {
      if (window.scrollY >= 20) {
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
      <RiMenu3Fill size={40} onClick={() => setMenuVisible(true)} />
    </Container>
  );
}
