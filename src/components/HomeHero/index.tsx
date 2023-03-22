/* eslint-disable react/jsx-no-comment-textnodes */
import { Container, InfosContainer, TextContainer } from './styles';
import { CodeItem } from '../CodeItem';
import perfilImage from '../../assets/perfil.png';

export function HomeHero() {
  return (
    <Container data-aos="fade-up">
      <img draggable="false" src={perfilImage} alt="Perfil" />
      <div>
        <TextContainer>
          <h2>Olá, eu sou</h2>
          <h1>Wellington</h1>
        </TextContainer>
        <InfosContainer>
          <CodeItem>
            <span className="comment">//Seja bem-vindo(a)</span>
            <span className="purple">Infos</span> {'\u007B'}
            <div>
              Nome: <span className="data">Wellington Santana</span>,
            </div>
            <div>
              Idade: <span className="data">22 Anos</span>
            </div>
            {'\u007D'}
          </CodeItem>
          <CodeItem>
            <span className="purple">Carreira</span> {'\u007B'}
            <div>
              Stack: <span className="data">Front-end</span>,
            </div>
            <div>
              Nível: <span className="data">Júnior</span>
            </div>
            {'\u007D'}
          </CodeItem>
        </InfosContainer>
      </div>
    </Container>
  );
}
