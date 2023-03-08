import { ReactNode } from 'react';
import { Container } from './styles';

interface SkillItemProps {
  title: string;
  icon: ReactNode;
}

export function SkillItem({ title, icon }: SkillItemProps) {
  return (
    <Container>
      <p>{title}</p>
      {icon}
    </Container>
  );
}
