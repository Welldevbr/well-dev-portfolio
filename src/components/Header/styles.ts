import { darken, lighten, rgba } from 'polished';
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
  z-index: 1000;
  width: 100%;
  padding: 2rem 8rem;

  background: rgba(0, 14, 27, 0.8);
  backdrop-filter: blur(2rem);
  border-bottom: 1px solid
    ${props => (props.isActive ? props.theme.backgroundLight : 'trasparent')};

  img {
    width: 14rem;
  }

  ul {
    display: flex;
    align-items: center;
    gap: 4rem;
  }

  svg {
    display: none;
    cursor: pointer;
    transition: 0.5s;
    color: ${({ theme }) => theme.text};

    &:hover {
      color: ${({ theme }) => theme.primary};
    }
  }

  @media (max-width: 1450px) {
    padding: 2rem 4rem;
    > img {
      width: 12rem;
    }
  }

  @media (max-width: 1200px) {
    ul {
      display: none;
    }
    svg {
      display: block;
    }
  }

  @media (max-width: 1000px) {
    padding: 2rem;
  }

  @media (max-width: 700px) {
    > img {
      width: 10rem;
    }
  }

  @media (max-width: 420px) {
    > img {
      width: 8rem;
    }
  }
`;

export const NavLinkContainer = styled.li<NavLinkProps>`
  a {
    font-weight: 500;
    font-size: 1.5rem;
    line-height: 3.5rem;
    position: relative;
    color: ${props =>
      props.isActive ? props.theme.primary : props.theme.text};
    transition: all 0.5s ease-in-out;

    &::before {
      content: '';
      width: 100%;
      height: 2px;
      background: ${({ theme }) => theme.primary};
      position: absolute;
      transition: all 0.5s ease-in-out;
      bottom: -30%;
      left: 0;
      transform: ${props => (props.isActive ? 'scaleX(1)' : 'scaleX(0)')};
      transform-origin: bottom right;
      transition: transform 0.5s cubic-bezier(0.86, 0, 0.07, 1);
    }

    &:hover {
      color: ${props =>
        props.isActive
          ? lighten(0.2, props.theme.primary)
          : darken(0.2, props.theme.text)};

      &::before {
        background: ${props =>
          props.isActive
            ? lighten(0.2, props.theme.primary)
            : props.theme.primary};
        transform: scaleX(1);
        transform-origin: bottom left;
      }
    }

    @media (max-width: 1450px) {
      font-size: 1.4rem;
    }
  }
`;
