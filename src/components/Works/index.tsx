import {
  RiQuillPenLine,
  RiTerminalLine,
  RiPencilRuler2Line
} from 'react-icons/ri';
import { SectionTitle } from '../SectionTitle';
import { Container } from './styles';
import { WorkItem } from './WorkItem';

export function Works() {
  return (
    <Container>
      <SectionTitle title="Serviços" />

      <section>
        <WorkItem
          title="UI Design"
          description="Faço a criação de interfaces completas, de fácil entendimento e interação, além de prezar pela experiência dos usuários"
        >
          <RiQuillPenLine />
        </WorkItem>
        <WorkItem
          title="Desenvolvimento Web"
          description="Desenvolvo aplicações web, prezando pela eficiência e funcionamento, utilizando ferramentas atuais e populares"
        >
          <div>
            <RiTerminalLine />
          </div>
        </WorkItem>
        <WorkItem
          title="Design Gráfico"
          description="Trabalho também com confexão de conteúdos digitais, desde logos, banners até a criação de identidades visuais completas"
        >
          <RiPencilRuler2Line />
        </WorkItem>
      </section>
    </Container>
  );
}
