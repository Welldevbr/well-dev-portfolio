import { ReactNode } from 'react';
import { WorkContainer } from './styles';

interface WorkProps {
  title: string;
  description: string;
  children: ReactNode;
}

export function WorkItem({ title, description, children }: WorkProps) {
  return (
    <WorkContainer>
      <div>{children}</div>
      <h1>{title}</h1>
      <p>{description}</p>
    </WorkContainer>
  );
}
