import { useEffect, useState } from 'react';
import { RiMenu3Fill } from 'react-icons/ri';
import { IoClose } from 'react-icons/io5';
import { NavLink } from './NavLink';
import { Container } from './styles';
import logoImage from '../../assets/Logo.png';
// import { GrHomeRounded } from 'react-icons/gr';
// import { MdOutlineSpaceDashboard } from 'react-icons/md';

export default function Header() {
  const [navbar, setNavbar] = useState(false);
  const [menuVisible, setMenuVisible] = useState(false);

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
    <Container isActive={navbar} isVisible={menuVisible}>
      <img draggable="false" src={logoImage} alt="logotipo" />
      <ul>
        <NavLink title="Home" path="/" />
        <NavLink title="Projetos" path="/projetos" />
      </ul>
      {!menuVisible ? (
        <RiMenu3Fill size={40} onClick={() => setMenuVisible(true)} />
      ) : (
        <IoClose size={45} onClick={() => setMenuVisible(false)} />
      )}
    </Container>
  );
}
