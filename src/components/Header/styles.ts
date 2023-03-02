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
  z-index: 1000;
  width: 100%;
  padding: 2rem 8rem;

  background: ${props =>
    props.isActive ? 'rgba(0, 14, 27, 0.8)' : 'trasparent'};
  backdrop-filter: ${props => (props.isActive ? 'blur(2rem)' : 'none')};
  border-bottom: 1px solid
    ${props => (props.isActive ? props.theme.backgroundLight : 'trasparent')};

  img {
    width: 14rem;
  }

  ul {
    display: flex;
    align-items: center;
    gap: 2.5rem;
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
    ul {
      gap: 1.5rem;
    }
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
    padding: 0.5rem 4rem;
    position: relative;
    background: ${props => (props.isActive ? props.theme.linkPrimary : 'none')};
    border-radius: 10rem;
    color: ${props =>
      props.isActive ? props.theme.primary : props.theme.text};
    transition: all 0.5s ease-in-out;

    &:hover {
      color: ${props =>
        props.isActive
          ? darken(0.1, props.theme.primary)
          : darken(0.2, props.theme.text)};
      background: ${props =>
        props.isActive
          ? darken(0.2, props.theme.linkPrimary)
          : props.theme.baseLink};
      border: 1px solid
        ${props => (props.isActive ? props.theme.primary : props.theme.text)};
    }

    @media (max-width: 1450px) {
      padding: 0.25rem 2.5rem;
      font-size: 1.4rem;
    }
  }
`;
