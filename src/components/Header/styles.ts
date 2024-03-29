import { darken } from 'polished';
import styled, { css } from 'styled-components';

interface NavProps {
  isActive: boolean;
  isVisible: boolean;
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
  padding: 1.5rem 8rem;
  background: ${props =>
    props.isActive ? 'rgba(0, 14, 27, 0.5)' : 'trasparent'};
  backdrop-filter: ${props => (props.isActive ? 'blur(1.5rem)' : 'none')};
  border-bottom: 1px solid
    ${props => (props.isActive ? props.theme.backgroundLight : 'trasparent')};

  img {
    width: 12rem;
  }

  ul {
    display: flex;
    align-items: center;
    gap: 2.5rem;
    transition: 0.5s ease-in-out;
    position: relative;
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
      width: 10rem;
    }
  }

  @media (max-width: 1200px) {
    ul {
      opacity: 0;
      visibility: hidden;
      right: -100%;

      ${({ isVisible }) =>
        isVisible &&
        css`
          opacity: 1;
          right: 0;
          visibility: visible;
        `}
    }
    svg {
      display: block;
    }
  }

  @media (max-width: 1000px) {
    padding: 1rem 2rem;
  }

  @media (max-width: 700px) {
    svg {
      position: relative;
      width: 2.5rem;
      height: 2.5rem;
      margin: none;
      z-index: 999999;
    }

    ul {
      width: 100vw;
      height: 100vh;
      position: absolute;
      top: 0;
      z-index: 999999;
      background: ${({ theme }) => darken(0.2, theme.secundary)};
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
    }

    > img {
      width: 7.5rem;
    }
  }

  @media (max-width: 550px) {
    svg {
      width: 1.5rem;
      height: 1.5rem;
    }
  }
`;

export const NavLinkContainer = styled.li<NavLinkProps>`
  a {
    font-weight: 500;
    font-size: 1.5rem;
    line-height: 3.5rem;
    padding: 0.25rem 4rem;
    position: relative;
    background: ${props => (props.isActive ? props.theme.linkPrimary : 'none')};
    border-radius: 10rem;
    color: ${props => props.theme.text};
    transition: all 0.5s ease-in-out;

    &:hover {
      color: ${props =>
        props.isActive ? props.theme.primary : darken(0.2, props.theme.text)};
      background: ${props =>
        props.isActive
          ? darken(0.2, props.theme.linkPrimary)
          : darken(0.2, props.theme.baseLink)};
      outline: 1px solid
        ${props => (props.isActive ? props.theme.primary : props.theme.text)};
    }

    @media (max-width: 1450px) {
      padding: 0.25rem 2.5rem;
      font-size: 1.4rem;
    }

    @media (max-width: 700px) {
      padding: 0.2rem 2.5rem;
      font-size: 1.2rem;
    }
  }
`;
