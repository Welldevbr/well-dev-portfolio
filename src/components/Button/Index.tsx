import { ButtonHTMLAttributes, ReactNode } from 'react';
import { Container } from './styles';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  isOutlined?: boolean;
};

export function Button({ children, isOutlined, ...props }: ButtonProps) {
  return (
    <Container isOutlined={isOutlined} {...props}>
      {children}
    </Container>
  );
}
