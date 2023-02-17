import { darken } from 'polished';
import styled from 'styled-components';

interface NavProps {
  isActive: boolean;
}

interface NavLinkProps {
  isActive: boolean;
}

export const Container = styled.header<NavProps>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  width: 100%;
  padding: 2rem 8rem;
  background: ${props =>
    props.isActive ? 'rgba(0, 14, 27, 0.8)' : 'trasparent'};
  backdrop-filter: blur(2rem);
  border-bottom: 1px solid
    ${props => (props.isActive ? props.theme.backgroundLight : 'trasparent')};

  ul {
    display: flex;
    align-items: center;
    gap: 4rem;
  }
`;

export const NavLinkContainer = styled.li<NavLinkProps>`
  a {
    font-weight: 600;
    font-size: 1.6rem;
    line-height: 3.5rem;
    position: relative;
    color: ${props =>
      props.isActive ? props.theme.primary : darken(0.2, props.theme.text)};
    transition: all 0.5s ease-in-out;

    &::before {
      content: '';
      width: ${props => (props.isActive ? '100%' : '0%')};
      height: 2px;
      background: ${({ theme }) => theme.primary};
      position: absolute;
      transition: all 0.5s ease-in-out;
      bottom: -20%;
      left: 0;
    }

    &:hover {
      color: ${props =>
        props.isActive ? darken(0.2, props.theme.primary) : props.theme.text};

      &::before {
        height: ${props => (props.isActive ? '4px' : '2px')};
        width: 100%;
      }
    }
  }
`;
