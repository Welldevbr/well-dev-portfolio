import {
  AiFillGithub,
  AiFillLinkedin,
  AiOutlineInstagram
} from 'react-icons/ai';
import { Container } from './styles';

export function Footer() {
  function handleRedirect(url: string) {
    window.open(url, '_blank');
  }

  return (
    <Container>
      <div className="container">
        <button type="button">Voltar ao topo</button>
        <section>
          <AiFillGithub
            onClick={() => handleRedirect('https://github.com/Welldevbr')}
          />
          <AiFillLinkedin
            onClick={() =>
              handleRedirect(
                'https://www.linkedin.com/in/wellington-santana-b616991b8/'
              )
            }
          />
          <AiOutlineInstagram
            onClick={() =>
              handleRedirect('https://www.instagram.com/@well.dev.tsx')
            }
          />
        </section>
      </div>
    </Container>
  );
}
