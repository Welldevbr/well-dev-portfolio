import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiSass,
  SiStyledcomponents,
  SiMaterialui,
  SiBootstrap,
  SiNodedotjs,
  SiSqlite,
  SiGit,
  SiFirebase,
  SiFigma,
  SiAdobephotoshop,
  SiAdobeillustrator,
  SiTailwindcss,
  SiNextdotjs
} from 'react-icons/si';
import { SectionTitle } from '../SectionTitle';
import { SkillItem } from './SkillItem';
import { Container } from './styles';

export function Skills() {
  return (
    <Container>
      <SectionTitle title="Minhas Habilidades" />

      <section>
        <SkillItem title="HTML" icon={<SiHtml5 />} />
        <SkillItem title="CSS" icon={<SiCss3 />} />
        <SkillItem title="Javascript" icon={<SiJavascript />} />
        <SkillItem title="Typescript" icon={<SiTypescript />} />
        <SkillItem title="React" icon={<SiReact />} />
        <SkillItem title="Next" icon={<SiNextdotjs />} />
        <SkillItem title="Sass" icon={<SiSass />} />
        <SkillItem title="CSS-in-JS" icon={<SiStyledcomponents />} />
        <SkillItem title="Tailwind css" icon={<SiTailwindcss />} />
        <SkillItem title="Bootstrap" icon={<SiBootstrap />} />
        <SkillItem title="Material UI" icon={<SiMaterialui />} />
        <SkillItem title="Node" icon={<SiNodedotjs />} />
        <SkillItem title="Sqlite" icon={<SiSqlite />} />
        <SkillItem title="Git" icon={<SiGit />} />
        <SkillItem title="Firebase" icon={<SiFirebase />} />
        <SkillItem title="Figma" icon={<SiFigma />} />
        <SkillItem title="Photoshop" icon={<SiAdobephotoshop />} />
        <SkillItem title="Illustrator" icon={<SiAdobeillustrator />} />
      </section>
    </Container>
  );
}
