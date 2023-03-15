import { darken } from 'polished';
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

  &:hover {
    background: ${({ theme }) => darken(0.15, theme.primary)};
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
