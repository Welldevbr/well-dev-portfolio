import { ReactNode } from 'react';

import { Container } from './styles';

interface CodeItemProps {
  children: ReactNode;
}

export function CodeItem({ children }: CodeItemProps) {
  return <Container>{children}</Container>;
}
