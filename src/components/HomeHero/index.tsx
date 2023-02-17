import { Container, TextContainer } from './styles';
import perfilImage from '../../assets/perfil.png';

export function HomeHero() {
  return (
    <Container>
      <img src={perfilImage} alt="Perfil" />
      <div>
        <TextContainer>
          <h2>Olá, eu sou</h2>
          <h1>Wellington</h1>
          <p>Seja bem-vindo ao meu portfólio</p>
        </TextContainer>
      </div>
    </Container>
  );
}
