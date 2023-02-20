import { Dispatch, SetStateAction } from 'react';
import { IoClose } from 'react-icons/io5';
import { NavLink } from '../Header/NavLink';
import { Container } from './styles';

interface MenuProps {
  menuVisible: boolean;
  setMenuVisible: Dispatch<SetStateAction<boolean>>;
}

export function MenuMobile({ menuVisible, setMenuVisible }: MenuProps) {
  return (
    <Container isVisible={menuVisible}>
      <IoClose size={40} onClick={() => setMenuVisible(false)} />
      <nav>
        <NavLink title="Home" path="/" />
        <NavLink title="Sobre mim" path="/about" />
        <NavLink title="Habilidades" path="/skills" />
        <NavLink title="Projetos" path="/projects" />
      </nav>
    </Container>
  );
}
