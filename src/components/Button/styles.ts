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
    background: ${({ theme }) => darken(0.09, theme.primary)};
  }
  a {
    color: #fff;
    font-size: 1.5rem;
    font-weight: 300;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  ${({ isOutlined }) =>
    isOutlined &&
    css`
      background: transparent;
      outline: 2px solid ${({ theme }) => theme.primary};

      a {
        color: ${({ theme }) => theme.primary};
        gap: 2rem;
        transition: 0.5s ease-out;
      }

      &:hover {
        background: ${({ theme }) => darken(0.15, theme.linkPrimary)};

        a {
          color: #fff;

          > svg {
            width: 4rem;
          }
        }
      }

      @media (max-width: 1000px) {
        a {
          gap: 1rem;
        }
      }
    `}

  @media (max-width: 1000px) {
    width: 60%;
    a {
      font-size: 1rem;
    }
  }

  @media (max-width: 700px) {
    padding: 1rem;
    width: 100%;
  }
`;
