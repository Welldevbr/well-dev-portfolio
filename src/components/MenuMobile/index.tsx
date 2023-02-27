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
      <IoClose size={45} onClick={() => setMenuVisible(false)} />
      <nav>
        <NavLink title="Home" path="/" />
        <NavLink title="Projetos" path="/projetos" />
      </nav>
    </Container>
  );
}
