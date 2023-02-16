import { Container } from './styles';
import perfilImage from '../../assets/perfil.png';

export function HomeHero() {
  return (
    <Container>
      <img src={perfilImage} alt="Perfil" />
    </Container>
  );
}
