import { darken, lighten } from 'polished';
import styled from 'styled-components';

interface NavLinkProps {
  isActive: boolean;
}

export const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 2rem 8rem;
  backdrop-filter: blur(2rem);
  border-bottom: 1px solid ${({ theme }) => theme.backgroundLight};

  ul {
    display: flex;
    align-items: center;
    gap: 2rem;
  }
`;

export const NavLinkContainer = styled.li<NavLinkProps>`
  a {
    font-weight: 600;
    font-size: 1.6rem;
    line-height: 3.5rem;
    color: ${props =>
      props.isActive ? props.theme.primary : darken(0.4, props.theme.text)};
    transition: all 0.5s;

    &:hover {
      color: ${props =>
        props.isActive ? lighten(0.2, props.theme.primary) : props.theme.text};
    }
  }
`;
