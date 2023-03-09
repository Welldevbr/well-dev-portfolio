import { darken, lighten } from 'polished';
import styled, { css } from 'styled-components';

interface ButtonType {
  isOutlined?: boolean;
}

export const Container = styled.button<ButtonType>`
  background: ${({ theme }) => theme.primary};
  padding: 0.8rem 3rem;
  border-radius: 0.5rem;
  transition: 0.5s ease-out;
  width: 40%;
  position: relative;
  z-index: 2;

  &::before {
    content: '';
    width: 100%;
    height: 80%;
    border-radius: 100%;
    background: ${({ theme }) => lighten(0.2, theme.linkPrimary)};
    filter: blur(0.5rem);
    position: absolute;
    bottom: -20%;
    left: 0;
    z-index: 1;
    opacity: 0;
    transition: 0.5s ease-out;
  }

  &:hover {
    background: ${({ theme }) => darken(0.09, theme.primary)};

    &::before {
      opacity: 0.9;
    }
  }
  a {
    color: #fff;
    font-size: 1.5rem;
    font-weight: 300;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
  }

  ${({ isOutlined }) =>
    isOutlined &&
    css`
      background: transparent;
      outline: 2px solid ${({ theme }) => theme.primary};

      a {
        color: ${({ theme }) => theme.primary};
        transition: 0.5s ease-out;

        > svg {
          width: 4rem;
        }
      }

      &:hover {
        background: ${({ theme }) => darken(0.15, theme.linkPrimary)};

        a {
          color: #fff;
        }
      }
    `}

  @media (max-width: 1000px) {
    width: 60%;
    a {
      font-size: 1rem;
      gap: 0;
    }
  }

  @media (max-width: 700px) {
    padding: 1rem;
    width: 100%;
  }
`;
