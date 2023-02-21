import { ReactNode } from 'react';
import { SkillContainer } from './styles';

interface SkillItemProps {
  title: string;
  icon: ReactNode;
}

export function SkillItem({ title, icon }: SkillItemProps) {
  return (
    <SkillContainer>
      <p>{title}</p>
      {icon}
    </SkillContainer>
  );
}
